/**
 * HeroSection - Homepage hero matching design exactly
 * "Buy. Sell. Bid." teal + "Discover Campus Auctions." white
 */

export default function HeroSection() {
  return (
    <section aria-label="Welcome to UniAuction" className="pt-2">
      <h1
        className="text-[38px] font-bold leading-tight tracking-tight"
        style={{ fontFamily: "DM Sans, sans-serif", color: "#ECEBE4" }}
      >
        <span style={{ color: "#6CEEEE" }}>Buy. Sell. Bid.</span>
        {" "}
        <span style={{ color: "#ECEBE4" }}>Discover Campus Auctions.</span>
      </h1>
      <p
        className="mt-3 text-sm leading-relaxed max-w-md"
        style={{ color: "rgba(236,235,228,0.55)", fontFamily: "DM Sans, sans-serif" }}
      >
        The exclusive student marketplace for safe, fast and local campus bidding.
      </p>
    </section>
  );
}