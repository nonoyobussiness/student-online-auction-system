/**
 * AuctionCard - Card component for a single auction listing
 * Used inside LiveBids section.
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
      <div className="aspect-video bg-bg-elevated rounded-t-xl flex items-center justify-center border-b border-border">
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
        <div className="flex items-center gap-2 mb-2">
          {auction.isLive && (
            <Badge variant="live">Live</Badge>
          )}
          <Badge variant="timer">
            {typeof auction.endsAt === "string"
              ? auction.endsAt
              : "Ending soon"}
          </Badge>
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
