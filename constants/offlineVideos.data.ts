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
            url: "https://www.youtube.com/watch?v=7mz06SXDoqA",
            locked: false,
            duration: "5:00",
          },
          {
            title: "Variables and Data Types",
            progress: 50,
            url: "https://www.youtube.com/watch?v=7mz06SXDoqA",
            locked: false,
            duration: "7:30",
          },
          {
            title: "Control Structures",
            progress: 0,
            url: "https://www.youtube.com/watch?v=7mz06SXDoqA",
            locked: true,
            duration: "6:15",
          },
        ],
      },
      {
        title: "Chapter 2: Functions and Modules",
        total: 2,
        completed: 0,
        items: [
          {
            title: "Writing Functions",
            progress: 0,
            url: "https://www.youtube.com/watch?v=7mz06SXDoqA",
            locked: true,
            duration: "8:00",
          },
          {
            title: "Modules and Libraries",
            progress: 0,
            url: "https://www.youtube.com/watch?v=7mz06SXDoqA",
            locked: true,
            duration: "9:20",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. John Smith",
      image:
        "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
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
          image:
            "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
        },
        content: "What is the best programming language for beginners?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "Dr. John Smith",
              image:
                "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
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
        title: "Chapter 1: HTML & CSS Basics",
        total: 4,
        completed: 1,
        items: [
          {
            title: "Introduction to HTML",
            progress: 100,
            url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            locked: false,
            duration: "10:00",
          },
          {
            title: "CSS Styling Basics",
            progress: 50,
            url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
            locked: false,
            duration: "12:30",
          },
        ],
      },
    ],
    instructor: {
      name: "Sarah Lee",
      image:
        "https://img.freepik.com/free-photo/young-businesswoman-posing_23-2148211695.jpg?w=740",
      rating: 4.7,
      reviews: 1200,
      courses: 8,
      description:
        "Sarah Lee is a front-end developer specializing in responsive design and user experience.",
      job: "Front-End Developer",
      students: 4500,
    },
    questions: [
      {
        id: "2",
        user: {
          name: "John Doe",
          image:
            "https://img.freepik.com/free-photo/happy-man-smiling_23-2148211695.jpg?w=740",
        },
        content: "What is the best way to learn HTML & CSS?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Sarah Lee",
              image:
                "https://img.freepik.com/free-photo/young-businesswoman-posing_23-2148211695.jpg?w=740",
            },
            content:
              "Practice by building real-world projects and reviewing documentation.",
            timestamp: 8,
          },
        ],
        timestamp: 4,
      },
    ],
    materials: [
      {
        title: "HTML & CSS Guide",
        fileUrl: "/files/html-css-guide.pdf",
        fileType: "pdf",
      },
    ],
  },
  "3": {
    title: "Data Science Essentials",
    tabs: [],
    instructor: {
      name: "Dr. Emily White",
      image:
        "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
      rating: 4.9,
      reviews: 1800,
      courses: 12,
      description:
        "Dr. Emily White is a data scientist with expertise in machine learning and AI.",
      job: "Data Scientist",
      students: 5000,
    },
    questions: [],
    materials: [],
  },
  "4": {
    title: "Cybersecurity Basics",
    tabs: [],
    instructor: {
      name: "Michael Adams",
      image:
        "https://img.freepik.com/free-photo/handsome-man-smiling_23-2148211695.jpg?w=740",
      rating: 4.6,
      reviews: 900,
      courses: 6,
      description:
        "Michael Adams is a cybersecurity expert with over 10 years of experience in ethical hacking.",
      job: "Cybersecurity Analyst",
      students: 3200,
    },
    questions: [],
    materials: [],
  },
  "5": {
    title: "Cloud Computing Essentials",
    tabs: [],
    instructor: {
      name: "Linda Carter",
      image:
        "https://img.freepik.com/free-photo/professional-woman_23-2148211695.jpg?w=740",
      rating: 4.8,
      reviews: 1300,
      courses: 9,
      description:
        "Linda Carter is a cloud architect with expertise in AWS, Azure, and Google Cloud.",
      job: "Cloud Architect",
      students: 4700,
    },
    questions: [],
    materials: [],
  },
};
