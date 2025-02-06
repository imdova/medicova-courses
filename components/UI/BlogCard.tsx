"use client";
import image_2 from "@/assets/images/image-2.jpg";
import Avatar from "@/assets/images/avarar.avif";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
type CardProps = {
  id?: string | number;
  blogTitle: string;
  blogImg?: string;
  userName: string;
  userImg?: string;
  describtion: string;
  viewNumber: number;
};
const BlogCard: React.FC<CardProps> = ({
  id,
  blogTitle,
  userName,
  describtion,
  viewNumber,
}) => {
  return (
    <div className="box-content !p-3 md:!p-6">
      <Link href={`blogs/${id}`}>
        <Image
          className="object-cover h-[170px] rounded-md mb-3"
          src={image_2}
          alt="blog image"
        />

        <h2 className="mb-3">{blogTitle}</h2>
        <div className="flex items-center mb-3 gap-3">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <Image className="object-cover" src={Avatar} alt="blog image" />
          </div>
          <span>{userName}</span>
        </div>
        <p className="text-secondary mb-4 text-sm">{describtion}</p>
      </Link>
      <div className="flex justify-between items-center my-4">
        <Link
          className="text-secondary link-smooth hover:text-light-primary hover:border-b-light-primary border-b"
          href={"#"}>
          Read More
        </Link>
        <div className="flex gap-3 items-center ">
          <Eye className="text-light-primary" size={18} />
          <span className="text-secondary">{viewNumber}</span>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
