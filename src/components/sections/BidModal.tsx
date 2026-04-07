import { useEffect } from "react";
import { Clock3, Gavel, ShieldCheck, Star, X } from "lucide-react";

export interface BidModalData {
  id: string;
  title: string;
  category: string;
  highestBid: number;
  endsAt: string;
  sellerName: string;
  sellerRating: number;
  imageLabel: string;
  history: Array<{ bidder: string; amount: number; time: string }>;
}

interface BidModalProps {
  auction: BidModalData;
  bidAmount: string;
  onBidAmountChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function BidModal({
  auction,
  bidAmount,
  onBidAmountChange,
  onClose,
  onSubmit,
}: BidModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bid-modal-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "var(--app-overlay)" }}
        aria-label="Close bid modal"
      />

      <div
        className="relative z-10 w-full max-w-xl origin-center rounded-2xl border p-6 shadow-2xl animate-[bidModalIn_220ms_ease-out]"
        style={{
          backgroundColor: "var(--app-bg)",
          borderColor: "var(--app-border)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium" style={{ color: "var(--app-primary)" }}>
              Live auction
            </p>
            <h2
              id="bid-modal-title"
              className="text-2xl font-semibold"
              style={{ color: "var(--app-foreground)" }}
            >
              {auction.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "var(--app-muted)" }}>
              <span className="rounded-full px-3 py-1" style={{ backgroundColor: "var(--app-hover)" }}>
                {auction.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                Ends {auction.endsAt}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-[var(--app-hover)]"
            style={{ color: "var(--app-muted)" }}
            aria-label="Close bid modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div
            className="flex h-56 items-center justify-center rounded-2xl border"
            style={{
              background: "linear-gradient(180deg, var(--app-promo-bg), var(--app-surface-muted))",
              borderColor: "var(--app-border)",
            }}
          >
            <span className="text-lg font-medium" style={{ color: "var(--app-foreground)" }}>
              {auction.imageLabel}
            </span>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border p-4" style={{ borderColor: "var(--app-border)", backgroundColor: "var(--app-surface-muted)" }}>
                <p className="text-sm" style={{ color: "var(--app-muted)" }}>
                  Current highest bid
                </p>
                <p className="mt-2 text-3xl font-semibold" style={{ color: "var(--app-foreground)" }}>
                  U {auction.highestBid}
                </p>
              </div>

              <div className="rounded-2xl border p-4" style={{ borderColor: "var(--app-border)", backgroundColor: "var(--app-surface-muted)" }}>
                <p className="text-sm" style={{ color: "var(--app-muted)" }}>
                  Seller
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--app-foreground)" }}>
                  {auction.sellerName}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm" style={{ color: "var(--app-primary)" }}>
                  <Star className="h-4 w-4 fill-current" />
                  {auction.sellerRating.toFixed(1)} seller rating
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="bid-amount"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--app-foreground)" }}
              >
                <Gavel className="h-4 w-4" />
                Your bid amount
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold"
                  style={{ color: "var(--app-primary)" }}
                >
                  U
                </span>
                <input
                  id="bid-amount"
                  type="number"
                  min={auction.highestBid + 1}
                  value={bidAmount}
                  onChange={(event) => onBidAmountChange(event.target.value)}
                  className="w-full rounded-xl border py-3 pl-9 pr-4 text-base outline-none transition focus:ring-2"
                  style={{
                    backgroundColor: "var(--app-surface)",
                    borderColor: "var(--app-border)",
                    color: "var(--app-foreground)",
                    boxShadow: "0 0 0 0 transparent",
                  }}
                />
              </div>
            </div>

            <div className="rounded-2xl border p-4" style={{ borderColor: "var(--app-border)", backgroundColor: "var(--app-surface-muted)" }}>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--app-foreground)" }}>
                <ShieldCheck className="h-4 w-4" />
                Recent bid history
              </p>
              <div className="space-y-3">
                {auction.history.map((entry) => (
                  <div key={`${entry.bidder}-${entry.time}`} className="flex items-center justify-between gap-4 text-sm">
                    <div>
                      <p style={{ color: "var(--app-foreground)" }}>{entry.bidder}</p>
                      <p style={{ color: "var(--app-muted)" }}>{entry.time}</p>
                    </div>
                    <p className="font-semibold" style={{ color: "var(--app-primary)" }}>
                      U {entry.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-[var(--app-hover)]"
            style={{
              borderColor: "var(--app-border)",
              color: "var(--app-foreground)",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: "var(--app-primary)",
              color: "var(--app-primary-text)",
            }}
          >
            Place bid
          </button>
        </div>
      </div>
    </div>
  );
}
