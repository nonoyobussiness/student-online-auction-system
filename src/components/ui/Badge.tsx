/**
 * Badge - Small status indicator component
 *
 * How to use:
 *   <Badge variant="live">Live</Badge>
 *   <Badge variant="timer">2h left</Badge>
 *   <Badge variant="default">New</Badge>
 *
 * Use for: "Live" indicator, countdown timers, status labels
 */

import type { ReactNode } from "react";

type BadgeVariant = "live" | "timer" | "success" | "default";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  live: "bg-live/20 text-red-400 border border-red-500/30",
  timer: "bg-warning/20 text-amber-400 border border-amber-500/30",
  success: "bg-success/20 text-green-400 border border-green-500/30",
  default: "bg-bg-elevated text-text-muted border border-border",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold
        ${variantStyles[variant]}
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
      {children}
    </span>
  );
}
