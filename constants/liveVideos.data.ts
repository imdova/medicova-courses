import { LiveVidoesType } from "@/types/courses";

// live vidos data
export const LiveVideosData: LiveVidoesType[] = [
  {
    id: "1",
    title: "Course Name 1",
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
    id: "2",
    title: "Course Name 2",
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
    id: "3",
    title: "Course Name 3",
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
    id: "4",
    title: "Course Name 4",
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
    id: "5",
    title: "Course Name 5",
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
