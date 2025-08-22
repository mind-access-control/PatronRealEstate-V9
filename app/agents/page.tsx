import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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
            Meet our team of licensed professionals who know the Miami market
            inside and out.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyAgents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">{agent.name}</CardTitle>
                <p className="text-gray-600">{agent.title}</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < agent.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({agent.rating})
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {agent.bio}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">
                      Experience: {agent.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">
                      Properties Sold: {agent.propertiesSold}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">{agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">{agent.email}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <Link href={`/agent/${agent.id}`}>
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/search">Search Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
