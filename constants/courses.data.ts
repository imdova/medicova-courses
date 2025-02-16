import {
  CourseContentProps,
  CourseMaterial,
  CourseType,
  CourseVideo,
} from "@/types/courses";

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
    type: "Live",
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
    status: "Live",
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

// Single page Video Data
export const courseData: Record<string, CourseContentProps> = {
  "1": {
    title: "Course Name 1",
    content: courseVideos,
    instructor: {
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      rating: 5,
      reviews: 1200,
      courses: 12,
      description:
        "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
      job: "Teacher",
      students: 400,
    },
    qustions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
  },
  "2": {
    title: "Course Name 2",
    content: courseVideos,
    instructor: {
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      rating: 5,
      reviews: 1200,
      courses: 12,
      description:
        "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
      job: "Teacher",
      students: 200,
    },
    qustions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
  },
};

// Courses material files
export const courseMaterials: CourseMaterial[] = [
  {
    title: "Introduction to Next.js",
    fileUrl: "/files/intro-to-nextjs.pdf",
    fileType: "pdf",
  },
  {
    title: "TypeScript Basics",
    fileUrl: "/files/typescript-basics.docx",
    fileType: "docx",
  },
  {
    title: "Tailwind CSS Guide",
    fileUrl: "/files/tailwind-guide.pdf",
    fileType: "pdf",
  },
];
