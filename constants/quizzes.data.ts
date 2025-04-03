import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "1",
    title: "Quiz One",
    instructions: "General knowledge quiz to test your basic skills.",
    randomizeQuestions: false,
    immediateFeedback: true,
    feedbackByEmail: false,
    timeLimit: 120,
    passingScore: 70,
    retakeNumbers: 3,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        text: "What is the capital of Germany?",
        points: 5,
        options: [
          { id: "q1-o1", text: "Paris", isCorrect: false },
          { id: "q1-o2", text: "Berlin", isCorrect: true },
          { id: "q1-o3", text: "Madrid", isCorrect: false },
          { id: "q1-o4", text: "Rome", isCorrect: false },
        ],
        explanation: "The capital of Germany is Berlin.",
        answerCorrect: 1,
      },
      {
        id: "q2",
        type: "true-false",
        text: "The sun rises in the east.",
        points: 1,
        options: [
          { id: "q2-true", text: "True", isCorrect: true },
          { id: "q2-false", text: "False", isCorrect: false },
        ],
        explanation: "Yes, the sun rises in the east.",
        answerCorrect: 0,
      },
    ],
  },
  {
    id: "2",
    title: "Quiz Two",
    instructions: "Math and logic quiz.",
    randomizeQuestions: true,
    immediateFeedback: false,
    feedbackByEmail: true,
    timeLimit: 90,
    passingScore: 75,
    retakeNumbers: 2,
    questions: [
      {
        id: "q3",
        type: "multiple-choice",
        text: "What is 5 + 3?",
        points: 5,
        options: [
          { id: "q3-o1", text: "6", isCorrect: false },
          { id: "q3-o2", text: "8", isCorrect: true },
          { id: "q3-o3", text: "9", isCorrect: false },
          { id: "q3-o4", text: "7", isCorrect: false },
        ],
        explanation: "5 + 3 = 8",
        answerCorrect: 1,
      },
    ],
  },
];
