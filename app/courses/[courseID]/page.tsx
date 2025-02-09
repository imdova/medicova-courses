"use client";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import Payment from "@/assets/images/payment.png";
import {
  ArrowRight,
  BookCopy,
  Calendar,
  ChartNoAxesColumnIncreasing,
  Clock,
  GraduationCap,
  Puzzle,
  SquareChartGantt,
  Star,
} from "lucide-react";
import Tabs from "@/components/UI/Tabs";

import IconBtn from "@/components/UI/Buttons/IconBtn";
import OverviewSlice from "../OverviewSlice";
import CurriculumSlice from "../CurriculumSlice";
import InstructorsSlice from "../InstructorsSlice";
import ReviewSlice from "../ReviewSlice";
import { use } from "react";

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
    { label: "Overview", content: <OverviewSlice /> },
    { label: "Curriculum", content: <CurriculumSlice /> },
    {
      label: "Instructors",
      content: <InstructorsSlice />,
    },
    {
      label: "Reviews",
      content: <ReviewSlice />,
    },
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
    <main className="mb-32">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        {/* course Overview  */}
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          Courses Details
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full">
            <div className="mb-3">
              <Image
                className="object-cover h-[350px] w-full rounded-xl"
                src="https://img.freepik.com/free-photo/front-view-group-people-business-conference-modern-classroom-daytime_146671-16268.jpg?t=st=1739104580~exp=1739108180~hmac=450219560702cbdb649e0e58c822e24f9e9c8f8060f6ed718e0ac93e6b169ec6&w=996"
                alt="course image"
                width={400}
                height={150}
              />
            </div>
            <div className="flex gap-3 mb-6">
              <span className="bg-[#eee] font-semibold py-1 px-3 rounded-full">
                Recorded
              </span>
              <span className="flex items-center gap-2">
                <Star size={18} className="text-orange-400" />
                <span className="text-secondary">(4.5 reviews)</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Course Name Here
            </h2>
            <div className="flex items-start sm:items-center sm:flex-row flex-col gap-3 mb-5">
              <Image
                className="w-12 h-12 rounded-full"
                width={90}
                height={90}
                src="https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740"
                alt="image Course"
              />
              <p className="text-secondary">
                By<span className="text-black ml-2">Dr/ mohamed Farag</span>
              </p>
              <div className="flex gap-2 items-center text-secondary">
                <Calendar size={17} />
                <span>20/06/2024</span>
              </div>
              <div className="flex gap-2 items-center text-secondary">
                <GraduationCap size={18} />
                <span>250 students</span>
              </div>
            </div>
            {/* Tabs Review  */}
            <div>
              <Tabs tabs={tabData} />
            </div>
          </div>
          {/* Payment checkout content  */}
          <div className="box-content  lg:w-[500px] h-fit !p-6">
            <div className="bg-primary p-3 rounded-md text-white mb-4">
              <span>This Course Free:</span>
              <h1 className="font-semibold text-xl">$18.00</h1>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold text-lg mb-3">Course includes:</h2>
              <ul>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <ChartNoAxesColumnIncreasing size={18} />
                    <span>Level</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>Expert</span>
                    <div>
                      $<span className="text-primary">5</span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <Clock size={18} />
                    <span>Duration</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>11h 20m</span>
                    <div>
                      $<span className="text-primary">15</span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <BookCopy size={18} />
                    <span>Lessons</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>12</span>
                    <div>
                      $<span className="text-primary">10</span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <Puzzle size={18} />
                    <span>Quizzes</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>145</span>
                    <div>
                      $<span className="text-primary">5</span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <SquareChartGantt size={18} />
                    <span>Certifications</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>Yes</span>
                    <div>
                      $<span className="text-primary">7</span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center p-3 border-b text-secondary">
                  <div className="flex gap-2 items-center">
                    <GraduationCap size={18} />
                    <span>Graduation</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>25K</span>
                    <div>
                      $<span className="text-primary">5</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h2 className="font-semibold text-lg mb-3">Secure Payment:</h2>
              <Image
                className="object-cover w-3/4 rounded-xl"
                src={Payment}
                alt="course image"
              />
            </div>

            <IconBtn>
              <span>Enroll</span>
              <ArrowRight size={18} />
            </IconBtn>
          </div>
        </div>
      </div>
    </main>
  );
}
