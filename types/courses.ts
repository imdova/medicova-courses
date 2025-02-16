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
  quizzes: 145;
  certifications: string;
  graduation: string;
  instructor: instructor;
  lessons: number;
  students: number;
  status: string;
  price: number;
  type: string;
  description: string;
  curriculums: curriculums[];
  reviews: review[];
}
export interface Action {
  label: string;
  url: string;
}

export interface Notification {
  id: number;
  typee: "info" | "error" | "warning" | "success";
  message: string;
  title: string;
  timestamp: string;
  read: boolean;
  user: User;
  action: Action;
}
export interface CourseVideo {
  title: string;
  progress: number;
  url: string;
  locked: boolean;
  duration: string;
}

interface TabItem {
  name: string;
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

export interface qustion {
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
  content: CourseVideo[];
  instructor: instructor;
  qustions: qustion[];
};

export interface CourseMaterial {
  title: string;
  fileUrl: string;
  fileType: "pdf" | "docx" | "video";
}
