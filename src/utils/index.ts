/**
 * UniAuction - Utility functions
 * Add helper functions here (e.g., formatPrice, formatDate).
 */

/** Format a number as currency */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Format a date for display */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
  }).format(new Date(date));
}
