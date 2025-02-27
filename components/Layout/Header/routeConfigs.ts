import { commonLinks, roleBasedLinks } from "@/constants/header";
import { RoleState } from "@/types/next-auth";

type HeaderType = "minimal" | "transparent" | "full";
type LinksType = "default" | "userType";

interface RouteConfig {
  pattern: string;
  headerType: HeaderType;
  linksType?: LinksType;
}

export const routeConfigs: RouteConfig[] = [
  // default
  { pattern: "/", headerType: "minimal", linksType: "default" },
  { pattern: "/admin/*", headerType: "full", linksType: "default" },
  { pattern: "/courses/*", headerType: "minimal", linksType: "default" },
  { pattern: "/blogs/*", headerType: "minimal", linksType: "default" },
  { pattern: "/cart/*", headerType: "minimal", linksType: "default" },
  { pattern: "/tutors/*", headerType: "minimal", linksType: "default" },
  { pattern: "/offlinevideo/*", headerType: "minimal", linksType: "default" },
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

export function getNavLinks(userType?: RoleState, pathname?: string) {
  if (pathname) {
    const type = matchRoute(pathname)?.linksType;
    if (type === "userType" && userType) {
      return roleBasedLinks[userType];
    }
  }
  return commonLinks.home;
}
