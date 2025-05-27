"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import Image from "next/image";
import { BellRing, LogOut, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const getTimeBasedSubtitle = () => {
    const hour = 19;
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getHeaderProps = () => {
    const subtitle = getTimeBasedSubtitle();
    if (pathname === "/dashboard") {
      return {
        greeting: "Hello Jamshidbek 👋🏻",
        subtitle,
      };
    }

    if (pathname === "/employees") {
      return {
        greeting: "All Employees",
        subtitle: "All employee Information",
        breadcrumbs: undefined,
      };
    }

    return {
      greeting: "Welcome",
      subtitle: "Overview",
    };
  };

  const headerProps = getHeaderProps();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center h-[9vh] fixed top-0 left-64 right-0 z-30 pt-4 bg-white dark:bg-[#16151C]">
      <div className="flex items-center justify-between w-full mx-6">
        <Header
          greeting={headerProps?.greeting}
          subtitle={headerProps?.subtitle}
          breadcrumbs={headerProps?.breadcrumbs}
        />

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[10px] px-3">
            <Search className="h-4 w-4 text-black dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 pl-2 bg-transparent text-gray-500 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <Button variant="secondary" className="p-2">
              <BellRing className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center space-x-2 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Image
                    src="/img/user.png"
                    alt="User"
                    width={36}
                    height={36}
                    className="rounded-xl border border-gray-300 dark:border-gray-600 object-cover h-11 w-full"
                  />

                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Jamshidbek
                    </span>
                    <span className="text-xs text-gray-500()][ dark:text-gray-400">
                      HR Manager
                    </span>
                  </div>
                  <svg
                    className="h-10 w-10 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg">
                <div className="grid gap-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};
