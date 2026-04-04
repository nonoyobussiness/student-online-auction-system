import { Button } from "../ui";
import { BadgeCheck, Wallet, Gavel, Box } from "lucide-react";

type PromoBannerProps = {
  theme?: "dark" | "light";
};

export default function PromoBanner({ theme = "dark" }: PromoBannerProps) {
  const isDark = theme === "dark";

  return (
    <section className="mt-16 px-4 md:px-8">

      <div className="w-full">

        <div
          className={`
            rounded-2xl
            py-8 sm:py-10 md:py-12 px-4 sm:px-10 md:px-12
            border

            ${isDark
              ? "bg-[#0f3d3a] border-teal-400/10"
              : "bg-[#96c4bb] border-teal-500/20"}   
          `}
        >
          <div className="
            flex flex-col md:flex-row
            md:items-center md:justify-between
            gap-8 sm:gap-10
          ">

            {/* LEFT CONTENT */}
            <div className="max-w-xl text-center md:text-left">

              {/* TAG */}
              <span
                className={`
                  inline-block text-xs px-3 py-1 rounded-full mb-4 border
                  ${isDark
                    ? "bg-teal-400/10 text-teal-300 border-teal-400/20"
                    : "bg-teal-600/10 text-teal-700 border-teal-600/30"}
                `}
              >
                Student Sellers Only
              </span>

              {/* TITLE */}
              <h2
                className={`
                  text-xl sm:text-2xl md:text-3xl
                  font-semibold leading-tight
                  ${isDark ? "text-white" : "text-gray-900"}
                `}
              >
                Turn your old gear into cash in minutes
              </h2>

              {/* DESCRIPTION */}
              <p
                className={`
                  mt-3 text-sm leading-relaxed
                  ${isDark ? "text-gray-300" : "text-gray-600"}
                `}
              >
                Listing is completely free for verified students. Whether it’s
                textbooks from last semester or a laptop you don’t need, reach
                thousands of fellow students instantly.
              </p>

              {/* FEATURES */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-5 text-sm">

                <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-900"}`}>
                  <BadgeCheck size={18} className="text-teal-500" />
                  <span>Verified Student IDs</span>
                </div>

                <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-900"}`}>
                  <Wallet size={18} className="text-teal-500" />
                  <span>Instant Payouts</span>
                </div>

                <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-900"}`}>
                  <Gavel size={18} className="text-teal-500" />
                  <span>Zero Listing Fees</span>
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-6 flex justify-center md:justify-start">
                <Button variant="primary" theme={theme}>
                  Get Started Now
                </Button>
              </div>

            </div>

            {/* RIGHT SQUARE BOX */}
            <div
              className={`
                rounded-xl border
                flex flex-col items-center justify-center text-center
                w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]
                shrink-0 mx-auto md:mx-0

                ${isDark
                  ? "bg-[#0b2e2c] border-teal-400/10"
                  : "bg-[#c7ddda] border-teal-500/20"}   
              `}
            >

              {/* ICON BOX */}
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-xl mb-3
                  ${isDark ? "bg-teal-400/10" : "bg-teal-600/20"}
                `}
              >
                <Box size={20} className="text-teal-500" />
              </div>

              <h4 className={`font-semibold text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>
                Snap, List, Sell
              </h4>

              <p className="text-gray-700 text-xs mt-2 px-3">
                It takes less than 2 minutes to create your first auction
              </p>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}