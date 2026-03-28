/**
 * Input - Reusable form input component
 *
 * How to use:
 *   <Input placeholder="Enter email" value={email} onChange={...} />
 *   <Input label="Password" type="password" />
 *
 * Props:
 *   - label: optional label above the input
 *   - error: optional error message (shows in red below input)
 *   - All standard HTML input attributes (type, placeholder, etc.)
 */

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputTheme = "light" | "dark";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ariaLabel?: string; // Custom aria-label for accessibility
  theme?: InputTheme;
}


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ariaLabel, theme = "dark", ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    const themeStyles: Record<InputTheme, string> = {
      light: [
        "bg-[#ECEBE4] border-2 border-[#20B2B2]",
        "text-[#131B23] text-left placeholder:text-[#131B23]/60",
        "shadow-[0_0_0_1px_rgba(32,178,178,1),0_8px_18px_rgba(32,178,178,0.22)]",
        "focus:bg-[#ECEBE4] focus:border-[#20B2B2] focus:ring-2 focus:ring-[#20B2B2]/35",
        "disabled:bg-[#ECEBE4]/70 disabled:border-[#20B2B2]/55 disabled:text-[#131B23]/60 disabled:shadow-none",
      ].join(" "),
      dark: [
        "bg-[#132023] border-2 border-[#20B2B2]",
        "text-foreground text-left placeholder:text-subtle",
        "focus:bg-[#1a2d31] focus:border-[#2ec4c4] focus:ring-2 focus:ring-[#20B2B2]/30",
        "disabled:bg-[#132023]/40 disabled:border-[#20B2B2]/40",
      ].join(" "),
    };

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-muted"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-label={ariaLabel}
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className={`
            w-full text-sm rounded-xl px-4 py-2.5 font-normal
            outline-none transition-all duration-200
            ${themeStyles[theme]}
            focus:outline-none
            disabled:cursor-not-allowed
            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}
          `.trim().replace(/\s+/g, " ")}
          tabIndex={0}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
