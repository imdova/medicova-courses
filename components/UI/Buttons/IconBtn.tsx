import React from "react";

type IconBtnProps = {
  children: React.ReactNode;
};

const IconBtn: React.FC<IconBtnProps> = ({ children }) => {
  return (
    <button className="flex text-white transition-all duration-300 hover:bg-black hover:text-white justify-between items-center rounded-full w-full bg-primary py-2 px-4">
      {children}
    </button>
  );
};

export default IconBtn;
