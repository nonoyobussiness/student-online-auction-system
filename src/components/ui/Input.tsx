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
          className={`
            w-full text-sm rounded-xl px-4 py-2.5
            bg-bg-card border border-border
            text-foreground placeholder:text-subtle
            outline-none transition
            focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
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
