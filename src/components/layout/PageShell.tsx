/**
 * PageShell - Shared layout: Sidebar + Navbar + MobileHeader + content
 * All inner pages wrap in this.
 */

import type { ReactNode } from "react";
import { Navbar, Sidebar, MobileHeader } from "./index";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--app-bg)] text-[var(--app-foreground)]">
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
