/**
 * Navbar - Top navigation bar (desktop)
 * Contains logo, search, and action buttons.
 */

import { Link } from "react-router-dom";
import { Button, Input } from "../ui";

export default function Navbar() {
  return (
    <header
      className="hidden lg:block sticky top-0 z-50 bg-bg-elevated/95 backdrop-blur border-b border-border"
      role="banner"
    >
      <div className="container-narrow flex items-center gap-4 h-16">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 shrink-0 font-bold text-foreground hover:text-primary transition"
        >
          <span className="text-xl">🔨</span>
          <span>UniAuction</span>
        </Link>

        {/* Search - hidden on small screens, shown from md up */}
        <div className="hidden md:flex flex-1 max-w-md">
          <Input
            placeholder="Search auctions..."
            className="rounded-xl"
            type="search"
            aria-label="Search auctions"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/home"
            className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-xl border-2 border-primary text-primary hover:bg-primary/20 transition"
          >
            Browse
          </Link>
          <Button variant="primary" size="sm">
            List item
          </Button>
          <Link
            to="/"
            className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-xl bg-bg-elevated border border-border hover:border-primary/50 text-foreground transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}
