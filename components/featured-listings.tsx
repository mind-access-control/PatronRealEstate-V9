"use client";

import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { dummyProperties } from "@/lib/dummy-data";
import Link from "next/link";

export function FeaturedListings() {
  // Obtener las primeras 6 propiedades como destacadas
  const featuredProperties = dummyProperties.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Discover Our
            <span className="block text-primary">Featured Properties</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handpicked selection of premium properties in most
            desirable locations. From luxury waterfront homes to modern downtown
            condos, find your perfect match.
          </p>
        </div>

        {/* Grid de propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              className="h-full"
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our expert agents are here to help you navigate the real estate
              market and find the perfect property that matches your lifestyle
              and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 font-semibold shadow-lg"
                asChild
              >
                <Link href="/search">
                  Browse All Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-primary font-semibold shadow-lg"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
