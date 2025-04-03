"use client";

import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface TimerProps {
  timeLimit: number; // in minutes
  mode?: string;
  onTimeUp?: () => void;
}

export default function Timer({
  timeLimit,
  mode = "whole-quiz",
  onTimeUp,
}: TimerProps) {
  // Convert minutes to seconds and adjust based on mode
  const initialTime =
    mode === "per-question"
      ? Math.floor((timeLimit * 60) / 10) // Example: divide total time by number of questions
      : timeLimit * 60;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Don't run timer if mode is none
    if (mode === "none") return;

    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onTimeUp?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft, mode, onTimeUp]);

  // Format time display
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Color changes when time is running low
  const getTimerColor = () => {
    if (timeLeft < 60) return "text-red-600 bg-red-50"; // Less than 1 minute
    if (timeLeft < 300) return "text-yellow-600 bg-yellow-50"; // Less than 5 minutes
    return "text-gray-800 bg-gray-100";
  };

  if (mode === "none") {
    return null; // Don't render timer in none mode
  }

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium ${getTimerColor()}`}>
      <TimerIcon size={15} />
      {`${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
    </div>
  );
}
