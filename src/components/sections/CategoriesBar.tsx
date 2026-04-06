/**
 * CategoriesBar - Category filter tabs matching design
 */

import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All Bids" },
  { id: "textbooks", label: "Textbooks" },
  { id: "electronics", label: "Electronics" },
  { id: "food", label: "Food" },
  { id: "event-tickets", label: "Event tickets" },
  { id: "skincare", label: "Skincare" },
  { id: "transportation", label: "Transportation" },
  { id: "misc", label: "Misc" },
];

interface CategoriesBarProps {
  theme?: "dark" | "light";
}

export default function CategoriesBar({ theme = "dark" }: CategoriesBarProps) {
  const [active, setActive] = useState("all");

  const isDark = theme === "dark";

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className="px-3 py-1 rounded-full text-sm font-normal transition-colors"
            style={{
              fontFamily: "DM Sans, sans-serif",
              backgroundColor: isActive
                ? isDark ? "#6CEEEE" : "#20B2B2"
                : isDark ? "rgba(53,126,126,0.17)" : "rgba(53,126,126,0.12)",
              color: isActive
                ? isDark ? "#131B23" : "#FFFFFF"
                : isDark ? "#FFFFFF" : "#131B23",
              border: "none",
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}