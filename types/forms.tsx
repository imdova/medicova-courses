export type formDataSettings = {
  // profile
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  website: string;
  userAvatar: FileList;
  //Communication
  newEnrollment: boolean;
  courseCompletion: boolean;
  studentQuestions: boolean;
  reviewNotifications: boolean;
  announcements: boolean;
  systemUpdates: boolean;
  weeklyReports: boolean;
  //Payout
  payoutMethod: "bank" | "instapay" | "mobile";
  accountHolderName: string;
  accountNumber: string;
  routingNumber: string;
  instapayUsername: string;
  walletNumber: string;
  taxId: string;
  country: string;
  payoutSchedule: string;
  // Security
  email: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  countryCode: string;
  phoneNumber: string;
};
