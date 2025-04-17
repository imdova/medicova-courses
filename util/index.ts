import { Role } from "@/types";
import { Permission } from "@/types/permissions";
import { ReadonlyURLSearchParams } from "next/navigation";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}

export const formatDate = (date: Date): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(date);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

export function formatName(fullName: string): string {
  const nameParts = fullName.trim().split(" ");
  if (nameParts.length < 2) {
    return fullName;
  }
  const firstName = nameParts[0];
  const lastNameInitial = nameParts[nameParts.length - 1]
    .charAt(0)
    .toUpperCase();
  return `${firstName} .${lastNameInitial}`;
}
export function getLastEdit(date: Date): string {
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
  // Check if it's today
  if (diffDays === 0) {
    return "today";
  }

  // Check if it's within the last 15 days
  if (diffDays <= 15) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  }

  return formatDate(date);
}
export function getFullLastEdit(date: Date): string {
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - date.getTime());
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffDays = Math.floor(diffMinutes / (60 * 24));

  // Check if it's today
  if (diffDays === 0) {
    if (diffMinutes === 0) {
      return "now";
    }

    const diffHours = Math.floor(diffMinutes / 60);

    if (diffHours === 0) {
      return `${diffMinutes} min`;
    }

    return `${diffHours} d`;
  }

  // Check if it's within the last 15 days
  if (diffDays <= 15) {
    return `${diffDays} d`;
  }

  return formatDate(date);
}

export function getLastSegment(url?: string) {
  if (!url) return null; // Handle empty or undefined URLs
  const segments = url.split("/").filter((segment) => segment); // Split and remove empty segments
  if (segments.find((s) => s === "me")) return "me";
  return segments.length > 0 ? segments[segments.length - 1] : null; // Return the last segment
}

export const isCurrentPage = (pathname?: string, pattern?: string): boolean => {
  if (!pathname || !pattern) return false;
  // Handle dynamic segments (e.g., "/user/[id]")
  const regexPattern = pattern
    .replace(/\[.*?\]/g, "[^/]+") // Replace dynamic segments with wildcard regex
    .replace(/\//g, "\\/"); // Escape slashes

  const exactRegex = new RegExp(`^${regexPattern}$`);
  if (exactRegex.test(pathname)) return true;

  // Handle wildcard patterns (e.g., "/dashboard/*")
  if (pattern.includes("*")) {
    const wildcardPattern = pattern.replace(/\*/g, ".*");
    const wildcardRegex = new RegExp(`^${wildcardPattern}`);
    return wildcardRegex.test(pathname);
  }

  return false;
};

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function divideName(fullName?: string) {
  // Split the full name into parts based on spaces
  if (!fullName) return {};
  const nameParts = fullName.trim().split(" ");
  // The first name is everything before the last part
  const firstName = nameParts.slice(0, nameParts.length - 1).join(" ");
  // The last name is the last part of the name
  const lastName = nameParts[nameParts.length - 1];
  return { firstName, lastName };
}

export function getPermissionNames(roles: Role[]): Permission[] {
  const permissionNames = roles
    .flatMap((role) => role.permissions)
    .map((permission) => permission.name);
  return Array.from(new Set(permissionNames));
}

export const hasDataChanged = <T>(originalData: T, currentData: T): boolean => {
  return JSON.stringify(originalData) !== JSON.stringify(currentData);
};
