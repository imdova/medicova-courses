import { User } from "next-auth";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const token = req.nextauth.token;
  const path = req.nextUrl.pathname;

  // Redirect to login page if there is no accessible token
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  const userType = token.type as User["type"];
  if (path == "/user-redirect") {
    if (userType === "instructor") {
      return NextResponse.redirect(new URL(`/instructor`, req.url));
    } else if (userType === "student") {
      return NextResponse.redirect(new URL(`/student`, req.url));
    } else if (userType === "admin") {
      return NextResponse.redirect(new URL(`/admin`, req.url));
    }
  }

  const haveAccess = doesRoleHaveAccessToURL(userType, path);
  if (!haveAccess) {
    // Redirect to login page if user has no access to that particular page
    return NextResponse.rewrite(new URL("/403", req.url));
  }
  // Allow
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/student/:path*",
    "/instructor/:path*",
    "/admin/:path*",
    "/user-redirect",
  ],
};

const roleAccessMap: Record<User["type"], string[]> = {
  student: ["/student/*"],
  instructor: ["/instructor/*"],
  admin: ["/admin/*"],
};

function doesRoleHaveAccessToURL(userType: User["type"], url: string): boolean {
  const accessibleRoutes = roleAccessMap[userType] || [];
  return accessibleRoutes.some((route) => {
    // Create a regex from the route by replacing dynamic segments
    const regexPattern = route
      .replace(/\[.*?\]/g, "[^/]+")
      .replace(/\*\*?/g, ".*")
      .replace("/", "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}
