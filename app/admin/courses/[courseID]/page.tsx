"use client";
import NotFoundPage from "@/app/not-found";
import Rating from "@/components/UI/Rating";
import Tabs from "@/components/UI/Tabs";
import { ChevronLeft, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import AboutSlice from "../AboutSlice";
import ReviewsSlice from "../ReviewsSlice";

interface SingleCourseProps {
  params: Promise<{ courseID: string }>;
}
type CoursePost = {
  title: string;
  content: string;
};

export default function SingleCourse({ params }: SingleCourseProps) {
  const { courseID } = use(params);
  const tabData = [
    { label: "About", content: <AboutSlice /> },
    { label: "Reviews", content: <ReviewsSlice /> },
  ];
  const coursesList: Record<string, CoursePost> = {
    "1": {
      title: "Next.js App Router",
      content: "Learn about the new App Router in Next.js!",
    },
    "2": {
      title: "React Server Components",
      content: "React Server Components are powerful...",
    },
  };

  const course = coursesList[courseID];

  if (!course) return <NotFoundPage />;

  return (
    <main className="my-16">
      <Link className="flex gap-3 items-center mb-6 w-fit" href="#">
        <ChevronLeft size={18} />
        <span>Back</span>
      </Link>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="box-content flex-1">
          <h1 className="text-2xl font-bold mb-4">Course Name here</h1>
          <p className="text-secondary mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span>5.0</span>
            <Rating rating={5} size={10} />
            <span className="text-secondary text-sm border-l pl-2">
              Review (1k)
            </span>
            <span className="text-secondary text-sm border-l pl-2">
              10k Students
            </span>
          </div>
          <div className="flex items-center mb-4 gap-3">
            <div>
              <Image
                className="object-cover w-10 h-10 rounded-full "
                src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                width={90}
                height={90}
                alt="user image"
              />
            </div>
            <span className="text-secondary">Heba Ahmed</span>
          </div>
          <Tabs tabs={tabData} />
        </div>
        <div className="box-content lg:w-[500px]">
          <div className="mb-4">
            <Image
              className="object-cover w-full h-[270px] rounded-md "
              src="https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996"
              width={400}
              height={400}
              alt="user image"
            />
          </div>
          <div className="flex justify-between gap-2 md:items-center flex-col md:flex-row mb-4">
            <div className="flex gap-4 items-center justify-between md:justify-start">
              <h2 className="flex gap-3 items-center text-3xl font-bold">
                $49.00
                <del className="text-secondary text-xs font-normal">$99.00</del>
              </h2>
              <div className="flex justify-center items-center p-2 text-[#FC6B57] border border-[#FC6B57] rounded-md">
                Save 50%
              </div>
            </div>
            <div className="flex justify-center items-center p-2 bg-[#eee] text-secondary rounded-md">
              Recorded
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">What will you learn:</h2>
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
                <span className="text-secondary">Biomedical Visualisation</span>
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
    </main>
  );
}
