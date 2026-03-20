/**
 * Card - Base container component for content blocks
 *
 * How to use:
 *   <Card>
 *     <h3>Title</h3>
 *     <p>Content goes here</p>
 *   </Card>
 *
 *   <Card padding="none">Content with no padding</Card>
 *
 * Use for: auction cards, info boxes, feature blocks
 */

import type { ReactNode } from "react";

type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps {
  children: ReactNode;
  /** Padding size - "none" removes default padding */
  padding?: CardPadding;
  /** Optional click handler - makes card interactive */
  onClick?: () => void;
  className?: string;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export default function Card({
  children,
  padding = "md",
  onClick,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl bg-bg-card border border-border
        backdrop-blur-sm
        ${paddingStyles[padding]}
        ${onClick ? "cursor-pointer hover:border-primary/50 transition-colors" : ""}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
