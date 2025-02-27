"use client";
import LogoIcon from "@/assets/icons/logo";
import { BaseHeaderProps } from "@/types";
import HeaderAction from "./HeaderAction";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps extends BaseHeaderProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const FullHeader: React.FC<HeaderProps> = ({
  user,
  pathname,
  isActive,
  setIsActive,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="left-0 top-0 fixed z-50 w-full transition-all duration-700 bg-white shadow-md">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsActive(!isActive)} // Toggle sidebar
              className="block lg:hidden">
              <Menu className="text-secondary hover:text-primary link-smooth" />
            </button>
            <Link className="relative" href="/">
              <LogoIcon className="text-primary h-[25px] w-auto md:h-[40px]" />
            </Link>
          </div>
          <div className="hidden items-center lg:flex">
            <div className="relative min-w-[400px] w-full">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 w-full py-2 border rounded-lg text-secondary bg-gray-100 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
            </div>
          </div>

          <HeaderAction user={user} pathname={pathname} />
        </div>
      </div>
    </header>
  );
};

export default FullHeader;
