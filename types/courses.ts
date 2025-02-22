import { User } from "@/types";
export interface curriculums {
  title: string;
  content: string;
}
export interface instructor {
  name: string;
  job: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  description: string;
}
export interface review {
  date: string;
  rating: number;
  user: User;
  content: string;
}

export interface CourseType {
  id: string;
  image: string;
  title: string;
  rating: number;
  level: string;
  duration: string;
  quizzes: number;
  certifications: string;
  graduation: string;
  instructor: instructor;
  lessons: number;
  students: number;
  status: string;
  price: number;
  videoUrl: string;
  type: string;
  description: string;
  curriculums: curriculums[];
  reviews: review[];
}

export interface CourseVideo {
  title: string;
  progress: number;
  url: string;
  locked: boolean;
  duration: string;
}

interface TabItem {
  title: string;
  progress: number;
  name?: string;
  url: string;
  locked: boolean;
  duration: string;
}

export interface Tab {
  title: string;
  total: number;
  completed: number;
  items?: TabItem[];
}
export interface replies {
  id: string;
  user: {
    name: string;
    image: string;
  };
  content: string;
  timestamp: number;
}

export interface question {
  id: string;
  user: {
    name: string;
    image: string;
  };
  content: string;
  replies: replies[];
  timestamp: number;
}
export type CourseContentProps = {
  title: string;
  tabs: Tab[];
  instructor: instructor;
  questions: question[];
  materials: CourseMaterial[];
};

export interface CourseMaterial {
  title: string;
  fileUrl: string;
  fileType: "pdf" | "docx" | "video";
}
export interface views {
  name: string;
  image: string;
}

export interface LiveVidoesType {
  id: string;
  title: string;
  tabs: Tab[];
  instructor: instructor;
  views: views[];
  messages: Message[];
}
export interface Message {
  text: string;
  sender: string;
  avatar: string;
  name: string;
  timestamp: string;
}

// Define a simple Event interface
export interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  color: string;
  tags: string[];
}

export type InstructorType = {
  name: string;
  image: string;
  rating: number;
  coursesType: string[];
  achievement: number;
  certificate: number;
};
