import { CourseContentProps } from "@/types/courses";

// Single page Video Data
export const courseData: Record<string, CourseContentProps> = {
  "1": {
    title: "Introduction to Programming",
    tabs: [
      {
        title: "Chapter 1: Basics of Programming",
        total: 5,
        completed: 2,
        items: [
          {
            title: "What is Programming?",
            progress: 100,
            url: "/videos/intro-to-programming.mp4",
            locked: false,
            duration: "5:00",
          },
          {
            title: "Variables and Data Types",
            progress: 50,
            url: "/videos/variables-and-data-types.mp4",
            locked: false,
            duration: "7:30",
          },
          {
            title: "Control Structures",
            progress: 0,
            url: "/videos/control-structures.mp4",
            locked: true,
            duration: "6:15",
          },
        ],
      },
      {
        title: "Chapter 2: Functions and Modules",
        items: [
          {
            title: "Writing Functions",
            progress: 0,
            url: "/videos/writing-functions.mp4",
            locked: true,
            duration: "8:00",
          },
          {
            title: "Modules and Libraries",
            progress: 0,
            url: "/videos/modules-and-libraries.mp4",
            locked: true,
            duration: "9:20",
          },
        ],
        total: 2,
        completed: 0,
      },
    ],
    instructor: {
      name: "Dr. John Smith",
      image: "/images/instructors/john-smith.jpg",
      rating: 4.8,
      reviews: 1500,
      courses: 10,
      description:
        "Dr. John Smith is a seasoned software engineer with over 15 years of experience in teaching programming and software development.",
      job: "Software Engineer",
      students: 5000,
    },
    questions: [
      {
        id: "1",
        user: {
          name: "Alice Johnson",
          image: "/images/users/alice-johnson.jpg",
        },
        content: "What is the best programming language for beginners?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "Dr. John Smith",
              image: "/images/instructors/john-smith.jpg",
            },
            content:
              "Python is highly recommended for beginners due to its simplicity.",
            timestamp: 10,
          },
        ],
        timestamp: 5,
      },
    ],
    materials: [
      {
        title: "Programming Basics PDF",
        fileUrl: "/files/programming-basics.pdf",
        fileType: "pdf",
      },
    ],
  },
  "2": {
    title: "Web Development Fundamentals",
    tabs: [
      {
        title: "Chapter 1: HTML and CSS",
        total: 6,
        completed: 3,
        items: [
          {
            title: "Introduction to HTML",
            progress: 100,
            url: "/videos/intro-to-html.mp4",
            locked: false,
            duration: "4:30",
          },
          {
            title: "Styling with CSS",
            progress: 75,
            url: "/videos/styling-with-css.mp4",
            locked: false,
            duration: "6:00",
          },
          {
            title: "Responsive Design",
            progress: 0,
            url: "/videos/responsive-design.mp4",
            locked: true,
            duration: "7:15",
          },
        ],
      },
      {
        title: "Chapter 2: JavaScript Basics",
        items: [
          {
            title: "Introduction to JavaScript",
            progress: 0,
            url: "/videos/intro-to-javascript.mp4",
            locked: true,
            duration: "5:45",
          },
        ],
        total: 3,
        completed: 0,
      },
    ],
    instructor: {
      name: "Jane Doe",
      image: "/images/instructors/jane-doe.jpg",
      rating: 4.9,
      reviews: 2000,
      courses: 15,
      description:
        "Jane Doe is a full-stack developer with expertise in modern web technologies like React, Node.js, and Tailwind CSS.",
      job: "Full-Stack Developer",
      students: 8000,
    },
    questions: [
      {
        id: "2",
        user: {
          name: "Bob Brown",
          image: "/images/users/bob-brown.jpg",
        },
        content: "How do I center a div in CSS?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Jane Doe",
              image: "/images/instructors/jane-doe.jpg",
            },
            content: "You can use `margin: 0 auto;` or Flexbox.",
            timestamp: 15,
          },
        ],
        timestamp: 10,
      },
    ],
    materials: [
      {
        title: "HTML and CSS Cheat Sheet",
        fileUrl: "/files/html-css-cheat-sheet.pdf",
        fileType: "pdf",
      },
    ],
  },
  "3": {
    title: "Data Science Essentials",
    tabs: [
      {
        title: "Chapter 1: Introduction to Data Science",
        total: 4,
        completed: 1,
        items: [
          {
            title: "What is Data Science?",
            progress: 100,
            url: "/videos/what-is-data-science.mp4",
            locked: false,
            duration: "6:00",
          },
          {
            title: "Data Cleaning",
            progress: 0,
            url: "/videos/data-cleaning.mp4",
            locked: true,
            duration: "8:30",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. Emily White",
      image: "/images/instructors/emily-white.jpg",
      rating: 4.7,
      reviews: 1200,
      courses: 8,
      description:
        "Dr. Emily White is a data scientist with a Ph.D. in Machine Learning and extensive experience in data analysis and visualization.",
      job: "Data Scientist",
      students: 3000,
    },
    questions: [],
    materials: [
      {
        title: "Data Science Basics PDF",
        fileUrl: "/files/data-science-basics.pdf",
        fileType: "pdf",
      },
    ],
  },
  "4": {
    title: "Mobile App Development",
    tabs: [
      {
        title: "Chapter 1: Introduction to Flutter",
        total: 5,
        completed: 2,
        items: [
          {
            title: "What is Flutter?",
            progress: 100,
            url: "/videos/what-is-flutter.mp4",
            locked: false,
            duration: "5:30",
          },
          {
            title: "Building Your First App",
            progress: 50,
            url: "/videos/building-first-app.mp4",
            locked: false,
            duration: "7:00",
          },
        ],
      },
    ],
    instructor: {
      name: "Mike Johnson",
      image: "/images/instructors/mike-johnson.jpg",
      rating: 4.6,
      reviews: 900,
      courses: 7,
      description:
        "Mike Johnson is a mobile app developer specializing in Flutter and React Native.",
      job: "Mobile App Developer",
      students: 2500,
    },
    questions: [],
    materials: [
      {
        title: "Flutter Basics PDF",
        fileUrl: "/files/flutter-basics.pdf",
        fileType: "pdf",
      },
    ],
  },
  "5": {
    title: "Machine Learning Basics",
    tabs: [
      {
        title: "Chapter 1: Introduction to ML",
        total: 3,
        completed: 1,
        items: [
          {
            title: "What is Machine Learning?",
            progress: 100,
            url: "/videos/what-is-ml.mp4",
            locked: false,
            duration: "6:45",
          },
          {
            title: "Supervised vs Unsupervised Learning",
            progress: 0,
            url: "/videos/supervised-vs-unsupervised.mp4",
            locked: true,
            duration: "8:00",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. Sarah Lee",
      image: "/images/instructors/sarah-lee.jpg",
      rating: 4.9,
      reviews: 1800,
      courses: 12,
      description:
        "Dr. Sarah Lee is a machine learning expert with a focus on deep learning and neural networks.",
      job: "Machine Learning Engineer",
      students: 6000,
    },
    questions: [],
    materials: [
      {
        title: "ML Basics PDF",
        fileUrl: "/files/ml-basics.pdf",
        fileType: "pdf",
      },
    ],
  },
};
