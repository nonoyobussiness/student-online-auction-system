/**
 * MobileHeader - Mobile top bar matching design
 */

import { useState } from "react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className="lg:hidden sticky top-0 z-50"
      style={{ backgroundColor: "#0C1218", borderBottom: "1px solid rgba(236,235,228,0.08)" }}
      role="banner"
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className="block w-5 h-0.5 rounded" style={{ backgroundColor: "#ECEBE4" }} />
          <span className="block w-5 h-0.5 rounded" style={{ backgroundColor: "#ECEBE4" }} />
          <span className="block w-5 h-0.5 rounded" style={{ backgroundColor: "#ECEBE4" }} />
        </button>

        {/* Logo */}
        <span
          className="font-bold text-base tracking-tight"
          style={{ color: "#6CEEEE", fontFamily: "DM Sans, sans-serif" }}
        >
          UniAuction
        </span>

        {/* Search icon */}
        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          className="w-8 h-8 flex items-center justify-center"
          style={{ color: "#888" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </div>

      {searchOpen && (
        <div className="px-4 pb-3">
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{ backgroundColor: "rgba(236,235,228,0.06)", border: "1px solid rgba(236,235,228,0.1)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "#ECEBE4" }}
            />
          </div>
        </div>
      )}
    </header>
  );
}