"use client";
import { Contact } from "@/types/chat";
import Image from "next/image";

interface ChatSidebarProps {
  contacts: Contact[];
  setSelectedChat: (id: number) => void;
}

export default function ChatSidebar({
  contacts,
  setSelectedChat,
}: ChatSidebarProps) {
  const currentUser = {
    id: 0,
    name: "Mohamed Farag",
    avatar:
      "https://img.freepik.com/free-photo/smiling-woman-posing-outdoors_23-2148211695.jpg?w=740",
  };

  return (
    <aside className="w-full xl:max-w-[300px] bg-white rounded-md p-4 flex flex-col">
      {/* User Profile Info */}
      <div className="flex items-center gap-4 p-2 border-b pb-3">
        <div className="w-12">
          <Image
            className="w-12 h-12 rounded-full border"
            src={currentUser.avatar}
            alt={currentUser.name}
            width={200}
            height={200}
          />
        </div>
        <div>
          <p className="font-semibold">{currentUser.name}</p>
          <p className="text-xs text-gray-500">Student</p>
        </div>
      </div>

      {/* Contacts List */}
      <h2 className="text-md font-semibold mt-4">Contacts</h2>
      <div className="mt-2 flex-grow overflow-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md"
            onClick={() => setSelectedChat(contact.id)}>
            <div className="relative">
              <div className="w-10">
                <Image
                  className="w-10 h-10 rounded-full border"
                  src={contact.avatar}
                  alt={contact.name}
                  width={200}
                  height={200}
                />
              </div>

              {contact.isOnline ? (
                <div className="absolute bottom-0 right-0 bg-primary w-3 h-3 rounded-full border-2 border-white"></div>
              ) : (
                <div className="absolute bottom-0 right-0 bg-gray-400 w-3 h-3 rounded-full border-2 border-white"></div>
              )}
            </div>

            <div>
              <p className="font-semibold">{contact.name}</p>
              <p className="text-xs text-gray-500 truncate w-40">
                {contact.lastMessage}
              </p>
            </div>
            <div className="flex justify-end flex-1">
              {contact.unreadMessages > 0 && (
                <span className="bg-primary text-white text-xs  w-5 h-5 flex items-center justify-center rounded-md">
                  {contact.unreadMessages}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
