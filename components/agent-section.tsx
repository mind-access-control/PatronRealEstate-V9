"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { dummyAgents } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

export function AgentSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block text-primary">Expert Agents</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of licensed real estate professionals brings years of
            experience and deep local knowledge to help you find your perfect
            property in Miami.
          </p>
        </div>

        {/* Grid de agentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyAgents.filter(
            (agent) => agent && agent.id && agent.avatar && agent.name
          ).length > 0 ? (
            dummyAgents
              .filter(
                (agent) => agent && agent.id && agent.avatar && agent.name
              )
              .map((agent) => (
                <Card
                  key={agent.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader className="p-0 -mt-6">
                    <div className="relative h-72 overflow-hidden rounded-t-lg bg-gray-200">
                      {agent.avatar ? (
                        <Image
                          src={agent.avatar}
                          alt={agent.name || "Agent photo"}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={true}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            No photo available
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Información del agente */}
                      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                          {agent.name || "Agent Name"}
                        </h3>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current drop-shadow-lg" />
                          <span className="text-sm font-medium drop-shadow-lg">
                            {agent.rating || 0} ({agent.reviews || 0} reviews)
                          </span>
                        </div>
                        <div className="text-sm text-white/90 drop-shadow-lg">
                          {agent.office || "Office not available"}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Bio */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {agent.bio ||
                        "Professional real estate agent with extensive experience."}
                    </p>

                    {/* Especialidades */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.specialties &&
                        agent.specialties
                          .slice(0, 2)
                          .map((specialty, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {specialty}
                            </Badge>
                          ))}
                      {agent.specialties && agent.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{agent.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-primary">
                          {agent.experience || 0}+
                        </div>
                        <div className="text-xs text-gray-600">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-primary">
                          {agent.propertiesSold || 0}
                        </div>
                        <div className="text-xs text-gray-600">
                          Properties Sold
                        </div>
                      </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>{agent.phone || "Phone not available"}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        <span>{agent.email || "Email not available"}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{agent.office || "Office not available"}</span>
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 hover:bg-primary hover:text-white transition-colors"
                        onClick={() =>
                          window.open(`tel:${agent.phone}`, "_self")
                        }
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() =>
                          window.open(
                            `mailto:${agent.email}?subject=Interested in Real Estate Services&body=Hi ${agent.name}, I would like to learn more about your real estate services.`,
                            "_self"
                          )
                        }
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No agents available at the moment.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3"
            asChild
          >
            <Link href="/agents">
              Meet All Our Agents
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
