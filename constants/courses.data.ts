import { CourseVideo } from "@/types";

export const Courses = [
  {
    id: 1,
    courseImg:
      "https://img.freepik.com/free-photo/looking-camera-group-people-business-conference-modern-classroom-daytime_146671-16272.jpg?t=st=1739104096~exp=1739107696~hmac=41a76eca32211ace62c1d62a90303d2b79b26b092c7a70a234a11f62571ab6eb&w=996",
    courseName: "Course Name here",
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
  },
  {
    id: 2,
    courseImg:
      "https://img.freepik.com/free-photo/medium-shot-woman-with-headphones-studio_23-2149386582.jpg?t=st=1739104131~exp=1739107731~hmac=74ef27066855e737fb86d6f780ee083fcbeb8a2e71eeaee261342682acf322e1&w=996",
    courseName: "Course Name here",
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
  },
  {
    id: 3,
    courseImg:
      "https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    courseName: "Course Name here",
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
  },
  {
    id: 4,
    courseImg:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    courseName: "Course Name here",
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
  },
];

export const Categories = [
  { id: 1, title: "Category Name 1" },
  { id: 2, title: "Category Name 2" },
  { id: 3, title: "Category Name 3" },
  { id: 4, title: "Category Name 4" },
  { id: 5, title: "Category Name 5" },
  { id: 6, title: "Category Name 6" },
];
export const Language = [
  { id: 1, title: "All Language" },
  { id: 2, title: "Arabic" },
  { id: 3, title: "English" },
  { id: 4, title: "Spanish" },
];
export const Price = [
  { id: 1, title: "All Price" },
  { id: 2, title: "Free" },
  { id: 3, title: "Paid" },
];
export const TipVideo = [
  { id: 1, title: "Recorded videos" },
  { id: 2, title: "live videos" },
  { id: 3, title: "offline videos" },
];
export const SkillLevel = [
  { id: 1, title: "All Skills" },
  { id: 2, title: "Beginner" },
  { id: 3, title: "Intermediate" },
  { id: 4, title: "High " },
];
export const Instructors = [
  { id: 1, title: "David Millar" },
  { id: 2, title: "Wade Warren " },
  { id: 3, title: "Jenny Wilson" },
  { id: 4, title: "Jacob Jones " },
];
export const Ratings = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
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
