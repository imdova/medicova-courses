import { CourseContentProps } from "@/types/courses";

// Single page Video Data
export const courseData: CourseContentProps[] = [
  {
    id: "1",
    title: "Introduction to Programming",
    type: "offline",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
  {
    id: "2",
    title: "Web Development Fundamentals",
    type: "offline",
    image:
      "https://img.freepik.com/free-photo/businesswoman-holding-blank-card_23-2148826512.jpg?t=st=1740661420~exp=1740665020~hmac=4fafe356dee367f7af339de5ef190cd2969e6a41dabedc621c50c15d177f238a&w=1380",
    rating: 3,
    lessons: 25,
    duration: "11h 20m",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
  {
    id: "3",
    title: "Data Science Essentials",
    type: "offline",
    image:
      "https://img.freepik.com/free-photo/beautiful-woman-working-car-service_23-2148826520.jpg?t=st=1740661447~exp=1740665047~hmac=1514b8f4657a5c14f38b4cb3124178b505bc7df3bfe35a571e5fc5cfe1ce9922&w=1380",
    rating: 2,
    lessons: 500,
    duration: "11h 20m",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
  {
    id: "4",
    title: "Cybersecurity Basics",
    type: "offline",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
  {
    id: "5",
    title: "Cloud Computing Essentials",
    type: "offline",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg?t=st=1740661475~exp=1740665075~hmac=a051b50b4f8b5070a142338dd96b6daa0fc52ce674035781e39840c7e04876d1&w=1380",
    rating: 4,
    lessons: 300,
    duration: "11h 20m",
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
  {
    id: "6",
    title: "Course Name 1",
    type: "live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    tabs: [
      {
        title: "Chapter 1: Introduction",
        total: 10,
        completed: 1,
        items: [
          {
            title: "Introduction",
            progress: 10,
            url: "https://www.youtube.com/watch?v=XDuWyYxksXU",
            locked: false,
            duration: "1:00",
          },
          {
            title: "Medical Terminology",
            progress: 30,
            url: "https://www.youtube.com/watch?v=jOUb09iiO20",
            locked: false,
            duration: "4:00",
          },
          {
            title: "Medical Neuroscience",
            progress: 50,
            url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc",
            locked: true,
            duration: "2:35",
          },
        ],
      },
      {
        title: "Chapter 2: Medical Neuroscience",
        items: [
          {
            title: "Medical Terminology",
            progress: 30,
            url: "https://www.youtube.com/watch?v=M0nl1waI310",
            locked: false,
            duration: "4:00",
          },
          {
            title: "Medical Neuroscience",
            progress: 50,
            url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc",
            locked: true,
            duration: "2:35",
          },
        ],
        total: 25,
        completed: 1,
      },
    ],
    instructor: {
      name: "Dr. Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg",
      rating: 5,
      reviews: 1200,
      courses: 12,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      job: "Teacher",
      students: 200,
    },
    views: [
      {
        name: "zanaty",
        image:
          "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      },
      {
        name: "Emma",
        image:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
      },
    ],
    messages: [
      {
        text: "Hey, how's your day going?",
        sender: "other",
        avatar:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
        name: "Emma",
        timestamp: "10:30 AM",
      },
      {
        text: "Pretty good! Just finished some work. You?",
        sender: "user",
        avatar:
          "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
        name: "User Name",
        timestamp: "10:32 AM",
      },
    ],
  },
  {
    id: "7",
    title: "Course Name 2",
    type: "live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    tabs: [
      {
        title: "Chapter 1: Basics",
        total: 8,
        completed: 2,
        items: [
          {
            title: "Introduction",
            progress: 20,
            url: "https://www.youtube.com/watch?v=abc123",
            locked: false,
            duration: "1:30",
          },
          {
            title: "Basic Concepts",
            progress: 40,
            url: "https://www.youtube.com/watch?v=def456",
            locked: false,
            duration: "3:00",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. Jane Doe",
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-woman_23-2148890856.jpg",
      rating: 4.5,
      reviews: 900,
      courses: 10,
      description:
        "Dr. Jane Doe is an experienced educator with a passion for teaching.",
      job: "Professor",
      students: 150,
    },
    views: [
      {
        name: "John",
        image:
          "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      },
    ],
    messages: [
      {
        text: "Hello everyone!",
        sender: "other",
        avatar:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
        name: "Jane",
        timestamp: "11:00 AM",
      },
    ],
  },
  {
    id: "8",
    title: "Course Name 3",
    type: "live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    tabs: [
      {
        title: "Chapter 1: Advanced Topics",
        total: 12,
        completed: 3,
        items: [
          {
            title: "Advanced Concepts",
            progress: 25,
            url: "https://www.youtube.com/watch?v=ghi789",
            locked: false,
            duration: "2:00",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. John Smith",
      image: "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      rating: 4.7,
      reviews: 1100,
      courses: 15,
      description:
        "Dr. John Smith specializes in advanced topics and has a wealth of experience.",
      job: "Researcher",
      students: 300,
    },
    views: [
      {
        name: "Alice",
        image:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
      },
    ],
    messages: [
      {
        text: "This is an interesting topic!",
        sender: "other",
        avatar:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
        name: "Alice",
        timestamp: "11:15 AM",
      },
    ],
  },
  {
    id: "9",
    title: "Course Name 4",
    type: "live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    tabs: [
      {
        title: "Chapter 1: Fundamentals",
        total: 15,
        completed: 5,
        items: [
          {
            title: "Introduction",
            progress: 33,
            url: "https://www.youtube.com/watch?v=jkl012",
            locked: false,
            duration: "1:45",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. Emily Brown",
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-woman_23-2148890856.jpg",
      rating: 4.8,
      reviews: 1300,
      courses: 18,
      description:
        "Dr. Emily Brown is known for her engaging teaching style and deep knowledge.",
      job: "Educator",
      students: 250,
    },
    views: [
      {
        name: "Bob",
        image:
          "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      },
    ],
    messages: [
      {
        text: "Great lecture today!",
        sender: "other",
        avatar:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
        name: "Emily",
        timestamp: "11:30 AM",
      },
    ],
  },
  {
    id: "10",
    title: "Course Name 5",
    type: "live",
    description:
      "Learn Python from scratch, including data structures and automation.",
    students: 850,
    price: 20,
    date: "April 5,2025",
    category: "Cognitive Fitness",
    supCategory: "sup Cognitive",
    revenue: "$1,200.00",
    status: "Published",
    videoPreveiw: "https://www.youtube.com/watch?v=7mz06SXDoqA",
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
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-works-office-speak-video-call-laptop_496169-2819.jpg?t=st=1740658883~exp=1740662483~hmac=e6baa216942883145d488ea23fe7d2638fc2fec6af4f284035a52b6251503fa9&w=1380",
    rating: 5,
    lessons: 6,
    duration: "11h 20m",
    tabs: [
      {
        title: "Chapter 1: Practical Applications",
        total: 20,
        completed: 10,
        items: [
          {
            title: "Introduction",
            progress: 50,
            url: "https://www.youtube.com/watch?v=mno345",
            locked: false,
            duration: "2:15",
          },
        ],
      },
    ],
    instructor: {
      name: "Dr. Michael Green",
      image: "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      rating: 4.9,
      reviews: 1400,
      courses: 20,
      description:
        "Dr. Michael Green focuses on practical applications and real-world examples.",
      job: "Consultant",
      students: 400,
    },
    views: [
      {
        name: "Charlie",
        image:
          "https://img.freepik.com/free-photo/smiling-man_23-2148890856.jpg",
      },
    ],
    messages: [
      {
        text: "Looking forward to the next session!",
        sender: "other",
        avatar:
          "https://img.freepik.com/free-photo/happy-woman_23-2148890856.jpg",
        name: "Charlie",
        timestamp: "11:45 AM",
      },
    ],
  },
];
