"use client";
import NotFoundPage from "@/app/not-found";
import Rating from "@/components/UI/Rating";
import { ChevronLeft, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import AboutSlice from "../AboutSlice";
import ReviewsSlice from "../ReviewsSlice";
import { Courses } from "@/constants/courses.data";
import LineTabs from "@/components/UI/LineTabs";
import YouTubePlayer from "@/components/UI/YouTubePlayer";

interface SingleCourseProps {
  params: Promise<{ courseID: string }>;
}

export default function SingleCourse({ params }: SingleCourseProps) {
  const { courseID } = use(params);
  const course = Courses.find((course) => course.id === courseID);

  if (!course) return <NotFoundPage />;
  const tabData = [
    {
      label: "About",
      content: (
        <AboutSlice coursName={course.title} description={course.description} />
      ),
    },
    { label: "Reviews", content: <ReviewsSlice Review={course.reviews} /> },
  ];

  return (
    <main>
      <div>
        <Link className="flex gap-3 items-center mb-6 w-fit" href="#">
          <ChevronLeft size={18} />
          <span>Back</span>
        </Link>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <div className="box-content flex-1 !p-3">
            <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
            <p className="text-secondary mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span>{course.rating.toFixed(1)}</span>
              <Rating rating={course.rating} size={10} />
              <span className="text-secondary text-sm border-l pl-2">
                Review (1k)
              </span>
              <span className="text-secondary text-sm border-l pl-2">
                {course.students} Students
              </span>
            </div>
            <div className="flex items-center mb-4 gap-3">
              <div>
                <Image
                  className="object-cover w-10 h-10 rounded-full "
                  src={course.instructor.image}
                  width={90}
                  height={90}
                  alt="user image"
                />
              </div>
              <span className="text-secondary">{course.instructor.name}</span>
            </div>
            <div className="p-2">
              <LineTabs tabs={tabData} />
            </div>
          </div>
          <div className="box-content lg:w-[500px]">
            <div className="mb-4">
              <YouTubePlayer height={250} videoUrl={course.videoUrl} />
            </div>
            <div className="flex justify-between gap-2 md:items-center flex-col md:flex-row mb-4">
              <div className="flex gap-4 items-center justify-between md:justify-start">
                <h2 className="flex gap-3 items-center text-3xl font-bold">
                  ${course.price}
                  <del className="text-secondary text-xs font-normal">
                    $99.00
                  </del>
                </h2>
                <div className="flex justify-center items-center p-2 text-[#FC6B57] border border-[#FC6B57] rounded-md">
                  Save 50%
                </div>
              </div>
              <div className="flex justify-center items-center p-2 bg-[#eee] text-secondary rounded-md">
                {course.type}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-4">
                What will you learn:
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">Medical Terminology</span>
                </li>
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">Medical Neuroscience</span>
                </li>
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">
                    Introductory Human Physiology
                  </span>
                </li>
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">
                    Biomedical Visualisation
                  </span>
                </li>
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">
                    Introduction to Medical Software
                  </span>
                </li>
                <li className="flex gap-2 ">
                  <CircleCheck className="text-primary" size={18} />
                  <span className="text-secondary">Become an EMT</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <button className="w-full p-3 border rounded-md text-secondary hover:bg-primary hover:text-white hover:border-primary link-smooth">
                Add to cart
              </button>
              <button className="w-full p-3 bg-primary  text-white rounded-md hover:bg-black link-smooth">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
