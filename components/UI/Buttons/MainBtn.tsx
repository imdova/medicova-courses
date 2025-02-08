import React from "react";

type MainBtnProps = {
  children: string | React.ReactNode;
};

const MainBtn: React.FC<MainBtnProps> = ({ children }) => {
  return (
    <button className="flex text-white transition-all duration-300 hover:bg-black hover:text-white justify-center items-center rounded-md w-full bg-primary py-2 px-4">
      {children}
    </button>
  );
};

export default MainBtn;
