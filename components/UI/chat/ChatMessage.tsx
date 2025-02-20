import { Message } from "@/types/chat";

export default function ChatMessage({ text, time, isMe }: Message) {
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div>
        <div
          className={`p-3 rounded-lg mb-2 ${
            isMe ? "bg-primary text-white" : "bg-gray-200"
          }`}>
          <p>{text}</p>
        </div>
        <span className="text-xs block text-secondary text-right">{time}</span>
      </div>
    </div>
  );
}
