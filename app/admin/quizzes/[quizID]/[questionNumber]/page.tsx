"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Timer from "@/components/UI/Timer";
import { quizzes } from "@/constants/quizzes.data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizQuestionPageProps {
  params: Promise<{
    quizID: string;
    questionNumber: string;
  }>;
}

type QuestionOrder = "regular" | "random";
type QuizMode = "quiz" | "test";
type TimerMode = "no-limit" | "hidden" | "normal";

export default function QuizQuestionPage({ params }: QuizQuestionPageProps) {
  // Unwrap the params promise
  const { quizID, questionNumber } = use(params);
  const searchParams = useSearchParams();
  const quiz = quizzes.find((q) => q.id === quizID);
  const questionNum = parseInt(questionNumber);

  // State for quiz options and user answers
  const [quizOptions, setQuizOptions] = useState<{
    questionOrder: QuestionOrder;
    quizMode: QuizMode;
    timerMode: TimerMode;
  }>({
    questionOrder: "regular",
    quizMode: "quiz",
    timerMode: "normal",
  });

  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  console.log(userAnswers);
  // Load quiz options and saved answers
  useEffect(() => {
    const urlOptions = {
      questionOrder: (searchParams.get("order") as QuestionOrder) || "regular",
      quizMode: (searchParams.get("mode") as QuizMode) || "quiz",
      timerMode: (searchParams.get("timer") as TimerMode) || "normal",
    };

    const storedOptions = JSON.parse(
      localStorage.getItem("quizOptions") || "{}"
    );
    setQuizOptions({
      questionOrder: storedOptions.questionOrder || urlOptions.questionOrder,
      quizMode: storedOptions.quizMode || urlOptions.quizMode,
      timerMode: storedOptions.timerMode || urlOptions.timerMode,
    });

    const savedAnswers = JSON.parse(
      localStorage.getItem(`quizAnswers_${quizID}`) || "{}"
    );
    setUserAnswers(savedAnswers);
  }, [searchParams, quizID]);

  if (!quiz || isNaN(questionNum)) {
    notFound();
  }

  // Apply question ordering
  const [orderedQuestions, setOrderedQuestions] = useState([...quiz.questions]);
  useEffect(() => {
    if (quizOptions.questionOrder === "random") {
      const seed =
        localStorage.getItem("quizSessionSeed") || Math.random().toString();
      localStorage.setItem("quizSessionSeed", seed);

      const shuffled = [...quiz.questions]
        .map((q) => ({ q, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ q }) => q);

      setOrderedQuestions(shuffled);
    } else {
      setOrderedQuestions([...quiz.questions]);
    }
  }, [quiz.questions, quizOptions.questionOrder]);

  const currentQuestion = orderedQuestions[questionNum - 1];
  const startPageUrl = `/admin/quizzes/${quizID}/start`;
  const completePageUrl = `/admin/quizzes/${quizID}/complete`;

  if (!currentQuestion) {
    notFound();
  }

  // Handle answer selection
  useEffect(() => {
    setSelectedOption(userAnswers[questionNum - 1] ?? null);
  }, [questionNum, userAnswers]);

  const handleAnswerSelect = (index: number) => {
    const newAnswers = { ...userAnswers, [questionNum - 1]: index };
    setUserAnswers(newAnswers);
    setSelectedOption(index);
    localStorage.setItem(`quizAnswers_${quizID}`, JSON.stringify(newAnswers));
  };
  console.log(quizOptions.questionOrder);
  // Quiz mode configuration
  const isTestMode = quizOptions.quizMode === "test";

  // Timer configuration
  const showTimer = quizOptions.timerMode !== "hidden";
  const hasTimeLimit = quizOptions.timerMode === "normal";
  const timerLimit = hasTimeLimit ? quiz.timeLimit * 60 : 0;

  // Calculate score
  const calculateScore = () => {
    const correctAnswers = orderedQuestions.reduce((acc, question, index) => {
      const userAnswer = userAnswers[index];
      return userAnswer === question.answerCorrect ? acc + 1 : acc;
    }, 0);
    return Math.round((correctAnswers / orderedQuestions.length) * 100);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const score = calculateScore();
    const result = {
      quizId: quizID,
      score,
      totalQuestions: orderedQuestions.length,
      answers: userAnswers,
      completedAt: new Date().toISOString(),
    };

    localStorage.setItem(`quizResult_${quizID}`, JSON.stringify(result));
    localStorage.removeItem(`quizAnswers_${quizID}`);
    localStorage.removeItem("quizSessionSeed");
    window.location.href = `${completePageUrl}?score=${score}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl relative">
      {/* <Link
        href={startPageUrl}
        className="absolute top-6 left-6 text-gray-600 hover:text-gray-800">
        ← Back
      </Link> */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (questionNum === orderedQuestions.length) {
            handleSubmit();
          }
        }}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">
              {quiz.title} ({isTestMode ? "Test Mode" : "Practice Mode"})
            </h1>
            {showTimer && (
              <Timer
                timeLimit={timerLimit}
                mode={quizOptions.timerMode}
                onTimeUp={handleSubmit}
              />
            )}
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="text-sm font-semibold">
                Question {questionNum} of {orderedQuestions.length}
                {quizOptions.questionOrder === "random" && " (Random Order)"}
              </span>
              <span className="text-sm font-semibold">
                {quiz.questions.length} Questions
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{
                  width: `${(questionNum / quiz.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">{currentQuestion.text}</h2>
            {isTestMode && (
              <p className="text-sm text-gray-500">
                Test mode: Answers will be shown at the end
              </p>
            )}
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion?.options?.map((option, index) => {
              const orderAlph = ["A", "B", "C", "D"];
              const isSelected = selectedOption === index;
              return (
                <div
                  key={option.id}
                  className={`flex items-center gap-4 p-3 rounded-full cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(index)}>
                  <span
                    className={`flex justify-center items-center w-8 h-8 rounded-full text-sm ${
                      isSelected ? "bg-white text-primary" : ""
                    }`}>
                    {orderAlph[index]}
                  </span>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="answer"
                    value={index}
                    checked={isSelected}
                    className="hidden"
                    onChange={() => {}}
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="block cursor-pointer">
                    {option.text}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between">
            <Link
              href={
                questionNum > 1
                  ? `/admin/quizzes/${quizID}/${questionNum - 1}`
                  : startPageUrl
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                questionNum === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}>
              <ChevronLeft size={15} />
              Previous
            </Link>

            {questionNum === orderedQuestions.length ? (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md disabled:opacity-50"
                disabled={selectedOption === null}>
                {isTestMode ? "Submit Test" : "Finish Quiz"}
              </button>
            ) : (
              <Link
                href={`/admin/quizzes/${quizID}/${questionNum + 1}`}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
                Next <ChevronRight size={15} />
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
