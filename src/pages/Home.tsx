/**
 * Home - Main UniAuction homepage
 * Assembles all sections into the full layout.
 */

import { Navbar, Sidebar, MobileHeader, Footer } from "../components/layout";
import {
  HeroSection,
  CategoriesBar,
  LiveBids,
  PromoBanner,
  HowItWorks,
} from "../components/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      {/* Layout: Navbar (desktop) / MobileHeader (mobile) */}
      <Navbar />
      <MobileHeader />

      {/* Main content area: Sidebar + page content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="container-narrow section-padding space-y-16">
            <HeroSection />
            <CategoriesBar />
            <LiveBids />
            <PromoBanner />
            <HowItWorks />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
