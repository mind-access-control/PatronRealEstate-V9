import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Award,
  Calendar,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { dummyAgents } from "@/lib/dummy-data";

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-4">
            Our Expert
            <span className="block text-primary">Real Estate Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of licensed professionals who know the Los Angeles
            market inside and out. Each agent brings unique expertise and
            dedication to help you find your perfect home.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {dummyAgents.length}
            </div>
            <div className="text-gray-600">Licensed Agents</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">647+</div>
            <div className="text-gray-600">Properties Sold</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyAgents
            .filter((agent) => agent && agent.id)
            .map((agent) => (
              <Card
                key={agent.id}
                className="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  {/* Agent Photo */}
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20">
                    {agent.avatar ? (
                      <img
                        src={agent.avatar}
                        alt={agent.name || "Agent photo"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-500" />
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-xl text-gray-900">
                    {agent.name || "Agent Name"}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {agent.specialties
                      ? agent.specialties.join(", ")
                      : "Specialties not available"}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(agent.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      ({agent.rating || 0})
                    </span>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-center justify-center space-x-2 text-sm mt-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">
                      {agent.office || "Office not available"}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {agent.bio ||
                      "Professional real estate agent with extensive experience."}
                  </p>

                  {/* Agent Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        Experience: {agent.experience || 0} years
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        Properties Sold: {agent.propertiesSold || 0}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        Languages:{" "}
                        {agent.languages
                          ? agent.languages.join(", ")
                          : "Languages not available"}
                      </span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        {agent.phone || "Phone not available"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        {agent.email || "Email not available"}
                      </span>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <div className="pt-4">
                    <Button
                      className="w-full cursor-pointer hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link href={`/agents/${agent.id}`}>
                        View Profile
                        <ArrowRight className="w-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our agents are here to help you navigate the Los Angeles real estate
            market. Whether you're buying, selling, or investing, we have the
            expertise you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="cursor-pointer hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/search">Search Properties</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
