import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "primaryLight"
  | "secondaryLight"
  | "Login"
  | "Start Selling"
  | "Get Started"
  | "signup"
  | "viewall"
  | "LoginLight"
  | "StartSellingLight"
  | "GetStartedLight"
  | "signupLight"
  | "viewallLight"
  | "PlaceBid"
  | "PlaceBidLight";
type ButtonSize = "sm" | "md" | "lg" | "compact" | "xl" | "xxl";
type ButtonRadius = "pill" | "rounded" | "smallpill";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-400 text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  secondary:
    "bg-[#0F2A33] text-white border border-[#1E3A43] hover:border-teal-400/40 hover:bg-[#12343F] focus:ring-2 focus:ring-teal-400/20",

  outline:
    "border border-teal-400/60 text-teal-300 hover:bg-teal-400/10 hover:border-teal-400 focus:ring-2 focus:ring-teal-400/30",

  ghost:
    "text-gray-300 hover:bg-[#12343F] focus:ring-2 focus:ring-teal-400/20",

  primaryLight:
  "bg-white text-teal-500 border border-teal-400/40 shadow-sm hover:bg-teal-50 hover:text-teal-600 hover:border-teal-500 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/30",

  secondaryLight:
  "bg-[#008080] text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  "Login":
  "bg-teal-400 radius= pill text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  "Start Selling":
  "bg-teal-400 radius= rounded text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  "Get Started":
  "bg-teal-400 radius= rounded text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  signup:
  "bg-white radius= pill text-teal-500 border border-teal-400/40 shadow-sm hover:bg-teal-50 hover:text-teal-600 hover:border-teal-500 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/30",

  viewall:
  "bg-teal-400 radius = smallpill text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  PlaceBid:
  "bg-teal-400 radius = smallpill text-black shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  LoginLight:
  "bg-[#008080] text-white shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  StartSellingLight:
  "bg-[#008080] text-white shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  GetStartedLight:
  "bg-[#008080] text-white shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",

  signupLight:
  "bg-[#0F2A33] text-teal-300 border border-[#1E3A43] hover:border-teal-400/40 hover:bg-[#12343F] focus:ring-2 focus:ring-teal-400/20",

  viewallLight:
  "bg-[#008080] text-white shadow-md shadow-teal-400/30 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40 hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/40",
  
  PlaceBidLight:
  "bg-white radius= smallpill text-teal-500 border border-teal-400/40 shadow-sm hover:bg-teal-50 hover:text-teal-600 hover:border-teal-500 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 focus:ring-2 focus:ring-teal-400/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-2 py-1 sm:px-3 sm:py-1.5",
  md: "text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-1.5",
  lg: "text-sm px-4 py-1.5 sm:text-base sm:px-6 sm:py-2",
  compact: "text-xs px-2 py-1 sm:px-3 sm:py-1.5",
  xl: "text-sm px-5 py-1.5 sm:px-7 sm:py-1.5",
  xxl: "text-sm px-6 py-1.5 sm:px-10 sm:py-1.5",
};

const radiusStyles: Record<ButtonRadius, string> = {
  pill: "rounded-md px-3 py-1.5",
  rounded: "rounded-sm px-5 py-2", // your main style
  smallpill: "rounded-full px-3 py-1.5", // fully rounded
};

function Button({
  variant = "primary",
  radius = "pill",
  fullWidth = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps & { radius?: ButtonRadius }) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium
      transition-all duration-200 ease-out
      ${variantStyles[variant]}
      ${radiusStyles[radius]}
      ${fullWidth ? "w-full" : "w-auto sm:w-auto"}
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}`.trim().replace(/\s+/g, " ")}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;