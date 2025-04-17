import { User } from "next-auth";
const users: User[] = [
  {
    id: "adm_001",
    email: "admin@example.com",
    firstName: "Charlie",
    lastName: "Admin",
    userName: "charlie_admin",
    type: "admin",
    isVerified: true,
    photo: "https://example.com/avatar/admin.png",
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
    photo: "https://example.com/avatar/instructor.png",
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
    photo: "https://example.com/avatar/student.png",
    phone: "1112223333",
  },
];

export async function authenticateUser(
  credentials: Record<"email" | "password", string> | undefined
) {
  if (!credentials?.email || !credentials?.password) return null;
  try {
    return users.find((user) => user.email === credentials.email) || null;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}
