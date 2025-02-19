import { Notification, UserProps, UserState } from "@/types";

// Define and export the users array
export const users: UserProps = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  type: "seeker",
};
export const ThisUser: UserState = {
  id: "1",
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  type: "admin",
  photo: "https://randomuser.me/api/portraits/men/1.jpg",
  phone: "+1234567890",
  companyId: "company-123",
  permissions: ["view_jobs"],
};

export const notification: Notification[] = [
  {
    id: 1,
    typee: "info",
    message: "You have a new message from John.",
    title: "New Message",
    timestamp: new Date().toISOString(),
    read: false,
    user: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      job: "doctor",
    },
    action: {
      label: "View Message",
      url: "/messages/1",
    },
  },
  {
    id: 2,
    typee: "error",
    message: "There was an issue with your payment.",
    title: "Payment Failed",
    timestamp: new Date().toISOString(),
    read: false,
    user: {
      name: "Jane Smith",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      job: "doctor",
    },
    action: {
      label: "Retry Payment",
      url: "/payment/retry",
    },
  },
];
