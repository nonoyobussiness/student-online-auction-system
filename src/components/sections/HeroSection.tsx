/**
 * HeroSection - Main landing banner for the homepage
 * Displays the headline and primary call-to-action.
 */

import { Button } from "../ui";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-bg-elevated border border-border"
      aria-label="Welcome to UniAuction"
    >
      {/* Decorative background glow */}
      <div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:py-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground max-w-2xl">
          Buy & sell on campus.{" "}
          <span className="text-primary">Student to student.</span>
        </h1>
        <p className="mt-4 text-lg text-muted max-w-xl">
          UniAuction is your campus marketplace. List items, place bids, and find
          great deals from fellow students.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            Browse Auctions
          </Button>
          <Button variant="secondary" size="lg">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
}
