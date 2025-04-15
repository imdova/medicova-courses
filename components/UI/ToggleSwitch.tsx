// components/ToggleSwitch.tsx
import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleClick = () => {
    if (onChange) onChange(!checked);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
