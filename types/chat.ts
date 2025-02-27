export interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  isOnline: boolean;
  lastSeen: string;
  unreadMessages: number;
}

export interface Message {
  sender: string;
  text: string;
  time: string;
  isMe?: boolean;
}

export interface FileItem {
  id: string;
  name: string;
  type: "DOC" | "PDF" | "XLS" | "PPT" | "TXT" | "IMG" | "ZIP";
  size: string;
  date: string;
}
export interface LinkItem {
  id: string;
  name: string;
  link: string;
  time: string;
  date: string;
}
