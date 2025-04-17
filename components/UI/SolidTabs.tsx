"use client";
import { useState } from "react";

type Tab = {
  label: React.ReactNode | string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const SolidTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-col flex-wrap p-1 border bg-white rounded-lg shadow-sm  gap-2 mb-7 md:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 transition-all duration-300 py-2 rounded-md text-sm  text-center ${
              activeTab === index ? "text-white bg-primary " : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default SolidTabs;
