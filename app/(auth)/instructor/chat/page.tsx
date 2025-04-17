"use client";
import ChatSidebar from "@/components/UI/chat/ChatSidebar";
import ChatWindow from "@/components/UI/chat/ChatWindow";
import SharedFiles from "@/components/UI/chat/SharedFiles";
import { contacts, initialChats } from "@/constants/chat.data";
import { Message } from "@/types/chat";
import { useState } from "react";

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<number>(
    contacts[0]?.id || 1
  );
  const [chatHistories, setChatHistories] =
    useState<Record<number, Message[]>>(initialChats);

  // Get selected contact details
  const selectedChat =
    contacts.find((contact) => contact.id === selectedChatId) || contacts[0];

  // Get messages for the selected chat
  const messages = chatHistories[selectedChatId] || [];

  // Function to send a new message
  const sendMessage = (text: string) => {
    const newMessage: Message = {
      sender: "You",
      text,
      time: new Date().toLocaleTimeString(),
      isMe: true,
    };
    setChatHistories((prevChats) => ({
      ...prevChats,
      [selectedChatId]: [...(prevChats[selectedChatId] || []), newMessage],
    }));
  };

  return (
    <div className="flex flex-col xl:flex-row gap-2">
      <div className="flex flex-col-reverse xl:flex-row gap-2 w-full ">
        {/* Sidebar */}
        <ChatSidebar contacts={contacts} setSelectedChat={setSelectedChatId} />
        {/* Chat Window */}
        <ChatWindow
          selectedChat={selectedChat}
          messages={messages}
          sendMessage={sendMessage}
        />
      </div>
      {/* Shared Files */}
      <SharedFiles />
    </div>
  );
}
