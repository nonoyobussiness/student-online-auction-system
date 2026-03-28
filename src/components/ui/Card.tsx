/**
 * Card - Premium UI container (Design System)
 */

import type { ReactNode } from "react";

type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps {
  children: ReactNode;
  padding?: CardPadding;
  onClick?: () => void;
  className?: string;
  hover?: boolean;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
};

export default function Card({
  children,
  padding = "md",
  onClick,
  className = "",
  hover = true,
}: CardProps) {
  const isInteractive = !!onClick;

  return (
    <div
      className={`
        relative
        rounded-2xl
        bg-[linear-gradient(180deg,#0f2a2e,#0b1f23)]
        border border-white/10

        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        transition-all duration-300 ease-out

        ${paddingStyles[padding]}

        ${
          hover || isInteractive
            ? "hover:shadow-[0_10px_30px_rgba(45,212,191,0.15)] hover:-translate-y-1 hover:border-teal-400/40"
            : ""
        }

        ${
          isInteractive
            ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400/40"
            : ""
        }

        ${className}
      `.trim().replace(/\s+/g, " ")}
      onClick={onClick}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {/* subtle glow overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {children}
    </div>
  );
}