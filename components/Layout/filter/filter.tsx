"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterOption } from "@/types";
import { useCallback } from "react";
import FilterItem from "./FilterItem";
import { FilterIcon, X } from "lucide-react";

type Props<T extends Record<string, FilterOption[]>, K extends keyof T> = {
  className?: string;
  sections: T;
  searchKeys?: K[];
  setIsActive: (active: boolean) => void;
  Isactive: boolean;
};

const FilterContent = <
  T extends Record<string, FilterOption[]>,
  K extends keyof T
>({
  searchKeys,
  sections,
  Isactive,
  setIsActive,
}: Props<T, K>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create URL search params object based on current params
  const createQueryString = useCallback(
    (sectionKey: string, value: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      // Remove old values for this section
      params.delete(sectionKey);

      // Add new values
      value.forEach((val) => {
        params.append(sectionKey, val);
      });

      return params.toString();
    },
    [searchParams]
  );

  const handleCheckChange = (sectionKey: string, value: string[]) => {
    // Update the URL with new search params
    const queryString = createQueryString(sectionKey, value);
    router.push(`${pathname}?${queryString}`);
  };

  // Get current selected filters from URL
  const getSelectedFilters = () => {
    const selected: Record<keyof T, string[]> = {} as Record<keyof T, string[]>;

    Object.keys(sections).forEach((key) => {
      const values = searchParams.getAll(key);
      if (values.length > 0) {
        selected[key as keyof T] = values;
      } else {
        selected[key as keyof T] = [];
      }
    });

    return selected;
  };

  const selectedFilters = getSelectedFilters();

  const filteredSections = Object.entries(sections).map(([key, options]) => ({
    key,
    title: key.charAt(0).toUpperCase() + key.slice(1),
    options: options,
  }));

  return (
    <div
      className={`${
        Isactive ? "left-0" : "-left-[500px]"
      } md:sticky md:bg-transparent md:z-10 fixed top-0  bg-white z-50 p-4 md:p-2 w-[260px] h-screen max-h-screen md:h-full md:max-h-full overflow-y-auto no-scrollbar transition-all duration-500 pt-16 md:pt-0 shadow-md md:shadow-none`}>
      <button
        onClick={() => setIsActive(false)}
        className="block lg:hidden absolute right-3 top-3 p-2 text-secondary hover:text-red-500">
        <X size={18} />
      </button>
      <div className="min-h-full">
        {/* Filter Header (Only visible in md screens) */}
        <div className="hidden md:flex justify-between items-center mb-5 bg-primary text-white p-2 rounded-md">
          <span>Filter</span>
          <span>
            <FilterIcon size={18} />
          </span>
        </div>

        {/* Filter Items */}
        {filteredSections.map((section, index) => (
          <FilterItem
            key={section.key}
            index={index}
            section={section}
            value={selectedFilters[section.key] || ""}
            handleCheckChange={handleCheckChange}
            isSearch={
              searchKeys && searchKeys.includes(section.key as K) ? true : false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
