/**
 * HowItWorks - Explains the 3-step process to users
 * Simple, scannable layout for beginners.
 */

const STEPS = [
  {
    number: 1,
    title: "Sign up",
    description: "Register with your university email to join the platform.",
  },
  {
    number: 2,
    title: "List or bid",
    description: "List items to sell or browse and place bids on auctions.",
  },
  {
    number: 3,
    title: "Meet & exchange",
    description: "Coordinate with the winner to complete the exchange on campus.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-label="How UniAuction works">
      <h2 className="text-subheading text-foreground mb-6">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step) => (
          <div key={step.number} className="flex flex-col items-start">
            <div
              className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-lg"
              aria-hidden
            >
              {step.number}
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
