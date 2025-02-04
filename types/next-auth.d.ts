/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
export type RoleState = "seeker" | "admin" | "employer";

declare module "next-auth" {
  interface User {
    id: string | null;
    email: string | null;
    name: string | null;
  }

  interface Session {
    user: User;
    redirectUrl: string | null;
  }
}
