import { Contact, FileItem, LinkItem, Message } from "@/types/chat";

// Dummy contacts
export const contacts: Contact[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    avatar:
      "https://img.freepik.com/free-photo/young-woman-smiling-park_144627-30460.jpg",
    lastMessage: "See you soon!",
    isOnline: true,
    lastSeen: "10:30 AM",
    unreadMessages: 3, // Unread messages count
  },
  {
    id: 2,
    name: "Sara Johnson",
    avatar:
      "https://img.freepik.com/free-photo/portrait-happy-young-man_144627-25291.jpg",
    lastMessage: "Hey, how's it going?",
    isOnline: false,
    lastSeen: "Yesterday",
    unreadMessages: 1,
  },
  {
    id: 3,
    name: "David Kim",
    avatar:
      "https://img.freepik.com/free-photo/young-smiling-woman-street_144627-14080.jpg",
    lastMessage: "Let's catch up later!",
    isOnline: true,
    lastSeen: "Just now",
    unreadMessages: 0, // No unread messages
  },
  {
    id: 4,
    name: "Maria Gonzalez",
    avatar:
      "https://img.freepik.com/free-photo/smiling-handsome-man-posing-street_144627-15214.jpg",
    lastMessage: "Sounds good!",
    isOnline: false,
    lastSeen: "2 hours ago",
    unreadMessages: 5,
  },
  {
    id: 5,
    name: "James Brown",
    avatar:
      "https://img.freepik.com/free-photo/confident-young-man-smiling_144627-16361.jpg",
    lastMessage: "I'll call you later!",
    isOnline: true,
    lastSeen: "5 minutes ago",
    unreadMessages: 0,
  },
  {
    id: 6,
    name: "Olivia Martinez",
    avatar:
      "https://img.freepik.com/free-photo/portrait-beautiful-young-woman_144627-14254.jpg",
    lastMessage: "Can't talk now, busy!",
    isOnline: false,
    lastSeen: "30 minutes ago",
    unreadMessages: 2,
  },
  {
    id: 7,
    name: "William Lee",
    avatar:
      "https://img.freepik.com/free-photo/happy-man-standing-street_144627-21456.jpg",
    lastMessage: "Did you see the news?",
    isOnline: true,
    lastSeen: "Online",
    unreadMessages: 7,
  },
  {
    id: 8,
    name: "Emily Davis",
    avatar:
      "https://img.freepik.com/free-photo/casual-young-woman-smiling_144627-18640.jpg",
    lastMessage: "Let's plan the trip!",
    isOnline: false,
    lastSeen: "3 days ago",
    unreadMessages: 0,
  },
];

// Dummy chat history for each contact
export const initialChats: Record<number, Message[]> = {
  1: [
    { sender: "Ahmed Ali", text: "Hey, how are you?", time: "10:00 AM" },
    {
      sender: "You",
      text: "I'm good! How about you?",
      time: "10:05 AM",
      isMe: true,
    },
  ],
  2: [
    {
      sender: "Tamer Hassan",
      text: "Did you check the document?",
      time: "9:30 AM",
    },
    { sender: "You", text: "Yes! Looks good.", time: "9:45 AM", isMe: true },
  ],
  3: [
    { sender: "Amir Hosni", text: "Let's catch up later!", time: "11:00 AM" },
  ],
  4: [
    { sender: "Yasser Mohamed", text: "Meeting at 5 PM?", time: "8:00 AM" },
    { sender: "You", text: "Sure, see you then!", time: "8:15 AM", isMe: true },
  ],
};

export const files: FileItem[] = [
  {
    id: "1",
    name: "Project Proposal.docx",
    type: "DOC",
    size: "1.5MB",
    date: "2 March 2021, 13:45 PM",
  },
  {
    id: "2",
    name: "Presentation Slides.pptx",
    type: "PPT",
    size: "4.2MB",
    date: "15 April 2022, 09:30 AM",
  },
  {
    id: "3",
    name: "Financial Report.xlsx",
    type: "XLS",
    size: "2.8MB",
    date: "7 June 2023, 17:10 PM",
  },
  {
    id: "4",
    name: "Company Logo.png",
    type: "IMG",
    size: "3.1MB",
    date: "20 August 2021, 14:05 PM",
  },
  {
    id: "5",
    name: "Contract Agreement.pdf",
    type: "PDF",
    size: "1.2MB",
    date: "3 November 2022, 11:50 AM",
  },
  {
    id: "6",
    name: "Product Demo.mp4",
    type: "ZIP",
    size: "15.6MB",
    date: "12 January 2024, 18:20 PM",
  },
];
export const links: LinkItem[] = [
  {
    id: "1",
    name: "Google",
    link: "https://www.google.com",
    time: "13:25 PM",
    date: "2 March 2021",
  },
  {
    id: "2",
    name: "GitHub",
    link: "https://github.com",
    time: "09:40 AM",
    date: "15 April 2022",
  },
  {
    id: "3",
    name: "Stack Overflow",
    link: "https://stackoverflow.com",
    time: "16:10 PM",
    date: "7 June 2023",
  },
  {
    id: "4",
    name: "YouTube",
    link: "https://youtube.com",
    time: "18:05 PM",
    date: "20 August 2021",
  },
  {
    id: "5",
    name: "Twitter",
    link: "https://twitter.com",
    time: "11:50 AM",
    date: "3 November 2022",
  },
];
