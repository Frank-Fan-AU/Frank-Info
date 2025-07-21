"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="切换暗黑模式"
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "切换到日间模式" : "切换到夜间模式"}
    >
      {isDark ? (
        // 太阳图标
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
        </svg>
      ) : (
        // 月亮图标
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 dark:text-gray-200">
          <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
} 