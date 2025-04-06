"use client";

import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

type TimerMode = "no-limit" | "hidden" | "normal";

interface TimerProps {
  timeLimit: number; // in seconds
  mode?: TimerMode;
  onTimeUp?: () => void;
}

export default function Timer({
  timeLimit,
  mode = "no-limit",
  onTimeUp,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    // Reset timer when timeLimit changes
    setTimeLeft(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    if (mode === "no-limit" || mode === "hidden") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, onTimeUp]);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getTimerColor = () => {
    if (timeLeft < 30) return "text-red-600 bg-red-50 animate-pulse";
    if (timeLeft < 60) return "text-red-600 bg-red-50";
    if (timeLeft < 180) return "text-yellow-600 bg-yellow-50";
    return "text-gray-800 bg-gray-100";
  };

  if (mode === "hidden") return null;

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium ${getTimerColor()}`}
      aria-label="Time remaining">
      <TimerIcon size={15} />
      {mode === "no-limit" ? "Unlimited" : formatTime()}
    </div>
  );
}
