/**
 * Pagination - Matches design: 1 2 3 ... 20 Next
 */

import { useState } from "react";

interface PaginationProps {
  totalPages?: number;
  theme?: "dark" | "light";
}

export default function Pagination({ totalPages = 20, theme = "dark" }: PaginationProps) {
  const [current, setCurrent] = useState(1);
  const isDark = theme === "dark";
  const activeBg = isDark ? "#20B2B2" : "#008080";
  const activeText = isDark ? "#131B23" : "#ECEBE4";

  const pages = [1, 2, 3];

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {pages.map((page) => {
        const isActive = current === page;
        return (
          <button
            key={page}
            type="button"
            onClick={() => setCurrent(page)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-colors"
            style={{
              backgroundColor: isActive
                ? activeBg
                : "transparent",
              color: isActive
                ? activeText
                : isDark ? "rgba(236,235,228,0.6)" : "#555",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {page}
          </button>
        );
      })}

      {/* Ellipsis */}
      <span
        className="flex h-9 w-9 items-center justify-center text-sm"
        style={{ color: isDark ? "rgba(236,235,228,0.4)" : "#999" }}
      >
        ...
      </span>

      {/* Last page */}
      <button
        type="button"
        onClick={() => setCurrent(totalPages)}
        className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-colors"
        style={{
          backgroundColor: current === totalPages ? activeBg : "transparent",
          color: current === totalPages ? activeText : isDark ? "rgba(236,235,228,0.6)" : "#555",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {totalPages}
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => setCurrent(Math.min(current + 1, totalPages))}
        className="flex h-9 items-center justify-center rounded-xl px-4 text-sm font-medium transition-colors"
        style={{
          color: isDark ? "rgba(236,235,228,0.6)" : "#555",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        Next
      </button>
    </div>
  );
}
