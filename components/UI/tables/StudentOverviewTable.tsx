// components/StudentTable.tsx
import { useState } from "react";
import OptionsDropdown from "../OptionsDropdown";
import SearchBar from "@/app/courses/search-Input";

type Student = {
  id: number;
  name: string;
  email: string;
  country: string;
  age: number;
  gender: "Male" | "Female";
  phone: string;
  speciality: string;
  group: string;
  progress: number;
  joinDate: string;
};

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Abdelrahman Ahmed",
    email: "abdelrahman@gmail.com",
    country: "Egypt",
    age: 24,
    gender: "Male",
    phone: "01015753392",
    speciality: "Web Development",
    group: "Group A",
    progress: 80,
    joinDate: "April 5, 2025",
  },
  {
    id: 2,
    name: "Marian Ahmed",
    email: "marian@gmail.com",
    country: "Egypt",
    age: 35,
    gender: "Female",
    phone: "01015753392",
    speciality: "Web Development",
    group: "Group A",
    progress: 90,
    joinDate: "April 5, 2025",
  },
  // Add more for testing
];

export default function StudentOverviewTable() {
  const [students] = useState<Student[]>(initialStudents);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState({
    country: "",
    speciality: "",
    age: "",
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
    const matchCountry = filters.country ? s.country === filters.country : true;
    const matchSpeciality = filters.speciality
      ? s.speciality === filters.speciality
      : true;
    const matchAge = filters.age ? s.age.toString() === filters.age : true;

    return matchSearch && matchCountry && matchSpeciality && matchAge;
  });

  const unique = <K extends keyof Student>(key: K) =>
    Array.from(new Set(students.map((s) => s[key])));

  return (
    <div className="relative p-4 w-full">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <SearchBar
          parentClassName="w-full"
          placeholder="Search for students"
          onSearch={handleSearch}
        />
        <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md w-full md:w-auto min-w-[160px]">
          + Add New Student
        </button>
      </div>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4">
        <select
          className="border px-2 py-2 rounded-md"
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          <option value="">Country</option>
          {unique("country").map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          className="border px-2 py-2 rounded-md"
          value={filters.speciality}
          onChange={(e) =>
            setFilters({ ...filters, speciality: e.target.value })
          }
        >
          <option value="">Specialty</option>
          {unique("speciality").map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          className="border px-2 py-2 rounded-md"
          value={filters.age}
          onChange={(e) => setFilters({ ...filters, age: e.target.value })}
        >
          <option value="">Age</option>
          {unique("age")
            .sort((a, b) => Number(a) - Number(b))
            .map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
        </select>
        <select className="border px-2 py-2 rounded-md">
          <option>Action</option>
        </select>
        <select className="border px-2 py-2 rounded-md">
          <option>Columns</option>
        </select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-auto rounded-lg border">
        <table className="min-w-[1000px] w-full text-sm">
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
              <th className="p-2">Country</th>
              <th className="p-2">Age</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Speciality</th>
              <th className="p-2">Group</th>
              <th className="p-2">Progress</th>
              <th className="p-2">Join Date</th>
              <th className="p-2"></th>
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
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.email}</p>
                </td>
                <td className="text-center">{student.country}</td>
                <td className="text-center">{student.age}</td>
                <td className="text-center">
                  <div className="flex justify-center items-center gap-2">
                    {student.gender}
                    {student.gender === "Male" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1447E6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mars-icon lucide-mars"
                      >
                        <path d="M16 3h5v5" />
                        <path d="m21 3-6.75 6.75" />
                        <circle cx="10" cy="14" r="6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E60076"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-venus-icon lucide-venus"
                      >
                        <path d="M12 15v7" />
                        <path d="M9 19h6" />
                        <circle cx="12" cy="9" r="6" />
                      </svg>
                    )}
                  </div>
                </td>
                <td className="text-center">{student.phone}</td>
                <td className="text-center">{student.speciality}</td>
                <td className="text-center">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {student.group}
                  </span>
                </td>
                <td className="p-2 text-center">
                  <div className="flex items-center gap-1 ">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {student.progress}%
                    </p>
                  </div>
                </td>
                <td className="text-center">{student.joinDate}</td>
                <td className="text-center">
                  <div className="cursor-pointer inline-block">
                    <OptionsDropdown
                      onCopyStudentId={() =>
                        console.log("Copy Student Id clicked")
                      }
                      onSentEmail={() => console.log("Sent Email clicked")}
                      onInviteToCourse={() =>
                        console.log("Invite To Course clicked")
                      }
                      onAddToCourse={() => console.log("Add To Course clicked")}
                      onAddToGroup={() => console.log("Add To Group clicked")}
                      onRemoveFromCourse={() =>
                        console.log("Remove From Course")
                      }
                    />
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
