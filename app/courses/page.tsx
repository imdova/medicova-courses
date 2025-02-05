"use client";
import Checkbox from "@/components/UI/Checkbox";
import { Filter, LayoutGrid, List } from "lucide-react";
import CourseCard from "@/components/UI/CourseCard";
import { useState } from "react";
import Pagination from "@/components/UI/Pagination/Pagination";
import {
  Categories,
  Courses,
  Instructors,
  Language,
  Price,
  Ratings,
  SkillLevel,
  TipVideo,
} from "@/constants/courses.data";

// Define Item Type (Assuming all categories follow the same structure)
type FilterItem = { id: string | number; title: string };

type Filters = {
  category: string[];
  language: string[];
  price: string[];
  tipVideo: string[];
  skillLevels: string[];
  instructor: string[];
};

const CoursesList: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    category: [],
    language: [],
    price: [],
    tipVideo: [],
    skillLevels: [],
    instructor: [],
  });
  console.log(filters);
  const showpageNum: number = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const CoursePerPage = showpageNum;

  // Function to Handle Checkbox Changes**
  const handleCheckboxChange = (
    filterType: keyof Filters,
    value: string,
    checked: boolean
  ) => {
    setFilters((prev) => {
      const updatedFilter = checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((item) => item !== value);
      return { ...prev, [filterType]: updatedFilter };
    });
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * CoursePerPage;
  const indexOfFirstProduct = indexOfLastProduct - CoursePerPage;
  const currentCourse = Courses.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to Render Filter Sections
  const renderFilterSection = (
    title: string,
    items: FilterItem[], // Properly Typed
    filterType: keyof Filters
  ) => (
    <div className="box-content mb-5">
      <h2 className="font-bold">{title}</h2>
      <div className="py-3">
        {items.map((item) => (
          <Checkbox
            key={item.id}
            name={item.title}
            total={55}
            id={item.title}
            onChange={(checked) =>
              handleCheckboxChange(filterType, item.title, checked)
            }
          />
        ))}
      </div>
    </div>
  );

  return (
    <main>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-5xl font-bold my-20 md:text-start text-center">
          All Courses
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Sidebar Filter Section */}
          <div className="slidebar w-full md:w-[300px]">
            <div className="box-content flex justify-between items-center mb-5 !bg-primary !text-white">
              <span>Filter</span>
              <span>
                <Filter size={18} />
              </span>
            </div>

            {/* Dynamic Filter Sections */}
            {renderFilterSection("Categories", Categories, "category")}
            {renderFilterSection("Language", Language, "language")}
            {renderFilterSection("Price", Price, "price")}
            {renderFilterSection("Tip of Videos", TipVideo, "tipVideo")}
            {renderFilterSection("Skill Level", SkillLevel, "skillLevels")}
            {renderFilterSection("Instructors", Instructors, "instructor")}

            {/* Ratings Section */}
            <div className="box-content mb-5">
              <h2 className="font-bold">Ratings</h2>
              <div className="py-3">
                {Ratings.map((rating) => (
                  <Checkbox
                    key={rating.id}
                    name={`Rating ${rating.id}`} // Fixed
                    total={55}
                    id={`rating-${rating.id}`}
                    onChange={(checked) =>
                      handleCheckboxChange(
                        "category",
                        `Rating-${rating.id}`,
                        checked
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid Section */}
          <div className="flex-1">
            {/* Sorting & Layout Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
              <span className="text-sm mb-2 text-secondary sm:mb-0">
                Showing {Courses.length} total results
              </span>
              <div className="flex items-center gap-3">
                <div>
                  <span className="mr-2 text-sm text-gray-500">Sort By:</span>
                  <select className="p-2 border rounded-lg outline-none">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                  </select>
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
            {currentCourse.length === 0 ? (
              <div className="text-center text-secondary text-lg">
                Not Found Courses!
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {currentCourse.map((course) => (
                  <CourseCard
                    key={course.id} // Fixed Key Issue
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
                total={Courses.length}
                PerPage={CoursePerPage}
                paginate={paginate}
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
