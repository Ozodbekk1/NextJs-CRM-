"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const SidebarLinks = [
    {
      name: "Dashboard",
      defaultIcon: "/icons/dashboard.svg",
      activeIcon: "/icons/dashboard-active.svg",
      href: "/dashboard",
    },
    {
      name: "All Employees",
      defaultIcon: "/icons/employees.svg",
      activeIcon: "/icons/employees-active.svg",
      href: "/employees",
    },
    {
      name: "All Departments",
      defaultIcon: "/icons/departments.svg",
      activeIcon: "/icons/departments-active.svg",
      href: "/departments",
    },
    {
      name: "Attendance",
      defaultIcon: "/icons/attendence.svg",
      activeIcon: "/icons/attendence-active.svg",
      href: "/attendence",
    },
    {
      name: "Payroll",
      defaultIcon: "/icons/payroll.svg",
      activeIcon: "/icons/payroll-active.svg",
      href: "/payroll",
    },
    {
      name: "Jobs",
      defaultIcon: "/icons/jobs.svg",
      activeIcon: "/icons/jobs-active.svg",
      href: "/jobs",
    },
    {
      name: "Candidates",
      defaultIcon: "/icons/canditates.svg",
      activeIcon: "/icons/canditates-active.svg",
      href: "/candidates",
    },
    // {
    //   name: "Leaves",
    //   defaultIcon: "/icons/leaves-default.svg",
    //   activeIcon: "/icons/leaves-active.svg",
    //   href: "/leaves",
    // },
    {
      name: "Holidays",
      defaultIcon: "/icons/holidays.svg",
      activeIcon: "/icons/holidays-active.svg",
      href: "/holidays",
    },
    {
      name: "Settings",
      defaultIcon: "/icons/settings.svg",
      activeIcon: "/icons/settings-active.svg",
      href: "/settings",
    },
  ];

  return (
    <div
      className={`h-screen fixed w-64 top-0 left-0 z-30 p-4 ${
        isDarkMode ? "bg-[#1a1a1a]" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col p-4 h-full rounded-[20px] ${
          isDarkMode
            ? "bg-[#A2A1A80D] text-gray-300"
            : "bg-[#A2A1A80D] text-gray-600"
        }`}
      >
        <div className="flex items-center mb-6">
          <Image src="/img/logo.svg" alt="HRMS Logo" width={123} height={30} />
        </div>
        <div className="flex flex-col space-y-2 flex-1">
          {SidebarLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`flex items-center space-x-3 p-2 rounded-r-md ${
                pathname === link.href
                  ? "bg-[#7152F30D] text-[#7152F3] font-bold border-l-3 border-[#7152F3]"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Image
                src={
                  pathname === link.href ? link.activeIcon : link.defaultIcon
                }
                alt={`${link.name} Icon`}
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-auto flex space-x-2">
          <button
            onClick={() => setIsDarkMode(false)}
            className={`flex-1 p-2 rounded-md ${
              !isDarkMode
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setIsDarkMode(true)}
            className={`flex-1 p-2 rounded-md ${
              isDarkMode
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};
