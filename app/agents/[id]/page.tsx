"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Award,
  Calendar,
  Globe,
  Users,
  Home,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { dummyAgents, dummyProperties } from "@/lib/dummy-data";

export default function AgentProfilePage() {
  const router = useRouter();
  const params = useParams();
  const [agent, setAgent] = useState<any>(null);
  const [agentProperties, setAgentProperties] = useState<any[]>([]);

  useEffect(() => {
    const id = params.id as string;
    const foundAgent = dummyAgents.find((a) => a.id === id);
    setAgent(foundAgent);

    if (foundAgent) {
      // Get properties for this agent (simulate by filtering properties)
      const properties = dummyProperties.filter((p) => p.agentId === id);
      setAgentProperties(properties);
    }
  }, [params.id]);

  if (!agent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Agent Not Found</h1>
            <Button
              onClick={() => router.push("/agents")}
              className="cursor-pointer"
            >
              Back to Agents
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      name: "Jennifer Smith",
      rating: 5,
      comment:
        "Sarah helped us find our dream home in Beverly Hills. Her knowledge of the area and negotiation skills are unmatched!",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Michael Brown",
      rating: 5,
      comment:
        "Professional, responsive, and truly understands the luxury market. Highly recommend!",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Lisa Davis",
      rating: 5,
      comment:
        "Sarah's expertise in waterfront properties is incredible. She found us the perfect home with ocean views.",
      date: "2024-01-05",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="outline"
            onClick={() => router.push("/agents")}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Agents
          </Button>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Agent Photo */}
              <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-white/30">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Agent Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {agent.name}
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  {agent.specialties.join(" • ")}
                </p>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(agent.rating)
                            ? "text-yellow-300 fill-current"
                            : "text-white/30"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold">
                      ({agent.rating})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{agent.reviews} reviews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Home className="w-5 h-5" />
                    <span>{agent.propertiesSold} properties sold</span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{agent.office} Office</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Agent Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span>About {agent.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {agent.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map(
                          (specialty: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="cursor-pointer"
                            >
                              {specialty}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold mb-3">Languages Spoken</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.languages.map(
                          (language: string, index: number) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="cursor-pointer"
                            >
                              {language}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Properties Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-primary" />
                      <span>Recent Properties</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {agentProperties.length > 0 ? (
                      <div className="space-y-4">
                        {agentProperties.slice(0, 3).map((property) => (
                          <div
                            key={property.id}
                            className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="w-20 h-16 overflow-hidden rounded">
                              <img
                                src={property.images[0]}
                                alt={property.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">
                                {property.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {property.address}
                              </p>
                              <p className="text-lg font-bold text-primary">
                                ${property.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Home className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>No properties listed at the moment</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Reviews Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span>Client Reviews</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockReviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-gray-100 pb-4 last:border-b-0"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Contact & Stats */}
              <div className="space-y-6">
                {/* Contact Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{agent.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{agent.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{agent.office}</span>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full cursor-pointer hover:scale-105 transition-transform">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-semibold">
                        {agent.experience} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Properties Sold</span>
                      <span className="font-semibold">
                        {agent.propertiesSold}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold">{agent.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Reviews</span>
                      <span className="font-semibold">{agent.reviews}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* License Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>License Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        License Number
                      </p>
                      <p className="font-mono font-semibold text-lg">
                        {agent.license}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with {agent.name}?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch today to start your real estate journey. {agent.name}{" "}
              is here to help you find your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
