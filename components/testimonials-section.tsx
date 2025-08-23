"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Home Buyer",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    content:
      "Patron Real Estate made buying our first home in Miami an incredible experience. Sarah was patient, knowledgeable, and helped us find the perfect place within our budget.",
    rating: 5,
    location: "Miami Beach",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Property Investor",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Michael's expertise in downtown Miami condos is unmatched. He helped me build a profitable investment portfolio with properties that have excellent rental yields.",
    rating: 5,
    location: "Downtown Miami",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Home Seller",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Emily helped us sell our family home in Coral Gables quickly and for above asking price. Her knowledge of the local market and marketing strategy was outstanding.",
    rating: 5,
    location: "Coral Gables",
  },
  {
    id: 4,
    name: "Carlos Mendez",
    role: "Luxury Home Buyer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The level of service we received was exceptional. Sarah understood exactly what we were looking for and found us a stunning waterfront villa that exceeded our expectations.",
    rating: 5,
    location: "Miami Beach",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "First-time Buyer",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "As a first-time buyer, I was nervous about the process. Michael guided me through every step and made sure I understood everything. Highly recommend!",
    rating: 5,
    location: "Wynwood",
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Relocation Client",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "Moving from New York to Miami was a big change, but Emily made it seamless. She found us the perfect family home in a great school district.",
    rating: 5,
    location: "Pinecrest",
  },
];

export function TestimonialsSection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/contact");
  };

  const handleReadMoreReviews = () => {
    router.push("/blog");
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with Patron Real Estate.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      onError={(e) => {
                        // Fallback a un avatar por defecto si la imagen falla
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                              <span class="text-primary font-semibold text-lg">${testimonial.name.charAt(
                                0
                              )}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Patron Difference?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Join hundreds of satisfied clients who have found their perfect
              homes with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Get Started Today
              </button>
              <button
                onClick={handleReadMoreReviews}
                className="border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-xl border-2 transition-colors cursor-pointer"
              >
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
