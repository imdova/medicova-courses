"use client";
import Image from "next/image";
import Rating from "./Rating";
import {
  BookOpen,
  Clock,
  Earth,
  GraduationCap,
  MoveRight,
  Video,
} from "lucide-react";
import Link from "next/link";
import { CourseType } from "@/types/courses";

const CourseCardInstructor: React.FC<CourseType> = ({
  id,
  image,
  title,
  rating,
  instructor,
  lessons,
  students,
  status,
  price,
  duration,
}) => {
  return (
    <>
      {/* Course Card */}
      <div className="bg-white border rounded-xl relative p-5">
        <Link href={`courses/${id}`}>
          {status === "Online" && (
            <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100">
              <Earth size={18} />
              <span className="text-xs font-semibold">Online</span>
            </span>
          )}
          {status === "Recorded" && (
            <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100">
              <Video size={18} />
              <span className="text-xs font-semibold">Recorded</span>
            </span>
          )}
          <div className="w-full overflow-hidden rounded-md mb-3 h-40">
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-between items-center w-full ">
            <h1 className="mb-3 font-semibold">{title}</h1>
            <div className="flex flex-col items-center gap-1">
              <Rating rating={rating} size={10} />
              <span className="text-[10px] text-secondary">
                ({rating} Reviews)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              className="w-9 h-9 rounded-full"
              width={90}
              height={90}
              src={instructor.image}
              alt="Instructor"
            />
            <span className="text-xs">{instructor.name}</span>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-3 w-full">
            <div className="flex gap-2">
              <BookOpen className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{lessons} Lessons</span>
            </div>
            <div className="flex gap-2">
              <Clock className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{duration}</span>
            </div>
            <div className="flex gap-2">
              <GraduationCap className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {students} Students
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-between w-full mb-3">
          <div className="flex gap-2">
            <Link
              href={`courses/${id}`}
              className="flex items-center p-2 px-4 gap-2 text-white bg-primary hover:bg-black rounded-2xl text-xs"
            >
              Enroll <MoveRight size={15} />
            </Link>
          </div>
          <span className="flex items-center gap-1 font-semibold text-primary">
            ${price}
          </span>
        </div>
      </div>
    </>
  );
};

export default CourseCardInstructor;
