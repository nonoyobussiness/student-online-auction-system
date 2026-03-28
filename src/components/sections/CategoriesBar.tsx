/**
 * CategoriesBar - Horizontal list of category filters
 * Users can click categories to filter auctions.
 */

import { useState } from "react";
import { Tag } from "../ui";
import { AUCTION_CATEGORIES } from "../../constants";

export default function CategoriesBar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (slug: string | null) => {
    if (slug === null) {
      setActiveCategory(null);
      return;
    }

    setActiveCategory(activeCategory === slug ? null : slug);
  };

  return (
    <section aria-label="Browse by category">
      <h2 className="text-subheading text-foreground mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Tag
          active={activeCategory === null}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </Tag>
        {AUCTION_CATEGORIES.map((cat) => (
          <Tag
            key={cat.id}
            active={activeCategory === cat.slug}
            onClick={() => handleCategoryClick(cat.slug)}
          >
            {cat.name}
          </Tag>
        ))}
      </div>
    </section>
  );
}
