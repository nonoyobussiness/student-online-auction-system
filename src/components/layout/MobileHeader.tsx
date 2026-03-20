/**
 * MobileHeader - Compact header for mobile screens
 * Shown on small screens instead of full Navbar.
 */

import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../ui";

export default function MobileHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className="lg:hidden sticky top-0 z-50 bg-bg-elevated/95 backdrop-blur border-b border-border"
      role="banner"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/home"
            className="flex items-center gap-2 font-bold text-foreground shrink-0"
          >
            <span>🔨</span>
            <span>UniAuction</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-muted hover:bg-primary/10 hover:text-foreground"
              aria-label="Toggle search"
            >
              🔍
            </button>
            <Link
              to="/home"
              className="px-3 py-1.5 rounded-lg bg-primary text-foreground text-sm font-medium"
            >
              List
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-3">
            <Input placeholder="Search..." type="search" />
          </div>
        )}
      </div>
    </header>
  );
}
