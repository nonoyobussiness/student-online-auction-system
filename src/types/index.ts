/**
 * UniAuction - Shared TypeScript types
 * Add your type definitions here for consistency across the app.
 */

/** Represents an auction listing */
export interface Auction {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  imageUrl?: string;
  category: string;
  endsAt: Date | string;
  isLive?: boolean;
}

/** Category for organizing auctions */
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}
