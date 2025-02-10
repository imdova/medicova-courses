"use client";
import AddBtn from "@/components/UI/Buttons/AddBtn";
import CourseCard from "@/components/UI/CourseCard";
import { Courses } from "@/constants/courses.data";
import { useState } from "react";

const LiveOfflinePage = () => {
  const [filter, setFilter] = useState<"All" | "Live" | "Offline" | "Recorded">(
    "All"
  );

  const filteredCourses =
    filter === "All"
      ? Courses
      : Courses.filter((course) => course.type === filter);

  return (
    <div className="p-6">
      <div className="flex justify-between flex-col gap-2 lg:flex-row mb-8">
        <div className="flex flex-col lg:flex-row gap-2 ">
          {["All", "Live", "Offline", "Recorded"].map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilter(category as "All" | "Live" | "Offline" | "Recorded")
              }
              className={`px-4 py-2 lg:w-[150px] w-full text-sm rounded-md  border ${
                filter === category ? "bg-primary text-white" : "bg-gray-200"
              }`}>
              {category} Courses
            </button>
          ))}
        </div>
        <AddBtn width={150}>New Course</AddBtn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            image={course.image}
            title={course.title}
            rating={course.rating}
            instructor={course.instructor}
            lessons={course.lessons}
            time={course.time}
            students={course.students}
            status={course.status}
            price={course.price}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveOfflinePage;
