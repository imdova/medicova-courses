import { CommonLinks, RoleBasedLinks } from "@/types";

export const roleBasedLinks: RoleBasedLinks = {
  employer: [],
  seeker: [],
  admin: [
    {
      title: "Admin Dashboard",
      url: "/admin/dashboard",
    },
    {
      title: "User Management",
      url: "/admin/users",
    },
    {
      title: "Settings",
      url: "/admin/settings",
    },
  ],
};

export const commonLinks: CommonLinks = {
  home: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Courses",
      url: "/courses",
    },
    {
      title: "Blogs",
      url: "/blogs",
    },
    {
      title: "Become a tutor",
      url: "/tutors",
    },
    {
      title: "Admin",
      url: "/admin",
    },
    {
      title: "Prometric Exams",
      url: "/prometric-exams",
    },
  ],
};
