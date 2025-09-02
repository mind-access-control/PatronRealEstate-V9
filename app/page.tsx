import { SimpleHeroSection } from "@/components/simple-hero-section";
import { ServicesSection } from "@/components/services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ContactFormSection } from "@/components/contact-form-section";

export default function HomePage() {
  return (
    <main className="flex-1">
      <SimpleHeroSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactFormSection />
    </main>
  );
}
