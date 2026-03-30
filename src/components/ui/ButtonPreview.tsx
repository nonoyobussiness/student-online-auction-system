import Button from "./Button";

export default function ButtonPreview() {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-bg))] p-8 space-y-10">
      
      {/* ================= PRIMARY (DARK) ================= */}
      <Section title="Primary (Dark)">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </Section>

      {/* ================= SECONDARY (DARK) ================= */}
      <Section title="Secondary (Dark)">
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </Section>

      {/* ================= PRIMARY (LIGHT) ================= */}
      <Section title="Primary (Light)">
        <Button theme="light" size="sm">Small</Button>
        <Button theme="light">Medium</Button>
        <Button theme="light" size="lg">Large</Button>
      </Section>

      {/* ================= SECONDARY (LIGHT) ================= */}
      <Section title="Secondary (Light)">
        <Button theme="light" variant="secondary" size="sm">Small</Button>
        <Button theme="light" variant="secondary">Medium</Button>
        <Button theme="light" variant="secondary" size="lg">Large</Button>
      </Section>

      {/* ================= REAL USE CASES ================= */}
      <Section title="Real Buttons (From Design)">
        <Button variant="secondary">Sign up</Button>
        <Button>+ Start Selling</Button>
        <Button size="sm">Place Bid</Button>
        <Button size="lg">Get Started Now</Button>
      </Section>

      {/* ================= LIGHT USE CASES ================= */}
      <Section title="Real Buttons (Light)">
        <Button theme="light" variant="secondary">Sign up</Button>
        <Button theme="light">+ Start Selling</Button>
        <Button theme="light" size="sm">Place Bid</Button>
        <Button theme="light" size="lg">Get Started Now</Button>
      </Section>

      {/* ================= WIDTH TEST ================= */}
      <Section title="Layout Behavior">
        <Button className="w-full">Full Width</Button>
        <Button className="w-[200px]">Fixed Width</Button>
        <Button>Auto Width</Button>
      </Section>

    </div>
  );
}

/* ================= REUSABLE SECTION ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="flex gap-4 flex-wrap">{children}</div>
    </div>
  );
}