"use client";

import CustomInput from "@/components/UI/form/CustomInput";
import { createUrl } from "@/util";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, Suspense, useState } from "react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  pathname?: string;
  children?: React.ReactNode;
  parentClassName?: string;
}

let timer: NodeJS.Timeout;
function debounce<T extends (...args: string[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const Input: React.FC<SearchProps> = ({
  onClick,
  pathname: initialPathname,
  children,
  parentClassName,
  ...props
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();
  const newPathname = initialPathname || pathname;
  const initialSearchText = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialSearchText);

  function submit() {
    const newParams = new URLSearchParams(searchParams.toString());

    if (query) {
      newParams.set("q", query);
      newParams.delete("page");
    } else {
      newParams.delete("q");
    }
    onClick?.();
    router.push(createUrl(newPathname, newParams));
  }

  const updateSearchParams = debounce((value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("q", value);
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (currentPage === "shop") {
      updateSearchParams(value);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className={parentClassName}>
      <CustomInput
        {...props}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input type="submit" hidden />
      {children}
    </div>
  );
};

const SearchBar: React.FC<SearchProps> = (props) => {
  return (
    <Suspense>
      <Input {...props} />
    </Suspense>
  );
};
export default SearchBar;
