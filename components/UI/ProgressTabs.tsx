"use client";
import { useState } from "react";
import { ChevronDown, PlayCircle, LockIcon } from "lucide-react";
import { Tab } from "@/types/courses";

interface ProgressTabsProps {
  tabs: Tab[];
  currentTab: number; // Track the current tab
  currentVideoIndex: number; // Track the current video within the tab
  setCurrentVideo: (tabIndex: number, videoIndex: number) => void; // Function to update video
  setCurrentTab: (index: number) => void; // Function to update tab
}

const ProgressTabs: React.FC<ProgressTabsProps> = ({
  tabs,
  currentTab,
  currentVideoIndex,
  setCurrentVideo,
  setCurrentTab,
}) => {
  const [activeTab, setActiveTab] = useState(currentTab);

  if (!tabs || tabs.length === 0) {
    return <div>No data available</div>;
  }

  // Handle tab switching
  const handleActive = (index: number) => {
    if (typeof index !== "number") {
      console.error("Invalid tab index:", index);
      return;
    }
    setActiveTab(index);
    setCurrentTab(index);
    // Reset to first video when switching tabs
    setCurrentVideo(index, 0);
  };

  return (
    <div className="w-full">
      {tabs.map((tab, tabIndex) => (
        <div key={tab.title} className="max-h-[300px] overflow-auto">
          {/* Tab Header */}
          <div
            className="flex justify-between items-center cursor-pointer border rounded-md p-3 mb-2"
            onClick={() => handleActive(tabIndex)}>
            <span className="font-medium">{tab.title}</span>
            <div className="flex gap-2 items-center">
              <span className="text-xs text-gray-500">
                ({tab.completed}/{tab.total})
              </span>
              <ChevronDown
                size={16}
                className={`${
                  activeTab === tabIndex ? "rotate-180" : ""
                } transition`}
              />
            </div>
          </div>

          {/* Video List */}
          {activeTab === tabIndex && tab.items && (
            <div className="my-2 space-y-2">
              {tab.items.map((item, videoIndex) => (
                <div
                  key={videoIndex}
                  className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
                    currentTab === tabIndex && currentVideoIndex === videoIndex
                      ? "bg-primary text-white"
                      : "bg-gray-100"
                  }`}
                  // Update video only if it's not locked
                  onClick={() =>
                    !item.locked && setCurrentVideo(tabIndex, videoIndex)
                  }>
                  <span className="flex gap-3 items-center">
                    {item.locked ? (
                      <LockIcon size={18} />
                    ) : (
                      <PlayCircle size={18} />
                    )}
                    <span>{item.title}</span>
                  </span>
                  <span
                    className={`${
                      currentTab === tabIndex &&
                      currentVideoIndex === videoIndex
                        ? "text-white"
                        : "text-secondary"
                    } text-xs`}>
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
