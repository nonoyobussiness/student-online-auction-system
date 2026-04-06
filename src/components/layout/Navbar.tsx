/**
 * Navbar - Top navigation bar matching design exactly
 * Search bar center, wallet/bell/theme/user on right, no logo (sidebar has it)
 */

import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <header
      className="hidden lg:flex sticky top-0 z-50 items-center gap-4 px-5"
      style={{
        height: 52,
        backgroundColor: "#0C1218",
        borderBottom: "1px solid rgba(236,235,228,0.08)",
      }}
      role="banner"
    >
      {/* Search bar - takes most of the space */}
      <div className="flex-1 flex items-center max-w-[500px]">
        <div
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg"
          style={{
            backgroundColor: "rgba(236,235,228,0.06)",
            border: "1px solid rgba(236,235,228,0.1)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Find Books, Tools and Food"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Wallet badge */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
          style={{ backgroundColor: "rgba(108,238,238,0.12)", border: "1px solid rgba(108,238,238,0.25)" }}
        >
          <span className="text-xs font-bold" style={{ color: "#6CEEEE" }}>U</span>
          <span className="text-sm font-semibold" style={{ color: "#ECEBE4" }}>2700</span>
        </div>

        {/* Bell */}
        <button
          type="button"
          className="relative w-8 h-8 flex items-center justify-center rounded-lg transition"
          style={{ color: "#888" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          {/* Notification dot */}
          <span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#6CEEEE" }}
          />
        </button>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 flex items-center justify-center rounded-lg transition"
          style={{ color: "#888" }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 10H0H0.75ZM10 19.25V20V19.25ZM10 0.75V0V0.75ZM0.75 10H0C0 12.6522 1.05357 15.1957 2.92893 17.0711L3.45926 16.5407L3.98959 16.0104C2.39553 14.4163 1.5 12.2543 1.5 10H0.75ZM3.45926 16.5407L2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20V19.25V18.5C7.74566 18.5 5.58365 17.6045 3.98959 16.0104L3.45926 16.5407ZM10 19.25H10.75V0.75H10H9.25V19.25H10ZM10 0.75V0C7.34784 0 4.8043 1.05357 2.92893 2.92893L3.45926 3.45926L3.98959 3.98959C5.58365 2.39553 7.74566 1.5 10 1.5V0.75ZM3.45926 3.45926L2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10H0.75H1.5C1.5 7.74566 2.39553 5.58365 3.98959 3.98959L3.45926 3.45926ZM10 19.25V20C12.6522 20 15.1957 18.9464 17.0711 17.0711L16.5407 16.5407L16.0104 16.0104C14.4163 17.6045 12.2543 18.5 10 18.5V19.25ZM16.5407 16.5407L17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10H19.25H18.5C18.5 12.2543 17.6045 14.4163 16.0104 16.0104L16.5407 16.5407ZM19.25 10H20C20 7.34784 18.9464 4.8043 17.0711 2.92893L16.5407 3.45926L16.0104 3.98959C17.6045 5.58365 18.5 7.74566 18.5 10H19.25ZM16.5407 3.45926L17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V0.75V1.5C12.2543 1.5 14.4163 2.39553 16.0104 3.98959L16.5407 3.45926Z" fill="#888"/>
          </svg>
        </button>

        {/* User avatar */}
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full transition"
          style={{ backgroundColor: "#1F2A36", border: "1px solid rgba(236,235,228,0.15)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
