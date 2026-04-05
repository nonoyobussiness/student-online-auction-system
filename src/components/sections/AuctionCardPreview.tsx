import { LiveBidTile } from "./LiveBidTile";

export default function AuctionCardPreview() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-live-bids-page">
      <div className="flex gap-6">
        <LiveBidTile theme="dark" size="desktop" isLive />
        <LiveBidTile theme="light" size="desktop" isLive={false} />
      </div>
    </div>
  );
}
