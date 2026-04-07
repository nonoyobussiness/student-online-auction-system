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
  const primary = theme === "dark" ? "#20B2B2" : "#008080";
  const primaryText = theme === "dark" ? "#131B23" : "#ECEBE4";
  const foreground = theme === "dark" ? "var(--app-foreground)" : "var(--app-foreground)";

  return (
    <div className="mt-4 flex overflow-x-auto whitespace-nowrap gap-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className="h-9 shrink-0 rounded-full px-5 text-[17px] font-normal transition-all duration-200"
            style={{
              fontFamily: "DM Sans, sans-serif",
              backgroundColor: isActive
                ? primary
                : "var(--app-hover)",
              color: isActive
                ? primaryText
                : foreground,
              border: "none",
            }}
            onMouseEnter={(event) => {
              if (!isActive) {
                event.currentTarget.style.backgroundColor = "var(--app-hover)";
              }
            }}
            onMouseLeave={(event) => {
              if (!isActive) {
                event.currentTarget.style.backgroundColor = "var(--app-hover)";
              }
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
