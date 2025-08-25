"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Calculator,
  Home,
  CreditCard,
} from "lucide-react";
import { dummyProperties, formatPrice } from "@/lib/dummy-data";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Estado para la calculadora de hipoteca
  const [mortgageData, setMortgageData] = useState({
    downPayment: 20,
    interestRate: 6.5,
    loanTerm: 30,
  });

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

  // Funciones para los botones de contacto
  const handleCallAgent = () => {
    window.open(`tel:+13055550101`, "_self");
  };

  const handleEmailAgent = () => {
    window.open(
      `mailto:john.doe@patron.com?subject=Inquiry about ${property.title}`,
      "_self"
    );
  };

  const handleGetPreApproved = () => {
    // Redirigir a una página de pre-aprobación o formulario
    router.push(`/contact?property=${property.id}&type=pre-approval`);
  };

  // Cálculos de hipoteca
  const loanAmount = property.price * (1 - mortgageData.downPayment / 100);
  const monthlyRate = mortgageData.interestRate / 100 / 12;
  const numberOfPayments = mortgageData.loanTerm * 12;

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const propertyTax = (property.price * 0.012) / 12;
  const insurance = (property.price * 0.004) / 12;
  const totalMonthlyPayment = monthlyPayment + propertyTax + insurance;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 mr-2 ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center cursor-pointer"
              >
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white cursor-pointer"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white cursor-pointer"
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
                        className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 cursor-pointer ${
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
                      <div className="font-semibold">2024</div>
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
                  <Button
                    className="w-full cursor-pointer"
                    onClick={handleContactAgent}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Agent
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={handleCallAgent}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={handleEmailAgent}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculadora de hipoteca mejorada - Solo para propiedades en venta */}
            {(property.status === "for-sale" ||
              property.status === "pending") && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-5 h-5 text-green-600 mr-2" />
                    Mortgage Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Resultado principal */}
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      $
                      {totalMonthlyPayment.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <div className="text-sm text-gray-600">
                      Estimated monthly payment
                    </div>
                  </div>

                  {/* Controles de la calculadora */}
                  <div className="space-y-3">
                    <div>
                      <Label
                        htmlFor="downPayment"
                        className="text-sm font-medium"
                      >
                        Down Payment: {mortgageData.downPayment}%
                      </Label>
                      <Input
                        id="downPayment"
                        type="range"
                        min="5"
                        max="50"
                        value={mortgageData.downPayment}
                        onChange={(e) =>
                          setMortgageData((prev) => ({
                            ...prev,
                            downPayment: parseInt(e.target.value),
                          }))
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="interestRate"
                        className="text-sm font-medium"
                      >
                        Interest Rate: {mortgageData.interestRate}%
                      </Label>
                      <Input
                        id="interestRate"
                        type="range"
                        min="3"
                        max="10"
                        step="0.1"
                        value={mortgageData.interestRate}
                        onChange={(e) =>
                          setMortgageData((prev) => ({
                            ...prev,
                            interestRate: parseFloat(e.target.value),
                          }))
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="loanTerm" className="text-sm font-medium">
                        Loan Term: {mortgageData.loanTerm} years
                      </Label>
                      <div className="flex gap-2">
                        <Button
                          variant={
                            mortgageData.loanTerm === 15 ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setMortgageData((prev) => ({
                              ...prev,
                              loanTerm: 15,
                            }))
                          }
                          className="flex-1 cursor-pointer"
                        >
                          15
                        </Button>
                        <Button
                          variant={
                            mortgageData.loanTerm === 30 ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setMortgageData((prev) => ({
                              ...prev,
                              loanTerm: 30,
                            }))
                          }
                          className="flex-1 cursor-pointer"
                        >
                          30
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Desglose de pagos */}
                  <div className="space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span>Principal & Interest:</span>
                      <span className="font-medium">
                        $
                        {monthlyPayment.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Tax:</span>
                      <span className="font-medium">
                        $
                        {propertyTax.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span className="font-medium">
                        $
                        {insurance.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total Monthly:</span>
                      <span className="text-primary">
                        $
                        {totalMonthlyPayment.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={handleGetPreApproved}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Get Pre-Approved
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Información adicional para propiedades en renta */}
            {property.status === "for-rent" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="w-5 h-5 text-blue-600 mr-2" />
                    Rental Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Rent</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Security Deposit:</span>
                      <span className="font-medium">
                        ${(property.price * 1.5).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Application Fee:</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pet Deposit (if applicable):</span>
                      <span className="font-medium">$300</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={handleContactAgent}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Apply for Rental
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Propiedades similares - Filtradas por estado y tipo */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {property.status === "for-rent"
                    ? "Similar Rentals"
                    : property.status === "for-sale"
                    ? "Similar Properties for Sale"
                    : property.status === "sold"
                    ? "Recently Sold Properties"
                    : "Similar Properties"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dummyProperties
                    .filter(
                      (similarProperty) =>
                        // Filtrar por estado similar
                        similarProperty.status === property.status &&
                        // Filtrar por tipo similar (misma categoría)
                        similarProperty.type === property.type &&
                        // Excluir la propiedad actual
                        similarProperty.id !== property.id &&
                        // Filtrar por ciudad similar (misma área)
                        similarProperty.city === property.city
                    )
                    .slice(0, 3)
                    .map((similarProperty) => (
                      <Link
                        key={similarProperty.id}
                        href={`/property/${similarProperty.id}`}
                        className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex space-x-3">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                            <Image
                              src={similarProperty.images[0]}
                              alt={similarProperty.title}
                              fill
                              className="object-cover"
                            />
                            {/* Badge de estado */}
                            <div className="absolute top-1 right-1">
                              <Badge
                                className={`text-xs ${
                                  similarProperty.status === "for-sale"
                                    ? "bg-green-100 text-green-800"
                                    : similarProperty.status === "for-rent"
                                    ? "bg-blue-100 text-blue-800"
                                    : similarProperty.status === "sold"
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {similarProperty.status === "for-sale"
                                  ? "For Sale"
                                  : similarProperty.status === "for-rent"
                                  ? "For Rent"
                                  : similarProperty.status === "sold"
                                  ? "Sold"
                                  : "Pending"}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-sm line-clamp-1">
                              {similarProperty.title}
                            </h5>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {similarProperty.city}, {similarProperty.state}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                              <span className="flex items-center">
                                <Bed className="w-3 h-3 mr-1" />
                                {similarProperty.bedrooms}
                              </span>
                              <span className="flex items-center">
                                <Bath className="w-3 h-3 mr-1" />
                                {similarProperty.bathrooms}
                              </span>
                              <span className="flex items-center">
                                <Square className="w-3 h-3 mr-1" />
                                {similarProperty.sqft.toLocaleString()}
                              </span>
                            </div>
                            <p className="font-semibold text-primary text-sm mt-1">
                              {property.status === "for-rent"
                                ? `${formatPrice(similarProperty.price)}/month`
                                : formatPrice(similarProperty.price)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}

                  {/* Mensaje si no hay propiedades similares */}
                  {dummyProperties.filter(
                    (similarProperty) =>
                      similarProperty.status === property.status &&
                      similarProperty.type === property.type &&
                      similarProperty.id !== property.id &&
                      similarProperty.city === property.city
                  ).length === 0 && (
                    <div className="text-center py-6 text-gray-500">
                      <Home className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">
                        {property.status === "for-rent"
                          ? "No similar rentals available in this area"
                          : property.status === "for-sale"
                          ? "No similar properties for sale in this area"
                          : "No similar properties available"}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
