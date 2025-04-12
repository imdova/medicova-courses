"use client";
import AddBtn from "@/components/UI/Buttons/AddBtn";
import CoursesTable from "@/components/UI/tables/CoursesTable";
import VideoCard from "@/components/UI/VideoCard";
import { courseData } from "@/constants/VideosData.data";
import { LayoutGrid, List, Search } from "lucide-react";
import { useState } from "react";

const LiveOfflinePage = () => {
  const [filter, setFilter] = useState<"All" | "Live" | "Offline" | "Recorded">(
    "All"
  );
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses =
    filter === "All"
      ? courseData
      : courseData.filter(
          (course) => course.type.toUpperCase() === filter.toUpperCase()
        );
  // handlle view mode
  const handleViewChange = (mode: "grid" | "list") => {
    if (mode === "grid") {
      setViewMode("grid");
    } else if (mode === "list") {
      setViewMode("list");
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex flex-col items-center justify-between gap-4 mb-5 md:flex-row">
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-bold mb-2">My Courses</h1>
          <p className="text-sm text-secondary">
            Manage and track All Your Courses in one place
          </p>
        </div>
        <AddBtn link="/admin/add-course" className="w-full md:w-[200px]">
          Add New Course
        </AddBtn>
      </div>
      <div className="flex items-center justify-between flex-col gap-4 lg:flex-row mb-8">
        <div className="flex flex-col md:flex-row gap-2 flex-wrap w-full">
          {["All", "Live", "Offline", "Recorded"].map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilter(category as "All" | "Live" | "Offline" | "Recorded")
              }
              className={`px-4 py-2 h-fit text-sm rounded-md border min-w-[120px] w-full md:w-fit ${
                filter === category ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {category} Courses
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3 pb-4 md:justify-end  w-full md:w-fit">
          {/* Search Bar & Heading */}
          <div className="">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 w-full sm:w-72 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleViewChange("list")}
              className={`flex justify-center items-center w-10 h-10 border ${
                viewMode === "list" ? "bg-primary text-white" : "text-primary"
              } rounded-md`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => handleViewChange("grid")}
              className={`flex justify-center items-center w-10 h-10 border ${
                viewMode === "grid" ? "bg-primary text-white" : "text-primary"
              } rounded-md`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <VideoCard
              key={course.id}
              id={course.id}
              image={course.image}
              title={course.title}
              rating={course.rating}
              instructor={course.instructor}
              lessons={course.lessons}
              time={course.duration}
              students={course.students}
              type={course.type}
              price={course.price}
              description={course.description}
            />
          ))}
        </div>
      )}
      {viewMode === "list" && (
        <div>
          <CoursesTable searchTerm={searchTerm} courses={filteredCourses} />
        </div>
      )}
    </div>
  );
};

export default LiveOfflinePage;
