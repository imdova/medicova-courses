export type RoleState = "student" | "instructor" | "admin";

declare module "next-auth" {
  interface User {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
    type: RoleState;
    isVerified: boolean;
    photo: string | null;
    phone: string | null;
  }

  interface Session {
    user: User;
    redirectUrl: string | null;
  }
}
