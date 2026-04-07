/**
 * PromoBanner - "Turn your old gear into cash in minutes"
 * Matches design: left text + features + CTA, right "Snap, List, Sell" card
 */

interface PromoBannerProps {
  theme?: "dark" | "light";
}

export default function PromoBanner({ theme = "dark" }: PromoBannerProps) {
  const isDark = theme === "dark";

  return (
    <section
      className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      style={{
        backgroundColor: isDark ? "rgba(53,126,126,0.15)" : "rgba(53,126,126,0.1)",
        border: `1px solid ${isDark ? "rgba(53,126,126,0.3)" : "rgba(53,126,126,0.25)"}`,
      }}
      aria-label="Sell your items promotion"
    >
      {/* Left side */}
      <div className="flex-1 max-w-lg">
        {/* Student Sellers Only badge */}
        <div className="mb-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold"
            style={{
              backgroundColor: "rgba(53,126,126,0.17)",
              border: "1px solid #20B2B2",
              color: "#20B2B2",
            }}
          >
            Student Sellers Only
          </span>
        </div>

        <h3
          className="text-2xl font-bold leading-snug mb-3"
          style={{
            color: isDark ? "#ECEBE4" : "#131B23",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Turn your old gear into cash in minutes
        </h3>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: isDark ? "rgba(236,235,228,0.6)" : "rgba(19,27,35,0.6)" }}
        >
          Listing is completely free for verified students. Whether it's Textbooks from
          last semester or a laptop you don't need, reach thousands of fellow students instantly.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20B2B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Verified Student IDs
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20B2B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Instant Payouts
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20B2B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Zero Listing Fees
            </span>
          </div>
        </div>

        <button
          type="button"
          className="px-5 py-2.5 rounded-full text-sm font-semibold transition"
          style={{
            backgroundColor: "#6CEEEE",
            color: "#131B23",
            fontFamily: "DM Sans, sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#50d8d8")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#6CEEEE")}
        >
          Get Started Now
        </button>
      </div>

      {/* Right side - Snap, List, Sell card */}
      <div
        className="flex flex-col items-center justify-center rounded-xl p-5 shrink-0 text-center"
        style={{
          width: 160,
          minHeight: 120,
          backgroundColor: isDark ? "rgba(12,18,24,0.6)" : "rgba(255,255,255,0.7)",
          border: `1px solid ${isDark ? "rgba(53,126,126,0.25)" : "rgba(53,126,126,0.2)"}`,
        }}
      >
        {/* Box/Package icon */}
        <div className="mb-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#20B2B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <p
          className="text-sm font-bold mb-1"
          style={{ color: isDark ? "#ECEBE4" : "#131B23" }}
        >
          Snap, List, Sell
        </p>
        <p
          className="text-[11px] leading-relaxed"
          style={{ color: isDark ? "rgba(236,235,228,0.5)" : "rgba(19,27,35,0.5)" }}
        >
          It takes less than 2 minutes to create your first auction
        </p>
      </div>
    </section>
  );
}