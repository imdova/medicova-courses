"use client";
import AddExtraSlotForm from "@/components/UI/form/AddExtraSlotForm";
import LessonForm from "@/components/UI/form/LessonForm";
import TimeoffForm from "@/components/UI/form/TimeoffForm";
import LineTabs from "@/components/UI/LineTabs";
import Modal from "@/components/UI/Modal";
import { eventsData, tagColors } from "@/constants/schedule.data";
import { Event } from "@/types/courses";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Helper function to generate days for a given month/year
function generateDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday, 6 = Saturday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray: { date: Date | null; events: Event[] }[] = [];

  // Adjust first day index to start from Monday (1 = Monday, 7 = Sunday)
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  // Add empty days to align first day of the month correctly
  for (let i = 0; i < adjustedFirstDay; i++) {
    daysArray.push({ date: null, events: [] }); // Empty slots before the first day
  }

  // Add actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isoDate = date.toISOString().split("T")[0];

    // Filter events for this day
    const dailyEvents = eventsData.filter((evt) => evt.date === isoDate);
    daysArray.push({ date, events: dailyEvents });
  }

  return daysArray;
}

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Keep track of current month and year
  const [isOpen, setisOpen] = useState(false); // Keep track of current month and year
  const [day, setDay] = useState<string>("");
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

  // Format the date as 'MM/DD/YYYY' manually
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Pad single-digit days
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    return `${month}/${day}/${year}`; // Format as MM/DD/YYYY
  };
  // handel day Selected
  const handelDayClick = (day: string) => {
    setDay(day);
    setisOpen(true);
  };
  // handlle close model menu
  const onClose = () => {
    setisOpen(false);
  };
  // tabs data
  const tabData = [
    { label: "Lesson", content: <LessonForm Day={day} /> },
    { label: "Time off", content: <TimeoffForm Day={day} /> },
    { label: "Add Extra Slots", content: <AddExtraSlotForm Day={day} /> },
  ];

  return (
    <div className="mx-auto px-6 lg:max-w-[1170px] my-10">
      <Modal onClose={onClose} isOpen={isOpen}>
        <LineTabs tabs={tabData} />
      </Modal>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="box-content !overflow-visible !p-2  lg:w-full">
          {/* Month & Year Header */}
          <div className="flex items-center justify-center md:justify-between mb-4">
            <div className="flex items-center gap-3 space-x-2">
              <button onClick={goToPreviousMonth} className="text-secondary">
                <ChevronLeft size={18} />
              </button>
              <h2 className="text-sm md:text-lg font-semibold w-[100px] md:w-[150px] text-center">{`${getMonthName(
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
              <div className="text-sm" key={dayName}>
                {dayName}
              </div>
            ))}
          </div>
          {/* Days Grid (Calendar) */}
          <div className="grid grid-cols-7 gap-2">
            {days.map(({ date, events }, index) => {
              if (!date) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="border rounded p-1 h-14 md:h-20 lg:h-32 bg-gray-100"></div>
                ); // Empty placeholder
              }

              const dayNumber = date.getDate();
              return (
                <button
                  key={dayNumber}
                  onClick={() => handelDayClick(formatDate(date).toString())}
                  className="relative border rounded p-1 h-14 md:h-20 lg:h-32 flex flex-col justify-start">
                  <span className="lg:p-2 lg:text-sm text-xs font-semibold">
                    {dayNumber}
                  </span>
                  {events.map((evt) => (
                    <div className="group" key={evt.id}>
                      <div
                        style={{ backgroundColor: evt.color, opacity: "20%" }}
                        className={`absolute top-0 left-0 block lg:hidden w-full h-full`}></div>
                      <div
                        className={`flex items-center gap-3 z-10 w-[120px] h-[50px] md:w-[160px] md:h-[70px]  mt-1 rounded-md shadow-md overflow-hidden absolute top-0 -left-4 md:left-0 lg:relative bg-white opacity-0 lg:opacity-100  group-hover:opacity-100 link-smooth`}>
                        <div
                          style={{ backgroundColor: evt.color }}
                          className={`w-4 bg-${evt.color} h-full`}></div>
                        <div>
                          <h2 className="text-xs font-semibold">{evt.title}</h2>
                          <span className="block text-xs text-secondary mb-1">
                            {evt.time}
                          </span>
                          <div className="flex justify-center gap-2">
                            {evt.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  backgroundColor: tagColors[tag] || "#6b7280",
                                }}
                                className="block w-2 h-2 rounded-full"></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </button>
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
                    <div
                      style={{ backgroundColor: colorClass }}
                      className={`w-4 h-4 rounded-full`}></div>
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
                  <Link
                    href={"#"}
                    key={evt.id}
                    className={`flex items-center gap-2 h-[80px] mb-2 rounded-lg border overflow-hidden`}>
                    <div
                      style={{ backgroundColor: evt.color }}
                      className={`w-5 h-full } `}></div>
                    <div>
                      <div className="font-semibold mb-1">{evt.title}</div>
                      <div className="flex items-center gap-1 mb-1">
                        <Clock size={12} className="text-secondary" />
                        <div className="text-sm">{evt.time}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-secondary" />
                        <div className="text-xs">{evt.date}</div>
                      </div>
                    </div>
                    <div className="flex justify-end flex-1">
                      <ChevronRight
                        style={{ color: evt.color }}
                        size={16}
                        className="text-secondary mr-2"
                      />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
