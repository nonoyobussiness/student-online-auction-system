/**
 * HowItWorks - "How UniAuction Works?" centered title, 3 steps horizontally
 * Matches design: icon in box, title, description, 3 columns
 */

interface HowItWorksProps {
  theme?: "dark" | "light";
}

const STEPS = [
  {
    number: 1,
    title: "Find Your Item",
    description: "Browse thousands of student listed items across campus. Filter by condition or distance",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Place Your Bid",
    description: "Set your maximum price and let our system bid for you. Track auctions in real-time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Secure Exchange",
    description: "Meet up safely on campus or choose secure delivery. Funds are held until you confirm",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function HowItWorks({ theme = "dark" }: HowItWorksProps) {
  const isDark = theme === "dark";

  return (
    <section aria-label="How UniAuction works" className="py-8">
      <h2
        className="text-2xl font-bold text-center mb-10"
        style={{
          color: isDark ? "#ECEBE4" : "#131B23",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        How UniAuction Works?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            {/* Icon box */}
            <div
              className="flex items-center justify-center rounded-2xl mb-4"
              style={{
                width: 72,
                height: 72,
                backgroundColor: isDark ? "rgba(12,18,24,0.8)" : "rgba(53,126,126,0.12)",
                border: `1px solid ${isDark ? "rgba(236,235,228,0.1)" : "rgba(53,126,126,0.2)"}`,
                color: isDark ? "#ECEBE4" : "#20B2B2",
              }}
            >
              {step.icon}
            </div>

            <h3
              className="text-base font-bold mb-2"
              style={{
                color: isDark ? "#ECEBE4" : "#131B23",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {step.number}. {step.title}
            </h3>

            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: isDark ? "rgba(236,235,228,0.55)" : "rgba(19,27,35,0.6)" }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}