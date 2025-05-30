"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useAppStore } from "@/store/app";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const { isDrawer, setIsDrawer } = useAppStore();

  useEffect(() => {
    setIsDrawer(false);
  }, [pathname, setIsDrawer]);

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

  const renderSidebarContent = () => (
    <div className="flex flex-col p-4 h-full rounded-[20px] bg-secondary lg:bg-card">
      <div className="flex items-center mb-6 gap-2">
        <Image src="/img/logo.svg" alt="HRMS Logo" width={36} height={36} />
        <span className="text-2xl">HRMS</span>
      </div>
      <div className="flex flex-col space-y-2 flex-1">
        {SidebarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`flex items-center space-x-3 p-2 rounded-r-md ${
              pathname === link.href
                ? "bg-[#7152F30D] text-[#7152F3] font-bold border-l-4 border-[#7152F3]"
                : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
            }`}
          >
            <Image
              src={pathname === link.href ? link.activeIcon : link.defaultIcon}
              alt={`${link.name} Icon`}
              width={20}
              height={20}
              className={`h-5 w-5 ${
                pathname !== link.href ? "dark:filter dark:invert" : ""
              }`}
            />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );

  return (
    <>
      <div className="hidden lg:block  fixed top-0 left-0 z-30 w-64 h-screen  p-4">
        {renderSidebarContent()}
      </div>

      {isDrawer && (
        <div
          onClick={() => setIsDrawer(false)}
          className="fixed inset-0 z-40 bg-opacity-30 backdrop-blur-sm transition-opacity"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64  p-4 transition-transform transform lg:hidden ${
          isDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {renderSidebarContent()}
      </div>
    </>
  );
};
