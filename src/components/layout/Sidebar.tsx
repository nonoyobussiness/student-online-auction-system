/**
 * Sidebar - Desktop sidebar navigation
 * Shown on larger screens alongside main content.
 */

import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/home", icon: "🏠" },
  { label: "Browse", path: "/home", icon: "🔍" },
  { label: "My Listings", path: "#", icon: "📋" },
  { label: "My Bids", path: "#", icon: "💰" },
];

export default function Sidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col w-56 shrink-0 border-r border-border bg-bg-elevated"
      aria-label="Main navigation"
    >
      <nav className="p-4 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path + item.label}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-foreground hover:bg-primary/10 transition"
          >
            <span aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
