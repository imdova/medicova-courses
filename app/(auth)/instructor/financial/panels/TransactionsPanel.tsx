"use client";
import { useState } from "react";
import Image from "next/image";
import { Download, Eye, ListFilter } from "lucide-react";
import SearchBar from "@/components/UI/form/search-Input";

type Student = {
  id: number;
  name: string;
  email: string;
  image: string;
  course: string;
  date: string;
  amount: string;
  methoud: string;
  status: string;
};

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744721699~exp=1744725299~hmac=d9de6b95feefebc35ea1f97dfc870606c4df00fec3a58467febcb9250333c302&w=1380",
    course: "Advanced React",
    date: "April 5, 2025 ",
    amount: "$89.99",
    methoud: "Credit Card",
    status: "Cancelled",
  },
];

export default function TransactionsPanel() {
  const [students] = useState<Student[]>(initialStudents);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState({
    course: "",
    status: "",
    dateRange: "",
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update the search query state
  };

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedIds.length === students.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(students.map((s) => s.id));
    }
  };

  const filteredStudents = students.filter((s) => {
    const matchSearch = s.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchCourse = filters.course ? s.course === filters.course : true;
    const matchStatus = filters.status ? s.status === filters.status : true;
    const matchDate = filters.dateRange ? s.date === filters.dateRange : true;

    return matchSearch && matchCourse && matchStatus && matchDate;
  });

  const unique = <K extends keyof Student>(key: K) =>
    Array.from(new Set(students.map((s) => s[key])));

  return (
    <div className="relative p-4 w-full bg-white border rounded-lg shadow-sm">
      {/* Header Controls */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          All Transactions
        </h2>
        <p className="text-sm text-gray-500">
          View and manage all your course transactions
        </p>
      </div>
      {/* Filter Dropdowns*/}
      <div className="flex flex-col xl:flex-row justify-between gap-4 mb-4">
        <SearchBar
          parentClassName="w-full"
          placeholder="Search Transactions"
          onSearch={handleSearch}
        />
        <div className="flex flex-col justify-between items-center gap-3 w-full sm:flex-row">
          <select
            className="border px-2 py-2 rounded-md w-full sm:w-[200px] outline-none"
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.target.value })}
          >
            <option value="">Course</option>
            {unique("course").map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            className="border px-2 py-2 rounded-md w-full  sm:w-[200px] outline-none"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">status</option>
            {unique("status").map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2 w-full sm:w-fit">
            <select
              className="border px-2 py-2 rounded-md w-full sm:w-[200px] outline-none"
              value={filters.dateRange}
              onChange={(e) =>
                setFilters({ ...filters, dateRange: e.target.value })
              }
            >
              <option value="">Date Range</option>
              {unique("date")
                .sort()
                .map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
            </select>
            <button className="p-3 border rounded-md text-secondary">
              <ListFilter size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-col-reverse justify-between gap-3 items-start lg:items-center mb-4 lg:flex-row">
        <span className="text-sm text-secondary min-w-[150px]">
          {selectedIds.length} Item Selected
        </span>
        <div className="flex flex-col items-center justify-end w-full gap-3 lg:flex-row">
          <select className="border w-full px-2 py-2 rounded-md lg:w-[200px]">
            <option>Action</option>
          </select>
          <button className="flex justify-center items-center gap-2 w-full p-2 border rounded-md lg:w-fit ">
            <Download size={15} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-auto rounded-lg border">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === students.length}
                    onChange={toggleAll}
                    className="w-5 h-5 accent-green-600 rounded border-gray-300 cursor-pointer"
                  />
                </label>
              </th>
              <th className="p-2">Student</th>
              <th className="p-2">Course</th>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Methoud</th>
              <th className="p-2">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="p-2 text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(student.id)}
                      onChange={() => toggleSelect(student.id)}
                      className="w-5 h-5 accent-green-600 rounded border-gray-300 cursor-pointer"
                    />
                  </label>
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-2 p-2">
                    <div className="w-12">
                      <Image
                        className="w-12 h-12 rounded-full object-cover"
                        src={student.image}
                        alt="Avatar Student"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="">
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="text-center">{student.course}</td>
                <td className="text-center">{student.date}</td>
                <td className="text-center">{student.amount}</td>
                <td className="text-center">{student.methoud}</td>
                <td className="py-3 px-2 ">
                  <div className="flex gap-4 justify-center items-center h-full">
                    <button>
                      <Eye className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black" />
                    </button>
                    <button>
                      <Download className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center py-4 text-gray-500">
                  No students match your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
