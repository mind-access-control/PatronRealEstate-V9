"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PropertyCard } from "@/components/property-card";
import { dummyProperties } from "@/lib/dummy-data";
import {
  Search,
  MapPin,
  Home,
  Bed,
  Bath,
  Filter,
  DollarSign,
} from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("0");
  const [minBathrooms, setMinBathrooms] = useState("0");
  const [status, setStatus] = useState("all");

  // Filtrar propiedades basado en los criterios de búsqueda
  const filteredProperties = useMemo(() => {
    return dummyProperties.filter((property) => {
      // Búsqueda por texto
      const matchesSearch =
        searchQuery === "" ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por tipo de propiedad
      const matchesType =
        propertyType === "all" || property.type === propertyType;

      // Filtro por precio
      const matchesPrice =
        (!minPrice || property.price >= parseInt(minPrice)) &&
        (!maxPrice || property.price <= parseInt(maxPrice));

      // Filtro por habitaciones
      const matchesBedrooms =
        minBedrooms === "0" || property.bedrooms >= parseInt(minBedrooms);

      // Filtro por baños
      const matchesBathrooms =
        minBathrooms === "0" || property.bathrooms >= parseInt(minBathrooms);

      // Filtro por estado
      const matchesStatus = status === "all" || property.status === status;

      return (
        matchesSearch &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesStatus
      );
    });
  }, [
    searchQuery,
    propertyType,
    minPrice,
    maxPrice,
    minBedrooms,
    minBathrooms,
    status,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setPropertyType("all");
    setMinPrice("");
    setMaxPrice("");
    setMinBedrooms("0");
    setMinBathrooms("0");
    setStatus("all");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-4">
            Search
            <span className="block text-primary">Properties</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect home in Miami with our advanced search tools and
            extensive property database.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-white shadow-lg border border-gray-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Búsqueda principal */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Enter city, neighborhood, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tipo de propiedad */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">Houses</SelectItem>
                    <SelectItem value="condo">Condos</SelectItem>
                    <SelectItem value="apartment">Apartments</SelectItem>
                    <SelectItem value="townhouse">Townhouses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Precio mínimo */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Precio máximo */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Habitaciones mínimas */}
              <div className="relative">
                <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Select value={minBedrooms} onValueChange={setMinBedrooms}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Min Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Baños mínimos */}
              <div className="relative">
                <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Select value={minBathrooms} onValueChange={setMinBathrooms}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Min Bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Estado */}
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>{filteredProperties.length} properties found</span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <>
            {/* Grid de propiedades */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  className="h-full"
                />
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-white"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all our properties.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
