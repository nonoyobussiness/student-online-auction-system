/**
 * AuctionCard - Card component for a single auction listing
 * Used where a full listing card is needed (separate from the Live Bids grid tiles).
 */

import { Card, Badge } from "../ui";
import { formatPrice } from "../../utils";
import type { Auction } from "../../types";

interface AuctionCardProps {
  auction: Auction;
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Card padding="none" onClick={() => {}}>
      {/* Image placeholder */}
      <div className="relative aspect-video bg-bg-elevated rounded-t-xl flex items-center justify-center border-b border-border">
        <div className="absolute left-2 top-2 z-10">
          <Badge
            variant={auction.isLive ? "live" : "ended"}
            theme="dark"
            size="mobile"
          />
        </div>
        {auction.imageUrl ? (
          <img
            src={auction.imageUrl}
            alt={auction.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        ) : (
          <span className="text-subtle text-sm">No image</span>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded bg-bg-elevated px-2 py-1 font-jetbrains-mono text-sm text-foreground">
            {typeof auction.endsAt === "string"
              ? auction.endsAt
              : "Ending soon"}
          </span>
        </div>
        <h3 className="font-semibold text-foreground line-clamp-1">
          {auction.title}
        </h3>
        <p className="text-sm text-muted mt-0.5 line-clamp-2">
          {auction.description}
        </p>
        <p className="text-lg font-bold text-primary mt-3">
          {formatPrice(auction.currentBid)}
        </p>
      </div>
    </Card>
  );
}
