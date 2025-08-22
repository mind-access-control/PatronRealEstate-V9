"use client";

import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, MapPin } from "lucide-react";
import { dummyProperties } from "@/lib/dummy-data";
import Link from "next/link";

export function FeaturedListings() {
  // Obtener las primeras 6 propiedades como destacadas
  const featuredProperties = dummyProperties.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-medium px-4 py-2 bg-primary/10 text-primary border-primary/20"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Properties
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Discover Our
            <span className="block text-primary">Featured Properties</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handpicked selection of premium properties in Miami's
            most desirable locations. From luxury waterfront homes to modern
            downtown condos, find your perfect match.
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

        {/* Estadísticas y CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Estadísticas */}
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Why Choose Patron Real Estate?
              </CardTitle>
              <p className="text-gray-600">
                We're committed to providing exceptional service and finding the
                perfect property for every client.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">4.9/5 Rating</h4>
                  <p className="text-sm text-gray-600">
                    From 500+ satisfied clients
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    15+ Years Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deep knowledge of Miami market
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    500+ Properties
                  </h4>
                  <p className="text-sm text-gray-600">
                    Wide selection across all budgets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Find Your Dream Home?
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Our expert agents are here to help you navigate the Miami real
                estate market and find the perfect property that matches your
                lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  className="border-white/30 text-white hover:bg-white hover:text-primary font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Botón ver más */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 shadow-lg"
            asChild
          >
            <Link href="/search">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
