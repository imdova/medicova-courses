"use client";

import QuizProgress from "@/components/UI/QuizProgress";
import { quizzes } from "@/constants/quizzes.data";
import { CircleX, RotateCcw } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

interface QuizCompletePageProps {
  params: Promise<{
    quizID: string;
  }>;
}

interface QuizAnswer {
  selectedOption?: number;
  textAnswer?: string;
}

interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: Record<number, QuizAnswer>;
  completedAt: string;
}

interface Question {
  id: string;
  type: "multiple-choice" | "true-false" | "text";
  text: string;
  options?: Array<{ id: number; text: string }>;
  answerCorrect: number | string;
  explanation?: string;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  passingScore: number;
}

export default function QuizCompletePage({ params }: QuizCompletePageProps) {
  const { quizID } = use(params);
  const searchParams = useSearchParams();
  const quiz = quizzes.find((q) => q.id === quizID) as Quiz | undefined;
  const [result, setResult] = useState<QuizResult | null>(null);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  const urlScore = searchParams.get("score");

  useEffect(() => {
    const data = localStorage.getItem(`quizTimer_${quizID}`);

    if (data) {
      const parsedData = JSON.parse(data);
      setTimeTaken(parsedData.timeTaken);
    } else {
      setTimeTaken(0); // Default value if no data is found
    }
  }, [quizID]); // Make sure to include quizID as a dependency if it's changing

  useEffect(() => {
    const savedResult = localStorage.getItem(`quizResult_${quizID}`);
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else if (urlScore) {
      setResult({
        quizId: quizID,
        score: parseInt(urlScore),
        totalQuestions: quiz?.questions.length || 0,
        answers: {},
        completedAt: new Date().toISOString(),
      });
    }
  }, [quizID, urlScore, quiz]);

  if (!quiz) {
    notFound();
  }

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl mb-4">Loading Results...</h1>
        </div>
      </div>
    );
  }

  // Enhanced answer comparison with tolerance for minor differences
  const isAnswerCorrect = (question: Question, answer: QuizAnswer): boolean => {
    if (!answer) return false;

    if (question.type === "multiple-choice" || question.type === "true-false") {
      return answer.selectedOption === question.answerCorrect;
    }

    // Handle text answers with more flexible comparison
    const userAnswer = answer.textAnswer?.toLowerCase().trim() || "";
    const correctAnswer = String(question.answerCorrect).toLowerCase().trim();

    // Exact match
    if (userAnswer === correctAnswer) return true;

    // Handle multiple correct answers (separated by pipes)
    if (correctAnswer.includes("|")) {
      const possibleAnswers = correctAnswer.split("|").map((a) => a.trim());
      return possibleAnswers.includes(userAnswer);
    }

    // Numeric comparison (e.g., "5" vs "five")
    if (!isNaN(Number(userAnswer)) && !isNaN(Number(correctAnswer))) {
      return Number(userAnswer) === Number(correctAnswer);
    }

    // Remove common connecting words for comparison
    const normalize = (str: string) =>
      str
        .replace(/\b(a|an|the|and|or|of|in|on|at)\b/g, "")
        .replace(/\s+/g, " ")
        .trim();

    return normalize(userAnswer) === normalize(correctAnswer);
  };

  const calculateCorrectAnswers = (quiz: Quiz, result: QuizResult) => {
    return quiz.questions.reduce((count, question, index) => {
      return isAnswerCorrect(question, result.answers[index])
        ? count + 1
        : count;
    }, 0);
  };

  const correctAnswers = calculateCorrectAnswers(quiz, result);

  const getAnswerText = (question: Question, answer: QuizAnswer) => {
    if (!answer) return "Not answered";

    if (question.type === "true-false") {
      if (typeof answer.selectedOption !== "number") return "Not answered";
      return answer.selectedOption ? "True" : "False";
    }

    if (question.type === "multiple-choice") {
      return (
        question.options?.[answer.selectedOption ?? -1]?.text ?? "Not answered"
      );
    }

    return answer.textAnswer || "Not answered";
  };

  const getCorrectAnswerText = (question: Question) => {
    if (question.type === "true-false") {
      return question.answerCorrect ? "True" : "False";
    }

    if (question.type === "multiple-choice") {
      return question.options?.[question.answerCorrect as number]?.text ?? "";
    }

    // Format text answers with multiple possibilities
    const correctAnswer = String(question.answerCorrect);
    if (correctAnswer.includes("|")) {
      return `Acceptable answers: ${correctAnswer.split("|").join(", ")}`;
    }

    return correctAnswer;
  };
  // calclute Score
  const score = Math.round((correctAnswers / result.totalQuestions) * 100);
  // format time
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Return as 'hh:mm:ss' or 'mm:ss' if there are no hours
    return hours > 0
      ? `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
      : `${minutes.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p className="text-gray-600 mb-6">You have finished: {quiz.title}</p>
        <QuizProgress
          score={score}
          questionsCorrect={correctAnswers}
          passingScore={quiz.passingScore}
          totalQuestions={result.totalQuestions}
        />
        <div className="box-content my-5 border rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto mb-4 p-4">
            <div className="text-center">
              <p className="text-secondary text-sm mb-2">Time Taken</p>
              <p className="text-lg font-semibold">{formatTime(timeTaken)}</p>
            </div>
            <div className="text-center">
              <p className="text-secondary text-sm mb-2">Correct Answers</p>
              <p className="text-lg font-semibold">
                {correctAnswers} / {result.totalQuestions}
              </p>
            </div>
          </div>
          <div className="flex justify-end p-4 border-t">
            <Link
              href={`/admin/quizzes/${quizID}/start`}
              className="flex items-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium">
              Retry Quiz <RotateCcw size={15} />
            </Link>
          </div>
        </div>

        <div className="box-content border rounded-lg mt-6">
          <h1 className="text-xl text-left p-4 border-b">Question Review</h1>
          <div className="mt-2 text-left space-y-4 p-4">
            {quiz.questions.map((question, index) => {
              const userAnswer = result.answers[index];
              const isCorrect = isAnswerCorrect(question, userAnswer);
              const userAnswerText = getAnswerText(question, userAnswer);
              const correctAnswerText = getCorrectAnswerText(question);

              return (
                <div
                  key={index}
                  className={`border p-4 rounded-lg ${
                    isCorrect ? "bg-green-50" : "bg-red-50"
                  }`}>
                  <div className="flex gap-3 items-start">
                    {!isCorrect && (
                      <CircleX
                        className="text-red-500 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">
                        Question {index + 1}
                      </h3>
                      <p className="text-sm mt-1">{question.text}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            Your answer:
                          </p>
                          <p
                            className={`text-sm ${
                              isCorrect
                                ? "text-green-600 font-medium"
                                : "text-red-600"
                            }`}>
                            {userAnswerText}
                          </p>
                        </div>
                        {!isCorrect && (
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Correct answer:
                            </p>
                            <p className="text-sm text-green-600 font-medium">
                              {correctAnswerText}
                            </p>
                          </div>
                        )}
                      </div>

                      {question.explanation && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-1">
                            Explanation:
                          </p>
                          <p className="text-sm text-gray-700">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
