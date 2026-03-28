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
type TagTheme = "light" | "dark";

export interface TagProps {
  children: ReactNode;
  /** When true, shows as selected/active state */
  active?: boolean;
  /** Visual style variant */
  variant?: TagVariant;
  /** Theme style variant */
  theme?: TagTheme;
  /** Makes tag clickable */
  onClick?: () => void;
  className?: string;
  ariaLabel?: string; // Custom aria-label for accessibility
}

export default function Tag({
  children,
  active = false,
  variant = "normal",
  theme = "dark",
  onClick,
  className = "",
  ariaLabel,
}: TagProps) {
  const isClickable = !!onClick;

  const variantStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "bg-[rgba(32,178,178,1)] text-[#131B23]",
      normal: "bg-[rgba(53,126,126,0.17)] text-[#FFFFFF]",
    },
    light: {
      main: "bg-[rgba(32,178,178,1)] text-[#FFFFFF]",
      normal: "bg-[rgba(53,126,126,0.17)] text-[#131B23]",
    },
  };

  const hoverStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "hover:bg-[rgba(86,224,224,1)]",
      normal: "hover:bg-[rgba(53,126,126,0.5)]",
    },
    light: {
      main: "hover:bg-[rgba(45,148,148,1)]",
      normal: "hover:bg-[rgba(53,126,126,0.33)]",
    },
  };

  const activeStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "bg-[rgba(108,238,238,1)] text-[#131B23]",
      normal: "bg-[rgba(53,126,126,0.65)] text-[#FFFFFF]",
    },
    light: {
      main: "bg-[rgba(28,116,116,1)] text-[#FFFFFF]",
      normal: "bg-[rgba(53,126,126,0.5)] text-[#131B23]",
    },
  };

  const baseStyles = [
    "inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-normal text-center",
    "transition-colors duration-200",
    "border-0",
    active ? activeStyles[theme][variant] : variantStyles[theme][variant],
    active ? "" : hoverStyles[theme][variant],
    isClickable ? "cursor-pointer" : "",
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
