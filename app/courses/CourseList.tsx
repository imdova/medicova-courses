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
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CourseCardList from "@/components/UI/CourseCardList";

const CoursesList: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const showPageNum = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCourses, setFilteredCourses] = useState([...Courses]);

  // Get values from URL
  const searchQuery = searchParams.get("q") || "";
  const viewMode = searchParams.get("view") || "grid"; // Default to grid view
  const sortBy = searchParams.get("sort") || "most-relevant"; // Default sorting

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
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    switch (sortBy) {
      case "oldest":
        updatedCourses.sort((a, b) => Number(a.id) - Number(b.id));
        break;
      case "name":
        updatedCourses.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredCourses(updatedCourses);
    setCurrentPage(1); // Reset to first page when filters change
  }, [sortBy, searchQuery]);

  // Pagination Logic
  const indexOfLastCourse = currentPage * showPageNum;
  const indexOfFirstCourse = indexOfLastCourse - showPageNum;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Handle View Mode Change
  const handleViewChange = (mode: "grid" | "list") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", mode);
    router.push(`${pathname}?${params.toString()}`);
  };

  // Handle Sorting Change
  const handleSortChange = (option: { value: string; label: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", option.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="relative mb-8">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          All Courses
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
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
                    selected={
                      options.find((opt) => opt.value === sortBy) || null
                    }
                    onChange={handleSortChange}
                    placeholder="Select a Filter"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewChange("grid")}
                    className={`flex justify-center items-center w-8 h-8 border ${
                      viewMode === "grid"
                        ? "bg-primary text-white"
                        : "border-primary text-primary"
                    } rounded-md`}>
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => handleViewChange("list")}
                    className={`flex justify-center items-center w-8 h-8 border ${
                      viewMode === "list"
                        ? "bg-primary text-white"
                        : "border-primary text-primary"
                    } rounded-md`}>
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses List/Grid Display */}
            {currentCourses.length === 0 ? (
              <div className="text-center text-secondary text-lg">
                No Courses Found!
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="overflow-auto">
                <div className="flex flex-col gap-4 min-w-[800px]">
                  {currentCourses.map((course) => (
                    <CourseCardList key={course.id} {...course} />
                  ))}
                </div>
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
