"use client";

import { Clock5, Cloud, Star, Tablet, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="h-[93vh] fixed w-72 top-[7vh] left-0 z-30 bg-[#f6f9fc] dark:bg-[#1a1a1a]">
      <div className="flex flex-col p-3">
        <div className="flex flex-col  space-y-6 mt-8">
          {SidebarLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <p>{link.name}</p>
            </Link>
          ))}
          <div className="flex flex-col space-y-2 mx-4"></div>
        </div>
      </div>
    </div>
  );
};

const SidebarLinks = [
  {
    name: "Dashboard",
    icon: Tablet,
    href: "/",
  },
  {
    name: "All Employees",
    icon: Star,
    href: "/",
  },
  {
    name: "All Departments",
    icon: Clock5,
    href: "/",
  },
  {
    name: "Attendance",
    icon: Trash,
    href: "/",
  },
  {
    name: "Payroll",
    icon: Cloud,
    href: "/",
  },
];
