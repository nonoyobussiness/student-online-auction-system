/**
 * HomeLiveBids - Live Bids section as used in the Home page
 * 4-col desktop grid, 2-col mobile, with header, tiles, and pagination
 */

import { LiveBidTile } from "./LiveBidTile";
import Pagination from "./Pagination";

interface HomeLiveBidsProps {
  theme?: "dark" | "light";
}

export default function HomeLiveBids({ theme = "dark" }: HomeLiveBidsProps) {
  const isDark = theme === "dark";

  return (
    <section aria-label="Live Bids">
      <div className="mb-6 flex items-center gap-2">
        <span
          className="inline-block rounded-full shrink-0"
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#FF0000",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.2), inset 0 0 0 3px rgba(180,0,0,0.45)",
          }}
        />
        <h2
          className="text-[28px] font-bold leading-none tracking-tight"
          style={{
            color: isDark ? "#FFFFFF" : "#131B23",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Live Bids
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-[45px] gap-y-[60px] sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <LiveBidTile
            key={i}
            theme={isDark ? "dark" : "light"}
            size={i < 2 ? "desktop" : "desktop"}
            isLive={i % 3 !== 2}
          />
        ))}
      </div>

      <div className="mt-4 md:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-full py-3 text-sm font-semibold transition"
          style={{
            backgroundColor: "var(--app-primary)",
            color: "var(--app-primary-text)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          View all →
        </button>
      </div>

      <div className="hidden md:block">
        <Pagination theme={theme} />
      </div>
    </section>
  );
}
