/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
export type RoleState = "seeker" | "admin" | "employer";

declare module "next-auth" {
  type User = {
    id: string;
    name: string;
    email: string;
    permissions?: Permission[];
  };

  interface Session {
    user: User;
    redirectUrl: string | null;
  }
}
