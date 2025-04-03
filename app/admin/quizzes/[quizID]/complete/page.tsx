"use client";

import { quizzes } from "@/constants/quizzes.data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

interface QuizCompletePageProps {
  params: Promise<{
    quizID: string;
  }>;
}

interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: Record<number, number>;
  completedAt: string;
}

export default function QuizCompletePage({ params }: QuizCompletePageProps) {
  // Unwrap the params promise
  const { quizID } = use(params);
  const searchParams = useSearchParams();
  const quiz = quizzes.find((q) => q.id === quizID);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);

  // Get score from URL params as fallback
  const urlScore = searchParams.get("score");

  useEffect(() => {
    // Load result from localStorage
    const savedResult = localStorage.getItem(`quizResult_${quizID}`);
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else if (urlScore) {
      // Create basic result from URL params if no localStorage data
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
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Loading Results...</h1>
        </div>
      </div>
    );
  }

  // Calculate correct answers count
  const correctAnswers = quiz.questions.reduce((count, question, index) => {
    return result.answers[index] === question.answerCorrect ? count + 1 : count;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-gray-600 mb-6">You have finished: {quiz.title}</p>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Your Results</h2>
          <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto mb-4">
            <div>
              <p className="text-gray-500">Questions:</p>
              <p className="font-medium">{result.totalQuestions}</p>
            </div>
            <div>
              <p className="text-gray-500">Correct:</p>
              <p className="font-medium">{correctAnswers}</p>
            </div>
            <div>
              <p className="text-gray-500">Score:</p>
              <p className="font-medium">{result.score}%</p>
            </div>
            <div>
              <p className="text-gray-500">Date:</p>
              <p className="font-medium">
                {new Date(result.completedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            {showAnswers ? "Hide Answers" : "Show Detailed Answers"}
          </button>

          {showAnswers && (
            <div className="mt-6 text-left space-y-6">
              {quiz.questions.map((question, index) => {
                const userAnswerIndex = result.answers[index];
                const isCorrect = userAnswerIndex === question.answerCorrect;
                const userAnswer =
                  question.options?.[userAnswerIndex]?.text ?? "Not answered";
                return (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-medium mb-2">
                      Question {index + 1}: {question.text}
                    </h3>
                    <p
                      className={`mb-1 ${
                        isCorrect ? "text-green-600" : "text-red-600"
                      }`}>
                      Your answer: {userAnswer} {isCorrect ? "✓" : "✗"}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-600">
                        Correct answer:{" "}
                        {question.options?.[question.answerCorrect ?? -1]
                          ?.text ?? "No correct answer"}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md font-medium">
            Back to Dashboard
          </Link>
          <Link
            href={`/quiz/${quizID}/start`}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-medium">
            Retake Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
