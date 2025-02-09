"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
type User = {
  id: string | number;
  name: string;
  image: string;
};
type CardProps = {
  id: string | number;
  title: string;
  image: string;
  user: User;
  describtion: string;
  viewNumber: number;
};
const BlogCard: React.FC<CardProps> = ({
  id,
  title,
  image,
  user,
  describtion,
  viewNumber,
}) => {
  return (
    <div className="box-content !p-3 md:!p-6">
      <Link href={`blogs/${id}`}>
        <Image
          className="object-cover h-[170px] w-full rounded-md mb-3"
          src={image}
          width={400}
          height={400}
          alt="blog image"
        />

        <h2 className="mb-3">{title}</h2>
        <div className="flex items-center mb-3 gap-3">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <Image
              className="object-cover"
              src={user.image}
              width={90}
              height={90}
              alt="blog image"
            />
          </div>
          <span>{user.name}</span>
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
