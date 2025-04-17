import { Notification } from "@/types";

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
    },
    action: {
      label: "Retry Payment",
      url: "/payment/retry",
    },
  },
];
