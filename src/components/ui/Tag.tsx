/**
 * Tag - Category pill / chip component
 *
 * How to use:
 *   <Tag>Electronics</Tag>
 *   <Tag active>Books</Tag>
 *   <Tag onClick={...}>Clickable</Tag>
 *
 * Use for: category filters, labels, keywords
 */

import type { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  /** When true, shows as selected/active state */
  active?: boolean;
  /** Makes tag clickable */
  onClick?: () => void;
  className?: string;
  ariaLabel?: string; // Custom aria-label for accessibility
}

export default function Tag({
  children,
  active = false,
  onClick,
  className = "",
  ariaLabel,
}: TagProps) {
  const isClickable = !!onClick;

  const activeClass = active
    ? "bg-primary text-foreground"
    : "bg-bg-elevated border border-border text-muted hover:border-primary/50";

  const baseStyles = [
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
    "transition-colors duration-200",
    isClickable ? "cursor-pointer hover:bg-primary/30" : "",
    activeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isClickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseStyles}
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        style={{ outline: "none" }}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  )
};
