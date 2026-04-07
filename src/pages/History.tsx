/**
 * History - My Bids + My Sales with filters, search, grid/list, status badges
 */

import { useState } from "react";
import { PageShell } from "../components/layout";
import { useApp, type Bid, type SaleItem } from "../context/AppContext";

/* ─── Helpers ─────────────────────────────────────── */

const BID_STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Winning: { bg: "rgba(34,197,94,0.15)",  color: "#22c55e" },
  Outbid:  { bg: "rgba(239,68,68,0.15)",  color: "#ef4444" },
  Won:     { bg: "rgba(32,178,178,0.15)", color: "#20B2B2" },
  Lost:    { bg: "rgba(100,100,100,0.12)",color: "#888" },
  Active:  { bg: "rgba(139,92,246,0.15)", color: "#8b5cf6" },
};

const SALE_STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Active:  { bg: "rgba(34,197,94,0.15)",  color: "#22c55e" },
  Sold:    { bg: "rgba(32,178,178,0.15)", color: "#20B2B2" },
  Expired: { bg: "rgba(100,100,100,0.12)",color: "#888" },
};

const CATEGORY_EMOJI: Record<string, string> = {
  Electronics: "💻", Books: "📚", Furniture: "🛋", Sports: "⚽",
  Education: "🎓", Fashion: "👗", Music: "🎵", Other: "📦",
};

function Badge({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 9px", borderRadius: 20,
      fontSize: 11, fontWeight: 700, background: bg, color,
      fontFamily: "DM Sans, sans-serif",
    }}>
      {label}
    </span>
  );
}

function EmptyState({ emoji, title, sub, cta, onCta }: { emoji: string; title: string; sub: string; cta?: string; onCta?: () => void }) {
  return (
    <div className="flex flex-col items-center px-5 py-16 text-center">
      <div className="mb-3.5" style={{ fontSize: 48 }}>{emoji}</div>
      <p className="mb-1.5" style={{ fontSize: 16, fontWeight: 700, color: "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}>{title}</p>
      <p className={cta ? "mb-6" : undefined} style={{ fontSize: 13, color: "#666", fontFamily: "DM Sans, sans-serif" }}>{sub}</p>
      {cta && (
        <button
          onClick={onCta}
          style={{
            padding: "10px 22px", borderRadius: 10, border: "none",
            background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
            fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
          }}
        >
          {cta}
        </button>
      )}
    </div>
  );
}

/* ─── Bid Cards ──────────────────────────────────── */

function BidCard({ bid, grid }: { bid: Bid; grid: boolean }) {
  const ss = BID_STATUS_STYLE[bid.status] || { bg: "#222", color: "#888" };
  const emoji = CATEGORY_EMOJI[bid.category] || "📦";

  if (grid) {
    return (
      <div className="overflow-hidden rounded-xl" style={{
        borderRadius: 12, overflow: "hidden",
        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.15s, box-shadow 0.15s",
        fontFamily: "DM Sans, sans-serif",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.35)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      >
        <div style={{ height: 100, background: "#1F2A36", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
          {emoji}
        </div>
        <div style={{ padding: "14px 14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#ECEBE4", flex: 1, paddingRight: 8, lineHeight: 1.4 }}>{bid.itemTitle}</p>
            <Badge label={bid.status} bg={ss.bg} color={ss.color} />
          </div>
          <p style={{ fontSize: 10, color: "#666", marginBottom: 10 }}>{bid.category} · {bid.condition} · Ends {bid.endsAt}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 9, color: "#888" }}>My bid</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#ECEBE4" }}>U {bid.myBid}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 9, color: "#888" }}>Highest</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#20B2B2" }}>U {bid.highestBid}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between" style={{
      padding: "14px 16px", borderRadius: 12,
      background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
      transition: "background 0.15s", fontFamily: "DM Sans, sans-serif",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(32,178,178,0.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
    >
      <div className="flex items-center gap-3" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#1F2A36", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
          {emoji}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#ECEBE4", marginBottom: 2 }}>{bid.itemTitle}</p>
          <p style={{ fontSize: 11, color: "#666" }}>{bid.category} · {bid.condition} · Ends {bid.endsAt}</p>
        </div>
      </div>
      <div className="flex items-center gap-5 sm:self-auto" style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 10, color: "#666", marginBottom: 1 }}>My bid</p>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#ECEBE4" }}>U {bid.myBid}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 10, color: "#666", marginBottom: 1 }}>Highest</p>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#20B2B2" }}>U {bid.highestBid}</p>
        </div>
        <Badge label={bid.status} bg={ss.bg} color={ss.color} />
      </div>
    </div>
  );
}

/* ─── Sale Cards ─────────────────────────────────── */

function SaleCard({ item, grid }: { item: SaleItem; grid: boolean }) {
  const ss = SALE_STATUS_STYLE[item.status] || { bg: "#222", color: "#888" };
  const emoji = CATEGORY_EMOJI[item.category] || "📦";

  if (grid) {
    return (
      <div className="overflow-hidden rounded-xl" style={{
        borderRadius: 12, overflow: "hidden",
        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.15s, box-shadow 0.15s",
        fontFamily: "DM Sans, sans-serif",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.35)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      >
        <div style={{ height: 100, background: "#1F2A36", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
          {emoji}
        </div>
        <div style={{ padding: "14px 14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#ECEBE4", flex: 1, paddingRight: 8, lineHeight: 1.4 }}>{item.title}</p>
            <Badge label={item.status} bg={ss.bg} color={ss.color} />
          </div>
          <p style={{ fontSize: 10, color: "#666", marginBottom: 10 }}>{item.bidsCount} bids · Listed {item.listedAt}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 9, color: "#888" }}>Starting</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#ECEBE4" }}>U {item.startingPrice}</p>
            </div>
            {item.finalPrice && (
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 9, color: "#888" }}>Final</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}>U {item.finalPrice}</p>
              </div>
            )}
          </div>
          {item.buyerName && (
            <p style={{ fontSize: 10, color: "#888", marginTop: 8 }}>🧑 Buyer: <strong style={{ color: "#ECEBE4" }}>{item.buyerName}</strong></p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between" style={{
      padding: "14px 16px", borderRadius: 12,
      background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
      transition: "background 0.15s", fontFamily: "DM Sans, sans-serif",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(32,178,178,0.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
    >
      <div className="flex items-center gap-3" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#1F2A36", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
          {emoji}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#ECEBE4", marginBottom: 2 }}>{item.title}</p>
          <p style={{ fontSize: 11, color: "#666" }}>{item.category} · {item.bidsCount} bids · {item.status === "Sold" && item.buyerName ? `Buyer: ${item.buyerName}` : `Listed ${item.listedAt}`}</p>
        </div>
      </div>
      <div className="flex items-center gap-5 sm:self-auto" style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 10, color: "#666", marginBottom: 1 }}>Starting</p>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#ECEBE4" }}>U {item.startingPrice}</p>
        </div>
        {item.finalPrice ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 10, color: "#666", marginBottom: 1 }}>Final</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}>U {item.finalPrice}</p>
          </div>
        ) : <div style={{ width: 60 }} />}
        <Badge label={item.status} bg={ss.bg} color={ss.color} />
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────── */

export default function History() {
  const { bids, sales } = useApp();
  const [activeTab, setActiveTab] = useState<"bids" | "sales">("bids");
  const [grid, setGrid] = useState(false);
  const [search, setSearch] = useState("");
  const [bidFilter, setBidFilter] = useState<"All" | "Winning" | "Outbid" | "Won" | "Lost" | "Active">("All");
  const [saleFilter, setSaleFilter] = useState<"All" | "Active" | "Sold" | "Expired">("All");

  const filteredBids = bids
    .filter((b) => bidFilter === "All" || b.status === bidFilter)
    .filter((b) => !search || b.itemTitle.toLowerCase().includes(search.toLowerCase()));

  const filteredSales = sales
    .filter((s) => saleFilter === "All" || s.status === saleFilter)
    .filter((s) => !search || s.title.toLowerCase().includes(search.toLowerCase()));

  const BID_FILTERS = ["All", "Winning", "Outbid", "Won", "Lost", "Active"] as const;
  const SALE_FILTERS = ["All", "Active", "Sold", "Expired"] as const;
  type BidFilter = typeof BID_FILTERS[number];
  type SaleFilter = typeof SALE_FILTERS[number];

  const handleFilterChange = (filter: BidFilter | SaleFilter) => {
    if (activeTab === "bids") {
      setBidFilter(filter as BidFilter);
      return;
    }

    setSaleFilter(filter as SaleFilter);
  };

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-10 lg:px-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <section className="space-y-6">
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#ECEBE4", marginBottom: 4 }}>History</h1>
          <p style={{ color: "#888", fontSize: 14 }}>Track your bids and listings in one place</p>
        </section>

        <section className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Bids", value: bids.length, color: "#8b5cf6" },
            { label: "Auctions Won", value: bids.filter((b) => b.status === "Won").length, color: "#22c55e" },
            { label: "Items Sold", value: sales.filter((s) => s.status === "Sold").length, color: "#20B2B2" },
            { label: "Active Listings", value: sales.filter((s) => s.status === "Active").length, color: "#f59e0b" },
          ].map((s) => (
            <div key={s.label} className="min-w-0 rounded-xl px-[18px] py-[14px]" style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{ fontSize: 11, color: "#888", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              <p style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</p>
            </div>
          ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <div className="flex border-b" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            {(["bids", "sales"] as const).map((t) => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                padding: "9px 20px", background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: activeTab === t ? 700 : 500,
                color: activeTab === t ? "#20B2B2" : "#888",
                borderBottom: `2px solid ${activeTab === t ? "#20B2B2" : "transparent"}`,
                transition: "all 0.2s", marginBottom: -1, fontFamily: "DM Sans, sans-serif",
              }}>
                {t === "bids" ? `My Bids (${bids.length})` : `My Sales (${sales.length})`}
              </button>
            ))}
              </div>
          </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start lg:justify-end">
              <div className="relative">
              <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#555" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                style={{
                  padding: "7px 12px 7px 30px", borderRadius: 8, fontSize: 12,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ECEBE4", fontFamily: "DM Sans, sans-serif", outline: "none", width: 160,
                }}
              />
              </div>
              <div className="flex overflow-hidden rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
              {[false, true].map((isGrid) => (
                <button key={String(isGrid)} onClick={() => setGrid(isGrid)} style={{
                  padding: "7px 10px", border: "none", cursor: "pointer",
                  background: grid === isGrid ? "rgba(32,178,178,0.2)" : "transparent",
                  color: grid === isGrid ? "#20B2B2" : "#888", transition: "all 0.15s",
                }}>
                  {isGrid ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                  )}
                </button>
              ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
          {(activeTab === "bids" ? BID_FILTERS : SALE_FILTERS).map((f) => {
            const active = activeTab === "bids" ? bidFilter === f : saleFilter === f;
            return (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                style={{
                  padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif",
                  border: `1px solid ${active ? "rgba(32,178,178,0.5)" : "rgba(255,255,255,0.1)"}`,
                  background: active ? "rgba(32,178,178,0.15)" : "transparent",
                  color: active ? "#20B2B2" : "#888",
                }}
              >
                {f}
              </button>
            );
          })}
          </div>
        </section>

        <section className="space-y-6">
          {activeTab === "bids" && (
            filteredBids.length === 0 ? (
              <EmptyState emoji="⚡" title="No bids found" sub="Your bid history will appear here once you start bidding" cta="Browse Auctions" onCta={() => window.location.href = "/home"} />
            ) : grid ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBids.map((b) => <BidCard key={b.id} bid={b} grid />)}
              </div>
            ) : (
              <div className="space-y-2">{filteredBids.map((b) => <BidCard key={b.id} bid={b} grid={false} />)}</div>
            )
          )}

          {activeTab === "sales" && (
            filteredSales.length === 0 ? (
              <EmptyState emoji="🏪" title="No listings found" sub="Items you list for auction will appear here" cta="List an Item" onCta={() => window.location.href = "/sell"} />
            ) : grid ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSales.map((s) => <SaleCard key={s.id} item={s} grid />)}
              </div>
            ) : (
              <div className="space-y-2">{filteredSales.map((s) => <SaleCard key={s.id} item={s} grid={false} />)}</div>
            )
          )}
        </section>
      </div>
    </PageShell>
  );
}
