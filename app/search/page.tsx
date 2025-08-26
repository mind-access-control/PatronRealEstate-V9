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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [buyOrRent, setBuyOrRent] = useState("all"); // Nuevo filtro: Buy vs Rent
  const [propertyType, setPropertyType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("0");
  const [minBathrooms, setMinBathrooms] = useState("0");
  const [status, setStatus] = useState("all");

  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Filtrar propiedades basado en los criterios de búsqueda
  const filteredProperties = useMemo(() => {
    return dummyProperties.filter((property) => {
      // Búsqueda por texto - usar city en lugar de location
      const matchesSearch =
        searchQuery === "" ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por Buy vs Rent
      const matchesBuyOrRent =
        buyOrRent === "all" ||
        (buyOrRent === "buy" &&
          (property.status === "for-sale" || property.status === "pending")) ||
        (buyOrRent === "rent" && property.status === "for-rent");

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

      // Filtro por estado (ahora más específico)
      const matchesStatus =
        status === "all" ||
        (buyOrRent === "all" && property.status === status) ||
        (buyOrRent === "buy" &&
          (status === "all" || property.status === status)) ||
        (buyOrRent === "rent" &&
          (status === "all" || property.status === status));

      return (
        matchesSearch &&
        matchesBuyOrRent &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesStatus
      );
    });
  }, [
    searchQuery,
    buyOrRent,
    propertyType,
    minPrice,
    maxPrice,
    minBedrooms,
    minBathrooms,
    status,
  ]);

  // Calcular propiedades paginadas
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProperties.slice(startIndex, endIndex);
  }, [filteredProperties, currentPage, itemsPerPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  // Resetear a la primera página cuando cambien los filtros
  const resetPagination = () => {
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setBuyOrRent("all");
    setPropertyType("all");
    setMinPrice("");
    setMaxPrice("");
    setMinBedrooms("0");
    setMinBathrooms("0");
    setStatus("all");
    resetPagination();
  };

  // Función para cambiar de página
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generar array de páginas para mostrar
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
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
            Find your perfect home with our advanced search tools and extensive
            property database.
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  resetPagination();
                }}
                className="pl-10 text-lg"
              />
            </div>

            {/* Filtro principal: Buy vs Rent */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    I want to:
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={buyOrRent === "all" ? "default" : "outline"}
                    onClick={() => {
                      setBuyOrRent("all");
                      setStatus("all");
                      resetPagination();
                    }}
                    className="flex-1 cursor-pointer"
                  >
                    Browse All
                  </Button>
                  <Button
                    variant={buyOrRent === "buy" ? "default" : "outline"}
                    onClick={() => {
                      setBuyOrRent("buy");
                      setStatus("all");
                      resetPagination();
                    }}
                    className="flex-1 cursor-pointer"
                  >
                    Buy
                  </Button>
                  <Button
                    variant={buyOrRent === "rent" ? "default" : "outline"}
                    onClick={() => {
                      setBuyOrRent("rent");
                      setStatus("all");
                      resetPagination();
                    }}
                    className="flex-1 cursor-pointer"
                  >
                    Rent
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tipo de propiedad */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Select
                  value={propertyType}
                  onValueChange={(value) => {
                    setPropertyType(value);
                    resetPagination();
                  }}
                >
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
                  placeholder={buyOrRent === "rent" ? "Min Rent" : "Min Price"}
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                    resetPagination();
                  }}
                  className="pl-10"
                />
              </div>

              {/* Precio máximo */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  placeholder={buyOrRent === "rent" ? "Max Rent" : "Max Price"}
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                    resetPagination();
                  }}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Habitaciones mínimas */}
              <div className="relative">
                <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Select
                  value={minBedrooms}
                  onValueChange={(value) => {
                    setMinBedrooms(value);
                    resetPagination();
                  }}
                >
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
                <Select
                  value={minBathrooms}
                  onValueChange={(value) => {
                    setMinBathrooms(value);
                    resetPagination();
                  }}
                >
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

              {/* Estado - Solo mostrar si no se ha seleccionado Buy o Rent específico */}
              {buyOrRent === "all" && (
                <Select
                  value={status}
                  onValueChange={(value) => {
                    setStatus(value);
                    resetPagination();
                  }}
                >
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
              )}

              {/* Mostrar estado específico cuando se selecciona Buy o Rent */}
              {buyOrRent === "buy" && (
                <div className="flex items-center justify-center h-10 px-3 bg-gray-50 rounded-md border">
                  <span className="text-sm text-gray-600">
                    Buying Properties
                  </span>
                </div>
              )}

              {buyOrRent === "rent" && (
                <div className="flex items-center justify-center h-10 px-3 bg-gray-50 rounded-md border">
                  <span className="text-sm text-gray-600">
                    Rental Properties
                  </span>
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>
                  {filteredProperties.length}{" "}
                  {buyOrRent === "buy"
                    ? "properties for sale"
                    : buyOrRent === "rent"
                    ? "rental properties"
                    : "properties"}{" "}
                  found
                </span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MLS Integration Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <MapPin className="w-6 h-6 text-blue-600" />
              MLS Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-800 text-sm leading-relaxed">
                Access the comprehensive Multiple Listing Service (MLS) database
                for additional property listings across the region. MLS provides
                real-time data from multiple real estate sources.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* English MLS */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900 text-sm">
                    English
                  </h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?LA=EN",
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Search MLS Listings
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 text-xs cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?AGENT=G84001&LA=EN",
                          "_blank"
                        )
                      }
                    >
                      Agent Listings
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 text-xs cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?OFFICE=G8485&LA=EN",
                          "_blank"
                        )
                      }
                    >
                      Office Listings
                    </Button>
                  </div>
                </div>

                {/* Spanish MLS */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900 text-sm">
                    Español
                  </h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?LA=SP",
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Buscar Listados MLS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 text-xs cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?AGENT=G84001&LA=SP",
                          "_blank"
                        )
                      }
                    >
                      Listados del Agente
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 text-xs cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.crmls.org/servlet/lDisplayListings?OFFICE=G8485&LA=SP",
                          "_blank"
                        )
                      }
                    >
                      Listados de la Oficina
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-blue-200">
                <p className="text-xs text-blue-600">
                  💡 MLS listings open in new tabs and provide additional
                  property options beyond our local database.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <>
            {/* Grid de propiedades */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  className="h-full"
                />
              ))}
            </div>

            {/* Paginación */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-4">
              {/* Información de paginación */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show:</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(parseInt(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-600">per page</span>
                </div>

                <div className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredProperties.length
                  )}{" "}
                  of {filteredProperties.length} properties
                </div>
              </div>

              {/* Controles de paginación */}
              {totalPages > 1 && (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {getPageNumbers().map((page, index) => (
                    <div key={index}>
                      {page === "..." ? (
                        <span className="px-3 py-2 text-gray-500">...</span>
                      ) : (
                        <Button
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => goToPage(page as number)}
                          className={
                            currentPage === page ? "bg-primary text-white" : ""
                          }
                        >
                          {page}
                        </Button>
                      )}
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-6">
              {buyOrRent === "buy"
                ? "Try adjusting your search criteria for properties to buy."
                : buyOrRent === "rent"
                ? "Try adjusting your search criteria for rental properties."
                : "Try adjusting your search criteria or browse all our properties."}
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
