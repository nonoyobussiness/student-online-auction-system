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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ariaLabel?: string; // Custom aria-label for accessibility
}


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ariaLabel, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

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
            w-full text-sm rounded-xl px-4 py-2.5 font-normal text-left
            bg-[#132023] border-2 border-[#20B2B2]
            text-foreground placeholder:text-subtle
            outline-none transition-all duration-200
            focus:bg-[#1a2d31] focus:border-[#2ec4c4] focus:ring-2 focus:ring-[#20B2B2]/30 focus:outline-none
            disabled:bg-[#132023]/40 disabled:border-[#20B2B2]/40 disabled:cursor-not-allowed
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
