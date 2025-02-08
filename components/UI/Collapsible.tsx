"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border group rounded-lg  overflow-hidden">
      <button
        className="w-full text-left border-b bg-white px-4 py-3 flex justify-between items-center transition"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="font-bold  ">{title}</span>
        <ChevronDown
          className={`h-6 w-6  p-1 rounded-full transition-transform group-hover:bg-primary group-hover:text-white ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}>
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
