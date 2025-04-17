/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export const callbacks = {
  jwt: async ({
    token,
    user,
    trigger,
    session,
  }: {
    token: JWT;
    user: any;
    trigger?: "update" | "signIn" | "signUp" | undefined;
    session?: any;
  }) => {
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.firstName = user.firstName;
      token.lastName = user.lastName;
      token.photo = user.photo || user.image;
      token.userName = user.userName;
      token.phone = user.phone;
      token.companyId = user.companyId;
      token.companyName = user.companyName;
      token.companyUserName = user.companyUserName;
      token.companyPhoto = user.companyPhoto;
      token.companyEmail = user.companyEmail;
      token.permissions = user.permissions;
      token.type = user.type;
    }
    if (trigger === "update") {
      if (session?.companyId) token.companyId = session.companyId;
      if (session?.companyName) token.companyName = session.companyName;
      if (session?.companyPhoto) token.companyPhoto = session.companyPhoto;
      if (session?.companyUserName)
        token.companyUserName = session.companyUserName;
      if (session?.companyEmail) token.companyEmail = session.companyEmail;
      if (session?.email) token.email = session.email;
      if (session?.firstName) token.firstName = session.firstName;
      if (session?.lastName) token.lastName = session.lastName;
      if (session?.userName) token.userName = session.userName;
      if (session?.photo) token.photo = session.photo;
      if (session?.phone) token.phone = session.phone;
    }
    return token;
  },
  async session({ session, token }: { session: Session; token: JWT }) {
    if (session.user) {
      session.user.id = token.id as string | null;
      session.user.email = token.email as string | null;
      session.user.firstName = token.firstName as string | null;
      session.user.lastName = token.lastName as string | null;
      session.user.userName = token.userName as string | null;
      session.user.photo = token.photo as string | null;
      session.user.phone = token.phone as string | null;
      session.user.type = token.type as User["type"];
    }
    return session;
  },
};
