"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building2,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Home,
    title: "Buy",
    description: "Find your dream home with our expert guidance",
    link: "/buying",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Sell",
    description: "Get maximum value for your property",
    link: "/selling",
    color: "from-green-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Invest",
    description: "Build wealth through real estate investment",
    link: "/property-management",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Settings,
    title: "Manage",
    description: "Professional property management services",
    link: "/property-management",
    color: "from-orange-500 to-orange-600",
  },
];

export function ServicesSection() {
  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm"
              onClick={() => router.push(service.link)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  className="group-hover:text-blue-600 transition-colors duration-200 p-0 h-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
