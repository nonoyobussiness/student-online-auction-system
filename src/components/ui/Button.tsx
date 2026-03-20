/**
 * Button - Reusable button component
 *
 * How to use:
 *   <Button variant="primary">Click me</Button>
 *   <Button variant="secondary" size="sm">Small</Button>
 *
 * Props:
 *   - variant: "primary" | "secondary" | "outline" - changes appearance
 *   - size: "sm" | "md" | "lg" - changes padding and text size
 *   - fullWidth: makes button span full container width
 */

import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-hover text-foreground shadow-lg shadow-primary/30",
  secondary:
    "bg-bg-elevated border border-border hover:border-primary/50 text-foreground",
  outline:
    "border-2 border-primary text-primary hover:bg-primary-muted bg-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 rounded-lg",
  md: "text-sm px-4 py-2.5 rounded-xl",
  lg: "text-base px-6 py-3 rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        font-semibold transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg-elevated
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full flex items-center justify-center" : ""}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
