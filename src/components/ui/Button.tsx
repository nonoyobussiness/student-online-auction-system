import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonTheme = "dark" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

/* ================= SIZE ================= */

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-7 px-3 text-[12px] rounded-[20px]",
  md: "h-10 px-4 text-[17px] rounded-[10px]",
  lg: "h-12 px-6 text-[18px] rounded-[5px]",
};

/* ================= COLORS ================= */

const styles = {
  dark: {
    primary:
      "bg-[hsl(var(--btn-primary-bg))] text-[hsl(var(--btn-primary-text))] hover:bg-[hsl(var(--btn-primary-bg)/0.85)] hover:shadow-md",
    secondary:
      "bg-[hsl(var(--btn-secondary-bg))] text-[hsl(var(--btn-secondary-text))] hover:bg-[hsl(var(--btn-secondary-bg)/0.75)] hover:shadow-sm",
  },
  light: {
    primary:
      "bg-[hsl(var(--btn-primary-bg-light))] text-[hsl(var(--btn-primary-text-light))] hover:bg-[hsl(var(--btn-primary-bg-light)/0.80)] hover:shadow-md",
    secondary:
      "bg-[hsl(var(--btn-secondary-bg-light))] text-[hsl(var(--btn-secondary-text-light))] hover:bg-[hsl(var(--btn-secondary-bg-light)/0.75)] hover:shadow-sm",
  },
};

export default function Button({
  variant = "primary",
  theme = "dark",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${base}
        ${sizeStyles[size]}
        ${styles[theme][variant]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
}