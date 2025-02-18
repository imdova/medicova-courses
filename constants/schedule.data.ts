import { Event } from "@/types/courses";

// Define colors for each tag
export const tagColors: Record<string, string> = {
  "First lesson": "bg-blue-300",
  "Single lesson": "bg-green-300",
  "Weekly lesson": "bg-yellow-300",
  "Time off": "bg-red-300",
  "Google Calendar": "bg-purple-300",
  "Confirmed by student": "bg-pink-300",
  "No Confirmed by student": "bg-blue-300",
};

// Sample events data with tags
export const eventsData: Event[] = [
  {
    id: 1,
    date: "2024-01-02",
    title: "Course Name A",
    time: "10:30 AM",
    color: "blue-500",
    tags: ["First lesson", "Google Calendar"],
  },
  {
    id: 2,
    date: "2024-01-05",
    title: "Course Name B",
    time: "2:00 PM",
    color: "green-500",
    tags: ["Single lesson", "Confirmed by student"],
  },
  {
    id: 3,
    date: "2024-01-09",
    title: "Course Name C",
    time: "9:00 AM",
    color: "red-500",
    tags: ["Weekly lesson", "Time off"],
  },
  {
    id: 4,
    date: "2024-01-15",
    title: "Course Name D",
    time: "3:30 PM",
    color: "yellow-500",
    tags: ["Single lesson", "Google Calendar"],
  },
  {
    id: 5,
    date: "2025-03-21",
    title: "Course Name E",
    time: "1:00 PM",
    color: "purple-500",
    tags: ["Confirmed by student", "Weekly lesson"],
  },
];

export const formFields = [
  {
    name: "email",
    label: "Email Address",
    type: "email", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Email Address" },
    required: true,
  },
  {
    name: "name",
    label: "Name",
    type: "text", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Name" },
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "phone", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Phone Number" },
    required: true,
  },
  {
    name: "speciality",
    label: "Specialty",
    type: "select", // Use only text, number, email, password, date, select, checkbox
    options: [
      { label: "doctors", value: "doctors" },
      { label: "dentist", value: "dentists" },
      { label: "nurses", value: "nurses" },
    ],
    inputProps: { placeholder: "Select Your specialty" },
    required: true,
  },
  {
    name: "isApplied",
    label: "did you applied before",
    type: "checkbox", // Use only text, number, email, password, date, select, checkbox
  },
  {
    name: "program",
    label: "Enter Your Specialty",
    type: "select", // Use only text, number, email, password, date, select, checkbox
    options: [
      { label: "doctors", value: "doctors" },
      { label: "dentist", value: "dentists" },
      { label: "nurses", value: "nurses" },
    ],
    inputProps: { placeholder: "Your specialty" },
    required: true,
  },
];
