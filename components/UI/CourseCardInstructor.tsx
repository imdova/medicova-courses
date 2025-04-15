"use client";
import Image from "next/image";
import { Earth, GraduationCap, MoveLeft, Star, Video } from "lucide-react";
import Link from "next/link";
import { CourseType } from "@/types/courses";

const CourseCardInstructor: React.FC<CourseType> = ({
  id,
  image,
  title,
  rating,
  students,
  type,
  price,
  description,
}) => {
  return (
    <>
      {/* Course Card */}
      <div className="bg-white border rounded-xl relative overflow-hidden">
        <Link href={`courses/${id}`}>
          {type === "Live" && (
            <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100 z-10">
              <Earth size={18} />
              <span className="text-xs font-semibold">Online</span>
            </span>
          )}
          {type === "Recorded" && (
            <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100">
              <Video size={18} />
              <span className="text-xs font-semibold">Recorded</span>
            </span>
          )}
          <div className="w-full overflow-hidden  mb-3 h-56">
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
          <div className="p-4">
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">{title}</h1>
              <p className="text-sm text-secondary">{description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star size={15} className="text-primary" />
                {rating}
                <span className="text-secondary text-sm">(865)</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={15} className="text-primary" />
                {students}
                <span className="text-secondary text-sm">Students</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex justify-between w-full mb-3 p-4">
          <span className="flex items-center gap-1 text-3xl font-semibold">
            ${price}
          </span>
          <div className="flex gap-2">
            <Link
              href={`courses/${id}`}
              className="flex items-center p-2 px-4 gap-2 text-white bg-primary hover:bg-black rounded-md transition"
            >
              <MoveLeft size={15} />
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCardInstructor;
