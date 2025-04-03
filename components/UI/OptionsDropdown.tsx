"use client";

import { useState, useRef, useEffect } from "react";
import { Ellipsis, Eye, Edit, Trash } from "lucide-react";

interface OptionsDropdownProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  onView,
  onEdit,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        className="flex justify-center items-center
         p-2 rounded-lg text-gray-500 hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}>
        <Ellipsis size={18} />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-36 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="py-2 text-sm text-gray-700">
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onView}>
              <Eye className="w-4 h-4 mr-2" /> View
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onEdit}>
              <Edit className="w-4 h-4 mr-2" /> Edit
            </li>
            <li
              className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
              onClick={onDelete}>
              <Trash className="w-4 h-4 mr-2" /> Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
