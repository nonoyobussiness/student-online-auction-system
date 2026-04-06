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
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        {/* Red dot */}
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

      {/* Desktop grid: 4 cols */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <LiveBidTile
            key={i}
            theme={isDark ? "dark" : "light"}
            size="desktop"
            isLive={i % 3 !== 2}
          />
        ))}
      </div>

      {/* Mobile grid: 2 cols */}
      <div className="grid md:hidden grid-cols-2 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <LiveBidTile
            key={i}
            theme={isDark ? "dark" : "light"}
            size="mobile"
            isLive={i % 3 !== 2}
          />
        ))}
      </div>

      {/* Mobile: View all button */}
      <div className="md:hidden mt-4">
        <button
          type="button"
          className="w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-1 transition"
          style={{
            backgroundColor: "#6CEEEE",
            color: "#131B23",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          View all →
        </button>
      </div>

      {/* Desktop: Pagination */}
      <div className="hidden md:block">
        <Pagination theme={theme} />
      </div>
    </section>
  );
}