/**
 * PromoBanner - "Turn your old gear into cash in minutes"
 * Matches design: left text + features + CTA, right "Snap, List, Sell" card
 */

import { BadgeCheck, DollarSign, Tag } from "lucide-react";

interface PromoBannerProps {
  theme?: "dark" | "light";
}

export default function PromoBanner({ theme = "dark" }: PromoBannerProps) {
  const isDark = theme === "dark";
  const buttonBg = isDark ? "#20B2B2" : "#008080";
  const buttonText = isDark ? "#131B23" : "#ECEBE4";

  return (
    <section
      className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-2xl px-6 py-8 md:flex-row md:items-center"
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
          className="mb-3 text-[18px] font-bold leading-snug md:text-[34px]"
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
        <div className="mb-6 flex flex-wrap gap-5">
          <div className="flex items-center gap-1.5">
            <BadgeCheck size={14} color="#20B2B2" />
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Verified Student IDs
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign size={14} color="#20B2B2" />
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Instant Payouts
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Tag size={14} color="#20B2B2" />
            <span className="text-xs font-medium" style={{ color: isDark ? "rgba(236,235,228,0.7)" : "#444" }}>
              Zero Listing Fees
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold transition"
          style={{
            backgroundColor: buttonBg,
            color: buttonText,
            fontFamily: "DM Sans, sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Get Started Now
        </button>
      </div>

      {/* Right side - Snap, List, Sell card */}
      <div
        className="hidden shrink-0 flex-col items-center justify-center rounded-xl p-5 text-center md:flex"
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
