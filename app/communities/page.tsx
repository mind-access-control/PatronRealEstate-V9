"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import CommunitiesMap from "@/components/communities-map";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import Link from "next/link";
import {
  Users,
  MapPin,
  DollarSign,
  School,
  TrendingUp,
  Clock,
  Home,
  Star,
} from "lucide-react";

// Community interface
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

// Local community data
const communities = [
  {
    id: 1,
    name: "Beverly Hills",
    description: "Luxury living with world-class shopping and dining",
    priceRange: "over-2m",
    amenities: ["shopping", "culture"],
    population: 32000,
    image: "/placeholder.jpg",
    averagePrice: 2500000,
    walkScore: 85,
    transitScore: 70,
    crimeRate: "Low",
    coordinates: { lat: 34.0902, lng: -118.406 },
  },
  {
    id: 2,
    name: "Santa Monica",
    description: "Beachfront community with vibrant culture",
    priceRange: "1m-2m",
    amenities: ["beach", "culture"],
    population: 92000,
    image: "/placeholder.jpg",
    averagePrice: 1500000,
    walkScore: 90,
    transitScore: 85,
    crimeRate: "Low",
    coordinates: { lat: 34.0106, lng: -118.496 },
  },
  {
    id: 3,
    name: "Manhattan Beach",
    description: "Family-friendly beach community",
    priceRange: "1m-2m",
    amenities: ["beach", "family"],
    population: 35000,
    image: "/placeholder.jpg",
    averagePrice: 1800000,
    walkScore: 80,
    transitScore: 65,
    crimeRate: "Very Low",
    coordinates: { lat: 33.8803, lng: -118.491 },
  },
  {
    id: 4,
    name: "Pasadena",
    description: "Historic charm with cultural attractions",
    priceRange: "under-1m",
    amenities: ["culture", "family"],
    population: 140000,
    image: "/placeholder.jpg",
    averagePrice: 800000,
    walkScore: 75,
    transitScore: 80,
    crimeRate: "Medium",
    coordinates: { lat: 34.1478, lng: -118.144 },
  },
  {
    id: 5,
    name: "Venice Beach",
    description: "Bohemian atmosphere with artistic flair",
    priceRange: "1m-2m",
    amenities: ["beach", "culture"],
    population: 41000,
    image: "/placeholder.jpg",
    averagePrice: 1200000,
    walkScore: 95,
    transitScore: 75,
    crimeRate: "Medium",
    coordinates: { lat: 33.983, lng: -118.471 },
  },
  {
    id: 6,
    name: "Malibu",
    description: "Exclusive coastal paradise",
    priceRange: "over-2m",
    amenities: ["beach", "family"],
    population: 12000,
    image: "/placeholder.jpg",
    averagePrice: 3500000,
    walkScore: 60,
    transitScore: 45,
    crimeRate: "Very Low",
    coordinates: { lat: 34.0229, lng: -118.796 },
  },
];

// Filter options
const priceRanges = [
  {
    value: "all",
    label: "All Prices",
    color: "bg-white border border-gray-300",
  },
  {
    value: "under-1m",
    label: "Under $1M",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "1m-2m",
    label: "$1M - $2M",
    color: "bg-yellow-100 text-yellow-800",
  },
  { value: "over-2m", label: "Over $2M", color: "bg-red-100 text-red-800" },
];

const amenities = [
  {
    value: "all",
    label: "All Amenities",
    color: "bg-white border border-gray-300",
  },
  { value: "beach", label: "Beach Access", color: "bg-blue-100 text-blue-800" },
  {
    value: "shopping",
    label: "Shopping",
    color: "bg-purple-100 text-purple-800",
  },
  {
    value: "culture",
    label: "Culture",
    color: "bg-indigo-100 text-indigo-800",
  },
  { value: "family", label: "Family", color: "bg-pink-100 text-pink-800" },
  { value: "urban", label: "Urban", color: "bg-orange-100 text-orange-800" },
];

const populationRanges = [
  {
    value: "all",
    label: "All Sizes",
    color: "bg-white border border-gray-300",
  },
  {
    value: "small",
    label: "Small (<50K)",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "medium",
    label: "Medium (50K-100K)",
    color: "bg-yellow-100 text-yellow-800",
  },
  { value: "large", label: "Large (>100K)", color: "bg-red-100 text-red-800" },
];

export default function CommunitiesPage() {
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedAmenity, setSelectedAmenity] = useState("all");
  const [selectedPopulation, setSelectedPopulation] = useState("all");
  const [activeTab, setActiveTab] = useState("map");
  const [selectedCommunityId, setSelectedCommunityId] = useState<number | null>(
    null
  );

  // Helper function to get population range
  const getPopulationRange = (population: number) => {
    if (population < 50000) return "small";
    if (population < 100000) return "medium";
    return "large";
  };

  // Filter communities based on selected filters
  const filteredCommunities = communities.filter((community) => {
    const matchesPrice =
      selectedPriceRange === "all" ||
      community.priceRange === selectedPriceRange;
    const matchesAmenity =
      selectedAmenity === "all" ||
      community.amenities.includes(selectedAmenity);
    const matchesPopulation =
      selectedPopulation === "all" ||
      getPopulationRange(community.population) === selectedPopulation;

    return matchesPrice && matchesAmenity && matchesPopulation;
  });

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedPriceRange("all");
    setSelectedAmenity("all");
    setSelectedPopulation("all");
    setSelectedCommunityId(null);
  };

  // Check if any filters are active
  const hasActiveFilters =
    selectedPriceRange !== "all" ||
    selectedAmenity !== "all" ||
    selectedPopulation !== "all";

  // Handle community selection from Quick Overview
  const handleCommunitySelect = (communityId: number) => {
    console.log("handleCommunitySelect called with:", communityId);
    setSelectedCommunityId(communityId);
    setActiveTab("map"); // Switch to map tab to show the selection
    console.log(
      "State updated - selectedCommunityId:",
      communityId,
      "activeTab: map"
    );
  };

  // Debug useEffect to monitor state changes
  useEffect(() => {
    console.log("State changed:", { selectedCommunityId, activeTab });
  }, [selectedCommunityId, activeTab]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Perfect Community
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore the best neighborhoods with our interactive map and detailed
            community insights
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Filter Communities by Your Preferences
            </h2>

            {/* Price Range Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPriceRange(range.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                      selectedPriceRange === range.value
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:scale-105"
                    } ${range.color}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <button
                    key={amenity.value}
                    onClick={() => setSelectedAmenity(amenity.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                      selectedAmenity === amenity.value
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:scale-105"
                    } ${amenity.color}`}
                  >
                    {amenity.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Population Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Community Size</h3>
              <div className="flex flex-wrap gap-2">
                {populationRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPopulation(range.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                      selectedPopulation === range.value
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:scale-105"
                    } ${range.color}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">
                      Active Filters:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPriceRange !== "all" && (
                        <Badge variant="secondary" className="cursor-pointer">
                          {
                            priceRanges.find(
                              (r) => r.value === selectedPriceRange
                            )?.label
                          }
                        </Badge>
                      )}
                      {selectedAmenity !== "all" && (
                        <Badge variant="secondary" className="cursor-pointer">
                          {
                            amenities.find((a) => a.value === selectedAmenity)
                              ?.label
                          }
                        </Badge>
                      )}
                      {selectedPopulation !== "all" && (
                        <Badge variant="secondary" className="cursor-pointer">
                          {
                            populationRanges.find(
                              (r) => r.value === selectedPopulation
                            )?.label
                          }
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {filteredCommunities.length} of {communities.length} Communities
                Found
              </h3>
              <div className="flex gap-2">
                <Button
                  onClick={() => setActiveTab("map")}
                  variant={activeTab === "map" ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  Interactive Map
                </Button>
                <Button
                  onClick={() => setActiveTab("list")}
                  variant={activeTab === "list" ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  Community List
                </Button>
                <Button
                  onClick={() => setActiveTab("trends")}
                  variant={activeTab === "trends" ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  Market Trends
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeTab === "map" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Interactive Community Map
                </h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <CommunitiesMap
                    communities={filteredCommunities}
                    selectedCommunityId={selectedCommunityId}
                    onCommunitySelect={(community) =>
                      setSelectedCommunityId(community?.id || null)
                    }
                  />
                </div>

                {/* Quick Community Overview */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Quick Community Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCommunities.slice(0, 3).map((community) => (
                      <Card
                        key={community.id}
                        className="p-4 hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleCommunitySelect(community.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">
                              {community.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{community.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {community.population.toLocaleString()} residents
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Click to view details</span>
                            <span className="text-primary">→</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "list" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Community List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCommunities.map((community) => (
                    <Card
                      key={community.id}
                      className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary/30"
                      onClick={() => handleCommunitySelect(community.id)}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        {/* Real House Image based on price range */}
                        <img
                          src={(() => {
                            switch (community.priceRange) {
                              case "under-1m":
                                return "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=225&fit=crop&crop=center";
                              case "1m-2m":
                                return "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=225&fit=crop&crop=center";
                              case "over-2m":
                                return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=225&fit=crop&crop=center";
                              default:
                                return "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=225&fit=crop&crop=center";
                            }
                          })()}
                          alt={`${community.name} community`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                        {/* Overlay with community info */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-white/30">
                              <span className="text-white font-bold text-2xl">
                                {community.name.charAt(0)}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-white drop-shadow-lg">
                              {community.name}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant={
                              community.priceRange === "under-1m"
                                ? "default"
                                : community.priceRange === "1m-2m"
                                ? "secondary"
                                : "destructive"
                            }
                            className="text-xs"
                          >
                            {community.priceRange === "under-1m"
                              ? "Under $1M"
                              : community.priceRange === "1m-2m"
                              ? "$1M-$2M"
                              : "Over $2M"}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {community.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {community.description}
                        </p>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {community.amenities.slice(0, 3).map((amenity) => (
                            <Badge
                              key={amenity}
                              variant="outline"
                              className="text-xs cursor-pointer"
                            >
                              {amenity}
                            </Badge>
                          ))}
                          {community.amenities.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs text-muted-foreground"
                            >
                              +{community.amenities.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Community Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {community.population.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              ${(community.averagePrice / 1000000).toFixed(1)}M
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              Walk: {community.walkScore}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <School className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              Safety: {community.crimeRate}
                            </span>
                          </div>
                        </div>

                        {/* Action Hint */}
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Click to view details on map</span>
                            <span className="text-primary">→</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Empty State */}
                {filteredCommunities.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      No communities found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters to see more communities
                    </p>
                    <Button onClick={clearAllFilters} variant="outline">
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "trends" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Market Trends & Insights
                </h2>

                {/* Market Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Price Growth</h3>
                    <p className="text-2xl font-bold text-green-600">+5.2%</p>
                    <p className="text-sm text-muted-foreground">
                      Year over Year
                    </p>
                  </Card>

                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Days on Market
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">28</p>
                    <p className="text-sm text-muted-foreground">Average</p>
                  </Card>

                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Home className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Inventory</h3>
                    <p className="text-2xl font-bold text-purple-600">156</p>
                    <p className="text-sm text-muted-foreground">
                      Active Listings
                    </p>
                  </Card>

                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Median Price</h3>
                    <p className="text-2xl font-bold text-orange-600">$1.2M</p>
                    <p className="text-sm text-muted-foreground">
                      Current Market
                    </p>
                  </Card>
                </div>

                {/* Price Trends by Community */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Price Trends by Community
                    </h3>
                    <div className="space-y-4">
                      {filteredCommunities.slice(0, 4).map((community) => {
                        const priceChange =
                          community.id % 3 === 0
                            ? 3.2
                            : community.id % 2 === 0
                            ? 1.8
                            : 4.5;
                        const isPositive = priceChange > 0;
                        return (
                          <div
                            key={community.id}
                            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-sm">
                                  {community.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">{community.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  $
                                  {(community.averagePrice / 1000000).toFixed(
                                    1
                                  )}
                                  M
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p
                                className={`font-semibold ${
                                  isPositive ? "text-green-600" : "text-red-600"
                                }`}
                              >
                                {isPositive ? "+" : ""}
                                {priceChange}%
                              </p>
                              <p className="text-xs text-muted-foreground">
                                YoY
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Community Growth & Demand
                    </h3>
                    <div className="space-y-4">
                      {filteredCommunities.slice(0, 4).map((community) => {
                        const demandScore = Math.floor(Math.random() * 40) + 60; // 60-100
                        const growthRate = (Math.random() * 8 + 2).toFixed(1); // 2.0-10.0
                        return (
                          <div
                            key={community.id}
                            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-sm">
                                  {community.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">{community.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {community.population.toLocaleString()}{" "}
                                  residents
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-primary h-2 rounded-full"
                                    style={{ width: `${demandScore}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">
                                  {demandScore}%
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                +{growthRate}% growth
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </div>

                {/* Market Insights */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-primary" />
                    Key Market Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">Strong Buyer Demand</h4>
                          <p className="text-sm text-muted-foreground">
                            Inventory levels remain low while buyer interest
                            continues to grow, creating a competitive market
                            environment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">Price Stability</h4>
                          <p className="text-sm text-muted-foreground">
                            Despite market fluctuations, property values in
                            these communities show consistent long-term growth.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">Investment Potential</h4>
                          <p className="text-sm text-muted-foreground">
                            High walk scores and amenities make these
                            communities attractive for both living and
                            investment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">Market Momentum</h4>
                          <p className="text-sm text-muted-foreground">
                            Quick sales and multiple offers indicate strong
                            market momentum in premium locations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
