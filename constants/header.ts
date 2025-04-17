import { RoleBasedLinks } from "@/types";
import { Home, Search, Text } from "lucide-react";

export const roleBasedLinks: RoleBasedLinks = {
  instructor: [
    {
      id: 1,
      label: "Dashboard",
      path: "/employer/dashboard",
    },
    {
      id: 1,
      label: "My Jobs",
      path: "/employer/job/manage-jobs",
    },
    {
      id: 1,
      label: "CV Search",
      path: "/employer/search",
    },
    {
      id: 1,
      label: "Report",
      path: "#",
    },
    {
      id: 1,
      label: "Billing",
      path: "/employer/subscription-plans",
    },
  ],
  student: [
    {
      id: 1,
      label: "Dashboard",
      path: "/employer/dashboard",
    },
    {
      id: 1,
      label: "My Jobs",
      path: "/employer/job/manage-jobs",
    },
    {
      id: 1,
      label: "CV Search",
      path: "/employer/search",
    },
    {
      id: 1,
      label: "Report",
      path: "#",
    },
    {
      id: 1,
      label: "Billing",
      path: "/employer/subscription-plans",
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
      label: "Courses",
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
  ],
};
