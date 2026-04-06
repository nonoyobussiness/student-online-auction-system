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
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0C1218" }}
    >
      {/* Top navbar (desktop only) */}
      <Navbar />

      {/* Mobile header */}
      <MobileHeader />

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 min-w-0 overflow-x-hidden">
          {/* Page content */}
          <div className="px-6 lg:px-10 py-6 max-w-5xl">
            {/* Hero */}
            <HeroSection />

            {/* Filter + Sort */}
            <FilterSortBar />

            {/* Category tabs */}
            <CategoriesBar theme="dark" />

            {/* Live Bids grid + pagination */}
            <div className="mt-8">
              <HomeLiveBids theme="dark" />
            </div>

            {/* Promo Banner */}
            <div className="mt-10">
              <PromoBanner theme="dark" />
            </div>

            {/* How It Works */}
            <HowItWorks theme="dark" />
          </div>

          {/* Footer — full width */}
          <Footer theme="dark" />
        </main>
      </div>
    </div>
  );
}