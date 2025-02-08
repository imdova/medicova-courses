import Image from "next/image";
import Rating from "./Rating";
import image_2 from "@/assets/images/image-2.jpg";
import {
  BookOpen,
  Clock,
  Earth,
  GraduationCap,
  MoveRight,
  Video,
} from "lucide-react";
import Link from "next/link";

type CardProps = {
  id: string | number;
  courseImg: string;
  courseName: string;
  rating: number;
  instructorImg: string;
  instructorName: string;
  lessons: number;
  time: string;
  status: string;
  students: number;
  price: number;
};
const CourseCard: React.FC<CardProps> = ({
  id,
  // courseImg,
  courseName,
  rating,
  // instructorImg,
  instructorName,
  lessons,
  time,
  students,
  status,
  price,
}) => {
  const handlleStatus = (status: string) => {
    if (status === "Online") {
      return (
        <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100">
          <Earth size={18} />
          <span className="text-xs font-semibold">Online</span>
        </span>
      );
    } else if (status === "Recorded") {
      return (
        <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-gray-100">
          <Video size={18} />
          <span className="text-xs font-semibold">Recorded</span>
        </span>
      );
    }
  };
  return (
    <div className="relative p-5 border rounded-lg">
      <Link href={`courses/${id}`}>
        {handlleStatus(status)}
        <div className="w-full overflow-hidden rounded-md mb-3 h-40">
          <Image
            className="w-full h-full object-cover"
            src={image_2} // Dynamically sets the image source from the props
            alt="image-content"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <h1 className="mb-3 font-semibold">{courseName}</h1>
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
            width={30}
            height={30}
            src={image_2}
            alt=""
          />
          <span className="text-xs">{instructorName}</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-3">
          <div className="flex gap-2">
            <BookOpen className="text-secondary" size={18} />
            <span className="text-sm text-secondary">{lessons} Lessons</span>
          </div>
          <div className="flex gap-2">
            <Clock className="text-secondary" size={18} />
            <span className="text-sm text-secondary">{time}</span>
          </div>
          <div className="flex gap-2">
            <GraduationCap className="text-secondary" size={18} />
            <span className="text-sm text-secondary">{students} Students</span>
          </div>
        </div>
        <div className="flex justify-between w-full mb-3">
          <button className="flex items-center p-2 px-4 gap-2 text-white bg-[#2BA149] rounded-2xl text-xs">
            Enroll <MoveRight size={15} />
          </button>
          <span className="flex items-center gap-1 font-semibold text-[#2BA149]">
            ${price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
