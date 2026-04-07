/**
 * Pixel-matched auction tile used by Live Bids grids and AuctionCardPreview.
 * Layout/spacing stays in Tailwind; hex palette lives in index.css @theme.
 */

import { useMemo, useState } from "react";
import { Badge } from "../ui";
import clsx from "clsx";
import BidModal, { type BidModalData } from "./BidModal";

export type LiveBidTileTheme = "dark" | "light";
export type LiveBidTileSize = "desktop" | "mobile";

export interface LiveBidTileProps {
  theme: LiveBidTileTheme;
  size: LiveBidTileSize;
  isLive: boolean;
}

const SIZE = {
  desktop: {
    root: "h-[290px] w-[230px] rounded-[10px]",
    media: "h-[176px] shrink-0 rounded-[10px]",
    body: "p-3",
    badgeInset: "left-2 top-2",
    badgeSize: "desktop" as const,
    time: "-mt-2 font-jetbrains-mono text-[22px] tracking-wider",
    timeLabel: "-mt-2 text-[8px]",
    title: "mt-2 text-[10px]",
    footer: "mt-2 flex items-center justify-between",
    bidLabel: "text-[8px]",
    bidAmountRow: "-mt-1.5 text-[21px] font-bold",
    currencyGap: "ml-[3px]",
    btn: "rounded-full px-4 py-1.5 text-[12px] font-medium",
  },
  mobile: {
    root: "h-[200px] w-[159px] rounded-[8px]",
    media: "h-[121px] shrink-0 rounded-[8px]",
    body: "p-2",
    badgeInset: "left-1.5 top-1.5",
    badgeSize: "mobile" as const,
    time: "-mt-1 font-jetbrains-mono text-[15px] tracking-wide",
    timeLabel: "-mt-1 text-[6px]",
    title: "mt-1 text-[7px]",
    footer: "mt-1 flex items-end justify-between gap-1",
    bidLabel: "text-[6px]",
    bidAmountRow: "-mt-0.5 text-[14px] font-bold leading-none",
    currencyGap: "ml-0.5",
    btn: "shrink-0 rounded-full px-2 py-1 text-[8px] font-medium leading-none",
  },
} as const;

const THEME = {
  dark: {
    shell: "border-live-bid-tile-dark-border bg-live-bid-tile-dark",
    media: "bg-live-bid-image-placeholder",
    time: "text-green-400",
    timeLabel: "text-gray-400",
    title: "text-gray-300",
    bidLabel: "text-gray-400",
    currency: "text-accent-bid-dark",
    amount: "text-white",
    btn: "bg-accent-bid-dark text-black hover:bg-accent-bid-dark-hover",
  },
  light: {
    shell: "border-live-bid-tile-light-border bg-live-bid-tile-light",
    media: "bg-live-bid-image-placeholder",
    time: "text-green-600",
    timeLabel: "text-gray-600",
    title: "text-gray-800",
    bidLabel: "text-gray-600",
    currency: "text-accent-bid-light",
    amount: "text-black",
    btn: "bg-live-bid-button-light-bg text-accent-bid-light",
  },
} as const;

export function LiveBidTile({ theme, size, isLive }: LiveBidTileProps) {
  const s = SIZE[size];
  const t = THEME[theme];
  const badgeTheme = theme === "dark" ? "dark" : "light";
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("96");

  const modalData = useMemo<BidModalData>(
    () => ({
      id: `${theme}-${size}-${isLive ? "live" : "ended"}`,
      title: isLive ? "MacBook Air M2 for Campus Creators" : "Mechanical Keyboard for Study Setup",
      category: isLive ? "Electronics" : "Accessories",
      highestBid: isLive ? 95 : 72,
      endsAt: isLive ? "today, 11:45 PM" : "tomorrow, 04:20 PM",
      sellerName: isLive ? "Aarav Sharma" : "Neha Reddy",
      sellerRating: isLive ? 4.9 : 4.7,
      imageLabel: isLive ? "MacBook Air M2" : "Mechanical Keyboard",
      history: [
        { bidder: "Priya M.", amount: isLive ? 95 : 72, time: "2 mins ago" },
        { bidder: "Arjun K.", amount: isLive ? 92 : 69, time: "8 mins ago" },
        { bidder: "Rohan P.", amount: isLive ? 88 : 65, time: "14 mins ago" },
      ],
    }),
    [isLive, size, theme],
  );

  const handlePlaceBid = () => {
    setShowBidModal(true);
    setBidAmount(String(modalData.highestBid + 1));
  };

  const handleSubmitBid = () => {
    setShowBidModal(false);
  };

  return (
    <>
      <div className={clsx("flex flex-col", s.root, t.shell)}>
        <div className={clsx("relative", s.media, t.media)}>
          <div className={clsx("absolute z-10", s.badgeInset)}>
            <Badge
              variant={isLive ? "live" : "ended"}
              theme={badgeTheme}
              size={s.badgeSize}
            />
          </div>
        </div>

        <div className={clsx("flex flex-1 flex-col justify-between", s.body)}>
          <div>
            <p className={clsx(s.time, t.time)}>00:23:44</p>
            <p className={clsx(s.timeLabel, t.timeLabel)}>Remaining</p>
            <p className={clsx(s.title, t.title)}>{modalData.title}</p>
          </div>

          <div className={s.footer}>
            <div>
              <p className={clsx(s.bidLabel, t.bidLabel)}>Current Bid</p>
              <p className={s.bidAmountRow}>
                <span className={clsx("font-extrabold", t.currency)}>U</span>
                <span
                  className={clsx(
                    s.currencyGap,
                    "font-jetbrains-mono",
                    size === "mobile" && "text-[13px]",
                    t.amount,
                  )}
                >
                  {modalData.highestBid}
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={handlePlaceBid}
              className={clsx(s.btn, t.btn)}
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>

      {showBidModal ? (
        <BidModal
          auction={modalData}
          bidAmount={bidAmount}
          onBidAmountChange={setBidAmount}
          onClose={() => setShowBidModal(false)}
          onSubmit={handleSubmitBid}
        />
      ) : null}
    </>
  );
}
