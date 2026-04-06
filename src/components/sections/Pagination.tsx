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

  const pages = [1, 2, 3];

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      {pages.map((page) => {
        const isActive = current === page;
        return (
          <button
            key={page}
            type="button"
            onClick={() => setCurrent(page)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: isActive
                ? "#6CEEEE"
                : "transparent",
              color: isActive
                ? "#131B23"
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
        className="w-8 h-8 flex items-center justify-center text-sm"
        style={{ color: isDark ? "rgba(236,235,228,0.4)" : "#999" }}
      >
        ...
      </span>

      {/* Last page */}
      <button
        type="button"
        onClick={() => setCurrent(totalPages)}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
        style={{
          backgroundColor: current === totalPages ? "#6CEEEE" : "transparent",
          color: current === totalPages ? "#131B23" : isDark ? "rgba(236,235,228,0.6)" : "#555",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {totalPages}
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => setCurrent(Math.min(current + 1, totalPages))}
        className="px-3 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
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