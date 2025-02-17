"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

// Define a simple Event interface
interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  color: string;
  tags: string[];
}

// Define colors for each tag
const tagColors: Record<string, string> = {
  "First lesson": "bg-blue-300",
  "Single lesson": "bg-green-300",
  "Weekly lesson": "bg-yellow-300",
  "Time off": "bg-red-300",
  "Google Calendar": "bg-purple-300",
  "Confirmed by student": "bg-pink-300",
  "No Confirmed by student": "bg-blue-300",
};

// Sample events data with tags
const eventsData: Event[] = [
  {
    id: 1,
    date: "2024-01-02",
    title: "Course Name A",
    time: "10:30 AM",
    color: "bg-blue-500",
    tags: ["First lesson", "Google Calendar"],
  },
  {
    id: 2,
    date: "2024-01-05",
    title: "Course Name B",
    time: "2:00 PM",
    color: "bg-green-500",
    tags: ["Single lesson", "Confirmed by student"],
  },
  {
    id: 3,
    date: "2024-01-09",
    title: "Course Name C",
    time: "9:00 AM",
    color: "bg-red-500",
    tags: ["Weekly lesson", "Time off"],
  },
  {
    id: 4,
    date: "2024-01-15",
    title: "Course Name D",
    time: "3:30 PM",
    color: "bg-yellow-500",
    tags: ["Single lesson", "Google Calendar"],
  },
  {
    id: 5,
    date: "2025-03-21",
    title: "Course Name E",
    time: "1:00 PM",
    color: "bg-purple-500",
    tags: ["Confirmed by student", "Weekly lesson"],
  },
];

// Helper function to generate days for a given month/year
function generateDays(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get last day of the month
  const daysArray: { date: Date; events: Event[] }[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day); // Get date in the given month/year
    const isoDate = date.toISOString().split("T")[0];

    // Filter events for this day
    const dailyEvents = eventsData.filter((evt) => evt.date === isoDate);
    daysArray.push({ date, events: dailyEvents });
  }
  return daysArray;
}

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Keep track of current month and year
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-based month (0 = January, 11 = December)

  const days = generateDays(currentYear, currentMonth); // Get days and events for the current month

  // Get today's date
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Filter upcoming events (events that are in the future)
  const upcomingEvents = eventsData.filter((event) => event.date > today);

  // Day names (starting Monday -> Sunday)
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle month change
  const goToPreviousMonth = () => {
    const prevMonthDate = new Date(currentYear, currentMonth - 1); // Decrease month by 1
    setCurrentDate(prevMonthDate);
  };

  const goToNextMonth = () => {
    const nextMonthDate = new Date(currentYear, currentMonth + 1); // Increase month by 1
    setCurrentDate(nextMonthDate);
  };

  // Get the name of the month
  const getMonthName = (month: number): string => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="box-content !p-2  lg:w-full">
        {/* Month & Year Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 space-x-2">
            <button onClick={goToPreviousMonth} className="text-secondary">
              <ChevronLeft size={18} />
            </button>
            <h2 className="text-lg font-bold">{`${getMonthName(
              currentMonth
            )} ${currentYear}`}</h2>
            <button onClick={goToNextMonth} className="text-secondary">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 text-center font-medium border-b pb-2 mb-2">
          {dayNames.map((dayName) => (
            <div key={dayName}>{dayName}</div>
          ))}
        </div>

        {/* Days Grid (Calendar) */}
        <div className="grid grid-cols-7 gap-2">
          {days.map(({ date, events }) => {
            const dayNumber = date.getDate();
            return (
              <div
                key={dayNumber}
                className="relative border rounded p-1 h-14 md:h-20 lg:h-32 flex flex-col justify-start">
                <span className="lg:p-2 lg:text-sm text-xs font-semibold">
                  {dayNumber}
                </span>
                {events.map((evt) => (
                  <div key={evt.id}>
                    <div
                      key={evt.id}
                      className={`block lg:hidden  w-2 h-2 rounded-full ${evt.color}`}></div>
                    <div
                      className={` flex items-center gap-3 z-10 w-[150px] lg:w-full h-full mt-1 rounded-md shadow-md overflow-hidden absolute lg:relative bg-white opacity-0 lg:opacity-100  hover:opacity-100 link-smooth`}>
                      <div className={`w-4 ${evt.color} h-full`}></div>
                      <div>
                        <h2 className="text-xs font-semibold">{evt.title}</h2>
                        <span className="text-xs text-secondary">
                          {evt.time}
                        </span>
                        {/* Render tags */}
                        <div className="flex gap-2 flex-wrap justify-end p-1">
                          {evt.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs text-white w-2 h-2 rounded-full ${
                                tagColors[tag] || "bg-gray-400"
                              }`}></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:min-w-[250px]">
        <div className="box-content mb-4">
          <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
          <div className="flex flex-col gap-3">
            <button className="flex justify-start items-center gap-2 text-sm w-full p-4 bg-primary text-white rounded-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Schedule lesson
            </button>
            <button className="flex justify-start items-center gap-2 text-sm w-full p-4 bg-primary text-white rounded-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Add time off
            </button>
            <button className="flex justify-start items-center gap-2 text-sm w-full p-4 bg-primary text-white rounded-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Add extra slots
            </button>
            <button className="flex justify-start items-center gap-2 text-sm w-full p-4 bg-primary text-white rounded-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Set up availability
            </button>
          </div>
        </div>
        {/* Tags */}
        <div className="box-content mb-4">
          <h3 className="text-lg font-semibold mb-4">All Tags</h3>
          <div>
            <ul className="space-y-2">
              {Object.entries(tagColors).map(([tag, colorClass]) => (
                <li key={tag} className="flex items-center space-x-2">
                  <div className={`w-4 h-4 ${colorClass} rounded-full`}></div>
                  <span className="text-sm ">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Upcoming Events Section */}
        <div className="box-content">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div>
            {upcomingEvents.length === 0 ? (
              <p>No upcoming events</p>
            ) : (
              upcomingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className={`flex items-center gap-2 h-[80px] mb-2 rounded-lg border overflow-hidden`}>
                  <div className={`w-5 h-full ${evt.color}`}></div>
                  <div>
                    <div className="font-semibold">{evt.title}</div>
                    <div className="text-sm">{evt.time}</div>
                    <div className="text-xs">{evt.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
