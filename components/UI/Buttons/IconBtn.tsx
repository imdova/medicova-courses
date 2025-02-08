import React from "react";

type IconBtnProps = {
  children: React.ReactNode;
  width?: number;
};

const IconBtn: React.FC<IconBtnProps> = ({ children, width }) => {
  return (
    <button
      style={{ width: width }}
      className="flex text-white transition-all duration-300 hover:bg-black hover:text-white justify-between items-center rounded-full w-full bg-primary py-2 px-4">
      {children}
    </button>
  );
};

export default IconBtn;
