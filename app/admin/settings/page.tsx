// app/settings/page.tsx
"use client";

import { useState } from "react";
import ProfileSettings from "./panels/ProfileSettings";
import PayoutSettings from "./panels/PayoutSettings";
import SecuritySettings from "./panels/SecuritySettings ";
import CommunicationSettings from "./panels/CommunicationSettings";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div>
          {/* Sidebar */}
          <div className="w-full mb-4">
            <div className="bg-white rounded-lg shadow p-2 border">
              <nav className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "profile"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab("communication")}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "communication"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Communication Settings
                </button>
                <button
                  onClick={() => setActiveTab("payout")}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "payout"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Payout Settings
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "security"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Security Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "profile" && <ProfileSettings />}
            {activeTab === "payout" && <PayoutSettings />}
            {activeTab === "security" && <SecuritySettings />}
            {activeTab === "communication" && <CommunicationSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
