/**
 * Profile - Avatar, stats, listed items, reviews/trust score
 */

import { useState } from "react";
import { PageShell } from "../components/layout";
import { useApp } from "../context/AppContext";

/* ─── Mock profile data ──────────────────────────── */

const LISTED_ITEMS = [
  { id: "1", title: "Physics Lab Equipment",  category: "Education",   price: 230, status: "Sold",    bids: 7,  emoji: "🔬" },
  { id: "2", title: "Study Desk Lamp",        category: "Furniture",   price: 40,  status: "Active",  bids: 3,  emoji: "💡" },
  { id: "3", title: "Badminton Racket Set",   category: "Sports",      price: 110, status: "Sold",    bids: 4,  emoji: "🏸" },
  { id: "4", title: "Python Book",            category: "Books",       price: 60,  status: "Expired", bids: 0,  emoji: "📘" },
  { id: "5", title: "Mechanical Keyboard",    category: "Electronics", price: 95,  status: "Active",  bids: 2,  emoji: "⌨️" },
  { id: "6", title: "Wireless Headphones",    category: "Electronics", price: 180, status: "Active",  bids: 5,  emoji: "🎧" },
];

const REVIEWS = [
  { id: "1", author: "Priya M.",  rating: 5, date: "Mar 2026", text: "Super smooth transaction! Item was exactly as described. Very responsive seller." },
  { id: "2", author: "Arjun K.", rating: 5, date: "Mar 2026", text: "Lab equipment was in perfect condition. Would definitely buy from again!" },
  { id: "3", author: "Neha S.",  rating: 4, date: "Feb 2026", text: "Good seller, fast delivery. Slight scratch not mentioned but minor." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ fontSize: 12, color: n <= rating ? "#f59e0b" : "#333" }}>★</span>
      ))}
    </div>
  );
}

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  Active:  { bg: "rgba(34,197,94,0.15)",  color: "#22c55e" },
  Sold:    { bg: "rgba(32,178,178,0.15)", color: "#20B2B2" },
  Expired: { bg: "rgba(100,100,100,0.12)",color: "#888" },
};

/* ─── Page ───────────────────────────────────────── */

export default function Profile() {
  const { balance, bids, sales } = useApp();
  const [activeSection, setActiveSection] = useState<"listings" | "reviews">("listings");

  const totalBids    = bids.length;
  const auctionsWon  = bids.filter((b) => b.status === "Won").length;
  const itemsSold    = sales.filter((s) => s.status === "Sold").length;
  const avgRating    = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  const trustScore   = Math.min(100, itemsSold * 18 + auctionsWon * 10 + REVIEWS.length * 8);

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-5xl space-y-10 px-6 py-10 lg:px-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <section className="overflow-hidden rounded-2xl">
          <div style={{
          height: 160, background: "linear-gradient(135deg,#0F2A30 0%,#1B4A50 50%,#0F2A30 100%)",
          position: "relative", borderBottom: "1px solid rgba(32,178,178,0.15)",
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: -30, right: 60, width: 150, height: 150, borderRadius: "50%", background: "rgba(32,178,178,0.06)" }} />
          <div style={{ position: "absolute", bottom: -20, left: 100, width: 100, height: 100, borderRadius: "50%", background: "rgba(32,178,178,0.04)" }} />

          {/* Avatar (overlaps banner) */}
          <div style={{
            position: "absolute", bottom: -40, left: 32,
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg,#247B7B,#20B2B2)",
            border: "4px solid #0C1218",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 800, color: "#131B23", zIndex: 1,
          }}>
            RG
          </div>
          </div>
        </section>

        <section className="space-y-10 px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div className="space-y-3">
              <h1 style={{ fontSize: 22, fontWeight: 800, color: "#ECEBE4", marginBottom: 3 }}>Raja the Great</h1>
              <p style={{ fontSize: 13, color: "#888" }}>raja@mahindra.edu.in · Mahindra University, Hyderabad</p>
              <div className="flex flex-wrap items-center gap-2" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                <StarRating rating={Number(avgRating)} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b" }}>{avgRating}</span>
                <span style={{ fontSize: 12, color: "#666" }}>({REVIEWS.length} reviews)</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#333", display: "inline-block" }} />
                <span style={{ fontSize: 12, color: "#888" }}>Member since Jan 2026</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => window.location.href = "/settings"}
                style={{
                  padding: "8px 16px", borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)", color: "#ECEBE4",
                  fontSize: 12, fontWeight: 600, cursor: "pointer",
                }}
              >
                ✏️ Edit Profile
              </button>
              <button style={{
                padding: "8px 16px", borderRadius: 10, border: "none",
                background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
                fontSize: 12, fontWeight: 700, cursor: "pointer",
              }}>
                + List Item
              </button>
            </div>
          </div>

          <section className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Total Bids",    value: totalBids,   icon: "⚡", color: "#8b5cf6" },
              { label: "Auctions Won",  value: auctionsWon, icon: "🏆", color: "#f59e0b" },
              { label: "Items Sold",    value: itemsSold,   icon: "🛒", color: "#22c55e" },
              { label: "Trust Score",   value: `${trustScore}%`, icon: "🛡", color: "#20B2B2" },
              { label: "Unicoin",       value: balance.toLocaleString(), icon: "U", color: "#20B2B2" },
            ].map((s) => (
              <div key={s.label} className="min-w-0 rounded-xl px-[18px] py-4" style={{
                padding: "16px 18px", borderRadius: 12,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <p style={{ fontSize: 18, marginBottom: 6 }}>{s.icon}</p>
                <p style={{ fontSize: 11, color: "#888", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
                <p style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</p>
              </div>
            ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-xl px-[18px] py-[14px] sm:flex-row sm:items-center" style={{
            padding: "14px 18px", borderRadius: 12, marginBottom: 28,
            background: "rgba(32,178,178,0.06)", border: "1px solid rgba(32,178,178,0.15)",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 24 }}>🛡</span>
            <div className="min-w-0 flex-1" style={{ flex: 1 }}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between" style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#20B2B2" }}>Verified Seller — Trust Score</p>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#20B2B2" }}>{trustScore}/100</p>
              </div>
              <div style={{ height: 6, background: "rgba(32,178,178,0.15)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: `${trustScore}%`, height: "100%", background: "linear-gradient(90deg,#247B7B,#20B2B2)", borderRadius: 99, transition: "width 0.5s" }} />
              </div>
            </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex border-b" style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 20 }}>
            {(["listings", "reviews"] as const).map((t) => (
              <button key={t} onClick={() => setActiveSection(t)} style={{
                padding: "9px 20px", background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: activeSection === t ? 700 : 500,
                color: activeSection === t ? "#20B2B2" : "#888",
                borderBottom: `2px solid ${activeSection === t ? "#20B2B2" : "transparent"}`,
                transition: "all 0.2s", marginBottom: -1,
                fontFamily: "DM Sans, sans-serif",
              }}>
                {t === "listings" ? `Listed Items (${LISTED_ITEMS.length})` : `Reviews (${REVIEWS.length})`}
              </button>
            ))}
            </div>

            {activeSection === "listings" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LISTED_ITEMS.map((item) => {
                const ss = STATUS_COLORS[item.status] || { bg: "#222", color: "#888" };
                return (
                  <div key={item.id} className="overflow-hidden rounded-xl" style={{
                    borderRadius: 12, overflow: "hidden",
                    background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                    transition: "transform 0.15s, box-shadow 0.15s", cursor: "pointer",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                  >
                    <div style={{ height: 90, background: "#1F2A36", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>
                      {item.emoji}
                    </div>
                    <div style={{ padding: "12px 12px 14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 4 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: "#ECEBE4", lineHeight: 1.4, flex: 1 }}>{item.title}</p>
                        <span style={{ padding: "2px 7px", borderRadius: 20, fontSize: 9, fontWeight: 700, background: ss.bg, color: ss.color, flexShrink: 0 }}>
                          {item.status}
                        </span>
                      </div>
                      <p style={{ fontSize: 10, color: "#666", marginBottom: 8 }}>{item.category} · {item.bids} bids</p>
                      <p style={{ fontSize: 14, fontWeight: 800, color: "#20B2B2" }}>U {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

            {activeSection === "reviews" && (
            <div className="space-y-4">
              {REVIEWS.map((r) => (
                <div key={r.id} className="rounded-xl px-[18px] py-4" style={{
                  padding: "16px 18px", borderRadius: 12,
                  background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "DM Sans, sans-serif",
                }}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div className="flex items-center gap-2.5" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: "50%",
                        background: "linear-gradient(135deg,#247B7B,#20B2B2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 800, color: "#131B23", flexShrink: 0,
                      }}>
                        {r.author.slice(0, 2)}
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#ECEBE4" }}>{r.author}</p>
                        <StarRating rating={r.rating} />
                      </div>
                    </div>
                    <p style={{ fontSize: 11, color: "#666" }}>{r.date}</p>
                  </div>
                  <p style={{ fontSize: 13, color: "#ECEBE4", lineHeight: 1.6, opacity: 0.85 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
          </section>
        </section>
      </div>
    </PageShell>
  );
}
