/**
 * Sidebar - Desktop sidebar navigation (matches design exactly)
 */

import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Home",
    path: "/home",
    icon: (active: boolean) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={active ? "#6CEEEE" : "none"} stroke={active ? "#6CEEEE" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    label: "Sell",
    path: "/sell",
    icon: (active: boolean) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#6CEEEE" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    label: "History",
    path: "/history",
    icon: (active: boolean) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#6CEEEE" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Wallet Info",
    path: "/wallet",
    icon: (active: boolean) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#6CEEEE" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M16 12a1 1 0 100 2 1 1 0 000-2z" fill={active ? "#6CEEEE" : "#888"} stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Settings",
    path: "/settings",
    icon: (active: boolean) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#6CEEEE" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex flex-col shrink-0 border-r"
      style={{
        width: 120,
        backgroundColor: "#0C1218",
        borderColor: "rgba(236,235,228,0.08)",
      }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="px-4 pt-5 pb-6">
        <Link to="/home" className="flex items-center gap-0">
          <span
            className="font-bold text-base tracking-tight"
            style={{ color: "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}
          >
            UniAuction
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-3 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path + item.label}
              to={item.path}
              className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13px] font-medium transition-colors relative"
              style={{
                color: isActive ? "#6CEEEE" : "#888",
                backgroundColor: isActive ? "rgba(108,238,238,0.08)" : "transparent",
              }}
            >
              {/* Active indicator bar */}
              {isActive && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full"
                  style={{ height: 20, backgroundColor: "#6CEEEE" }}
                />
              )}
              {item.icon(isActive)}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User at bottom */}
      <div className="px-3 pb-5 flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
          style={{ backgroundColor: "#1F2A36", border: "1px solid rgba(236,235,228,0.15)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-medium truncate" style={{ color: "#ECEBE4" }}>Raja the</p>
          <p className="text-[11px] truncate" style={{ color: "#888" }}>great</p>
        </div>
      </div>
    </aside>
  );
}