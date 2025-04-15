// components/CountriesTable.tsx
import { useState } from "react";

type TabType = "country" | "specialty" | "age";

type CountryData = {
  country: string;
  countryCode: string;
  students?: number;
  percentage?: string;
  specialty?: string;
  age?: string;
};

// SVG flag components for each country
const FlagEgypt = () => (
  <svg viewBox="0 0 36 24" className="w-6 h-6 mr-2">
    <rect width="36" height="24" fill="#CE1126" />
    <rect width="36" height="8" y="8" fill="#fff" />
    <rect width="36" height="8" y="16" fill="#000" />
    <path d="M15,12a3,3 0 1,1 6,0a3,3 0 1,1 -6,0" fill="#C09300" />
  </svg>
);

const FlagQatar = () => (
  <svg viewBox="0 0 36 24" className="w-6 h-6 mr-2">
    <rect width="36" height="24" fill="#8D1B3D" />
    <path d="M0,0 L12,0 L12,24 L0,24 Z" fill="#fff" />
    <path d="M0,0 L8,0 L8,24 L0,24 Z" fill="#8D1B3D" />
    <path d="M2,4 L10,4 L10,20 L2,20 Z" fill="#fff" />
  </svg>
);

const FlagOman = () => (
  <svg viewBox="0 0 36 24" className="w-6 h-6 mr-2">
    <rect width="36" height="24" fill="#008751" />
    <rect width="12" height="24" fill="#fff" />
    <rect width="4" height="24" fill="#C8102E" />
    <path d="M6,12 L10,8 L10,16 Z" fill="#008751" />
  </svg>
);

const FlagKuwait = () => (
  <svg viewBox="0 0 36 24" className="w-6 h-6 mr-2">
    <rect width="36" height="8" fill="#007A3D" />
    <rect width="36" height="8" y="8" fill="#fff" />
    <rect width="36" height="8" y="16" fill="#CE1126" />
    <path d="M0,0 L12,0 L12,24 L0,24 Z" fill="#000" />
  </svg>
);

const FlagSaudiArabia = () => (
  <svg viewBox="0 0 36 24" className="w-6 h-6 mr-2">
    <rect width="36" height="24" fill="#046A38" />
    <path d="M0,12 L36,12" stroke="#fff" strokeWidth="4" />
    <path
      d="M12,6 L14,10 L18,10 L15,13 L17,17 L12,14 L7,17 L9,13 L6,10 L10,10 Z"
      fill="#fff"
    />
    <path d="M12,12 L14,12 L14,14 L12,14 Z" fill="#fff" />
  </svg>
);

const getCountryFlag = (countryCode: string) => {
  switch (countryCode) {
    case "eg":
      return <FlagEgypt />;
    case "qa":
      return <FlagQatar />;
    case "om":
      return <FlagOman />;
    case "kw":
      return <FlagKuwait />;
    case "sa":
      return <FlagSaudiArabia />;
    default:
      return null;
  }
};

const CountriesTable = () => {
  const [activeTab, setActiveTab] = useState<TabType>("country");

  const data: CountryData[] = [
    {
      country: "Egypt",
      countryCode: "eg",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Medicine",
      age: "20-25",
    },
    {
      country: "Qatar",
      countryCode: "qa",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Engineering",
      age: "21-26",
    },
    {
      country: "Oman",
      countryCode: "om",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Business",
      age: "19-24",
    },
    {
      country: "Kuwait",
      countryCode: "kw",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Computer Science",
      age: "20-25",
    },
    {
      country: "Saudi Arabia",
      countryCode: "sa",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Law",
      age: "22-27",
    },
    {
      country: "Egypt",
      countryCode: "eg",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Arts",
      age: "18-23",
    },
    {
      country: "Qatar",
      countryCode: "qa",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Medicine",
      age: "20-25",
    },
    {
      country: "Oman",
      countryCode: "om",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Engineering",
      age: "21-26",
    },
    {
      country: "Kuwait",
      countryCode: "kw",
      students: 1500,
      percentage: "30% +2%",
      specialty: "Business",
      age: "19-24",
    },
    {
      country: "Saudi Arabia",
      countryCode: "sa",
      students: 1500,
      percentage: "30%",
      specialty: "Computer Science",
      age: "20-25",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 rounded-lg border bg-white shadow-sm">
      {/* Tabs */}
      <div className="flex justify-center mb-6 lg:justify-start">
        <button
          className={`flex items-center py-2 px-5 font-medium rounded-lg text-sm ${
            activeTab === "country"
              ? "text-white border-b-2 bg-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("country")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Country
        </button>
        <button
          className={`flex items-center py-2 px-5 font-medium rounded-lg text-sm ${
            activeTab === "specialty"
              ? "text-white border-b-2 bg-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("specialty")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Specialty
        </button>
        <button
          className={`flex items-center py-2 px-5 font-medium rounded-lg text-sm ${
            activeTab === "age"
              ? "text-white border-b-2 bg-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("age")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Age
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Country
              </th>
              {activeTab === "country" ? (
                <>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Students
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Percentage
                  </th>
                </>
              ) : activeTab === "specialty" ? (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Specialty
                </th>
              ) : (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Age Range
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    {getCountryFlag(item.countryCode)}
                    <span className="text-sm font-medium text-gray-900">
                      {item.country}
                    </span>
                  </div>
                </td>
                {activeTab === "country" ? (
                  <>
                    <td className="p-2 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {item.students?.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        {item.percentage}
                      </div>
                    </td>
                  </>
                ) : activeTab === "specialty" ? (
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        {item.specialty}
                      </span>
                    </div>
                  </td>
                ) : (
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{item.age}</span>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountriesTable;
