"use client";
import { ArrowUpDown, Ellipsis, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Student {
  name: string;
  studentId: string;
  courseName: string;
  joinDate: string;
  prepaidBalance: string;
  imageUrl: string;
  category: string;
}

interface StudentTableProps {
  students: Student[];
  columTitles: string[];
}

const DynamicTable: React.FC<StudentTableProps> = ({
  students,
  columTitles,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Student | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle sorting logic
  const sortedStudents = [...students].sort((a, b) => {
    if (!sortField) return 0;

    const aValue = a[sortField as keyof Student];
    const bValue = b[sortField as keyof Student];

    // Convert to string, number, or date where necessary
    const isDateField = sortField === "joinDate"; // Adjust if more date fields exist
    const isNumberField =
      sortField === "studentId" || sortField === "courseName";

    if (isDateField) {
      return sortOrder === "asc"
        ? new Date(aValue as string).getTime() -
            new Date(bValue as string).getTime()
        : new Date(bValue as string).getTime() -
            new Date(aValue as string).getTime();
    }

    if (isNumberField) {
      return sortOrder === "asc"
        ? Number(aValue) - Number(bValue)
        : Number(bValue) - Number(aValue);
    }

    return sortOrder === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  // Handle search filtering
  const filteredStudents = sortedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSort = (field: keyof Student) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="overflow-auto">
      <div className="min-w-[1000px]">
        <div className="flex justify-between items-center pb-4 ">
          <h2 className="text-xl font-semibold">Current Students</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-gray-700">
              {columTitles.map((header, index) => (
                <th
                  key={index}
                  className="p-3 text-left  cursor-pointer"
                  onClick={() =>
                    toggleSort(
                      header.toLowerCase().replace(/\s/g, "") as keyof Student
                    )
                  }>
                  <div className="flex gap-3">
                    {header}
                    {sortField === header.toLowerCase().replace(/\s/g, "") &&
                      (sortOrder === "asc" ? (
                        <span>
                          <ArrowUpDown className=" text-primary" size={15} />
                        </span>
                      ) : (
                        <span>
                          <ArrowUpDown className=" text-primary" size={15} />
                        </span>
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedStudents.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 flex items-center space-x-3">
                  <div>
                    <Image
                      className="w-14 h-14 rounded-2xl object-cover"
                      src={student.imageUrl}
                      width={200}
                      height={200}
                      alt="blog image"
                    />
                  </div>
                  <span>{student.name}</span>
                </td>
                <td className="text-center p-3">{student.studentId}</td>
                <td className="p-3">{student.courseName}</td>
                <td className="p-3">
                  <span className="p-2 text-sm rounded-md bg-gray-100">
                    {student.category}
                  </span>
                </td>
                <td className="p-3">{student.joinDate}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm ${
                      student.prepaidBalance.toLowerCase() === "prepaid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {student.prepaidBalance}
                  </span>
                </td>
                <td className="flex justify-center items-center space-x-3">
                  <button className="text-gray-500 hover:text-primary h-full p-3">
                    <Ellipsis size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {currentPage * itemsPerPage - (itemsPerPage - 1)}-
            {Math.min(currentPage * itemsPerPage, filteredStudents.length)} of{" "}
            {filteredStudents.length} students
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
                onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
