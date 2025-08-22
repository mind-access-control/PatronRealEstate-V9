"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, X } from "lucide-react"

interface Property {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  imageUrl: string
  status: "For Sale" | "For Rent" | "Sold" | "Pending"
  coordinates: { lat: number; lng: number }
}

interface PropertyMapProps {
  properties: Property[]
}

export function PropertyMap({ properties }: PropertyMapProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  // Mock map implementation - in a real app, you'd use Google Maps, Mapbox, etc.
  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {/* Map Background */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=800')`,
        }}
      >
        {/* Property Markers */}
        {properties.map((property) => (
          <div
            key={property.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${20 + Number.parseInt(property.id) * 15}%`,
              top: `${30 + Number.parseInt(property.id) * 8}%`,
            }}
            onClick={() => setSelectedProperty(property)}
          >
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform">
              {property.price.replace(/,000$/, "K")}
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary mx-auto"></div>
          </div>
        ))}
      </div>

      {/* Property Details Popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-80">
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={selectedProperty.imageUrl || "/placeholder.svg"}
                  alt={selectedProperty.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedProperty(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {selectedProperty.status}
                </Badge>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">
                    {selectedProperty.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary">{selectedProperty.price}</p>
                </div>

                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="line-clamp-1">{selectedProperty.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{selectedProperty.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{selectedProperty.bathrooms} bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{selectedProperty.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">View Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
          +
        </Button>
        <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
          -
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute top-4 left-4">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="text-sm font-medium text-foreground mb-2">Price Range</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span>Under $1M</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                <span>$1M - $2M</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                <span>Over $2M</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
