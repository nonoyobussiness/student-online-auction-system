import { useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import PromoBanner from "../components/sections/PromoBanner";

export default function HeroPromoPreview() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#020617]" : "bg-[#f5f7f6]"
      }`}
    >
      {/* Center Wrapper */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-6 space-y-10">

        {/* Toggle Button */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="px-4 py-2 bg-teal-500 text-white rounded-md"
        >
          Toggle Theme ({theme})
        </button>

        {/* Components */}
        <HeroSection theme={theme} />
        <PromoBanner theme={theme} />

      </div>
    </div>
  );
}