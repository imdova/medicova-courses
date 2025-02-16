"use client";
import { useState } from "react";
import { ChevronDown, PlayCircle, LockIcon } from "lucide-react";
import { Tab } from "@/types/courses";

interface ProgressTabsProps {
  tabs: Tab[];
  currentVideoIndex?: number;
  setCurrentVideo: (index: number) => void; // Accepts function to update video
}

const ProgressTabs: React.FC<ProgressTabsProps> = ({
  tabs,
  currentVideoIndex,
  setCurrentVideo,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  if (!tabs || tabs.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className=" w-full ">
      {tabs.map((tab) => (
        <div key={tab.title} className="max-h-[300px] overflow-auto ">
          <div
            className="flex justify-between items-center cursor-pointer border rounded-md p-3 mb-2 "
            onClick={() => setActiveTab(tab.title)}>
            <span className="font-medium">{tab.title}</span>
            <div className="flex gap-2 items-center">
              <span className="text-xs text-gray-500">
                ({tab.completed}/{tab.total})
              </span>
              <ChevronDown
                size={16}
                className={`${
                  activeTab === tab.title ? "rotate-180" : ""
                } transition`}
              />
            </div>
          </div>
          {activeTab === tab.title && tab.items && (
            <div className="my-2 space-y-2">
              {tab.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center  p-3 rounded-lg cursor-pointer ${
                    currentVideoIndex === index
                      ? "bg-primary text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => (item.locked ? "" : setCurrentVideo(index))} // if video is locked no Updates the current video
                >
                  <span className="flex gap-3 items-center">
                    {item.locked ? (
                      <LockIcon size={18} />
                    ) : (
                      <PlayCircle size={18} />
                    )}

                    <span>{item.name}</span>
                  </span>
                  <span
                    className={`${
                      currentVideoIndex === index ? "text-white" : ""
                    } text-secondary text-xs`}>
                    {item.duration}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressTabs;
