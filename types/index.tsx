import { JobWorkPlace } from "@/constants/enums/work-place.enum";
import { RoleState } from "./next-auth";
import { Permission } from "./permissions";
import { Gender } from "@/constants/enums/gender.enum";
import { EducationLevel } from "@/constants/enums/education-level.enum";
import { StartDateType } from "@/constants/enums/start-type.enum";
import { SalaryCurrency } from "@/constants/enums/currency.enum";
import { CompanyStatus } from "@/constants/enums/company-status.enum";
import { CompanySize } from "@/constants/enums/company-size.enum";
import { StaticImageData } from "next/image";

export type Country = {
  name: string;
  isoCode: string;
  flag: string;
  phonecode: string;
  currency: string;
  latitude: string;
  longitude: string;
};
export type CountryMin = {
  name: string;
  code: string;
};

export type State = {
  name: string;
  isoCode: string;
  countryCode: string;
  latitude: string;
  longitude: string;
};
export type City = {
  name: string;
  isoCode: string;
  countryCode: string;
  latitude: string;
  longitude: string;
};

export interface Result<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface UserState {
  id: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  type: RoleState;
  photo: string | null;
  phone: string | null;
  companyId: string | null;
  permissions: Permission[];
}

export interface registerData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface BaseHeaderProps {
  user?: UserState;
  pathname: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  timestamp: string;
}

export interface Experience {
  name: string;
  country: CountryMin;
  startDate: string;
  endDate: string;
}

export interface Education {
  name: string;
  country: CountryMin;
  specialty: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ContactInfo {
  whatsapp: string;
  phoneNumber: string;
  email: string;
}

export interface Doctor {
  id: string;
  image: string;
  name: string;
  location: string;
  specialty: string;
  yearsOfExperience: number;
  consultant: boolean;
  field: string;
  contactInfo: ContactInfo;
  experience: Experience[];
  education: Education[];
  available: boolean;
}

export interface Company {
  id: string;
  name: string;
  about?: string;
  isPrivate?: boolean;
  isProfitable?: boolean;
  status?: CompanyStatus | null;
  countryCode?: string;
  stateCode?: string | null;
  city?: string;
  size?: CompanySize | null;
  phone?: string;
  email?: string;
  yearFounded?: number | string;
  photo?: string;
  socialLinks?: {
    linkedin?: string;
  };
  visible?: boolean;
  profileUrl?: string;
  typeId: string;
}
export interface MiniCompany {
  name: string;
  industry: string;
  website: string;
  contact: string;
}

export type Sector = {
  id: string;
  name: string;
};
export interface Job {
  id: string;
  title: string;
  location: string;
  education: string;
  specialty: string;
  features: string[];
  timeStamps: Date;
  description: string;
  requirements: string[];
  additionalDetails: string;
  skills: string[];
  relatedSearch: string[];
  company: MiniCompany;
}

export interface JobData {
  id?: string;
  companyId: string;
  title: string;
  jobIndustryId: string;
  jobSectorId: string | null;
  jobSpecialityId: string | null;
  jobCategoryId: string | null;
  jobCareerLevelId: string | null;
  jobEmploymentTypeId: string | null;
  jobWorkPlace: JobWorkPlace | null;
  gender: Gender | null;
  minAge: number | null;
  maxAge: number | null;
  educationLevel: EducationLevel | null;
  countryCode: string | null;
  city: string | null;
  maxExpYears: number | null;
  minExpYears: number | null;
  hideSalary: boolean | null;
  salaryRangeStart: number | null;
  salaryRangeEnd: number | null;
  salaryCurrency: SalaryCurrency | null;
  availableVacancies: number | null;
  description: string | null;
  requirements: string | null;
  salaryDetails: string | null;
  keywords: string[] | null;
  skills: string[] | null;
  questions: string[] | null;
  showCompany: boolean | null;
  recieveEmails: boolean | null;
  jobEmail: string | null;
  draft: boolean | null;
  active: boolean | null;
  closed: boolean | null;
  validTo: string | null; // ISO date string
  startDateType: StartDateType | null;
}

export interface FilterOption {
  label: string;
  count: number;
  value: string;
}

export interface FilterSectionType {
  key: string;
  title: string;
  options: FilterOption[];
}

export interface Folder {
  id: number;
  name: string;
  candidates: number;
  lastModified: Date;
}

export interface SortFolders {
  key: keyof Folder;
  direction: "asc" | "desc";
}

export interface Specialty {
  id: number | string;
  image: string;
  title: string;
  jobsNumber: number;
  link: string;
}

export interface CompanyItem {
  id: string | number;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export interface NotificationItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: { status: "normal" | "warning" | "error" | "success"; text: string }[];
  timeStamp: Date;
  isRead: boolean;
  readTime: Date | null;
  category: string;
  image: string;
}

export interface HeaderLink {
  title: string;
  url: string;
}
export type CommonLinksType = "home";

export type RoleBasedLinks = {
  [key in RoleState]: HeaderLink[];
};
export type CommonLinks = {
  [key in CommonLinksType]: HeaderLink[];
};

export type NavItem = {
  id: number;
  icon?: React.ElementType;
  label?: string;
  path?: string;
  notifications?: number;
  section?: string; // Optional section header
  type?: "divider" | "text" | "collapse" | "supLink" | "profile";
  links?: NavItem[];
};

export type Role = {
  permissions: { name: Permission }[];
};

// Define the type for each object in the array
type LanguageItem = {
  id: string | number;
  title: string;
  src: StaticImageData;
};

// Define the type for the array of LanguageItem objects
export type CommonLangouge = LanguageItem[];

// Define the type for Status of Employers
export type StateType = "Active" | "Inactive" | "Processing";

export interface RowDataEmployer {
  id: number;
  name: string;
  email: string;
  avatar: string;
  reg_date: string;
  phone: number | string;
  country: string;
  type: string;
  Sector: string;
  Plan: string;
  job: number;
  status: "Active" | "Inactive" | "Processing";
}
export interface RowDataJobs {
  id: number;
  job_title: string;
  employer_name: string;
  reg_date: string;
  country: string;
  view: number;
  applicant: number;
  status: "Active" | "Inactive" | "Processing";
}
export interface RowDataCountry {
  id: number;
  avatar_country: string;
  country: string;
  job: number;
  Employers_jobs: number;
  revenue: string | number;
}

// type for phon numer country
export interface CountryPhone {
  code: string;
  label: string;
  phone: string;
}
