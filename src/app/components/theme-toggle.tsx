"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR mismatch
  if (!mounted) return null;

  return (
    <div className="mt-auto flex bg-[#A2A1A80D] dark:bg-[#A2A1A80D] rounded-[10px]">
      <button
        onClick={() => setTheme("light")}
        className={`flex-1 p-[10px] flex items-center justify-center space-x-2 ${
          resolvedTheme === "light"
            ? "bg-purple-600 text-white rounded-[10px]"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        <Sun className="h-5 w-5" />
        <span>Light</span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex-1 p-[10px] flex items-center justify-center space-x-2 ${
          resolvedTheme === "dark"
            ? "bg-purple-600 text-white rounded-[10px]"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        <Moon className="h-5 w-5" />
        <span>Dark</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
