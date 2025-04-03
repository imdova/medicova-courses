interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  type: "multiple-choice" | "true-false" | "fill-in-the-blank" | "short-answer";
  text: string;
  points: number;
  options?: Option[];
  explanation: string;
  answerCorrect?: number;
}

export interface Quiz {
  id: string;
  title: string;
  instructions: string;
  randomizeQuestions: boolean;
  immediateFeedback: boolean;
  feedbackByEmail: boolean;
  timeLimit: number;
  passingScore: number;
  retakeNumbers: number;
  questions: Question[];
}
