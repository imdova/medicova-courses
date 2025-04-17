import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUser } from "./utils";

export const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    authorize: authenticateUser,
  }),
];
