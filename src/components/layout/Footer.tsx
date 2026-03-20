/**
 * Footer - Site footer with links and copyright
 */

import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "About", path: "#" },
  { label: "Terms", path: "#" },
  { label: "Privacy", path: "#" },
  { label: "Contact", path: "#" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border bg-bg-elevated mt-auto"
      role="contentinfo"
    >
      <div className="container-narrow py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">UniAuction</span>
            <span className="text-subtle text-sm">
              Campus marketplace for students
            </span>
          </div>
          <nav className="flex flex-wrap gap-4" aria-label="Footer links">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-subtle text-xs mt-6">
          © {new Date().getFullYear()} UniAuction. For verified students only.
        </p>
      </div>
    </footer>
  );
}
