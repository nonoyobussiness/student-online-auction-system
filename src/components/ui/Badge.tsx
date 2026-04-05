import React from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type BadgeVariant =
  | "studentSeller"
  | "notification"
  | "liveBids"
  | "live"
  | "success"
  | "ended"
  | "upcoming"
  | "reserved"
  | "cancelled";

type BadgeTheme = "dark" | "light";
type BadgeSize = "desktop" | "mobile";

interface BadgeProps {
  variant: BadgeVariant;
  theme?: BadgeTheme;
  size?: BadgeSize;
  className?: string;
}

// ─── Token map ───────────────────────────────────────────────────────────────
// Each status badge: { label, dark: {bg, stroke, text}, light: {bg, stroke, text} }

const STATUS_TOKENS: Record<
  "live" | "success" | "ended" | "upcoming" | "reserved" | "cancelled",
  {
    label: string;
    dark: { bg: string; stroke: string; text: string };
    light: { bg: string; stroke: string; text: string };
  }
> = {
  live: {
    label: "Live",
    // red family — matches --color-live from design system
    dark: { bg: "rgba(226,75,74,0.15)", stroke: "#E24B4A", text: "#F09595" },
    light: { bg: "rgba(226,75,74,0.10)", stroke: "#A32D2D", text: "#A32D2D" },
  },
  success: {
    label: "Sold",
    // green family — matches --color-success
    dark: { bg: "rgba(99,153,34,0.15)", stroke: "#639922", text: "#C0DD97" },
    light: { bg: "rgba(59,109,17,0.10)", stroke: "#3B6D11", text: "#3B6D11" },
  },
  ended: {
    label: "Ended",
    // neutral gray — auction closed, no winner
    dark: { bg: "rgba(136,135,128,0.15)", stroke: "#888780", text: "#B4B2A9" },
    light: { bg: "rgba(95,94,90,0.10)", stroke: "#5F5E5A", text: "#5F5E5A" },
  },
  upcoming: {
    label: "Upcoming",
    // blue — informational / future state
    dark: { bg: "rgba(55,138,221,0.15)", stroke: "#378ADD", text: "#85B7EB" },
    light: { bg: "rgba(24,95,165,0.10)", stroke: "#185FA5", text: "#185FA5" },
  },
  reserved: {
    label: "Reserved",
    // amber — caution / conditional
    dark: { bg: "rgba(239,159,39,0.15)", stroke: "#EF9F27", text: "#FAC775" },
    light: { bg: "rgba(133,79,11,0.10)", stroke: "#854F0B", text: "#854F0B" },
  },
  cancelled: {
    label: "Cancelled",
    // coral — distinct from red "live", warmer negative
    dark: { bg: "rgba(216,90,48,0.15)", stroke: "#D85A30", text: "#F0997B" },
    light: { bg: "rgba(153,60,29,0.10)", stroke: "#993C1D", text: "#993C1D" },
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * StudentSellerOnly badge
 * Desktop: 121×22px | Mobile: 64×11px
 * Dark:  bg #357E7E@17% | stroke #20B2B2 | text #20B2B2
 * Light: bg #357E7E@17% | stroke #008080 | text #008080
 */
const StudentSellerBadge: React.FC<{
  theme: BadgeTheme;
  size: BadgeSize;
  className?: string;
}> = ({ theme, size, className = "" }) => {
  const isDark = theme === "dark";
  const isDesktop = size === "desktop";
  const strokeColor = isDark ? "#20B2B2" : "#008080";
  const textColor = isDark ? "#20B2B2" : "#008080";

  const containerStyle: React.CSSProperties = isDesktop
    ? {
        width: 121,
        height: 22,
        borderRadius: 11,
        border: `1px solid ${strokeColor}`,
        backgroundColor: "rgba(53,126,126,0.17)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }
    : {
        width: 85,
        height: 14,
        borderRadius: 5.5,
        border: `0.5px solid ${strokeColor}`,
        backgroundColor: "rgba(53,126,126,0.17)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      };

  return (
    <span style={containerStyle} className={className}>
      <span
        style={{
          color: textColor,
          fontSize: isDesktop ? 11 : 8,
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: isDesktop ? "0.01em" : "0.005em",
          whiteSpace: "nowrap",
        }}
      >
        Student Sellers Only
      </span>
    </span>
  );
};

/**
 * Notification status dot — teal, 6×6 (desktop) / 7×7 (mobile)
 */
const NotificationBadge: React.FC<{
  size?: BadgeSize;
  className?: string;
}> = ({ size = "desktop", className = "" }) => {
  const dim = size === "mobile" ? 7 : 6;
  return (
    <span
      style={{
        width: dim,
        height: dim,
        borderRadius: "50%",
        backgroundColor: "#20B2B2",
        flexShrink: 0,
        display: "inline-block",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.60), 0 0 0 2px #20B2B2",
      }}
      className={className}
    />
  );
};

/**
 * Live Bids status dot — red, 17×17
 */
const LiveBidsBadge: React.FC<{
  size?: BadgeSize;
  className?: string;
}> = ({ className = "" }) => (
  <span
    style={{
      width: 17,
      height: 17,
      borderRadius: "50%",
      backgroundColor: "#FF0000",
      display: "inline-block",
      flexShrink: 0,
      boxShadow:
        "0 0 0 1px rgba(0,0,0,0.20), inset 0 0 0 3px rgba(180,0,0,0.45)",
    }}
    className={className}
  />
);

/**
 * Status pill badges — Live, Sold, Ended, Upcoming, Reserved, Cancelled
 * Desktop: auto-width × 22px | Mobile: auto-width × 14px
 */
const StatusBadge: React.FC<{
  variant: keyof typeof STATUS_TOKENS;
  theme: BadgeTheme;
  size: BadgeSize;
  className?: string;
}> = ({ variant, theme, size, className = "" }) => {
  const token = STATUS_TOKENS[variant];
  const isDark = theme === "dark";
  const isDesktop = size === "desktop";
  const colors = isDark ? token.dark : token.light;

  const isLive = variant === "live";

  return (
    <span
      style={{
        height: isDesktop ? 22 : 14,
        paddingLeft: isDesktop ? 8 : 5,
        paddingRight: isDesktop ? 8 : 5,
        borderRadius: isDesktop ? 11 : 7,
        border: `1px solid ${colors.stroke}`,
        backgroundColor: colors.bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isLive ? (isDesktop ? 5 : 3) : 0,
        flexShrink: 0,
      }}
      className={className}
    >
      {/* pulsing dot for "Live" only */}
      {isLive && (
        <span
          style={{
            width: isDesktop ? 5 : 4,
            height: isDesktop ? 5 : 4,
            borderRadius: "50%",
            backgroundColor: colors.stroke,
            flexShrink: 0,
            display: "inline-block",
          }}
        />
      )}
      <span
        style={{
          color: colors.text,
          fontSize: isDesktop ? 11 : 7,
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {token.label}
      </span>
    </span>
  );
};

// ─── Main Badge Component ─────────────────────────────────────────────────────

/**
 * Badge — unified component for all badge variants.
 *
 * @example
 * <Badge variant="studentSeller" theme="dark" size="desktop" />
 * <Badge variant="notification" size="mobile" />
 * <Badge variant="liveBids" />
 * <Badge variant="live" theme="dark" size="desktop" />
 * <Badge variant="success" theme="light" size="mobile" />
 * <Badge variant="ended" theme="dark" size="desktop" />
 * <Badge variant="upcoming" theme="dark" size="desktop" />
 * <Badge variant="reserved" theme="light" size="desktop" />
 * <Badge variant="cancelled" theme="dark" size="mobile" />
 */
const Badge: React.FC<BadgeProps> = ({
  variant,
  theme = "dark",
  size = "desktop",
  className,
}) => {
  switch (variant) {
    case "studentSeller":
      return <StudentSellerBadge theme={theme} size={size} className={className} />;
    case "notification":
      return <NotificationBadge size={size} className={className} />;
    case "liveBids":
      return <LiveBidsBadge size={size} className={className} />;
    case "live":
    case "success":
    case "ended":
    case "upcoming":
    case "reserved":
    case "cancelled":
      return (
        <StatusBadge variant={variant} theme={theme} size={size} className={className} />
      );
    default:
      return null;
  }
};

export default Badge;

export { StudentSellerBadge, NotificationBadge, LiveBidsBadge, StatusBadge };
export type { BadgeVariant, BadgeTheme, BadgeSize, BadgeProps };