"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  School,
  Users,
  DollarSign,
  X,
  Home,
  TrendingUp,
  Star,
  ArrowRight,
  Navigation,
  Clock,
  Car,
} from "lucide-react";
import { dummyProperties } from "@/lib/dummy-data";
import Link from "next/link";

interface Community {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  amenities: string[];
  population: number;
  image: string;
  averagePrice: number;
  walkScore: number;
  transitScore: number;
  crimeRate: string;
  coordinates: { lat: number; lng: number };
}

interface CommunitiesMapProps {
  communities: Community[];
  onCommunitySelect?: (community: Community | null) => void;
  selectedCommunityId?: number | null;
}

// Helper function to get marker color based on price range
const getMarkerColor = (priceRange: string) => {
  switch (priceRange) {
    case "under-1m":
      return "#22c55e"; // Green
    case "1m-2m":
      return "#eab308"; // Yellow
    case "over-2m":
      return "#ef4444"; // Red
    default:
      return "#3b82f6"; // Blue
  }
};

// Helper function to get properties by community
const getPropertiesByCommunity = (communityName: string) => {
  return dummyProperties.filter((property) =>
    property.city?.toLowerCase().includes(communityName.toLowerCase())
  );
};

export default function CommunitiesMap({
  communities,
  onCommunitySelect,
  selectedCommunityId,
}: CommunitiesMapProps) {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(
    null
  );

  // Update selected community when prop changes
  useEffect(() => {
    if (selectedCommunityId) {
      const community = communities.find((c) => c.id === selectedCommunityId);
      setSelectedCommunity(community || null);
    } else {
      setSelectedCommunity(null);
    }
  }, [selectedCommunityId, communities]);

  // Handle community selection
  const handleCommunitySelect = (community: Community | null) => {
    setSelectedCommunity(community);
    if (onCommunitySelect) {
      onCommunitySelect(community);
    }
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Simple Map Background with Community Markers */}
      <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-green-50">
        {/* Map Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Community Markers */}
        {communities.map((community) => {
          const markerColor = getMarkerColor(community.priceRange);
          const properties = getPropertiesByCommunity(community.name);

          return (
            <div
              key={community.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
              style={{
                left: `${20 + ((community.id * 15) % 80)}%`,
                top: `${20 + ((community.id * 20) % 60)}%`,
              }}
              onClick={() => handleCommunitySelect(community)}
            >
              {/* Marker */}
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: markerColor }}
              >
                {community.id}
              </div>

              {/* Community Name */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                {community.name}
              </div>
            </div>
          );
        })}

        {/* Map Legend */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border z-20">
          <h4 className="font-medium text-sm mb-2">Map Legend</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Under $1M</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>$1M - $2M</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Over $2M</span>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border z-20">
          <h4 className="font-medium text-sm mb-2">Map Controls</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>🗺️ Click markers for details</p>
            <p>📍 Hover to see names</p>
            <p>🎯 Colors = Price ranges</p>
          </div>
        </div>
      </div>

      {/* Community Details Panel */}
      {selectedCommunity && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-md z-30 border">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {selectedCommunity.name}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCommunitySelect(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-gray-600 mb-4">{selectedCommunity.description}</p>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge
                variant={
                  selectedCommunity.priceRange === "under-1m"
                    ? "default"
                    : selectedCommunity.priceRange === "1m-2m"
                    ? "secondary"
                    : "destructive"
                }
              >
                {selectedCommunity.priceRange === "under-1m"
                  ? "Under $1M"
                  : selectedCommunity.priceRange === "1m-2m"
                  ? "$1M-$2M"
                  : "Over $2M"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span>{selectedCommunity.population.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span>${selectedCommunity.averagePrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>Walk: {selectedCommunity.walkScore}</span>
              </div>
              <div className="flex items-center space-x-2">
                <School className="h-4 w-4 text-gray-500" />
                <span>Safety: {selectedCommunity.crimeRate}</span>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="font-medium text-sm mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCommunity.amenities
                  .slice(0, 3)
                  .map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                {selectedCommunity.amenities.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{selectedCommunity.amenities.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            <div className="pt-3">
              <h4 className="font-medium text-sm mb-2">Featured Properties</h4>
              <div className="space-y-2">
                {getPropertiesByCommunity(selectedCommunity.name)
                  .slice(0, 2)
                  .map((property) => (
                    <Link
                      key={property.id}
                      href={`/property/${property.id}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">
                            {property.address}
                          </p>
                          <p className="text-xs text-gray-600">
                            {property.bedrooms} bed, {property.bathrooms} bath
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm">
                            ${property.price.toLocaleString()}
                          </p>
                          <ArrowRight className="h-3 w-3 text-gray-400 ml-auto" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
