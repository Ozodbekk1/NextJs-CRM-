"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const attendanceData = [
  { day: "Mon", onTime: 60, late: 30, absent: 10 },
  { day: "Tue", onTime: 60, late: 20, absent: 20 },
  { day: "Wed", onTime: 50, late: 25, absent: 25 },
  { day: "Thu", onTime: 60, late: 30, absent: 10 },
  { day: "Fri", onTime: 75, late: 15, absent: 10 },
  { day: "Sat", onTime: 45, late: 30, absent: 25 },
  { day: "Sun", onTime: 50, late: 35, absent: 15 },
];

const chartData = {
  labels: attendanceData.map((item) => item.day),
  datasets: [
    {
      label: "On Time",
      data: attendanceData.map((item) => item.onTime),
      backgroundColor: "#7c3aed",
      borderRadius: 4,
    },
    {
      label: "Late",
      data: attendanceData.map((item) => item.late),
      backgroundColor: "#f97316",
      borderRadius: 4,
    },
    {
      label: "Absent",
      data: attendanceData.map((item) => item.absent),
      backgroundColor: "#ef4444",
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

export default function AttendanceChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Attendance Overview</h2>
        <div className="border rounded px-2 py-1 text-sm">Today</div>
      </div>
      <div style={{ height: "300px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
