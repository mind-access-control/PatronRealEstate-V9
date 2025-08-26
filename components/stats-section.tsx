"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Home, Award, Star, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Properties Available",
    description: "From luxury homes to affordable condos",
    highlight: "Find Your Dream Home",
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Agents",
    description: "Licensed professionals with local expertise",
    highlight: "Expert Guidance",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Serving since 2009",
    highlight: "Proven Track Record",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Based on 1000+ reviews",
    highlight: "Trusted by Thousands",
  },
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Properties Sold",
    description: "Total value of transactions",
    highlight: "Market Leaders",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here when you need us",
    highlight: "Always Available",
  },
];

export function StatsSection() {
  const router = useRouter();

  const handleStartSearch = () => {
    router.push("/search");
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've helped thousands of families find their perfect homes.
            <span className="text-blue-600 font-semibold">
              {" "}
              Join them today!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-200 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden shadow-sm"
            >
              {/* Card accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              {/* Highlight badge */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                {stat.highlight}
              </div>

              <CardContent className="p-4 relative z-10">
                {/* Icon with enhanced styling */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value with enhanced typography */}
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">
                  {stat.value}
                </div>

                {/* Label with better emphasis */}
                <div className="text-sm font-semibold mb-2 text-gray-800">
                  {stat.label}
                </div>

                {/* Description with improved readability */}
                <div className="text-xs text-gray-600 leading-relaxed">
                  {stat.description}
                </div>

                {/* Call to action hint */}
                <div className="mt-3 text-blue-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-12">
          <button
            onClick={handleStartSearch}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
          >
            Start Your Home Search Today
          </button>
          <p className="text-gray-600 mt-3 text-sm">
            Join 1000+ happy families who found their dream home with us
          </p>
        </div>
      </div>
    </section>
  );
}
