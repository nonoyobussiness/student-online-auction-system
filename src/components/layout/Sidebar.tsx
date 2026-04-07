/**
 * Sidebar - Minimal navigation with desktop rail and mobile drawer
 */

import { useEffect, useState } from "react";
import {
  Clock3,
  Home,
  PlusSquare,
  Settings,
  User,
  Wallet,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  icon: typeof Home;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/home", icon: Home },
  { label: "Sell", path: "/sell", icon: PlusSquare },
  { label: "History", path: "/history", icon: Clock3 },
  { label: "Wallet", path: "/wallet", icon: Wallet },
  { label: "Settings", path: "/settings", icon: Settings },
];

function SidebarNavItem({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
        active
          ? "text-[var(--app-primary)]"
          : "text-[var(--app-muted)] hover:text-[var(--app-foreground)]",
      ].join(" ")}
      style={{ backgroundColor: active ? "var(--app-hover)" : "transparent" }}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={2.1} />
      <span className="truncate">{item.label}</span>
      {active ? (
        <span
          className="absolute inset-y-0 right-0 w-[3px] rounded-l-full"
          style={{ backgroundColor: "var(--app-active-bar)" }}
        />
      ) : null}
    </Link>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen flex-col border-r bg-[var(--app-bg)] px-4 py-6"
      style={{ borderColor: "var(--app-border)" }}
    >
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-4">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.path}
              item={item}
              active={pathname === item.path}
              onClick={onNavigate}
            />
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={() => {
          onNavigate?.();
          navigate("/profile");
        }}
        className="mt-auto flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-[var(--app-hover)]"
      >
        <div
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: "var(--app-surface)", color: "var(--app-primary)" }}
        >
          RG
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-medium text-[var(--app-foreground)]">
            Raja the Great
          </p>
          <p className="truncate text-sm text-[var(--app-muted)]">
            View profile
          </p>
        </div>
        <User className="ml-auto h-5 w-5 shrink-0 text-[var(--app-muted)]" />
      </button>
    </div>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const openSidebar = () => setMobileOpen(true);
    window.addEventListener("sidebar:open", openSidebar);
    return () => window.removeEventListener("sidebar:open", openSidebar);
  }, []);

  return (
    <>
      <div className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-0 h-screen">
          <SidebarContent pathname={location.pathname} />
        </div>
      </div>

      <div
        className={[
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className={[
            "absolute inset-0 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ backgroundColor: "var(--app-overlay)" }}
          aria-label="Close navigation menu"
        />

        <div
          className={[
            "absolute inset-y-0 left-0 w-72 max-w-[85vw] transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <SidebarContent
            pathname={location.pathname}
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
