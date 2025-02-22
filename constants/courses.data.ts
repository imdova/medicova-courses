import { CourseType, CourseVideo } from "@/types/courses";

// Course data
export const Courses: CourseType[] = [
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/students-listening-lecture_23-2147649721.jpg?w=996",
    title: "Introduction to Psychology",
    rating: 4.5,
    level: "Expert",
    duration: "11h 20m",
    lessons: 12,
    quizzes: 145,
    certifications: "Yes",
    graduation: "25K",
    price: 25,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Live",
    instructor: {
      name: "Dr. Emily Carter",
      image:
        "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
      rating: 5,
      reviews: 1500,
      courses: 8,
      description:
        "An expert in cognitive and behavioral psychology, Dr. Carter has 10+ years of experience.",
      job: "Professor of Psychology",
      students: 500,
    },
    students: 400,
    status: "Recorded",
    description:
      "Explore the fundamentals of human behavior and mental processes in this engaging course.",
    curriculums: [
      {
        title: "Introduction",
        content: "An overview of psychology and its history.",
      },
      {
        title: "Cognitive Development",
        content: "Study of cognitive growth in individuals.",
      },
    ],
    reviews: [
      {
        date: "Jan 10, 2024",
        rating: 5,
        user: {
          name: "John D.",
          photo:
            "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg?w=740",
          job: "Therapist",
        },
        content: "Great insights into psychology!",
      },
      {
        date: "Jan 15, 2024",
        rating: 4,
        user: {
          name: "Alice M.",
          photo:
            "https://img.freepik.com/free-photo/happy-woman-posing_23-2148888888.jpg?w=740",
          job: "Psychology Student",
        },
        content: "Very informative but could use more real-life examples.",
      },
    ],
  },
  {
    id: "2",
    image:
      "https://img.freepik.com/free-photo/group-young-people-working-together_23-2148876693.jpg?w=996",
    title: "Business Management Basics",
    rating: 4.2,
    level: "Expert",
    duration: "11h 20m",
    lessons: 12,
    quizzes: 145,
    certifications: "Yes",
    graduation: "25K",
    price: 30,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Offline",
    instructor: {
      name: "Prof. Robert Smith",
      image:
        "https://img.freepik.com/free-photo/serious-businessman_23-2148876674.jpg?w=740",
      rating: 4.8,
      reviews: 1100,
      courses: 10,
      description:
        "A seasoned business strategist with experience in global markets.",
      job: "Business Consultant",
      students: 600,
    },
    students: 550,
    status: "Offline",
    description: "Learn the key principles of managing businesses effectively.",
    curriculums: [
      { title: "Introduction", content: "Understanding business structures." },
      {
        title: "Market Analysis",
        content: "How to analyze and interpret market trends.",
      },
    ],
    reviews: [
      {
        date: "Jan 20, 2024",
        rating: 5,
        user: {
          name: "Robert T.",
          photo:
            "https://img.freepik.com/free-photo/smiling-man-with-glasses_23-2148899999.jpg?w=740",
          job: "Neuroscientist",
        },
        content: "Fantastic course! Well structured and engaging.",
      },
      {
        date: "Jan 25, 2024",
        rating: 4.5,
        user: {
          name: "Sophia L.",
          photo:
            "https://img.freepik.com/free-photo/cheerful-woman-smiling_23-2148887777.jpg?w=740",
          job: "Counselor",
        },
        content: "Loved the topics covered, would recommend!",
      },
    ],
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/developer-working-laptop_23-2147892701.jpg?w=996",
    title: "Web Development Bootcamp",
    rating: 4.7,
    level: "Expert",
    duration: "11h 20m",
    lessons: 12,
    quizzes: 145,
    certifications: "Yes",
    graduation: "25K",
    price: 40,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Live",
    instructor: {
      name: "Jane Doe",
      image:
        "https://img.freepik.com/free-photo/young-woman-smiling_23-2148886376.jpg?w=740",
      rating: 4.9,
      reviews: 1300,
      courses: 15,
      description:
        "Full-stack web developer and instructor with 12+ years of experience.",
      job: "Software Engineer",
      students: 800,
    },
    students: 750,
    status: "Live",
    description:
      "A complete bootcamp covering HTML, CSS, JavaScript, and React.js.",
    curriculums: [
      {
        title: "Introduction to HTML & CSS",
        content: "Basics of web structure and styling.",
      },
      {
        title: "JavaScript Fundamentals",
        content: "Learn JavaScript from the ground up.",
      },
    ],
    reviews: [
      {
        date: "Mar 5, 2024",
        rating: 5,
        user: {
          name: "Kevin L.",
          photo:
            "https://img.freepik.com/free-photo/young-man-smiling_23-2148886379.jpg?w=740",
          job: "Web Developer",
        },
        content: "The best course I've taken so far!",
      },
    ],
  },
  {
    id: "4",
    image:
      "https://img.freepik.com/free-photo/creative-design-process_23-2147654321.jpg?w=996",
    title: "Graphic Design Masterclass",
    rating: 4.8,
    level: "Intermediate",
    duration: "9h 30m",
    lessons: 10,
    quizzes: 120,
    certifications: "Yes",
    graduation: "18K",
    price: 35,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Recorded",
    instructor: {
      name: "Sarah Johnson",
      image:
        "https://img.freepik.com/free-photo/woman-smiling-portrait_23-2148312331.jpg?w=740",
      rating: 4.7,
      reviews: 1250,
      courses: 12,
      description:
        "A professional graphic designer with over 8 years of experience.",
      job: "Creative Director",
      students: 900,
    },
    students: 650,
    status: "Live",
    description:
      "Master Photoshop, Illustrator, and InDesign with hands-on projects.",
    curriculums: [
      {
        title: "Introduction to Graphic Design",
        content: "Basic principles and tools overview.",
      },
      {
        title: "Typography & Color Theory",
        content: "Understanding fonts and color selection.",
      },
    ],
    reviews: [
      {
        date: "Feb 5, 2024",
        rating: 5,
        user: {
          name: "Emily R.",
          photo:
            "https://img.freepik.com/free-photo/portrait-smiling-woman_23-2148311111.jpg?w=740",
          job: "Freelance Designer",
        },
        content: "Very detailed and practical!",
      },
    ],
  },
  {
    id: "5",
    image:
      "https://img.freepik.com/free-photo/coding-workplace-laptop_23-2147698321.jpg?w=996",
    title: "Python for Beginners",
    rating: 4.6,
    level: "Beginner",
    duration: "8h 15m",
    lessons: 15,
    quizzes: 100,
    certifications: "Yes",
    graduation: "20K",
    price: 20,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Live",
    instructor: {
      name: "Michael Brown",
      image:
        "https://img.freepik.com/free-photo/smiling-man-office_23-2147654321.jpg?w=740",
      rating: 4.9,
      reviews: 1750,
      courses: 5,
      description: "Software engineer specializing in Python and AI.",
      job: "Software Engineer",
      students: 1200,
    },
    students: 850,
    status: "Live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    curriculums: [
      {
        title: "Python Basics",
        content: "Syntax, variables, and data types.",
      },
      {
        title: "Control Flow & Functions",
        content: "Loops, conditions, and function creation.",
      },
    ],
    reviews: [
      {
        date: "Feb 10, 2024",
        rating: 4.8,
        user: {
          name: "Daniel M.",
          photo:
            "https://img.freepik.com/free-photo/smiling-young-man_23-2148324321.jpg?w=740",
          job: "Data Analyst",
        },
        content: "A great introduction to Python!",
      },
    ],
  },
  {
    id: "6",
    image:
      "https://img.freepik.com/free-photo/money-financial-growth_23-2147656789.jpg?w=996",
    title: "Personal Finance & Investing",
    rating: 4.9,
    level: "Advanced",
    duration: "12h 40m",
    lessons: 18,
    quizzes: 150,
    certifications: "Yes",
    graduation: "30K",
    price: 50,
    videoUrl: "https://www.youtube.com/watch?v=7mz06SXDoqA",
    type: "Recorded",
    instructor: {
      name: "Robert Williams",
      image:
        "https://img.freepik.com/free-photo/professional-businessman_23-2147656789.jpg?w=740",
      rating: 5,
      reviews: 1600,
      courses: 7,
      description:
        "Finance expert with over 15 years of experience in wealth management.",
      job: "Financial Advisor",
      students: 1400,
    },
    students: 1100,
    status: "Recorded",
    description:
      "A step-by-step guide to managing money and making smart investments.",
    curriculums: [
      {
        title: "Budgeting & Saving",
        content: "Understanding expenses and building savings.",
      },
      {
        title: "Stock Market Basics",
        content: "How to invest wisely in stocks and ETFs.",
      },
    ],
    reviews: [
      {
        date: "Feb 15, 2024",
        rating: 5,
        user: {
          name: "Linda C.",
          photo:
            "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2147656789.jpg?w=740",
          job: "Entrepreneur",
        },
        content: "Very insightful! Helped me improve my finances.",
      },
    ],
  },
];

// Course Video List
export const courseVideos: CourseVideo[] = [
  {
    title: "Introduction",
    progress: 10,
    url: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
    locked: false,
    duration: "1:00",
  },
  {
    title: "Medical Terminology",
    progress: 30,
    url: "https://www.youtube.com/watch?v=jOUb09iiO20&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
    locked: false,
    duration: "4:00",
  },
  {
    title: "Medical Neuroscience",
    progress: 50,
    url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
    locked: true,
    duration: "2:35",
  },
  {
    title: "Trauma on EMT",
    progress: 75,
    url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
    locked: true,
    duration: "7:00",
  },
  {
    title: "Biomedical Visualization",
    progress: 100,
    url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
    locked: true,
    duration: "11:00",
  },
];
