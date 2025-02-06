import { Notification, UserProps } from "@/types";

// Define and export the users array
export const users: UserProps = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  type: "seeker",
};

export const notification: Notification[] = [
  {
    id: 1,
    type: "info",
    message: "You have a new message from John.",
    title: "New Message",
    timestamp: new Date().toISOString(),
    read: false,
    user: {
      id: "123",
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    action: {
      label: "View Message",
      url: "/messages/1",
    },
    typee: "info",
  },
  {
    id: 2,
    type: "error",
    message: "There was an issue with your payment.",
    title: "Payment Failed",
    timestamp: new Date().toISOString(),
    read: false,
    user: {
      id: "124",
      name: "Jane Smith",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    action: {
      label: "Retry Payment",
      url: "/payment/retry",
    },
    typee: "info",
  },
];
