import type { ReactNode } from "react";

type CardPadding = "none" | "sm" | "md" | "lg";
type CardVariant = "default" | "elevated" | "auction";
type CardTheme = "dark" | "light";

export interface CardProps {
  children: ReactNode;
  padding?: CardPadding;
  variant?: CardVariant;
  theme?: CardTheme;
  onClick?: () => void;
  className?: string;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const baseStyles = `
  rounded-xl
  overflow-hidden
  transition-all duration-300 ease-out
`;

const themeStyles: Record<CardTheme, string> = {
  dark: `
    bg-[#0B1F23]
    border border-[#1E3A3F]
  `,
  light: `
    bg-white
    border border-gray-200
  `,
};

const variantStyles: Record<CardVariant, string> = {
  default: "",
  elevated: "shadow-lg",
  auction: "w-[220px]", // 👈 exact size from design
};

const hoverStyles: Record<CardTheme, string> = {
  dark: `
    hover:shadow-md
    hover:-translate-y-[2px]
  `,
  light: `
    hover:shadow-lg
    hover:-translate-y-[2px]
  `,
};

export default function Card({
  children,
  padding = "md",
  variant = "default",
  theme = "dark",
  onClick,
  className = "",
}: CardProps) {
  const isInteractive = !!onClick;

  return (
    <div
      className={`
        ${baseStyles}
        ${themeStyles[theme]}
        ${paddingStyles[padding]}
        ${variantStyles[variant]}

        ${isInteractive ? `cursor-pointer ${hoverStyles[theme]}` : ""}

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
      {children}
    </div>
  );
}