"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Patron Real Estate helped us find our dream home in just 2 weeks. Their expertise and dedication are unmatched!",
    location: "Miami Beach",
  },
  {
    name: "Michael Rodriguez",
    rating: 5,
    comment:
      "Professional, responsive, and truly cares about their clients. Sold our house above asking price in record time.",
    location: "Coral Gables",
  },
  {
    name: "Jennifer Smith",
    rating: 5,
    comment:
      "The best real estate experience we've ever had. They made the entire process smooth and stress-free.",
    location: "Brickell",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience with Patron Real
            Estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>

                {/* Client info */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to experience the Patron Real Estate difference?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
