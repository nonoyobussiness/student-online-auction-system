/**
 * CategoriesBar - Horizontal list of category filters
 * Users can click categories to filter auctions.
 */

import { useState } from "react";
import { Tag } from "../ui";
import { AUCTION_CATEGORIES } from "../../constants";

type ThemeMode = "light" | "dark";

interface CategoriesBarProps {
  theme?: ThemeMode;
}

export default function CategoriesBar({ theme = "dark" }: CategoriesBarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (slug: string | null) => {
    if (slug === null) {
      setActiveCategory(null);
      return;
    }

    setActiveCategory(activeCategory === slug ? null : slug);
  };

  const isDark = theme === "dark";

  const filterSortStyles = isDark
    ? "bg-[#0C1218] border-[#1F2A36] text-white"
    : "bg-[#008080] border-[#008080] text-white";

  return (
    <section aria-label="Browse by category">
      <div className="flex justify-end gap-3 mb-4">
        <button className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-base font-medium ${filterSortStyles}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </button>
        <button className={`px-3 py-1.5 rounded-full border text-base font-medium ${filterSortStyles}`}>
          Sort: Ending Soon
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag
          active={activeCategory === null}
          onClick={() => handleCategoryClick(null)}
          theme={theme}
          lightThemeActiveBg="#008080"
          lightThemeActiveText="#FFFFFF"
          lightThemeInactiveBg="#ECEBE4"
          lightThemeInactiveText="#131B23"
        >
          All Bids
        </Tag>
        {AUCTION_CATEGORIES.map((cat) => (
          <Tag
            key={cat.id}
            active={activeCategory === cat.slug}
            onClick={() => handleCategoryClick(cat.slug)}
            theme={theme}
            lightThemeActiveBg="#008080"
            lightThemeActiveText="#FFFFFF"
            lightThemeInactiveBg="#ECEBE4"
            lightThemeInactiveText="#131B23"
          >
            {cat.name}
          </Tag>
        ))}
      </div>
    </section>
  );
}