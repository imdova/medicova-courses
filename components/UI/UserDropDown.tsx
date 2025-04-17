"use client";
import { useEffect, useRef, useState } from "react";
// import Avatar from "@/assets/images/avarar.avif";
import {
  ChevronDown,
  CircleDollarSign,
  CircleUser,
  LifeBuoy,
  LogOut,
  Mail,
} from "lucide-react";
import { User } from "next-auth";
import Avatar from "./Avatar";
import { signOut } from "next-auth/react";
import Link from "next/link";


const menuItems = [
  { icon: <Mail size={16} />, label: "Messages", path: "/chat" },
  { icon: <CircleDollarSign size={16} />, label: "Pricing", path: "/subscribe" },
  { icon: <LifeBuoy size={16} />, label: "Help", path: "/help" },
];

const UserDropDown: React.FC<{ user: User }> = ({ user }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsProfileMenuOpen((prev) => !prev);
  const closeDropdown = () => setIsProfileMenuOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when pressing Escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") closeDropdown();
  };

  return (
    <div className="relative ml-3">
      {/* Profile Button */}
      <div ref={profileMenuRef}>
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          type="button"
          className="flex gap-2 items-center focus:outline-none"
          id="user-menu-button"
          aria-expanded={isProfileMenuOpen}
          aria-haspopup="true">
          <span className="sr-only">Open user menu</span>
          <Avatar src={user.photo!} alt={`${user.name} photo`} size={40} />
          <div className="sm:flex items-center gap-2 hidden">
            <span className="text-xs font-semibold">{user.name}</span>
            <ChevronDown size={18} />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="absolute top-12 right-0 w-52 bg-white  shadow-lg rounded-md p-3">
            <h2 className="mb-3 text-gray-900 text-sm  font-semibold">
              Welcome, {user.firstName}!
            </h2>
            <ul className="flex flex-col">
              <li
              >
                <Link
                  href={"/student"}
                  className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-md transition text-gray-800 hover:bg-gray-100`}>
                  <CircleUser size={16} />
                  <span className="text-sm">Profile</span>
                </Link>
              </li>
              {menuItems.map(({ icon, label, path }) => (
                <li
                  key={label}
                >
                  <Link
                    href={path}
                    className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-md transition text-gray-800 hover:bg-gray-100`}>
                    {icon}
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
              <li
                onClick={() => signOut()}
                className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-md transition text-red-700`}>
                <LogOut size={16} />
                <span className="text-sm" >LogOut</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropDown;
