"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarIcon, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import "./calendar-style.css"; // quyida custom CSS ham beriladi

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
        role: "Front end Developer",
        task: "Practical Task Review",
      },
      { time: "11:00", role: "React JS", task: "TL Meeting" },
    ],
  },
];

const MyScheduleCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 w-full max-w-sm space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">My Schedule</h2>
        <div className="bg-primary/10 text-primary p-2 rounded-lg">
          <CalendarIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-lg">
        <Calendar
          onChange={(value) => setDate(value as Date)}
          value={date}
          locale="en-US"
          tileClassName={({ date: d }) =>
            d.getDate() === date.getDate() && d.getMonth() === date.getMonth()
              ? "selected-day"
              : ""
          }
          prevLabel={<span className="text-primary text-lg">←</span>}
          nextLabel={<span className="text-primary text-lg">→</span>}
          formatShortWeekday={(locale, date) =>
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
          }
          showNeighboringMonth={false}
        />
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {schedules.map((day, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-muted-foreground">{day.date}</p>
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </div>
            {day.items.map((item, j) => (
              <div key={j} className="mb-3 pl-2 border-l-2 border-primary">
                <div className="text-sm font-bold">{item.time}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
                <div className="text-sm font-semibold">{item.task}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyScheduleCard;
