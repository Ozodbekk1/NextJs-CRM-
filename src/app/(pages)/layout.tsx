import React from "react";
import { Navbar, Sidebar } from "@/components";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="h-full min-h-[93vh] relative top-[7vh] ml-72 bg-[#f6f9fc] dark:bg-[#1f1f1f] p-4">
        <div className="h-[89vh] rounded-md ml-4 bg-white dark:bg-black p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
