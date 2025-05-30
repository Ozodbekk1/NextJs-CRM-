"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarIcon, MoreVertical } from "lucide-react";

const schedules = [
  {
    date: "Wednesday, 06 July 2023",
    items: [
      { time: "09:30", role: "UI/UX Designer", task: "Practical Task Review" },
      { time: "12:00", role: "Magento Developer", task: "Resume Review" },
      { time: "01:30", role: "Sales Manager", task: "Final HR Round" },
    ],
  },
  {
    date: "Thursday, 07 July 2023",
    items: [
      {
        time: "09:30",
        role: "Front end Developer0",
        task: "Practical Task Review",
      },
      { time: "11:00", role: "React JS", task: "TL Meeting" },
    ],
  },
];

export default function MyScheduleCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="rounded-2xl border bg-card text-card-foreground shadow-lg p-6 w-full max-w-xl space-y-6 transition-all hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <style jsx>{`
        .react-calendar {
          width: 100%;
          background-color: transparent;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 0.75rem;
          padding: 0.75rem;
        }

        .react-calendar__navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 600;
          padding: 0 1rem;
        }

        .react-calendar__navigation button {
          background: linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%);
          border: none;
          color: #5b21b6;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .react-calendar__navigation button:hover {
          background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%);
          color: #3b0764;
          transform: scale(1.05);
        }

        .react-calendar__navigation button:disabled {
          background: #e5e7eb;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .react-calendar__month-view__weekdays {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .react-calendar__tile {
          height: 2.5rem;
          width: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .react-calendar__tile:hover {
          background-color: #ede9fe;
          color: #7c3aed;
          cursor: pointer;
        }

        .react-calendar__tile--now {
          background-color: #e0e7ff;
          color: #1e40af;
          font-weight: 700;
        }

        .react-calendar__tile--active,
        .selected-day {
          background-color: #a855f7 !important; /* bg-purple-500 */
          color: white !important;
          font-weight: 700;
          transform: scale(1.05);
        }

        .react-calendar__tile--active:hover {
          background-color: #9333ea !important; /* bg-purple-600 */
        }

        .schedule-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .schedule-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Dark mode specific styles */
        .dark .react-calendar__navigation {
          color: #f9fafb;
        }

        .dark .react-calendar__navigation button {
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
          color: #d8b4fe;
        }

        .dark .react-calendar__navigation button:hover {
          background: linear-gradient(135deg, #4b5563 0%, #7c3aed 100%);
          color: #f9fafb;
        }

        .dark .react-calendar__navigation button:disabled {
          background: #374151;
          color: #6b7280;
        }

        .dark .react-calendar__month-view__weekdays {
          color: #9ca3af;
        }

        .dark .react-calendar__tile {
          color: #d1d5db;
        }

        .dark .react-calendar__tile:hover {
          background-color: #4b5563;
          color: #d8b4fe;
        }

        .dark .react-calendar__tile--now {
          background-color: #374151;
          color: #93c5fd;
          font-weight: 700;
        }

        .dark .react-calendar__tile--active,
        .dark .selected-day {
          background-color: #a855f7 !important; /* bg-purple-500 */
          color: #f9fafb !important;
        }

        .dark .react-calendar__tile--active:hover {
          background-color: #9333ea !important; /* bg-purple-600 */
        }

        .dark .schedule-item:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          My Schedule
        </h2>
        <div className="bg-primary/10 text-primary p-2 rounded-lg transition-transform hover:scale-105 dark:bg-gray-700 dark:text-purple-300">
          <CalendarIcon className="w-5 h-5" />
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-900">
        <Calendar
          onChange={(value) => setDate(value as Date)}
          value={date}
          locale="en-US"
          tileClassName={({ date: d }) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
              ? "selected-day"
              : ""
          }
          prevLabel={
            <span className="text-white font-bold bg-purple-500 px-2 py-1 rounded">
              ←
            </span>
          }
          nextLabel={
            <span className="text-white font-bold bg-purple-500 px-2 py-1 rounded">
              →
            </span>
          }
          formatShortWeekday={(_, date) =>
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
          }
          showNeighboringMonth={false}
        />
      </div>

      <div className="space-y-4">
        {schedules.map((day, i) => (
          <div key={i} className="bg-muted/10 p-4 rounded-xl dark:bg-gray-700">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {day.date}
              </p>
              <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-purple-300" />
            </div>
            <div className="space-y-3">
              {day.items.map((item, j) => (
                <div
                  key={j}
                  className="schedule-item pl-3 border-l-4 border-primary bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-purple-500"
                >
                  <div className="text-sm font-bold text-primary dark:text-purple-300">
                    {item.time}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {item.role}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {item.task}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
