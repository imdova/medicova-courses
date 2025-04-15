"use client";
import { useState } from "react";
import SearchBar from "@/app/courses/search-Input";
import { quizzes } from "@/constants/quizzes.data";
import {
  ArrowLeft,
  Play,
  Plus,
  Share2,
  SquarePen,
  Timer,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function Quizzes() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter quizzes based on the search query
  const filteredQuizzes = quizzes.filter(
    (quiz) => quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) // Case insensitive search
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update the search query state
  };

  return (
    <section>
      <div className="flex flex-col justify-between sm:items-center pb-4 gap-4  sm:flex-row">
        <div className="flex gap-6 items-center">
          <Link
            className="p-2 border text-secondary rounded-md"
            href={"/admin"}
          >
            <ArrowLeft size={15} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">My Quizzes</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={"/admin/add-quiz"}
            className="flex items-center gap-2 px-5 py-2 bg-primary border rounded-md text-sm text-white"
          >
            <Plus size={15} /> Create New Quiz
          </Link>
        </div>
      </div>

      {/* Pass the search query handler function to the SearchBar */}
      <SearchBar placeholder="Search for Quizzes" onSearch={handleSearch} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredQuizzes.map((quiz) => (
          <div className="box-content border" key={quiz.id}>
            <h2 className="text-lg font-bold mb-3">{quiz.title}</h2>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-2 text-xs text-secondary">
                <Timer size={15} />
                {quiz.timeLimit && quiz.timeLimit > 0
                  ? (() => {
                      const totalSeconds = quiz.timeLimit;
                      const hours = Math.floor(totalSeconds / 3600); // Total hours
                      const minutes = Math.floor((totalSeconds % 3600) / 60); // Remaining minutes
                      const seconds = totalSeconds % 60; // Remaining seconds
                      return hours > 0
                        ? `${hours} hour${hours > 1 ? "s" : ""} ${
                            minutes > 0
                              ? `${minutes} minute${minutes > 1 ? "s" : ""}`
                              : ""
                          } ${
                            seconds > 0
                              ? `${seconds} second${seconds > 1 ? "s" : ""}`
                              : ""
                          }`
                        : `${minutes} minute${minutes > 1 ? "s" : ""} ${
                            seconds > 0
                              ? `${seconds} second${seconds > 1 ? "s" : ""}`
                              : ""
                          }`;
                    })()
                  : "No limit"}
              </span>
              <span className="border-l text-xs text-secondary pl-2">
                {quiz.questions.length} Questions
              </span>
            </div>
            <p className="text-sm text-secondary mb-4">{quiz.instructions}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="p-2 border rounded-md shadow-sm text-primary">
                  <Share2 size={15} />
                </button>
                <button className="p-2 border rounded-md shadow-sm text-primary">
                  <Trash2 size={15} />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 p-2 border rounded-md shadow-sm text-primary">
                  <SquarePen size={15} />
                  <span className="text-xs font-medium">Edit</span>
                </button>
                <Link
                  href={`quizzes/${quiz.id}/start`}
                  className="flex items-center gap-2 p-2 border rounded-md shadow-sm bg-primary text-white"
                >
                  <Play size={15} />
                  <span className="text-xs font-medium">Start</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
