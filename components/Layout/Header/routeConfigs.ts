import { roleBasedLinks } from "@/constants/header";
import { User } from "next-auth";

type HeaderType =
  | "none"
  | "minimal"
  | "full"
  | "centered"
  | "transparent"
  | "dark";
type LinksType = "default" | "userType";

interface RouteConfig {
  pattern: string;
  headerType: HeaderType;
  linksType?: LinksType;
}

export const routeConfigs: RouteConfig[] = [
  // default
  { pattern: "/", headerType: "transparent", linksType: "default" },
  { pattern: "/courses", headerType: "full", linksType: "userType" },
  { pattern: "/blogs/*", headerType: "full", linksType: "default" },
  { pattern: "/search", headerType: "transparent", linksType: "userType" },

  { pattern: "/chat", headerType: "full", linksType: "userType" },
  { pattern: "/notifications", headerType: "full", linksType: "userType" },

  // auth
  { pattern: "/auth/*", headerType: "minimal", linksType: "userType" },
  //instructor
  { pattern: "/in/*", headerType: "full", linksType: "userType" },
  { pattern: "/instructor/*", headerType: "full", linksType: "userType" },
  //student
  { pattern: "/st/*", headerType: "full", linksType: "userType" },
  { pattern: "/student/*", headerType: "full", linksType: "userType" },
  { pattern: "/cart", headerType: "full", linksType: "userType" },
  //admin
  { pattern: "/admin/*", headerType: "full", linksType: "userType" },
];

// DynamicHeader.tsx
export const matchRoute = (pathname: string) => {
  // First, prioritize exact matches (including dynamic segments)
  const exactMatch = routeConfigs.find((route) => {
    // Handle dynamic segments (e.g., "/user/[id]")
    const regexPattern = route.pattern
      .replace(/\[.*?\]/g, "[^/]+")
      .replace(/\//g, "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(pathname);
  });

  if (exactMatch) return exactMatch;

  // If no exact match, check for wildcard patterns
  const wildcardMatch = routeConfigs.find((route) => {
    if (route.pattern.includes("*")) {
      // Convert wildcard pattern into a base path regex
      const wildcardPattern = route.pattern.replace(/\*/g, ".*");
      const regex = new RegExp(`^${wildcardPattern}`);
      return regex.test(pathname);
    }
    return false;
  });

  return wildcardMatch;
};

export function getNavLinks(user?: User, pathname?: string) {
  const userType = user?.type;
  if (pathname) {
    const type = matchRoute(pathname)?.linksType;
    if (type === "userType" && userType) {
      return roleBasedLinks[userType];
    }
  }
  return roleBasedLinks.default;
}
