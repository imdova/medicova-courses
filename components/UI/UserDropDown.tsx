"use client";
import Image from "next/image";
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


const menuItems = [
  { icon: <CircleUser size={18} />, label: "Profile" },
  { icon: <Mail size={18} />, label: "Messages" },
  { icon: <CircleDollarSign size={18} />, label: "Pricing" },
  { icon: <LifeBuoy size={18} />, label: "Help" },
  { icon: <LogOut size={18} />, label: "Log out", textColor: "text-red-700" },
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
          <div className="w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full ">
            <Image
              className="object-cover "
              src={user.photo || ""}
              alt="User Avatar"
              width={100}
              height={100}
            />
          </div>
          <div className="sm:flex items-center gap-2 hidden">
            <span className="text-xs font-semibold">{user.name}</span>
            <ChevronDown size={18} />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="absolute top-12 right-0 w-48 bg-white  shadow-lg rounded-md p-4">
            <h2 className="mb-3 text-gray-900 text-sm  font-semibold">
              Welcome, {user.name}!
            </h2>
            <ul className="flex flex-col gap-3">
              {menuItems.map(({ icon, label, textColor }) => (
                <li
                  key={label}
                  className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-md transition ${textColor || "text-gray-800 hover:bg-gray-100 "
                    }`}>
                  {icon}
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropDown;
