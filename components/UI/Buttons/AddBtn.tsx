import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

type IconBtnProps = {
  children: React.ReactNode;
  width?: number;
  link: string;
};

const AddBtn: React.FC<IconBtnProps> = ({ children, width, link }) => {
  return (
    <Link
      href={link}
      className={`flex justify-center gap-2 lg:w-[${width}px] text-white text-sm transition-all duration-300 hover:bg-black hover:text-white items-center rounded-lg w-full bg-primary py-2 px-4`}>
      <Plus size={18} />
      {children}
    </Link>
  );
};

export default AddBtn;
