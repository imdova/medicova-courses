import { NavItem } from "@/types";
import { RoleState } from "@/types/next-auth";
import {
  ArrowLeftRight,
  BookOpen,
  Calendar,
  Cog,
  FileQuestion,
  LayoutGrid,
  Link,
  MessageCircleMore,
  TvMinimalPlay,
  Users,
} from "lucide-react";

export type CommonLinksType = "home";

export type RoleBasedLinks = {
  [key in RoleState]: NavItem[];
};
export type CommonLinks = {
  [key in CommonLinksType]: NavItem[];
};

export const roleBasedSideBarLinks: RoleBasedLinks = {
  employer: [],
  seeker: [],
  admin: [
    {
      id: 18,
      icon: LayoutGrid,
      label: "Dashboard",
      path: "/admin",
    },
    {
      id: 19,
      icon: BookOpen,
      label: "Courses",
      type: "collapse",
      links: [
        {
          id: 21,
          label: "Live & Offline Videos",
          path: "/courses",
          icon: BookOpen,
          type: "text",
        },
        {
          id: 22,
          label: "Recorded Videos",
          path: "/my-courses",
          icon: BookOpen,
          type: "text",
        },
      ],
    },
    {
      id: 20,
      icon: Calendar,
      label: "Schedule",
      path: "/admin/schedule",
    },
    {
      id: 21,
      icon: Users,
      label: "Students",
      path: "/admin/students",
    },
    {
      id: 22,
      icon: Users,
      label: "Instructors",
      path: "/admin/instructors",
    },
    {
      id: 23,
      icon: Link,
      label: "Resource",
      path: "/admin/resource",
    },
    {
      id: 24,
      icon: ArrowLeftRight,
      label: "Transation",
      path: "/admin/transation",
    },
    {
      id: 25,
      icon: TvMinimalPlay,
      label: "Live Class",
      path: "/admin/live-video",
    },
    {
      id: 26,
      icon: MessageCircleMore,
      label: "Messsages",
      path: "/admin/chat",
    },
    {
      id: 31,
      type: "divider",
    },
    {
      id: 32,
      section: "Settings",
      type: "text",
    },

    {
      id: 33,
      icon: Cog,
      label: "Settings",
      path: "#",
    },
    {
      id: 34,
      icon: FileQuestion,
      label: "Help Center",
      path: "#",
    },
    {
      id: 32,
      type: "profile",
    },
  ],
};

export const applicantsFilters = {
  Residency: [
    { label: "All", count: 100, value: "all" },
    { label: "Egypt", count: 50, value: "egypt" },
    { label: "Qatar", count: 50, value: "qatar" },
  ],
  nationality: [
    { label: "All", count: 200, value: "all" },
    { label: "Egyptian", count: 120, value: "egyptian" },
    { label: "Saudi Arabian", count: 80, value: "saudi" },
  ],
  industry: [
    { label: "All", count: 300, value: "all" },
    { label: "Physicians", count: 150, value: "physicians" },
    { label: "Dentists", count: 50, value: "dentists" },
    { label: "Physical Therapists", count: 40, value: "physical_therapists" },
    { label: "Pharmacists", count: 30, value: "pharmacists" },
    { label: "Nurses", count: 30, value: "nurses" },
  ],
  category: [
    { label: "All", count: 200, value: "all" },
    { label: "Doctor", count: 100, value: "doctor" },
    { label: "Nurse", count: 50, value: "nurse" },
    { label: "Pharmaceutical", count: 30, value: "pharmaceutical" },
    { label: "Physicalists", count: 10, value: "physicalists" },
    { label: "Specialized", count: 10, value: "specialized" },
  ],
  educationLevel: [
    { label: "All", count: 250, value: "all" },
    { label: "Institute", count: 50, value: "institute" },
    { label: "Bachelor’s Degree", count: 100, value: "bachelor" },
    { label: "Doctorate Degree", count: 70, value: "doctorate" },
    { label: "Fellowship", count: 30, value: "fellowship" },
  ],
  yearsOfExperience: [
    { label: "All", count: 150, value: "all" },
    { label: "1-3", count: 50, value: "1-3" },
    { label: "3-5", count: 40, value: "3-5" },
    { label: "5-10", count: 30, value: "5-10" },
    { label: "+10", count: 30, value: "10+" },
  ],
  gender: [
    { label: "All", count: 300, value: "all" },
    { label: "Male", count: 200, value: "male" },
    { label: "Female", count: 100, value: "female" },
  ],
  age: [
    { label: "18-25", count: 40, value: "18-25" },
    { label: "26-35", count: 50, value: "26-35" },
    { label: "36-45", count: 30, value: "36-45" },
    { label: "46-60", count: 20, value: "46-60" },
    { label: "60+", count: 10, value: "60+" },
  ],
};
