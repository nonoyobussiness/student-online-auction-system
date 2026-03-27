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

type TagVariant = "main" | "normal";

export interface TagProps {
  children: ReactNode;
  /** When true, shows as selected/active state */
  active?: boolean;
  /** Visual style variant */
  variant?: TagVariant;
  /** Makes tag clickable */
  onClick?: () => void;
  className?: string;
  ariaLabel?: string; // Custom aria-label for accessibility
}

export default function Tag({
  children,
  active = false,
  variant = "normal",
  onClick,
  className = "",
  ariaLabel,
}: TagProps) {
  const isClickable = !!onClick;

  const variantStyles: Record<TagVariant, string> = {
    main: "bg-[rgba(32,178,178,1)] text-[#131B23]",
    normal: "bg-[rgba(53,126,126,0.17)] text-[#FFFFFF]",
  };

  const baseStyles = [
    "inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-normal text-center",
    "transition-colors duration-200",
    "border-0",
    variantStyles[variant],
    isClickable ? "cursor-pointer hover:opacity-85" : "",
    active ? "opacity-100" : "",
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
        style={{ outline: "none", fontFamily: '"DM Sans", sans-serif' }}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={baseStyles}
      aria-label={ariaLabel}
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      {children}
    </span>
  );
}
