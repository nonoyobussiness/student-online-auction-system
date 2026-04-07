/**
 * PageShell - Shared layout: Sidebar + Navbar + MobileHeader + content
 * All inner pages wrap in this.
 */

import type { ReactNode } from "react";
import { Navbar, Sidebar, MobileHeader } from "./index";
import { useApp } from "../../context/AppContext";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const { theme } = useApp();
  const bg = theme === "dark" ? "#0C1218" : "#ECEBE4";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: bg }}>
      <Navbar />
      <MobileHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}