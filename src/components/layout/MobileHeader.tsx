/**
 * MobileHeader - Mobile top bar matching design
 */

import { Menu, Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MobileHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-50 lg:hidden"
      style={{ backgroundColor: "var(--app-bg)", borderBottom: "1px solid var(--app-border)" }}
      role="banner"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("sidebar:open"))}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-[var(--app-hover)]"
        >
          <Menu className="h-5 w-5" style={{ color: "var(--app-foreground)" }} />
        </button>

        <button
          type="button"
          onClick={() => navigate("/home")}
          className="flex items-center gap-2"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-2xl"
            style={{ backgroundColor: "var(--app-hover)", color: "var(--app-primary)" }}
          >
            <ShoppingBag className="h-4 w-4" />
          </span>
          <span
            className="font-bold text-base tracking-tight"
            style={{ color: "var(--app-primary)", fontFamily: "DM Sans, sans-serif" }}
          >
            UniAuction
          </span>
        </button>

        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-[var(--app-hover)]"
          style={{ color: "var(--app-muted)" }}
        >
          <Search className="h-[18px] w-[18px]" />
        </button>
      </div>

      {searchOpen && (
        <div className="px-4 pb-3">
          <div
            className="flex items-center gap-2 rounded-lg border px-3 py-2"
            style={{ backgroundColor: "var(--app-surface-muted)", borderColor: "var(--app-border)" }}
          >
            <Search className="h-[13px] w-[13px]" style={{ color: "var(--app-muted)" }} />
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--app-foreground)" }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
