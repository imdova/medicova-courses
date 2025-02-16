"use client";
import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap  gap-2 mb-7">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 transition-all duration-300 py-2 rounded-full  text-center ${
              activeTab === index
                ? "  text-white bg-primary font-semibold"
                : "text-gray-600 bg-[#eee]"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
