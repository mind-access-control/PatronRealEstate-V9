"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Star, Eye } from "lucide-react";
import {
  Property,
  formatPrice,
  getPropertyStatusColor,
  getPropertyStatusText,
} from "@/lib/dummy-data";
import { useState } from "react";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
  showActions?: boolean;
  className?: string;
}

export function PropertyCard({
  property,
  showActions = true,
  className = "",
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <Card
      className={`group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 ${className}`}
    >
      {/* Header con imagen */}
      <CardHeader className="p-0 relative">
        <div className="relative h-64 md:h-72 overflow-hidden">
          {/* Imagen principal */}
          <Image
            src={property.images[imageIndex]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay con información */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Badge de estado */}
          <div className="absolute top-4 left-4">
            <Badge
              className={`${getPropertyStatusColor(
                property.status
              )} font-semibold shadow-lg`}
            >
              {getPropertyStatusText(property.status)}
            </Badge>
          </div>

          {/* Botón de like */}
          {showActions && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 border-0 shadow-lg"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                className={`w-5 h-5 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          )}

          {/* Navegación de imágenes */}
          {property.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                onClick={prevImage}
              >
                ←
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                onClick={nextImage}
              >
                →
              </Button>
            </>
          )}

          {/* Indicadores de imagen */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === imageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Precio */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white rounded-lg px-3 py-2 shadow-lg">
              <div className="text-lg font-bold text-gray-900">
                {formatPrice(property.price)}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Contenido */}
      <CardContent className="p-6">
        {/* Título y ubicación */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">
              {property.address}, {property.city}, {property.state}{" "}
              {property.zipCode}
            </span>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Bed className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">
              {property.bedrooms} beds
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">
              {property.bathrooms} baths
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {property.description}
        </p>

        {/* Características destacadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Footer con acciones */}
      {showActions && (
        <CardFooter className="p-6 pt-0">
          <div className="flex w-full gap-3">
            <Button
              variant="outline"
              className="flex-1 hover:bg-primary hover:text-white transition-colors border-gray-300"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Contact Agent
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
