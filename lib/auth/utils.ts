import { users } from "@/constants/users";

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
