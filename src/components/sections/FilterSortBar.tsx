/**
 * FilterSortBar - Filter icon + Sort: Ending Soon bar
 */

import { useApp } from "../../context/AppContext";

export default function FilterSortBar() {
  const { theme } = useApp();
  const buttonBg = theme === "dark" ? "#000000" : "#008080";
  const buttonText = theme === "dark" ? "#FFFFFF" : "#ECEBE4";

  return (
    <div className="mt-6 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition"
          style={{ backgroundColor: buttonBg, color: buttonText }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filter</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition"
          style={{ backgroundColor: buttonBg, color: buttonText }}
        >
          <span>Sort: Ending Soon</span>
        </button>
      </div>
    </div>
  );
}
