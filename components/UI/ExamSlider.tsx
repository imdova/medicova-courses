"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExamCard from "./ExamCard";
import { Exams } from "@/types/exams";
type SlideProps = {
  ExamData: Exams[];
};
export default function InstructorsSlide({ ExamData }: SlideProps) {
  const [current, setCurrent] = useState(0);
  // State to store the selected filter category
  const [filter, setFilter] = useState<
    | "All"
    | "Doctors"
    | "Dentists"
    | "Physiotherapists"
    | "Pharmacists"
    | "Nurses"
    | "Technicians"
  >("All");

  // Filter exams based on the selected category
  const filteredExams =
    filter === "All"
      ? ExamData
      : ExamData.filter((exam) => exam.category === filter);

  // Number of cards visible at a time
  const visibleCards = 6;

  // Calculate total slides needed for pagination
  const totalSlides = Math.max(filteredExams.length - (visibleCards - 1), 1);

  // Disable buttons if no exams are available
  const isDisabled = filteredExams.length < visibleCards;

  // Function to move to the next slide
  const nextSlide = () => {
    if (!isDisabled) {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    if (!isDisabled) {
      setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };
  return (
    <div className="relative w-full overflow-hidden rounded-2xl p-4 mb-4">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="flex justify-between items-center flex-col gap-2 lg:flex-row mb-8 w-full">
          <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-2">
            {[
              "All",
              "Doctors",
              "Dentists",
              "Physiotherapists",
              "Pharmacists",
              "Nurses",
              "Technicians",
            ].map((category) => (
              <button
                key={category}
                onClick={() =>
                  setFilter(
                    category as
                      | "All"
                      | "Doctors"
                      | "Dentists"
                      | "Physiotherapists"
                      | "Pharmacists"
                      | "Nurses"
                      | "Technicians"
                  )
                }
                className={`px-4 py-2 w-full flex-1 text-sm rounded-md border ${
                  filter === category ? "bg-primary text-white" : "bg-gray-200"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mb-8">
          <button
            onClick={prevSlide}
            className={`flex justify-center items-center w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white ${
              isDisabled
                ? "cursor-not-allowed hover:text-secondary hover:border-secondary hover:bg-white"
                : ""
            }`}>
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className={`flex justify-center items-center w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white ${
              isDisabled
                ? "cursor-not-allowed hover:text-secondary hover:border-secondary hover:bg-white"
                : ""
            }`}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full min-h-[300px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full px-4">
          {filteredExams.slice(current, current + visibleCards).map((exam) => (
            <ExamCard
              key={exam.id}
              id={exam.id}
              image={exam.image}
              title={exam.title}
              category={exam.category}
              authority={exam.authority}
              qustions={exam.qustions}
              exam_date={exam.exam_date}
              providers={exam.providers}
              price={exam.price}
            />
          ))}
        </div>
        {filteredExams.length === 0 ? (
          <p className="text-secondary text-center">Not Found Exams</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
