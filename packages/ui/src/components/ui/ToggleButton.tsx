'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic"

const Sun = dynamic(() => import("lucide-react").then(mod => mod.Sun))
const Moon = dynamic(() => import("lucide-react").then(mod => mod.Moon))


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by not rendering until client-side
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-slate-400" />
      )}
    </button>
  );
};
export default  ThemeToggle;