/**
 * HeroSection - Updated with theme + responsive (clean version)
 */

type HeroSectionProps = {
  theme?: "dark" | "light";
};

export default function HeroSection({ theme = "dark" }: HeroSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1
          className={`
            font-bold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            ${isDark ? "text-white" : "text-gray-900"}
          `}
        >
          <span className="text-[#14b8a6] font-bold">
            Buy. Sell. Bid.
          </span>{" "}
          Discover Campus Auctions.
        </h1>

        {/* Subtitle */}
        <p
          className={`
            mt-2 max-w-2xl
            text-sm sm:text-base md:text-lg
            ${isDark ? "text-gray-300" : "text-gray-600"}
          `}
        >
          The exclusive student marketplace for safe, fast and local campus bidding.
        </p>

      </div>
    </section>
  );
}