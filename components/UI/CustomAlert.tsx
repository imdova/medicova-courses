"use client";
import { useEffect } from "react";

interface AlertProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const CustomAlert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto-hide after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 left-5 px-4 py-3 rounded-md shadow-lg transition-all z-50 ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}>
      {message}
      <button className="ml-3 font-bold" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default CustomAlert;
