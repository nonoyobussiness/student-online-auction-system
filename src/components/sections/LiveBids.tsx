/**
 * LiveBids - Section displaying active auction listings
 * Uses AuctionCard for each item.
 */

import AuctionCard from "./AuctionCard";
import type { Auction } from "../../types";

// Mock data for demo - replace with real API data later
const MOCK_AUCTIONS: Auction[] = [
  {
    id: "1",
    title: "MacBook Pro 2022",
    description: "Hardly used, in great condition. Comes with charger.",
    currentBid: 45000,
    category: "electronics",
    endsAt: "2h 30m",
    isLive: true,
  },
  {
    id: "2",
    title: "Data Structures textbook",
    description: "CLRS 3rd edition, few highlights.",
    currentBid: 800,
    category: "books",
    endsAt: "5h left",
    isLive: true,
  },
  {
    id: "3",
    title: "Study table + chair",
    description: "Wooden, sturdy. Perfect for dorm.",
    currentBid: 2500,
    category: "furniture",
    endsAt: "1d left",
    isLive: false,
  },
];

export default function LiveBids() {
  return (
    <section aria-label="Live auctions">
      <h2 className="text-subheading text-foreground mb-4">Live Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_AUCTIONS.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </section>
  );
}
