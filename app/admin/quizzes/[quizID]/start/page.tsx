"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { quizzes } from "@/constants/quizzes.data";
import { ChevronRight } from "lucide-react";
import { use, useState } from "react";

interface StartQuizPageProps {
  params: Promise<{
    quizID: string;
  }>;
}
type QuestionOrder = "regular" | "random";
type QuizMode = "quiz" | "test";
type TimerMode = "no-limit" | "hidden" | "normal";

export default function StartQuizPage({ params }: StartQuizPageProps) {
  const { quizID } = use(params);
  const quiz = quizzes.find((q: { id: string }) => q.id === quizID);

  // State for select dropdowns
  const [questionOrder, setQuestionOrder] = useState<QuestionOrder>("regular");
  const [quizMode, setQuizMode] = useState<QuizMode>("quiz");
  const [timerType, setTimerType] = useState<TimerMode>("no-limit");

  if (!quiz) {
    notFound();
  }

  // Function to handle quiz start with selected options
  const handleStartQuiz = () => {
    // You can use these values to customize the quiz experience
    const quizOptions = {
      questionOrder,
      quizMode,
      timerType,
    };

    // Store options in localStorage or pass via URL
    localStorage.setItem("quizOptions", JSON.stringify(quizOptions));

    // Navigate to first question with options as query params
    return `/admin/quizzes/${quiz.id}/1?order=${questionOrder}&mode=${quizMode}&timer=${timerType}`;
  };

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-sm text-secondary mb-4">{quiz.instructions}</p>
      </div>
      <div className="box-content p-6 border">
        <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 mb-8">
          <div className="flex flex-col gap-2">
            <span className="block text-sm text-secondary mb-2">
              Questions:
            </span>
            <span className="font-semibold">{quiz.questions.length}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="block text-sm text-secondary mb-2">
              Time Limit:
            </span>
            <span className="font-semibold">
              {" "}
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
          </div>
          <div className="flex flex-col gap-2">
            <span className="block text-sm text-secondary mb-2">
              Passing Score:
            </span>
            <span className="font-semibold">{quiz.passingScore}%</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="block text-sm text-secondary mb-2">
              Total Points:
            </span>
            <span className="font-semibold">
              {quiz.questions.reduce(
                (total, question) => total + question.points,
                0
              )}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 mb-8 md:flex-row border-b pb-4">
          <div className="w-full">
            <span className="block text-sm text-secondary mb-2">
              Question Order:
            </span>
            <select
              value={questionOrder}
              onChange={(e) =>
                setQuestionOrder(e.target.value as QuestionOrder)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
              <option value="regular">Regular</option>
              <option value="random">Random</option>
            </select>
          </div>
          <div className="w-full">
            <span className="block text-sm text-secondary mb-2">Mode:</span>
            <select
              value={quizMode}
              onChange={(e) => setQuizMode(e.target.value as QuizMode)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
              <option value="quiz">Quiz</option>
              <option value="test">Test</option>
            </select>
          </div>
          <div className="w-full">
            <span className="block text-sm text-secondary mb-2">Timer:</span>
            <select
              value={timerType}
              onChange={(e) => setTimerType(e.target.value as TimerMode)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
              <option value="no-limit">No limit</option>
              <option value="hidden">Hidden</option>
              <option value="normal">Normal</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Link
            href={handleStartQuiz()}
            className="flex gap-2 items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
            Start Quiz
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
