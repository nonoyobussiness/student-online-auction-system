/**
 * PromoBanner - Promotional or announcement banner
 * Use for new features, seasonal offers, announcements.
 */

import { Button } from "../ui";

export default function PromoBanner() {
  return (
    <section
      className="rounded-xl bg-primary/10 border border-primary/30 p-6 sm:p-8"
      aria-label="Promotion"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            First time here?
          </h3>
          <p className="text-muted text-sm mt-1">
            Create your first listing in under 2 minutes. No fees for students.
          </p>
        </div>
        <Button variant="primary" size="md">
          List an item
        </Button>
      </div>
    </section>
  );
}
