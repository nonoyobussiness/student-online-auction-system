/**
 * Home - Main UniAuction homepage
 * Matches design: Sidebar + Navbar + Hero + Filter/Sort + Categories + LiveBids + Pagination + PromoBanner + HowItWorks + Footer
 */

import { Navbar, Sidebar, MobileHeader, Footer } from "../components/layout";
import {
  HeroSection,
  FilterSortBar,
  CategoriesBar,
  HomeLiveBids,
  PromoBanner,
  HowItWorks,
} from "../components/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0C1218] text-white">

      {/* Navbar */}
      <Navbar />
      <MobileHeader />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-x-hidden">

          {/* CENTERED CONTAINER */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 space-y-16">

            {/* HERO */}
            <HeroSection />

            {/* FILTER + CATEGORIES (grouped) */}
            <section className="space-y-6">
              <FilterSortBar />
              <CategoriesBar theme="dark" />
            </section>

            {/* LIVE BIDS */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Live Auctions
                </h2>
              </div>

              <HomeLiveBids theme="dark" />
            </section>

            {/* PROMO */}
            <section>
              <PromoBanner theme="dark" />
            </section>

            {/* HOW IT WORKS */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                How It Works
              </h2>
              <HowItWorks theme="dark" />
            </section>

          </div>

          {/* Footer */}
          <Footer theme="dark" />
        </main>
      </div>
    </div>
  );
}