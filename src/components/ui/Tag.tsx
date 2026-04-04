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

import { useState } from "react";
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
  ariaLabel?: string;
  /** Custom active background color */
  lightThemeActiveBg?: string;
  /** Custom active text color */
  lightThemeActiveText?: string;
  /** Custom inactive background color */
  lightThemeInactiveBg?: string;
  /** Custom inactive text color */
  lightThemeInactiveText?: string;
}

export default function Tag({
  children,
  active,
  variant = "normal",
  theme = "dark",
  onClick,
  className = "",
  ariaLabel,
  lightThemeActiveBg,
  lightThemeActiveText,
  lightThemeInactiveBg,
  lightThemeInactiveText,
}: TagProps) {
  const isClickable = !!onClick;
  const isControlled = typeof active === "boolean";
  const [internalActive, setInternalActive] = useState(false);
  const isActive = isControlled ? active : internalActive;

  const normalStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "tag-dark-main",
      normal: "tag-dark-normal",
    },
    light: {
      main: lightThemeActiveBg ? `bg-[${lightThemeActiveBg}]` : "tag-light-main",
      normal: lightThemeInactiveBg ? `bg-[${lightThemeInactiveBg}] text-[${lightThemeInactiveText}]` : "tag-light-normal",
    },
  };

  const hoverStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "tag-dark-main-hover",
      normal: "tag-dark-normal-hover",
    },
    light: {
      main: "tag-light-main-hover",
      normal: lightThemeInactiveBg ? `bg-[${lightThemeInactiveBg}] opacity-80` : "tag-light-normal-hover",
    },
  };

  const activeStyles: Record<TagTheme, Record<TagVariant, string>> = {
    dark: {
      main: "bg-[rgba(108,238,238,1)] text-[#131B23]",
      normal: "bg-[rgba(108,238,238,1)] text-[#131B23]",
    },
    light: {
      main: lightThemeActiveBg && lightThemeActiveText 
        ? `bg-[${lightThemeActiveBg}] text-[${lightThemeActiveText}]` 
        : "bg-[rgba(32,178,178,1)] text-[#FFFFFF]",
      normal: lightThemeActiveBg && lightThemeActiveText 
        ? `bg-[${lightThemeActiveBg}] text-[${lightThemeActiveText}]` 
        : "bg-[rgba(32,178,178,1)] text-[#FFFFFF]",
    },
  };

  const baseStyles = [
    "ui-tag",
    "transition-colors duration-200",
    "border-0",
    isActive ? activeStyles[theme][variant] : normalStyles[theme][variant],
    isActive ? "" : hoverStyles[theme][variant],
    isClickable ? "cursor-pointer" : "",
    isActive ? "opacity-100" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    if (!onClick) return;
    if (!isControlled) setInternalActive((prev) => !prev);
    onClick();
  };

  if (isClickable) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={baseStyles}
        aria-label={ariaLabel}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
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
  );
}