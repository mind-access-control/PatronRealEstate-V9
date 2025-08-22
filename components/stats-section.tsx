"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Home, Award, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Properties Available",
    description: "From luxury homes to affordable condos",
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Agents",
    description: "Licensed professionals with local expertise",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Serving Miami since 2009",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Based on 1000+ reviews",
  },
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Properties Sold",
    description: "Total value of transactions",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here when you need us",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4">
            Patron Real Estate by the Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped thousands of
            families find their perfect homes in Miami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-center"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-white/80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
