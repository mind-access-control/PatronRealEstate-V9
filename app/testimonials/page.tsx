import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Patron Real Estate helped us find our dream home in just 2 weeks. Their expertise and dedication are unmatched!",
    location: "Miami Beach",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Rodriguez",
    rating: 5,
    comment:
      "Professional, responsive, and truly cares about their clients. Sold our house above asking price in record time.",
    location: "Coral Gables",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jennifer Smith",
    rating: 5,
    comment:
      "The best real estate experience we've ever had. They made the entire process smooth and stress-free.",
    location: "Brickell",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    rating: 5,
    comment:
      "Exceptional service from start to finish. They understood exactly what we were looking for and delivered beyond our expectations.",
    location: "Key Biscayne",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Maria Garcia",
    rating: 5,
    comment:
      "Patron Real Estate made selling our home a breeze. Their marketing strategy brought in multiple offers within days.",
    location: "Doral",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Robert Wilson",
    rating: 5,
    comment:
      "Outstanding investment guidance. They helped us build a profitable real estate portfolio with their expert advice.",
    location: "Aventura",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            See what our clients say about their experience with Patron Real
            Estate
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to Experience the Patron Real Estate Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and discover why Patron Real Estate is
            the trusted choice for all your real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/buying"
              className="inline-block border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              View Properties
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
