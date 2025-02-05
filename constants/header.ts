import { CommonLangouge, CommonLinks, RoleBasedLinks } from "@/types";
import markLang from "@/assets/icons/markLang.png";

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
      title: "Find Tutors",
      url: "/courses",
    },
    {
      title: "Corporate training",
      url: "/",
    },
    {
      title: "Become a tutor",
      url: "/",
    },
  ],
};
