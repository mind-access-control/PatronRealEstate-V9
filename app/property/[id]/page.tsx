"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  DollarSign,
  MessageCircle,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { dummyProperties, formatPrice } from "@/lib/dummy-data";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Buscar la propiedad por ID
  const property = dummyProperties.find((p) => p.id === params.id);

  // Si no se encuentra la propiedad, mostrar mensaje de error
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The property you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/search")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const handleContactAgent = () => {
    router.push(`/contact?property=${property.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center"
              >
                <Heart
                  className={`w-5 h-5 mr-2 ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal - Imágenes y detalles */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería de imágenes */}
            <Card className="overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />

                {/* Navegación de imágenes */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                {/* Indicador de imagen */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Badge de estado */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {property.status}
                  </Badge>
                </div>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="p-4 bg-gray-50">
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                          index === currentImageIndex
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`View ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Información de la propiedad */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      {property.address}, {property.city}, {property.state}{" "}
                      {property.zipCode}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(property.price)}
                    </div>
                    <div className="text-sm text-gray-600">
                      ${Math.round(property.price / property.sqft)}/sqft
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Características principales */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3">
                    <Bed className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">{property.bedrooms}</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bath className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">{property.bathrooms}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Square className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">
                        {property.sqft.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">{property.yearBuilt}</div>
                      <div className="text-sm text-gray-600">Year Built</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Descripción */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <Separator />

                {/* Características destacadas */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Agente y contacto */}
          <div className="space-y-6">
            {/* Información del agente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Listing Agent
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

                <div className="space-y-3">
                  <Button className="w-full" onClick={handleContactAgent}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Agent
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculadora de hipoteca */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  Mortgage Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    $
                    {Math.round(
                      (property.price * 0.8 * 0.045) / 12
                    ).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    Estimated monthly payment
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Principal & Interest:</span>
                    <span>
                      $
                      {Math.round(
                        (property.price * 0.8 * 0.045) / 12
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Tax:</span>
                    <span>
                      $
                      {Math.round(
                        (property.price * 0.012) / 12
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance:</span>
                    <span>
                      $
                      {Math.round(
                        (property.price * 0.004) / 12
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>

            {/* Propiedades similares */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dummyProperties.slice(0, 3).map((similarProperty) => (
                    <Link
                      key={similarProperty.id}
                      href={`/property/${similarProperty.id}`}
                      className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex space-x-3">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={similarProperty.images[0]}
                            alt={similarProperty.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-sm line-clamp-1">
                            {similarProperty.title}
                          </h5>
                          <p className="text-xs text-gray-600 line-clamp-1">
                            {similarProperty.city}
                          </p>
                          <p className="font-semibold text-primary text-sm">
                            {formatPrice(similarProperty.price)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
