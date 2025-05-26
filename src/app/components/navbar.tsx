"use client";

import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex items-center h-[7vh] fixed top-0 left-64 right-0 z-30 pt-4 bg-white dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between w-full mx-6">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 --font-roboto">
            Hello Robert
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Good Morning
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
          />
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/user.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Robert Allen
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  HR Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
