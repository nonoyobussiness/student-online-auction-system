import Card from "../components/ui/Card";

export default function CardPreview() {
  return (
    <div className="min-h-screen bg-[#0C1218] px-4 py-10 md:px-8 md:py-12 space-y-14">
      <h1 className="text-2xl md:text-3xl font-bold text-[#ECEBE4]">Card Component Preview</h1>

      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-[#ECEBE4]">Auction Card</h2>
        <div className="flex flex-wrap gap-5">
          <Card
            variant="auction"
            theme="dark"
            title="Yamaha F310"
            timerPrefix="02"
            timerSuffix=":34:56"
            remaining="remaining"
            currentBid="95"
            placeBidLabel="Place Bid"
            currencySymbol="U"
          />
          <Card
            variant="auction"
            theme="light"
            title="Canon EOS 200D"
            timerPrefix="09"
            timerSuffix=":12:44"
            remaining="remaining"
            currentBid="135"
            placeBidLabel="Place Bid"
            currencySymbol="U"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-[#ECEBE4]">CTA Card</h2>
        <div className="space-y-4">
          <Card
            variant="cta"
            theme="dark"
            heading="Turn your old gear into cash in minutes"
            bodyText="List your item, set your reserve, and receive bids from verified students across campus."
            ctaLabel="Get Started Now"
          />
          <Card
            variant="cta"
            theme="light"
            heading="Get your first bid today"
            bodyText="Fast listing flow, trusted buyers, and secure bidding experience built for students."
            ctaLabel="Start Selling"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-[#ECEBE4]">How It Works Card</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            variant="how-it-works"
            theme="dark"
            heading="1. Find Your Item"
            description="Browse thousands of student listings and quickly filter by category."
            icon={<span className="text-[#ECEBE4] text-2xl">Q</span>}
          />
          <Card
            variant="how-it-works"
            theme="light"
            heading="2. Place Your Bid"
            description="Bid in real-time and stay updated with clear auction timers."
            icon={<span className="text-[#131B23] text-2xl">P</span>}
          />
        </div>
      </section>
    </div>
  );
}
