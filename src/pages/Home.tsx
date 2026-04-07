/**
 * Home - Main UniAuction homepage
 * Matches design: Sidebar + Navbar + Hero + Filter/Sort + Categories + LiveBids + Pagination + PromoBanner + HowItWorks + Footer
 */

import { Navbar, Sidebar, MobileHeader, Footer } from "../components/layout";
import { useApp } from "../context/AppContext";
import {
  HeroSection,
  FilterSortBar,
  CategoriesBar,
  HomeLiveBids,
  PromoBanner,
  HowItWorks,
} from "../components/sections";

export default function Home() {
  const { theme } = useApp();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--app-bg)] text-[var(--app-foreground)]">
      <Navbar />
      <MobileHeader />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 min-w-0 overflow-x-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 space-y-16">
            <HeroSection />

            <section className="space-y-6">
              <FilterSortBar />
              <CategoriesBar theme={theme} />
            </section>

            <section className="space-y-6">
              <HomeLiveBids theme={theme} />
            </section>

            <section>
              <PromoBanner theme={theme} />
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                How It Works
              </h2>
              <HowItWorks theme={theme} />
            </section>
          </div>

          <Footer theme={theme} />
        </main>
      </div>
    </div>
  );
}
