import { CourseContentProps, CourseMaterial, CourseVideo } from "@/types";

export const Courses = [
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/looking-camera-group-people-business-conference-modern-classroom-daytime_146671-16272.jpg?t=st=1739104096~exp=1739107696~hmac=41a76eca32211ace62c1d62a90303d2b79b26b092c7a70a234a11f62571ab6eb&w=996",
    title: "Course Name here",
    rating: 3,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lessons: 10,
    time: "2 hr 30 mins",
    students: 300,
    status: "Recorded",
    price: 20,
    type: "Live",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
  },
  {
    id: "2",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-with-headphones-studio_23-2149386582.jpg?t=st=1739104131~exp=1739107731~hmac=74ef27066855e737fb86d6f780ee083fcbeb8a2e71eeaee261342682acf322e1&w=996",
    title: "Course Name here",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lessons: 13,
    time: "2 hr 30 mins",
    students: 400,
    status: "Online",
    price: 23,
    type: "Live",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    title: "Course Name here",
    rating: 1,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lessons: 10,
    time: "2 hr 30 mins",
    students: 300,
    status: "Recorded",
    price: 20,
    type: "Offline",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
  },
  {
    id: "4",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Course Name here",
    rating: 2,
    instructor: {
      id: "1",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lessons: 50,
    time: "3 hr 30 mins",
    students: 600,
    status: "Recorded",
    price: 80,
    type: "Offline",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
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
