import { HeroSection } from "@/components/hero-section";
import { FeaturedListings } from "@/components/featured-listings";
import { AgentSection } from "@/components/agent-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <FeaturedListings />
      <AgentSection />
      <TestimonialsSection />
    </main>
  );
}
