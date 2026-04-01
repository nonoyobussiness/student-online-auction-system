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
        "ui-input-light",
      ].join(" "),
      dark: [
        "ui-input-dark",
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
          className={`
            ui-input w-full text-sm rounded-xl px-4 py-2.5 font-normal
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
