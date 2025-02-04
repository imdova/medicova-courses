"use client";
import React, { useState } from "react";

type CheckboxProps = {
  name: string | React.ReactNode;
  id?: string;
  total: number;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ name, id, total, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(checked); // Pass checked value to parent
  };

  return (
    <label
      htmlFor={id}
      className="flex flex-row items-center gap-2.5 text-black text-sm mb-3 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        className="peer hidden"
      />
      <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] bg-white peer-checked:bg-[#2BA149] transition">
        {isChecked && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-white"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        )}
      </div>
      {name} {`(${total})`}
    </label>
  );
};

export default Checkbox;
