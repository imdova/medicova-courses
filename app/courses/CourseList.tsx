"use client";

import { LayoutGrid, List } from "lucide-react";
import CourseCard from "@/components/UI/CourseCard";
import { useState, useEffect } from "react";
import Pagination from "@/components/UI/Pagination/Pagination";
import { Courses } from "@/constants/courses.data";
import CustomSelect from "@/components/UI/CustomSelect";
import FilterContent from "@/components/Layout/filter/filter";
import courseFilter from "@/constants/filters/courseFilter";
import SearchBar from "./search-Input";
import { useSearchParams } from "next/navigation";

const CoursesList: React.FC = () => {
  const searchParams = useSearchParams();
  const showPageNum = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [filteredCourses, setFilteredCourses] = useState([...Courses]);

  const searchQuery = searchParams.get("q") || "";

  // Sorting Options
  const options = [
    { value: "most-relevant", label: "Most Relevant" },
    { value: "oldest", label: "Oldest" },
    { value: "name", label: "Name" },
  ];

  // Handle Sorting & Filtering Logic
  useEffect(() => {
    let updatedCourses = [...Courses];

    // Filter by search query
    if (searchQuery) {
      updatedCourses = updatedCourses.filter((course) =>
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    if (selectedOption) {
      switch (selectedOption.value) {
        case "oldest":
          updatedCourses.sort((a, b) => a.id - b.id);
          break;
        case "name":
          updatedCourses.sort((a, b) =>
            a.courseName.localeCompare(b.courseName)
          );
          break;
        default:
          break;
      }
    }

    setFilteredCourses(updatedCourses);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedOption, searchQuery]);

  // Pagination Logic
  const indexOfLastCourse = currentPage * showPageNum;
  const indexOfFirstCourse = indexOfLastCourse - showPageNum;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <main className="mb-8">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          All Courses
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Filter Sidebar */}
          <FilterContent sections={courseFilter} />

          {/* Courses Grid Section */}
          <div className="flex-1">
            <SearchBar />

            {/* Sorting & Layout Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
              <span className="text-sm mb-2 text-secondary sm:mb-0">
                Showing {filteredCourses.length} total results
              </span>
              <div className="flex items-center gap-3">
                <div className="flex gap-2 items-center">
                  <span className="mr-2 text-sm text-gray-500">Sort By:</span>
                  <CustomSelect
                    options={options}
                    selected={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Select a Filter"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="flex justify-center items-center w-8 h-8 border border-primary text-white bg-primary hover:bg-primary hover:text-white rounded-md">
                    <LayoutGrid size={18} />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 border border-primary text-primary hover:bg-primary hover:text-white rounded-md">
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            {currentCourses.length === 0 ? (
              <div className="text-center text-secondary text-lg">
                No Courses Found!
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {currentCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    courseImg={course.courseImg}
                    courseName={course.courseName}
                    rating={course.rating}
                    instructorImg={course.instructorImg}
                    instructorName={course.instructorName}
                    lessons={course.lessons}
                    time={course.time}
                    students={course.students}
                    status={course.status}
                    price={course.price}
                  />
                ))}
              </div>
            )}

            {/* Pagination Component */}
            <div className="my-6">
              <Pagination
                total={filteredCourses.length}
                PerPage={showPageNum}
                paginate={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursesList;
