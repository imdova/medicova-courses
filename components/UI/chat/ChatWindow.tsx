import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message, Contact } from "@/types/chat";
import Image from "next/image";

interface ChatWindowProps {
  selectedChat: Contact | null;
  messages: Message[];
  sendMessage: (text: string) => void;
}

export default function ChatWindow({
  selectedChat,
  messages,
  sendMessage,
}: ChatWindowProps) {
  if (!selectedChat) {
    return (
      <main className="flex flex-col flex-grow items-center justify-center text-gray-500">
        Select a contact to start chatting
      </main>
    );
  }

  const sendFile = (file: File) => {
    console.log("File uploaded:", file.name);
  };
  return (
    <main className="flex w-full flex-col flex-grow bg-white border rounded-md p-4 ">
      {/* Chat Header */}
      <div className="p-4 border rounded-md  flex items-center gap-3 ">
        <Image
          className="w-12 h-12 rounded-full border"
          src={selectedChat.avatar}
          alt={selectedChat.name}
          width={200}
          height={200}
        />
        <div>
          <p className="font-semibold text-lg">{selectedChat.name}</p>
          <p className="text-sm text-gray-500">
            {selectedChat.isOnline
              ? "Online"
              : `Last seen ${selectedChat.lastSeen}`}
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>

      {/* Chat Input */}
      <ChatInput sendFile={sendFile} sendMessage={sendMessage} />
    </main>
  );
}
