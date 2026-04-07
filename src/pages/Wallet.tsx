/**
 * Wallet - Balance card, transactions, recent bids
 * Tabs: Overview | Transactions | My Bids
 */

import { useState } from "react";
import { PageShell } from "../components/layout";
import { useApp, type Transaction } from "../context/AppContext";

/* ─── Sub-components ─────────────────────────────── */

function StatCard({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className="min-w-0 rounded-xl px-[22px] py-[18px]" style={{
      padding: "18px 22px", borderRadius: 12,
      background: accent ? "linear-gradient(135deg,rgba(36,123,123,0.25),rgba(32,178,178,0.12))" : "rgba(255,255,255,0.04)",
      border: `1px solid ${accent ? "rgba(32,178,178,0.35)" : "rgba(255,255,255,0.07)"}`,
    }}>
      <p style={{ fontSize: 11, color: "#888", fontFamily: "DM Sans, sans-serif", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
      <p style={{ fontSize: accent ? 28 : 20, fontWeight: 800, color: accent ? "#20B2B2" : "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: "#666", marginTop: 3, fontFamily: "DM Sans, sans-serif" }}>{sub}</p>}
    </div>
  );
}

const TX_ICONS: Record<string, string> = { Bid: "⚡", Purchase: "🛒", Deposit: "⬆", Withdrawal: "⬇" };
const TX_COLORS: Record<string, string> = { Bid: "#f59e0b", Purchase: "#8b5cf6", Deposit: "#22c55e", Withdrawal: "#ef4444" };

function TxRow({ tx }: { tx: Transaction }) {
  const color = TX_COLORS[tx.type] || "#888";
  return (
    <div className="flex flex-col gap-3 rounded-[10px] p-4 sm:flex-row sm:items-center sm:justify-between" style={{
      padding: "14px 16px", borderRadius: 10,
      background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "DM Sans, sans-serif",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(32,178,178,0.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
    >
      <div className="flex items-center gap-3" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: `${color}18`, border: `1px solid ${color}33`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
        }}>
          {TX_ICONS[tx.type]}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#ECEBE4" }}>{tx.type}</p>
          {tx.item && <p style={{ fontSize: 11, color: "#888" }}>{tx.item}</p>}
          <p style={{ fontSize: 11, color: "#555", marginTop: 1 }}>{tx.date}</p>
        </div>
      </div>
      <div className="sm:text-right" style={{ textAlign: "right" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: tx.isCredit ? "#22c55e" : "#ECEBE4" }}>
          {tx.isCredit ? "+" : "-"}U {tx.amount.toLocaleString()}
        </p>
        <span style={{
          display: "inline-block", fontSize: 10, padding: "2px 7px", borderRadius: 20, marginTop: 3, fontWeight: 600,
          background: tx.status === "Completed" ? "rgba(34,197,94,0.12)" : tx.status === "Pending" ? "rgba(245,158,11,0.12)" : "rgba(239,68,68,0.12)",
          color: tx.status === "Completed" ? "#22c55e" : tx.status === "Pending" ? "#f59e0b" : "#ef4444",
          border: `1px solid ${tx.status === "Completed" ? "rgba(34,197,94,0.25)" : tx.status === "Pending" ? "rgba(245,158,11,0.25)" : "rgba(239,68,68,0.25)"}`,
        }}>
          {tx.status}
        </span>
      </div>
    </div>
  );
}

const BID_STATUS_STYLE: Record<string, { bg: string; color: string; border: string }> = {
  Winning: { bg: "rgba(34,197,94,0.12)",  color: "#22c55e",  border: "rgba(34,197,94,0.25)" },
  Outbid:  { bg: "rgba(239,68,68,0.12)",  color: "#ef4444",  border: "rgba(239,68,68,0.25)" },
  Won:     { bg: "rgba(32,178,178,0.12)", color: "#20B2B2",  border: "rgba(32,178,178,0.25)" },
  Lost:    { bg: "rgba(100,100,100,0.12)",color: "#888",     border: "rgba(100,100,100,0.25)" },
  Active:  { bg: "rgba(139,92,246,0.12)", color: "#8b5cf6",  border: "rgba(139,92,246,0.25)" },
};

/* ─── Page ───────────────────────────────────────── */

export default function Wallet() {
  const { balance, transactions, bids } = useApp();
  const [tab, setTab] = useState<"overview" | "transactions" | "bids">("overview");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const { setBalance, addToast } = useApp();
  const [txFilter, setTxFilter] = useState<"All" | "Bid" | "Purchase" | "Deposit" | "Withdrawal">("All");

  const totalIn  = transactions.filter((t) => t.isCredit).reduce((s, t) => s + t.amount, 0);
  const totalOut = transactions.filter((t) => !t.isCredit).reduce((s, t) => s + t.amount, 0);
  const winning  = bids.filter((b) => b.status === "Winning").length;

  const filteredTx = txFilter === "All" ? transactions : transactions.filter((t) => t.type === txFilter);

  const handleAdd = () => {
    const amt = Number(addAmount);
    if (!amt || amt < 1) { addToast("Enter a valid amount", "error"); return; }
    setBalance(balance + amt);
    addToast(`+${amt} Unicoin added to your wallet!`, "success");
    setShowAddModal(false);
    setAddAmount("");
  };

  const TABS = [
    { key: "overview",     label: "Overview" },
    { key: "transactions", label: "Transactions" },
    { key: "bids",         label: "Recent Bids" },
  ] as const;

  const TX_FILTERS = ["All", "Deposit", "Withdrawal", "Bid", "Purchase"] as const;

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-10 lg:px-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="space-y-6">
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#ECEBE4", marginBottom: 4 }}>Wallet</h1>
            <p style={{ color: "#888", fontSize: 14 }}>Manage your Unicoin balance and transactions</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setShowAddModal(true)}
              style={{
                padding: "9px 18px", borderRadius: 10, border: "none",
                background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
                fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <span>+</span> Add Unicoin
            </button>
            <button
              onClick={() => addToast("Withdrawal requested — funds will be processed in 2-3 business days", "info")}
              style={{
                padding: "9px 18px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)", color: "#ECEBE4",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}
            >
              Withdraw
            </button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="overflow-hidden rounded-2xl" style={{
          borderRadius: 16, padding: "28px 32px", marginBottom: 20,
          background: "linear-gradient(135deg, #0F2A30 0%, #0b1f25 100%)",
          border: "1px solid rgba(32,178,178,0.25)",
          boxShadow: "0 8px 40px rgba(32,178,178,0.12)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(32,178,178,0.05)", pointerEvents: "none" }} />
          <p style={{ fontSize: 12, color: "#20B2B2", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Current Balance</p>
          <div className="mb-5 flex items-baseline gap-2" style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#20B2B2" }}>U</span>
            <span style={{ fontSize: 48, fontWeight: 800, color: "#ECEBE4", fontFamily: "JetBrains Mono, monospace", lineHeight: 1 }}>
              {balance.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard label="Total Deposited" value={`U ${totalIn.toLocaleString()}`} />
            <StatCard label="Total Spent"     value={`U ${totalOut.toLocaleString()}`} />
            <StatCard label="Active Bids"     value={`${winning} winning`} />
          </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex border-b" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: "9px 18px", background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: tab === t.key ? 700 : 500,
                color: tab === t.key ? "#20B2B2" : "#888",
                borderBottom: `2px solid ${tab === t.key ? "#20B2B2" : "transparent"}`,
                transition: "all 0.2s", marginBottom: -1, fontFamily: "DM Sans, sans-serif",
              }}
            >
              {t.label}
            </button>
          ))}
          </div>

          {tab === "overview" && (
            <section className="space-y-6">
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#ECEBE4", marginBottom: 14 }}>Recent Activity</h3>
              <div className="space-y-2">
                {transactions.slice(0, 5).map((tx) => <TxRow key={tx.id} tx={tx} />)}
              </div>
              <button
                onClick={() => setTab("transactions")}
                className="w-full rounded-[10px] p-[11px]"
                style={{ width: "100%", marginTop: 10, padding: "11px", borderRadius: 10, border: "1px solid rgba(32,178,178,0.25)", background: "rgba(32,178,178,0.06)", color: "#20B2B2", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
              >
                View all transactions →
              </button>
            </section>
          )}

          {tab === "transactions" && (
            <section className="space-y-6">
              <div className="flex flex-wrap gap-2">
              {TX_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setTxFilter(f)}
                  style={{
                    padding: "5px 12px", borderRadius: 20, border: `1px solid ${txFilter === f ? "rgba(32,178,178,0.5)" : "rgba(255,255,255,0.1)"}`,
                    background: txFilter === f ? "rgba(32,178,178,0.15)" : "transparent",
                    color: txFilter === f ? "#20B2B2" : "#888", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {f}
                </button>
              ))}
              </div>
              {filteredTx.length === 0 ? (
              <div className="px-5 py-10 text-center" style={{ color: "#555" }}>
                <p style={{ fontSize: 32, marginBottom: 8 }}>💳</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#888" }}>No transactions yet</p>
                <p style={{ fontSize: 12, color: "#555" }}>Your transactions will appear here</p>
              </div>
            ) : (
                <div className="space-y-2">
                  {filteredTx.map((tx) => <TxRow key={tx.id} tx={tx} />)}
                </div>
              )}
            </section>
          )}

          {tab === "bids" && (
            <section className="space-y-6">
              {bids.length === 0 ? (
              <div className="px-5 py-12 text-center">
                <p style={{ fontSize: 32 }}>⚡</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#888", marginTop: 8 }}>No bids placed yet</p>
                <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>Start bidding on items from the home page</p>
              </div>
            ) : (
                <div className="space-y-2">
                  {bids.filter((b) => ["Winning", "Outbid", "Active"].includes(b.status)).map((bid) => {
                const ss = BID_STATUS_STYLE[bid.status];
                const isWinning = bid.status === "Winning";
                return (
                  <div key={bid.id} className="flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between" style={{
                    padding: "14px 16px", borderRadius: 12,
                    background: isWinning ? "rgba(34,197,94,0.05)" : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isWinning ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.06)"}`,
                  }}>
                    <div className="flex items-center gap-3" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 8, background: "#1F2A36", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 20 }}>{bid.category === "Electronics" ? "💻" : bid.category === "Books" ? "📚" : bid.category === "Furniture" ? "🛋" : "📦"}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#ECEBE4" }}>{bid.itemTitle}</p>
                        <p style={{ fontSize: 11, color: "#666", marginTop: 2 }}>Ends {bid.endsAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 11, color: "#666", marginBottom: 2 }}>My bid</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#ECEBE4" }}>U {bid.myBid}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 11, color: "#666", marginBottom: 2 }}>Highest</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#20B2B2" }}>U {bid.highestBid}</p>
                      </div>
                      <span style={{
                        padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                        background: ss.bg, color: ss.color, border: `1px solid ${ss.border}`,
                      }}>
                        {bid.status}
                      </span>
                    </div>
                  </div>
                );
                  })}
                </div>
            )}
            </section>
          )}
        </section>
      </div>

      {/* Add Unicoin Modal */}
      {showAddModal && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
        }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            style={{
              background: "#111C24", border: "1px solid rgba(32,178,178,0.25)", borderRadius: 16,
              padding: "32px 28px", width: 360, maxWidth: "90vw",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#ECEBE4", marginBottom: 6, fontFamily: "DM Sans, sans-serif" }}>Add Unicoin</h3>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 24, fontFamily: "DM Sans, sans-serif" }}>Enter the amount you want to add to your wallet.</p>
            <div style={{ position: "relative", marginBottom: 20 }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#20B2B2", fontWeight: 800, fontFamily: "JetBrains Mono, monospace" }}>U</span>
              <input
                type="number"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="100"
                autoFocus
                style={{
                  width: "100%", padding: "12px 14px 12px 30px", borderRadius: 10, fontSize: 18,
                  background: "#0b1820", border: "1.5px solid rgba(32,178,178,0.4)",
                  color: "#ECEBE4", fontFamily: "JetBrains Mono, monospace", outline: "none", boxSizing: "border-box",
                  fontWeight: 700,
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
              {[100, 250, 500, 1000].map((q) => (
                <button key={q} onClick={() => setAddAmount(String(q))}
                  style={{ flex: 1, padding: "7px 4px", borderRadius: 8, border: "1px solid rgba(32,178,178,0.3)", background: "rgba(32,178,178,0.08)", color: "#20B2B2", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                  +{q}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowAddModal(false)}
                style={{ flex: 1, padding: "11px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#888", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                Cancel
              </button>
              <button onClick={handleAdd}
                style={{ flex: 1, padding: "11px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23", fontSize: 13, fontWeight: 800, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                Add Unicoin
              </button>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
