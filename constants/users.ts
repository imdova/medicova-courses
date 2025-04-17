import { User } from "next-auth";

export const users: User[] = [
  {
    id: "adm_001",
    email: "admin@example.com",
    firstName: "Charlie",
    lastName: "Admin",
    userName: "charlie_admin",
    type: "admin",
    isVerified: true,
    photo:
      "https://media.istockphoto.com/id/1464539429/photo/thoughtful-business-man-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=yLbK-rGNUkL0sPX4jw7Q_XE_vDtfj0X3nirixUlGtr4=",
    phone: "7778889999",
  },
  {
    id: "ins_001",
    email: "instructor@example.com",
    firstName: "Bob",
    lastName: "Smith",
    userName: "bob_instructor",
    type: "instructor",
    isVerified: true,
    photo:
      "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
    phone: "4445556666",
  },
  {
    id: "stu_001",
    email: "student@example.com",
    firstName: "Alice",
    lastName: "Doe",
    userName: "alice_student",
    type: "student",
    isVerified: true,
    photo:
      "https://img.freepik.com/free-photo/smiling-woman-with-afro-posing-pink-sweater_273609-31988.jpg",
    phone: "1112223333",
  },
];
