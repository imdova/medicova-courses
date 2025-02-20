"use client";
import { usePathname } from "next/navigation";
import { matchRoute } from "./routeConfigs";
import MinimalHeader from "./MinimalHeader";
import TransparentHeader from "./TransparentHeader";
import { users } from "@/constants";
import FullHeader from "./FullHeader";

interface DynamicHeaderProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({
  isActive,
  setIsActive,
}) => {
  const pathname = usePathname() || "/";
  const headerType = matchRoute(pathname)?.headerType || "minimal";

  const headerComponents = {
    minimal: MinimalHeader,
    transparent: TransparentHeader,
    full: FullHeader,
  };

  const SelectedHeader = headerComponents[headerType];

  return (
    <SelectedHeader
      user={users}
      pathname={pathname}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  );
};

export default DynamicHeader;
