/**
 * CategoryBarPreview - Preview page for CategoriesBar component
 * Allows testing CategoriesBar in isolation with both themes
 */

import CategoriesBar from "../sections/CategoriesBar";
import { useState } from "react";

export default function CategoryBarPreview() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div className={`min-h-screen p-8 ${theme === "dark" ? "bg-[#131B23]" : "bg-[#F8F9FA]"}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-[#131B23]"}`}>
          Category Bar Preview
        </h1>
        
        {/* Theme Toggle */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark" 
                ? "bg-[#008C95] text-white" 
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Dark Theme
          </button>
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-lg ${
              theme === "light" 
                ? "bg-[#008C95] text-white" 
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Light Theme
          </button>
        </div>

        {/* Category Bar */}
        <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-[#1A2530]" : "bg-white"}`}>
          <CategoriesBar theme={theme} />
        </div>

        {/* Current Theme Info */}
        <div className={`mt-6 p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
          <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Current Theme: <strong>{theme}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}