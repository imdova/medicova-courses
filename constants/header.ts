import { RoleBasedLinks } from "@/types";
import { Home, Search, Text } from "lucide-react";

export const roleBasedLinks: RoleBasedLinks = {
  instructor: [
    {
      id: 1,
      label: "Dashboard",
      path: "/instructor/dashboard",
    },
    {
      id: 2,
      label: "All Courses",
      path: "/instructor/courses",
      pattern: "/instructor/courses/*",
    },
    {
      id: 3,
      label: "Add New Course",
      path: "/instructor/add-course",
    },
  ],
  student: [
    {
      id: 0,
      label: "Dashboard",
      path: "/student/dashboard",
    },
    {
      id: 1,
      label: "Explore Courses",
      path: "/courses",
      pattern: "/courses/*",
    },
    {
      id: 2,
      label: "My Courses",
      path: "/student/my-courses",
    },
  ],
  admin: [
    {
      id: 1,
      label: "Admin Dashboard",
      path: "/admin",
    },
    {
      id: 1,
      label: "User Management",
      path: "/admin/users",
    },
    {
      id: 1,
      label: "Settings",
      path: "/admin/settings",
    },
  ],
  default: [
    {
      id: 1,
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      id: 2,
      label: "Explore Courses",
      icon: Search,
      path: "/courses",
      pattern: "/courses/*",
    },
    {
      id: 3,
      label: "Blogs",
      icon: Text,
      path: "/blogs",
      pattern: "/blogs/*",
    },
    {
      id: 4,
      label: "Search For a Job",
      icon: Search,
      path: "http://medicova.net/",
    },
  ],
};
