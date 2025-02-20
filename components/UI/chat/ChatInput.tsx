"use client";
import { Paperclip } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  sendMessage: (text: string) => void;
  sendFile: (file: File) => void; // Function to handle file upload
}

export default function ChatInput({ sendMessage, sendFile }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Handle text message send
  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
    if (file) {
      sendFile(file);
      setFile(null);
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <div className="p-4 border-t flex items-center gap-2 border rounded-md">
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 outline-none  rounded-md"
        />
        {/* File Upload Input */}
        <label className="cursor-pointer text-secondary p-2 rounded-md">
          <Paperclip size={18} />
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {/* Send Button */}
        <button
          onClick={handleSendMessage}
          className="bg-primary text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
      {file && (
        <span className="block mt-2 w-fit bg-gray-100 text-secondary rounded-md p-2  text-xs">
          done For upload {file.name}
        </span>
      )}
    </div>
  );
}
