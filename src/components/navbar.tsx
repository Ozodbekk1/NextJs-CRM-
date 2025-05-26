"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HelpCircle, Settings } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex items-center h-[7vh] fixed left-0 top-0 right-0  z-30 bg-[#f6f9fc] dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between my-4 mx-6 w-full">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/img/logo.png" alt="logo" width={40} height={40} />
            <span className="text-2xl font-bold pl-2 opacity-75">Logo</span>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <div
            className="p-2 hover:bg-secondary rounded-full transition"
            role="button"
          >
            <HelpCircle className="h-5 w-5" />
          </div>
          <div
            className="p-2 hover:bg-secondary rounded-full transition"
            role="button"
          >
            <Settings className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
