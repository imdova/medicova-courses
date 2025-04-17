"use client";

import { useState, useRef, useEffect } from "react";
import {
  Ellipsis,
  Eye,
  Edit,
  Trash,
  ArrowUpToLine,
  Archive,
  Copy,
  Mail,
  CopyPlus,
  UserRoundPlus,
} from "lucide-react";

interface OptionsDropdownProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onPublish?: () => void;
  onUnPublish?: () => void;
  onQuickEdit?: () => void;
  onCopyStudentId?: () => void;
  onSentEmail?: () => void;
  onInviteToCourse?: () => void;
  onAddToCourse?: () => void;
  onAddToGroup?: () => void;
  onRemoveFromCourse?: () => void;
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  onView,
  onEdit,
  onDelete,
  onPublish,
  onUnPublish,
  onQuickEdit,
  onCopyStudentId,
  onSentEmail,
  onInviteToCourse,
  onAddToCourse,
  onAddToGroup,
  onRemoveFromCourse,
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
        onClick={() => setIsOpen(!isOpen)}
      >
        <Ellipsis size={18} />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 min-w-36 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="py-2 text-sm text-gray-700">
            {onPublish && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onPublish}
              >
                <ArrowUpToLine className="w-4 h-4 mr-2" /> Publish
              </li>
            )}
            {onUnPublish && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onUnPublish}
              >
                <Archive className="w-4 h-4 mr-2" /> unpublish
              </li>
            )}
            {onView && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onView}
              >
                <Eye className="w-4 h-4 mr-2" /> View
              </li>
            )}
            {onQuickEdit && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onQuickEdit}
              >
                <Edit className="w-4 h-4 mr-2" /> Quick Edit
              </li>
            )}
            {onEdit && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onEdit}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </li>
            )}
            {onCopyStudentId && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onCopyStudentId}
              >
                <Copy className="w-4 h-4 mr-2" /> Copy Student ID
              </li>
            )}
            {onSentEmail && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onSentEmail}
              >
                <Mail className="w-4 h-4 mr-2" /> Send Email
              </li>
            )}
            {onInviteToCourse && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onInviteToCourse}
              >
                <CopyPlus className="w-4 h-4 mr-2" /> Invite To Course
              </li>
            )}
            {onAddToCourse && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onAddToCourse}
              >
                <UserRoundPlus className="w-4 h-4 mr-2" /> Add To Course
              </li>
            )}
            {onAddToGroup && (
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onAddToGroup}
              >
                <UserRoundPlus className="w-4 h-4 mr-2" /> Add To Group
              </li>
            )}
            {onDelete && (
              <li
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                onClick={onDelete}
              >
                <Trash className="w-4 h-4 mr-2" /> Delete
              </li>
            )}
            {onRemoveFromCourse && (
              <li
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                onClick={onRemoveFromCourse}
              >
                <Trash className="w-4 h-4 mr-2" /> Remove From Course
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
