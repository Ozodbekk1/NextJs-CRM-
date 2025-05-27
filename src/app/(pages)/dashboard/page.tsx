"use client";

import MyScheduleCard from "@/app/components/dashboard/MySchedule";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Briefcase,
  Calendar,
  Folder,
} from "lucide-react";

const stats = [
  {
    title: "Total Employee",
    icon: <Users className="h-5 w-5 text-purple-500" />,
    value: 560,
    percentage: 12,
    updated: "July 16, 2023",
    increase: true,
  },
  {
    title: "Total Applicant",
    icon: <Briefcase className="h-5 w-5 text-purple-500" />,
    value: 1050,
    percentage: 5,
    updated: "July 14, 2023",
    increase: true,
  },
  {
    title: "Today Attendance",
    icon: <Calendar className="h-5 w-5 text-purple-500" />,
    value: 470,
    percentage: 8,
    updated: "July 14, 2023",
    increase: false,
  },
  {
    title: "Total Projects",
    icon: <Folder className="h-5 w-5 text-purple-500" />,
    value: 250,
    percentage: 12,
    updated: "July 10, 2023",
    increase: true,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {stat.icon}
                  <span className="text-sm text-muted-foreground">
                    {stat.title}
                  </span>
                </div>
                <div
                  className={`flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${
                    stat.increase
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {stat.increase ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {stat.percentage}%
                </div>
              </div>
              <div className="mt-4 text-2xl font-bold">{stat.value}</div>
              <div className="mt-2 text-xs text-muted-foreground">
                <hr />
                Update: {stat.updated}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Schedule Card */}
      <MyScheduleCard />
    </div>
  );
}
