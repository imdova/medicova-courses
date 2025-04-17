"use client";
import Image from "next/image";
import { useState } from "react";
import OptionsDropdown from "../OptionsDropdown";
import Link from "next/link";
import { CourseContentProps } from "@/types/courses";
import ToggleSwitch from "../ToggleSwitch";

interface CoursesTableProps {
  courses: CourseContentProps[];
  searchTerm: string;
}

const CoursesTable: React.FC<CoursesTableProps> = ({ courses, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search filter
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="relative">
      <div>
        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse">
            <thead>
              <tr className="text-gray-700 bg-gray-100 ">
                {[
                  { label: "Course", key: "course" },
                  { label: "Date", key: "date" },
                  { label: "Category", key: "category" },
                  { label: "Sup Category", key: "supcategory" },
                  { label: "Students", key: "students" },
                  { label: "Revenue", key: "revenue" },
                  { label: "Type", key: "type" },
                  { label: "Status", key: "status" },
                  { label: "Active", key: "active" },
                ].map(({ label, key }) => (
                  <th key={key} className="w-fit text-left p-3">
                    <div className="flex items-center font-semibold gap-2 text-sm w-fit">
                      {label}
                    </div>
                  </th>
                ))}
                <th className="p-3 font-semibold gap-2 text-sm w-fit">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedCourses.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center p-8 text-gray-500">
                    No Courses found.
                  </td>
                </tr>
              ) : (
                paginatedCourses.map((course, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 flex items-center space-x-3 ">
                      <Image
                        className="object-cover w-14 h-14 rounded-lg"
                        src={course.image}
                        width={50}
                        height={50}
                        alt="course Image"
                      />
                      <Link href={`courses/${course.id}`}>
                        <span className="text-sm">{course.title}</span>
                      </Link>
                    </td>
                    <td className="p-3 text-sm">{course.date}</td>
                    <td className="p-3 text-sm">{course.category}</td>
                    <td className="p-3 text-sm">{course.supCategory}</td>
                    <td className="p-3 text-sm">{course.students}</td>
                    <td className="p-3 text-sm">{course.revenue}</td>
                    <td className="p-3 text-sm">{course.type}</td>
                    <td className="p-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm ${
                          course.status.toLowerCase() === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <ToggleSwitch
                          checked={course.isActive}
                          onChange={(value) => {
                            // update course.active
                            console.log("New value:", value);
                          }}
                        />
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex justify-center items-center">
                        <OptionsDropdown
                          onPublish={() => console.log("Publish clicked")}
                          onQuickEdit={() => console.log("Quick Edit clicked")}
                          onEdit={() => console.log("Edit clicked")}
                          onDelete={() => console.log("Delete clicked")}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              filteredCourses.length
            )}{" "}
            - {Math.min(currentPage * itemsPerPage, filteredCourses.length)} of{" "}
            {filteredCourses.length} students
          </p>
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTable;
