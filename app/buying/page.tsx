"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Users,
  ArrowRight,
  Monitor,
  Users as UsersIcon,
  TreePine,
  Building2,
  DollarSign,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BuyingPage() {
  const [mlsUrl, setMlsUrl] = useState("");
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Are you ready to buy your
            <span className="block text-green-600">home?</span>
          </h1>
        </div>

        {/* Unified Search and Results Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-white shadow-xl border border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Search className="w-8 h-8 text-green-600" />
                Search Properties
              </CardTitle>
              <p className="text-gray-600">
                Connected to MLS - Find your perfect home with our advanced
                search tools
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* MLS Integration Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-900">
                        MLS Listings
                      </h4>
                    </div>
                    <p className="text-green-800 text-sm leading-relaxed">
                      Access the comprehensive Multiple Listing Service (MLS)
                      database for additional property listings across the
                      region.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* English MLS */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-green-900 text-sm">
                          English
                        </h5>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?LA=EN"
                              )
                            }
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Search MLS Listings
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 text-xs cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?AGENT=G84001&LA=EN"
                              )
                            }
                          >
                            Agent Listings
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 text-xs cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?OFFICE=G8485&LA=EN"
                              )
                            }
                          >
                            Office Listings
                          </Button>
                        </div>
                      </div>

                      {/* Spanish MLS */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-green-900 text-sm">
                          Español
                        </h5>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?LA=SP"
                              )
                            }
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Buscar Listados MLS
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 text-xs cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?AGENT=G84001&LA=SP"
                              )
                            }
                          >
                            Listados del Agente
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 text-xs cursor-pointer"
                            onClick={() =>
                              setMlsUrl(
                                "https://www.crmls.org/servlet/lDisplayListings?OFFICE=G8485&LA=SP"
                              )
                            }
                          >
                            Listados de la Oficina
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-green-200">
                      <p className="text-xs text-green-600">
                        💡 MLS listings are now integrated directly into this
                        page for your convenience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MLS Iframe Section */}
                {mlsUrl && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-gray-900">
                        MLS Search Results
                      </h5>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setMlsUrl("")}
                        className="text-gray-600"
                      >
                        Close MLS
                      </Button>
                    </div>
                    <div
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      style={{
                        height: "100vh",
                        maxHeight: "800px",
                        position: "relative",
                      }}
                    >
                      <iframe
                        src={mlsUrl}
                        className="w-full h-full"
                        title="MLS Search"
                        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                        style={{
                          border: "none",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                        }}
                        onLoad={(e) => {
                          // Intentar inyectar CSS para eliminar scrolls
                          try {
                            const iframe = e.target as HTMLIFrameElement;
                            const iframeDoc =
                              iframe.contentDocument ||
                              iframe.contentWindow?.document;
                            if (iframeDoc) {
                              const style = iframeDoc.createElement("style");
                              style.textContent = `
                                * {
                                  overflow: hidden !important;
                                  scrollbar-width: none !important;
                                  -ms-overflow-style: none !important;
                                }
                                ::-webkit-scrollbar {
                                  display: none !important;
                                }
                                body {
                                  overflow: hidden !important;
                                  margin: 0 !important;
                                  padding: 0 !important;
                                  height: 100% !important;
                                  max-height: 100% !important;
                                }
                                html {
                                  overflow: hidden !important;
                                  height: 100% !important;
                                  max-height: 100% !important;
                                }
                                .container, .wrapper, .content, main, div, form, table {
                                  overflow: hidden !important;
                                  max-height: 100% !important;
                                }
                                input, select, textarea {
                                  max-width: 100% !important;
                                }
                                table {
                                  width: 100% !important;
                                  max-width: 100% !important;
                                }
                                .form-group, .row, .col {
                                  overflow: hidden !important;
                                  max-height: 100% !important;
                                }
                              `;
                              iframeDoc.head.appendChild(style);
                            }
                          } catch (error) {
                            console.log("No se pudo inyectar CSS en el iframe");
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Watching a home buyer get those keys to their new home and light
                up is one of our favorite parts of the job! This is an exciting
                time but can also pose some challenges along the way if you
                don't have all the information you need to ensure you have
                covered all your possible options and risk factors.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let us help you navigate the obstacles by providing you the
                proper guidance and a knowledge base with 20+ years of industry
                experience. We consider ourselves experts in the surrounding
                areas. Trust in us to help you build your knowledge and better
                position you to be able to take advantage of all your options
                available when buying your home.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you have already begun the search for a home, we want to make
                sure you have answers to the questions that may come up along
                the way.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Here are some examples:
              </h3>

              <div className="space-y-6">
                {/* Location Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Location & Geography
                    </h4>
                    <p className="text-gray-600">
                      Have you chosen at least three possible cities you want to
                      live in? Are there particular neighborhoods or communities
                      that you like? Sometimes you get outpriced in the city you
                      were primarily looking at and need to possibly expand your
                      geographical target area to neighboring cities.
                    </p>
                  </div>
                </div>

                {/* Property Style Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Property Style & Layout
                    </h4>
                    <p className="text-gray-600">
                      What kind of house styles are you interested in? Spanish,
                      Traditional, Craftsman, etc. How many bedrooms and
                      bathrooms do you want?
                    </p>
                  </div>
                </div>

                {/* Work from Home */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Home Office & Flex Spaces
                    </h4>
                    <p className="text-gray-600">
                      Are you going to be working from home and need a home
                      office? Do you need a bonus room or a flex room?
                    </p>
                  </div>
                </div>

                {/* Entertainment */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <UsersIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Entertainment & Outdoor Living
                    </h4>
                    <p className="text-gray-600">
                      Will your home be entertaining guests often? Space for BBQ
                      or built-in BBQ.
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TreePine className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Outdoor Amenities
                    </h4>
                    <p className="text-gray-600">
                      Do you want a yard, pool, or gated community?
                    </p>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Budget & Financing
                    </h4>
                    <p className="text-gray-600">
                      Based on all the above, have you determined a price range
                      or consulted a lender to determine the best price range
                      that is <strong>RIGHT FOR YOU!</strong>?
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 mt-8">
                If you need additional or specific information on this topic,
                please{" "}
                <Link
                  href="/contact"
                  className="text-green-600 hover:text-green-700 underline font-medium"
                >
                  click here
                </Link>{" "}
                to get in contact with a Patron team member.
              </p>

              <div className="text-center p-6 bg-green-100 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Let us help you find your dream home!
                </h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Buying Process Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Initial Consultation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We'll discuss your needs, budget, and preferences to
                    understand your home buying goals.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Property Search
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We'll help you find properties that match your criteria
                    using our MLS access and local expertise.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Property Viewing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Schedule viewings of properties you're interested in with
                    our professional guidance.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Offer & Negotiation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We'll help you make competitive offers and negotiate the
                    best terms for your purchase.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">5</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Due Diligence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We'll guide you through inspections, appraisals, and other
                    necessary steps.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">6</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Closing</h4>
                  <p className="text-gray-600 text-sm">
                    We'll ensure a smooth closing process and help you get the
                    keys to your new home.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 p-6 bg-green-100 rounded-lg">
                <h4 className="text-lg font-bold text-green-800 mb-2">
                  Ready to Start?
                </h4>
                <p className="text-green-700 mb-4">
                  Let us guide you through every step of the home buying process
                  with our 20+ years of experience.
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <Link href="/contact">
                    <Users className="w-4 h-4 mr-2" />
                    Contact Us Today
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Home Buying Journey?
                </h3>
                <p className="text-lg opacity-90">
                  Contact us today to get personalized guidance and expert
                  assistance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">
                    Why Choose Patron Real Estate?
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      20+ years of industry experience
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Expert knowledge of local markets
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Personalized guidance throughout the process
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Access to exclusive MLS listings
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-green-600 hover:bg-gray-100"
                    asChild
                  >
                    <Link href="/contact">
                      <Users className="w-5 h-5 mr-2" />
                      Contact Our Team
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
