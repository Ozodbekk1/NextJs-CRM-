/** @format */

"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import Image from "next/image";
import { BellRing, LogOut, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppStore } from "@/store/app";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

// import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setIsDrawer } = useAppStore();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getName = localStorage.getItem("userEmail");
    setUserEmail(getName);
  }, []);
  const handleOpenDrawer = () => {
    setIsDrawer(true);
  };

  const getTimeBasedSubtitle = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getHeaderProps = () => {
    const subtitle = getTimeBasedSubtitle();
    if (pathname === "/dashboard") {
      return {
        greeting: userEmail,
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
    if (pathname === "/departments") {
      return {
        greeting: "All Departments",
        subtitle: "All Departments Information",
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
    <div className='flex items-center h-[9vh] fixed top-0 left-0 lg:left-64 right-0 z-30 bg-background px-4 sm:px-6'>
      <div className='flex flex-1 items-center justify-between'>
        <div className='lg:hidden pr-4 flex items-center h-full'>
          <Menu
            size={25}
            onClick={handleOpenDrawer}
            className='cursor-pointer'
          />
        </div>

        <div className='hidden md:block'>
          <Header
            greeting={headerProps?.greeting}
            subtitle={headerProps?.subtitle}
            breadcrumbs={headerProps?.breadcrumbs}
          />
        </div>
        <div className='flex items-center gap-2 sm:gap-4 h-full'>
          <div className='w-full md:w-72'>
            <div className='relative'>
              <Input placeholder='Search...' className='pl-10' />
              <span className='absolute left-3 top-2.5 text-gray-500'>
                <Search className='w-4 h-4 text-foreground' />
              </span>
            </div>
          </div>
          <Button
            variant='secondary'
            className='flex items-center justify-center h-10 w-10 p-0 cursor-pointer'>
            <BellRing className='' />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <button className='flex items-center sm:space-x-2 rounded-md p-[4px]  border transition-colors cursor-pointer'>
                <Image
                  src='/img/user.png'
                  alt='User'
                  width={36}
                  height={36}
                  className='rounded-[6px] object-cover h-9 w-9'
                />
                <div className='hidden sm:flex flex-col items-start leading-tight'>
                  <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                    {userEmail}
                  </span>
                  <span className='text-xs text-gray-500 dark:text-gray-400'>
                    HR Manager
                  </span>
                </div>
                <svg
                  className='h-4 w-4 hidden sm:block'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </PopoverTrigger>

            <PopoverContent className='w-48 p-2 border rounded-md shadow-lg'>
              <div className='grid gap-1'>
                <Button variant='ghost' className='w-full justify-start'>
                  <User className='mr-2 h-4 w-4' />
                  My Profile
                </Button>
                <Button
                  variant='ghost'
                  className='w-full justify-start text-red-500 hover:text-red-600'
                  onClick={handleLogout}>
                  <LogOut className='mr-2 h-4 w-4' onClick={handleLogout} />
                  Log Out
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
