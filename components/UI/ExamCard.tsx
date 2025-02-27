"use client";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Exams } from "@/types/exams";

const ExamCard: React.FC<Exams> = ({
  id,
  image,
  title,
  qustions,
  exam_date,
  category,
  providers,
  price,
}) => {
  return (
    <>
      {/* Course Card */}
      <div className="p-5 border rounded-lg">
        <div className="flex flex-col justify-between h-full">
          <Link href={`exams/${id}`}>
            <div className="w-full overflow-hidden rounded-md mb-3 h-40">
              <Image
                className="w-full h-full object-cover"
                src={image}
                alt="Exam Thumbnail"
                width={400}
                height={400}
              />
            </div>
            <span className="flex items-center gap-3 w-fit bg-[#2BA14933] text-primary px-4 py-2 rounded-full my-3">
              <span className="text-xs">{category}</span>
            </span>
            <h1 className="text-xl mb-3 font-semibold">{title}</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-3 w-full">
              <div className="flex gap-2">
                <BookOpen className="text-secondary" size={18} />
                <span className="text-sm text-secondary">
                  {qustions} Qustions
                </span>
              </div>
              <div className="flex gap-2">
                <Clock className="text-secondary" size={18} />
                <span className="text-sm text-secondary">{exam_date}</span>
              </div>
              <div className="flex gap-2">
                <GraduationCap className="text-secondary" size={18} />
                <span className="text-sm text-secondary">
                  {providers} healthcare Providers
                </span>
              </div>
            </div>
          </Link>
          <div className="flex justify-between items-center w-full ">
            <Link
              href={`exams/${id}`}
              className="flex items-center justify-center w-fit p-2 px-4 gap-2 text-white bg-primary hover:bg-black rounded-lg text-xs link-smooth">
              Enroll
              <ArrowRight size={18} />
            </Link>
            <span className="font-semibold text-primary">{price} EGP</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamCard;
