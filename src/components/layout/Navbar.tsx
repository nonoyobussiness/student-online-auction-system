/**
 * Navbar - Top navigation bar matching design exactly
 * Search bar center, wallet/bell/theme/user on right, no logo (sidebar has it)
 */

import { Bell, Moon, Search, ShoppingBag, Sun, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function Navbar() {
  const { theme, setTheme, balance } = useApp();
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-40 hidden h-16 items-center gap-6 border-b px-6 lg:flex"
      style={{ backgroundColor: "var(--app-bg)", borderBottomColor: "var(--app-border)" }}
      role="banner"
    >
      <LinkLogo onClick={() => navigate("/home")} />

      <div className="flex flex-1 items-center">
        <div
          className="flex w-full items-center gap-3 rounded-lg border px-4 py-2.5"
          style={{ backgroundColor: "var(--app-surface-muted)", borderColor: "var(--app-border)" }}
        >
          <Search className="h-4 w-4 shrink-0" style={{ color: "var(--app-muted)" }} />
          <input
            type="text"
            placeholder="Find Books, Tools and Food"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "var(--app-foreground)", fontFamily: "DM Sans, sans-serif" }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1.5 rounded-lg border px-3 py-2"
          style={{ backgroundColor: "var(--app-hover)", borderColor: "color-mix(in srgb, var(--app-primary) 25%, transparent)" }}
        >
          <span className="text-xs font-bold" style={{ color: "var(--app-primary)" }}>U</span>
          <span className="text-sm font-semibold" style={{ color: "var(--app-foreground)" }}>{balance}</span>
        </div>

        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-[var(--app-hover)]"
          style={{ color: "var(--app-muted)" }}
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--app-primary)" }} />
        </button>

        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-[var(--app-hover)]"
          style={{ color: "var(--app-muted)" }}
        >
          {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </button>

        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:bg-[var(--app-hover)]"
          style={{ backgroundColor: "var(--app-surface)", borderColor: "var(--app-border)", color: "var(--app-muted)" }}
        >
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

function LinkLogo({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3"
    >
      <span
        className="grid h-10 w-10 place-items-center rounded-2xl"
        style={{ backgroundColor: "var(--app-hover)", color: "var(--app-primary)" }}
      >
        <ShoppingBag className="h-5 w-5" />
      </span>
      <span className="min-w-0 text-left">
        <span className="block truncate text-lg font-semibold text-[var(--app-foreground)]">
          UniAuction
        </span>
        <span className="block truncate text-xs text-[var(--app-muted)]">
          Student marketplace
        </span>
      </span>
    </button>
  );
}
