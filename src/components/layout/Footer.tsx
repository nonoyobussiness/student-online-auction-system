/**
 * Footer - Matches design exactly
 * Left: "got any issues? Let's Talk"
 * Right: Support, Address, Socials columns
 * Bottom: copyright + Privacy Policy + Cookie settings
 */

interface FooterProps {
  theme?: "dark" | "light";
}

export default function Footer({ theme = "dark" }: FooterProps) {
  const isDark = theme === "dark";

  const textMain = isDark ? "#ECEBE4" : "#131B23";
  const textMuted = isDark ? "rgba(236,235,228,0.5)" : "rgba(19,27,35,0.5)";
  const textLink = isDark ? "rgba(236,235,228,0.6)" : "rgba(19,27,35,0.6)";
  const borderColor = isDark ? "rgba(236,235,228,0.08)" : "rgba(19,27,35,0.1)";

  return (
    <footer
      role="contentinfo"
      className="bg-[rgba(36,123,123,0.14)]"
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      {/* Main footer content */}
      <div className="px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: Let's Talk */}
          <div className="flex-1">
            <p
              className="text-sm mb-1"
              style={{ color: textMuted, fontFamily: "DM Sans, sans-serif" }}
            >
              got any issues?
            </p>
            <h3
              className="text-3xl font-bold"
              style={{ color: "#20B2B2", fontFamily: "DM Sans, sans-serif" }}
            >
              Let's Talk
            </h3>
          </div>

          {/* Right: columns */}
          <div className="flex flex-wrap gap-12">
            {/* Support */}
            <div>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: textMain, fontFamily: "DM Sans, sans-serif" }}
              >
                Support:
              </p>
              <div className="flex flex-col gap-1.5">
                {["Help Center", "Safety Tips", "Terms of Service", "Contact Us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs transition hover:opacity-80"
                    style={{ color: textLink, fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: textMain, fontFamily: "DM Sans, sans-serif" }}
              >
                Address:
              </p>
              <div className="flex flex-col gap-0.5">
                {["Mahindra University,", "Bahadurpally, Jeedimetla,", "Hyderabad"].map((line) => (
                  <p
                    key={line}
                    className="text-xs"
                    style={{ color: textLink, fontFamily: "DM Sans, sans-serif" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: textMain, fontFamily: "DM Sans, sans-serif" }}
              >
                Socials:
              </p>
              <div className="flex flex-col gap-1.5">
                {["Instagram", "Twitter", "LinkedIn"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs transition hover:opacity-80"
                    style={{ color: textLink, fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: `1px solid ${borderColor}` }}
      >
        <p className="text-[11px]" style={{ color: textMuted }}>
          © {new Date().getFullYear()} UniAuction Technologies. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {["Privacy Policy", "Accessibility", "Cookie settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] transition hover:opacity-80"
              style={{ color: textMuted }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
