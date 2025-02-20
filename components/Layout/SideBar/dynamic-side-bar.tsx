"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { isCurrentPage } from "@/util";
import { NavItem, UserState } from "@/types";
import { getSideBarLinks } from "./LayoutRoutConfigs";
import Image from "next/image";
import { ChevronDown, LucideIcon, X } from "lucide-react";
import LogoIcon from "@/assets/icons/logo";

export interface SideBarProps {
  user?: UserState;
  status: "authenticated" | "loading" | "unauthenticated";
  pathname: string;
  setIsActive: (active: boolean) => void;
}

export default function DynamicSideBar({
  user,
  // status,
  pathname,
  setIsActive,
}: SideBarProps) {
  const userType = user?.type || "admin";
  const initialLinks = getSideBarLinks(userType, pathname);
  const [links, setLinks] = useState<NavItem[]>(initialLinks);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    const activeTabIndex = links.findIndex((link) =>
      link.path ? isCurrentPage(pathname, link.path) : false
    );
    setActiveTab(activeTabIndex >= 0 ? activeTabIndex : null);
  }, [links, pathname]);

  return (
    <div className="relative flex flex-col bg-white border p-4 rounded-lg h-full w-full pt-14 lg:pt-4 overflow-y-auto no-scrollbar shadow-md">
      <button
        onClick={() => setIsActive(false)}
        className="block lg:hidden absolute right-3 top-3 p-2 text-secondary hover:text-red-500">
        <X size={18} />
      </button>
      <Link className="block md:hidden relative mb-8 m-auto" href="/">
        <LogoIcon className="text-primary h-[40px] w-auto" />
      </Link>
      {links.map((item, index) => {
        if (item.type === "profile" && user) {
          return (
            <ProfileTab
              key={item.id + index}
              user={user}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        }
        if (item.type === "divider")
          return (
            <hr
              key={item.id + index}
              className="my-2 border-gray-300 opacity-50"
            />
          );
        if (item.type === "text") {
          return (
            <p key={item.id + index} className="p-2 text-sm text-gray-800">
              {item.section}
            </p>
          );
        }
        if (item.type === "collapse") {
          return (
            <CollapseTab
              key={item.id + index}
              item={item}
              index={index}
              setLinks={setLinks}
            />
          );
        }
        return (
          <LinkTab
            key={item.id + index}
            item={item}
            index={index}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        );
      })}
    </div>
  );
}

interface CollapseTabProps {
  item: NavItem;
  index: number;
  setLinks: React.Dispatch<React.SetStateAction<NavItem[]>>;
}

const CollapseTab: React.FC<CollapseTabProps> = ({
  item,
  index,

  setLinks,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = item.icon ? item.icon : null;
  const links = item.links ?? [];

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);

    if (links.length > 0) {
      setLinks((prevLinks) =>
        isOpen
          ? removeItems(prevLinks, index + 1, links.length)
          : insertItemsAfterIndex(prevLinks, links, index)
      );
    }
  };

  const handleActivation = () => {
    toggleCollapse();
  };

  return (
    <>
      <button
        className={`p-4 rounded-lg flex justify-between items-center text-sm gap-2 mb-2 hover:bg-[#eeeeeeb0] transition duration-300  ${
          isOpen
            ? "bg-[#5fbb6428] hover:bg-[#5fbb6428] text-primary"
            : "text-gray-800"
        }`}
        onClick={handleActivation}>
        <div className="flex items-center gap-2">
          {IconComponent && <IconComponent size={15} />} {/* Icon rendering */}
          <span>{item.label}</span>
        </div>
        <ChevronDown
          size={15}
          className={`${isOpen ? "rotate-180" : ""} transition-transform`}
        />
      </button>

      {/* Ensure item.links is always defined before mapping */}
      {isOpen &&
        (item.links ?? []).map((subItem) => (
          <Link
            key={subItem.id}
            href={subItem.path || "#"}
            className="block pl-6 pr-2 py-1 text-sm text-gray-700 hover:text-black">
            {subItem.label}
          </Link>
        ))}
    </>
  );
};

interface ProfileTabProps {
  user: UserState;
  activeTab: number | null;
  onTabChange: (index: number) => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({
  user,
  activeTab,
  // onTabChange,
}) => {
  const isActive = activeTab === 0;
  return (
    <Link
      href={user.firstName ? `/me/${user.firstName}` : "#"}
      className={`flex items-center p-3 rounded-lg border-t ${
        isActive ? "text-gray-800" : "text-gray-800"
      }`}>
      <div className="w-12">
        <Image
          src={user?.photo || "/images/placeholder-avatar.svg"}
          alt={user.firstName + " photo"}
          width={40}
          height={40}
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
      </div>
      <div className="ml-2">
        <h6 className="text-sm">
          {user.firstName + " ." + user.lastName?.[0]}
        </h6>
        <p className="text-xs text-secondary">{user.email}</p>
      </div>
    </Link>
  );
};

interface LinkTabProps {
  item: NavItem;
  index: number;
  activeTab: number | null;
  onTabChange: (index: number) => void;
}

const LinkTab: React.FC<LinkTabProps> = ({
  item,
  index,
  activeTab,
  onTabChange,
}) => {
  const isActive = activeTab === index;
  const IconComponent = item.icon as LucideIcon; // Ensure the icon is a valid Lucide icon component

  return (
    <Link
      href={item.path || "#"}
      className={`relative p-4 rounded-lg flex items-center text-sm gap-2 mb-2 hover:bg-[#eeeeeeb0] transition duration-300 ${
        isActive
          ? "bg-[#5fbb6428] hover:bg-[#5fbb6428]  text-primary "
          : "text-gray-800"
      }`}
      onClick={() => onTabChange(index)}>
      {IconComponent && <IconComponent size={15} />}
      {/* Render the icon */}
      <span>{item.label}</span>
    </Link>
  );
};

function insertItemsAfterIndex<T>(array: T[], items: T[], index: number): T[] {
  return [...array.slice(0, index + 1), ...items, ...array.slice(index + 1)];
}

function removeItems<T>(array: T[], startIndex: number, count: number): T[] {
  return [...array.slice(0, startIndex), ...array.slice(startIndex + count)];
}
