"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Star,
  Send,
  Home,
  Calendar,
  DollarSign,
} from "lucide-react";
import { dummyProperties, formatPrice } from "@/lib/dummy-data";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const propertyId = searchParams.get("property");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
    visitTime: "",
    financing: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Buscar la propiedad si hay un ID
  const property = propertyId
    ? dummyProperties.find((p) => p.id === propertyId)
    : null;

  useEffect(() => {
    if (property) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi! I'm interested in the property "${property.title}" located at ${property.address}, ${property.city}. I would like to schedule a viewing and get more information about this property.`,
      }));
    }
  }, [property]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our agent will contact you within 24
              hours.
            </p>
            <div className="space-y-3">
              <Button onClick={() => router.push("/search")} className="w-full">
                Browse More Properties
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {property
                    ? "Contact Agent About This Property"
                    : "Contact Our Team"}
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our expert agents will get back to
                  you within 24 hours.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información personal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Preferencias de contacto */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Contact Method</Label>
                      <Select
                        value={formData.contactMethod}
                        onValueChange={(value) =>
                          handleInputChange("contactMethod", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="visitTime">Preferred Visit Time</Label>
                      <Select
                        value={formData.visitTime}
                        onValueChange={(value) =>
                          handleInputChange("visitTime", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (9am - 12pm)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (12pm - 5pm)
                          </SelectItem>
                          <SelectItem value="evening">
                            Evening (5pm - 8pm)
                          </SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please tell us more about what you're looking for..."
                    />
                  </div>

                  {/* Opciones adicionales */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="financing"
                        checked={formData.financing}
                        onCheckedChange={(checked) =>
                          handleInputChange("financing", checked)
                        }
                      />
                      <Label htmlFor="financing" className="text-sm">
                        I need help with financing options
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for market updates
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Propiedad específica si hay una */}
            {property && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Property Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold line-clamp-2 mb-2">
                      {property.title}
                    </h4>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.address}, {property.city}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(property.price)}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <div className="font-semibold">{property.bedrooms}</div>
                      <div className="text-gray-600">Beds</div>
                    </div>
                    <div>
                      <div className="font-semibold">{property.bathrooms}</div>
                      <div className="text-gray-600">Baths</div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {property.sqft.toLocaleString()}
                      </div>
                      <div className="text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Información del agente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Your Agent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">John Doe</h4>
                    <p className="text-sm text-gray-600">
                      Senior Real Estate Agent
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      4.9 (127 reviews)
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <span>(305) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-3" />
                    <span>john.doe@patronrealestate.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-primary mr-3" />
                    <span>Available Mon-Sat 9AM-8PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información de la oficina */}
            <Card>
              <CardHeader>
                <CardTitle>Our Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-primary mr-3" />
                    <span>123 Biscayne Blvd, Miami, FL 33132</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <span>(305) 555-0100</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-primary mr-3" />
                    <span>
                      Mon-Fri: 9AM-6PM
                      <br />
                      Sat: 9AM-4PM
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Why Choose Us?</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 15+ years of Miami market expertise</li>
                    <li>• 500+ successful transactions</li>
                    <li>• 4.9/5 average client rating</li>
                    <li>• Free market analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
