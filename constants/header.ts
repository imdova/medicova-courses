import { RoleBasedLinks } from "@/types";

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
      label: "Jobs",
      path: "/search",
    },
    {
      id: 1,
      label: "Post a Job",
      path: "/employer/job/posted",
    },
    {
      id: 1,
      label: "Blog",
      path: "/blog",
    },
    {
      id: 1,
      label: "Courses",
      path: "#",
    },
  ],
};
