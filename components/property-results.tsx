"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property-card"
import { PropertyMap } from "@/components/property-map"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Map, SlidersHorizontal } from "lucide-react"

// Mock property data
const mockProperties = [
  {
    id: "1",
    title: "Modern Beverly Hills Estate",
    price: "$2,850,000",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 34.0736, lng: -118.4004 },
  },
  {
    id: "2",
    title: "Contemporary Santa Monica Condo",
    price: "$1,250,000",
    location: "Santa Monica, CA",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 34.0195, lng: -118.4912 },
  },
  {
    id: "3",
    title: "Hollywood Hills Villa",
    price: "$3,200,000",
    location: "Hollywood Hills, CA",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 34.1184, lng: -118.357 },
  },
  {
    id: "4",
    title: "Manhattan Beach Family Home",
    price: "$1,850,000",
    location: "Manhattan Beach, CA",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 33.8847, lng: -118.4109 },
  },
  {
    id: "5",
    title: "Downtown LA Luxury Loft",
    price: "$950,000",
    location: "Downtown Los Angeles, CA",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "6",
    title: "Pasadena Craftsman Home",
    price: "$1,450,000",
    location: "Pasadena, CA",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    imageUrl: "/placeholder.svg?height=300&width=400",
    status: "For Sale" as const,
    coordinates: { lat: 34.1478, lng: -118.1445 },
  },
]

export function PropertyResults() {
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid")
  const [sortBy, setSortBy] = useState("price-low")

  const sortedProperties = [...mockProperties].sort((a, b) => {
    const priceA = Number.parseInt(a.price.replace(/[$,]/g, ""))
    const priceB = Number.parseInt(b.price.replace(/[$,]/g, ""))

    switch (sortBy) {
      case "price-low":
        return priceA - priceB
      case "price-high":
        return priceB - priceA
      case "sqft-high":
        return b.sqft - a.sqft
      case "bedrooms":
        return b.bedrooms - a.bedrooms
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{mockProperties.length} Properties Found</h2>
          <p className="text-muted-foreground">Showing results for Los Angeles County</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="sqft-high">Square Feet: High to Low</SelectItem>
                <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-border rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="px-3"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="px-3"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="px-3"
            >
              <Map className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Display */}
      {viewMode === "map" ? (
        <div className="h-[600px] rounded-lg overflow-hidden">
          <PropertyMap properties={sortedProperties} />
        </div>
      ) : (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {sortedProperties.map((property) => (
            <PropertyCard key={property.id} {...property} className={viewMode === "list" ? "flex flex-row" : ""} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Properties
        </Button>
      </div>
    </div>
  )
}
