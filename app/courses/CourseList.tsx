"use client";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
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
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<"All" | "Live" | "Offline" | "Recorded">(
    "All"
  );
  const [filteredCourses, setFilteredCourses] = useState([...Courses]);

  // Get values from URL
  const searchQuery = searchParams.get("q") || "";
  const viewMode = searchParams.get("view") || "grid";
  const sortBy = searchParams.get("sort") || "most-relevant";

  // Sorting Options
  const options = [
    { value: "most-relevant", label: "Most Relevant" },
    { value: "oldest", label: "Oldest" },
    { value: "name", label: "Name" },
  ];

  // Handle Filtering & Sorting
  useEffect(() => {
    let updatedCourses = Courses;

    // Filter by course type
    if (filter !== "All") {
      updatedCourses = updatedCourses.filter(
        (course) => course.type.toUpperCase() === filter.toUpperCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      updatedCourses = updatedCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "oldest":
        updatedCourses = [...updatedCourses].sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        break;
      case "name":
        updatedCourses = [...updatedCourses].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
    }

    setFilteredCourses(updatedCourses);
    setCurrentPage(1); // Reset page when filters change
  }, [filter, searchQuery, sortBy]);

  // Pagination Logic
  const indexOfLastCourse = currentPage * showPageNum;
  const indexOfFirstCourse = indexOfLastCourse - showPageNum;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Update URL params for view mode
  const handleViewChange = (mode: "grid" | "list") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", mode);
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Update URL params for sorting
  const handleSortChange = (option: { value: string; label: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", option.value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="relative mb-8">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          All Courses
        </h1>
        <div className="flex justify-between gap-6">
          {/* Filter Sidebar */}
          <FilterContent
            Isactive={isActive}
            setIsActive={setIsActive}
            sections={courseFilter}
          />

          {/* Courses Grid Section */}
          <div className="flex-1">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", "Live", "Offline", "Recorded"].map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setFilter(
                      category as "All" | "Live" | "Offline" | "Recorded"
                    )
                  }
                  className={`px-4 py-2 text-sm rounded-md border ${
                    filter === category
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}>
                  {category} Courses
                </button>
              ))}
            </div>
            <SearchBar />
            {/* Sorting & View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
              <span className="hidden md:block text-sm text-secondary">
                Showing {filteredCourses.length} total results
              </span>
              <div className="flex items-center w-full justify-between md:w-fit md:justify-start gap-3">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setIsActive(true)}
                    className="block md:hidden p-2 border rounded-md text-secondary hover:text-primary hover:border-primary">
                    <SlidersHorizontal size={18} />
                  </button>
                  <span className="hidden md:block mr-2 text-sm text-gray-500">
                    Sort By:
                  </span>
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
                <div className="flex flex-col gap-4">
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
