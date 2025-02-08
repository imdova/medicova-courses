import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="relative w-full bg-gray-200 rounded-lg h-3">
      <div
        className="absolute left-0 h-3 bg-green-500 rounded-lg"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
