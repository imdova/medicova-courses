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
import { Courses } from "@/constants/courses.data";

interface SingleCourseProps {
  params: Promise<{ courseID: string }>;
}

export default function SingleCourse({ params }: SingleCourseProps) {
  const { courseID } = use(params);
  const course = Courses.find((course) => course.id === courseID);
  if (!course) return <NotFoundPage />;
  const tabData = [
    {
      label: "Overview",
      content: (
        <OverviewSlice
          description={course.description}
          accordionData={course.curriculums}
        />
      ),
    },
    {
      label: "Curriculum",
      content: <CurriculumSlice accordionData={course.curriculums} />,
    },
    {
      label: "Instructors",
      content: (
        <InstructorsSlice
          name={course.instructor.name}
          job={course.instructor.job}
          image={course.instructor.image}
          rating={course.instructor.rating}
          reviews={course.instructor.reviews}
          students={course.instructor.students}
          courses={course.instructor.courses}
          description={course.instructor.description}
        />
      ),
    },
    {
      label: "Reviews",
      content: <ReviewSlice reviews={course.reviews} />,
    },
  ];

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
                src={course.image}
                alt="course image"
                width={400}
                height={150}
              />
            </div>
            <div className="flex gap-3 mb-6">
              <span className="bg-[#eee] font-semibold py-1 px-3 rounded-full">
                {course.status}
              </span>
              <span className="flex items-center gap-2">
                <Star size={18} className="text-orange-400" />
                <span className="text-secondary">
                  ({course.rating} reviews)
                </span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              {course.title}
            </h2>
            <div className="flex items-start sm:items-center sm:flex-row flex-col gap-3 mb-5">
              <Image
                className="w-12 h-12 rounded-full object-cover"
                width={90}
                height={90}
                src={course.instructor.image}
                alt="image Course"
              />
              <p className="text-secondary">
                By
                <span className="text-black ml-2">
                  {course.instructor.name}
                </span>
              </p>
              <div className="flex gap-2 items-center text-secondary">
                <Calendar size={17} />
                <span>20/06/2024</span>
              </div>
              <div className="flex gap-2 items-center text-secondary">
                <GraduationCap size={18} />
                <span>{course.students} students</span>
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
              <h1 className="font-semibold text-xl">
                ${course.price.toFixed(2)}
              </h1>
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
                    <span>{course.level}</span>
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
                    <span>{course.duration}</span>
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
                    <span>{course.lessons}</span>
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
                    <span>{course.quizzes}</span>
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
                    <span>{course.certifications}</span>
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
                    <span>{course.graduation}</span>
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
