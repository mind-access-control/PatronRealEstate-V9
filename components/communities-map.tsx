"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, School, Users, DollarSign, X } from "lucide-react"

interface Community {
  id: string
  name: string
  description: string
  population: string
  medianPrice: string
  schools: string
  amenities: string[]
  coordinates: { x: number; y: number }
  image: string
}

const communities: Community[] = [
  {
    id: "beverly-hills",
    name: "Beverly Hills",
    description: "Luxury living with world-class shopping and dining",
    population: "34,000",
    medianPrice: "$3.2M",
    schools: "9/10 Rating",
    amenities: ["Rodeo Drive", "Fine Dining", "Luxury Shopping", "Parks"],
    coordinates: { x: 25, y: 40 },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "santa-monica",
    name: "Santa Monica",
    description: "Beachfront community with vibrant culture",
    population: "91,000",
    medianPrice: "$1.8M",
    schools: "8/10 Rating",
    amenities: ["Beach Access", "Pier", "Third Street Promenade", "Bike Paths"],
    coordinates: { x: 15, y: 55 },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "hollywood-hills",
    name: "Hollywood Hills",
    description: "Iconic hillside living with stunning city views",
    population: "22,000",
    medianPrice: "$2.1M",
    schools: "7/10 Rating",
    amenities: ["City Views", "Hiking Trails", "Entertainment Industry", "Nightlife"],
    coordinates: { x: 35, y: 30 },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "manhattan-beach",
    name: "Manhattan Beach",
    description: "Family-friendly beach community",
    population: "35,000",
    medianPrice: "$2.5M",
    schools: "9/10 Rating",
    amenities: ["Beach Volleyball", "Family Parks", "Top Schools", "Safe Neighborhoods"],
    coordinates: { x: 20, y: 75 },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "pasadena",
    name: "Pasadena",
    description: "Historic charm with cultural attractions",
    population: "141,000",
    medianPrice: "$1.1M",
    schools: "8/10 Rating",
    amenities: ["Rose Bowl", "Old Town", "Museums", "Caltech"],
    coordinates: { x: 65, y: 25 },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "downtown-la",
    name: "Downtown LA",
    description: "Urban living with modern amenities",
    population: "58,000",
    medianPrice: "$750K",
    schools: "6/10 Rating",
    amenities: ["Arts District", "Restaurants", "Public Transit", "Nightlife"],
    coordinates: { x: 45, y: 50 },
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function CommunitiesMap() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)

  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {/* Map Background */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=800')`,
        }}
      >
        {/* Community Markers */}
        {communities.map((community) => (
          <div
            key={community.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `${community.coordinates.x}%`,
              top: `${community.coordinates.y}%`,
            }}
            onClick={() => setSelectedCommunity(community)}
          >
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:scale-110 transition-transform group-hover:bg-primary/90">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {community.name}
            </div>
          </div>
        ))}
      </div>

      {/* Community Details Panel */}
      {selectedCommunity && (
        <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-96">
          <Card className="shadow-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{selectedCommunity.name}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCommunity(null)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={selectedCommunity.image || "/placeholder.svg"}
                alt={selectedCommunity.name}
                className="w-full h-32 object-cover rounded-lg"
              />

              <p className="text-muted-foreground text-sm">{selectedCommunity.description}</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{selectedCommunity.population}</div>
                  <div className="text-xs text-muted-foreground">Population</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{selectedCommunity.medianPrice}</div>
                  <div className="text-xs text-muted-foreground">Median Price</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <School className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{selectedCommunity.schools}</div>
                  <div className="text-xs text-muted-foreground">Schools</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Key Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCommunity.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full">View Properties in {selectedCommunity.name}</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 right-4">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="text-sm font-medium text-foreground mb-2">Price Ranges</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span>Under $1M</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                <span>$1M - $2M</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
                <span>Over $2M</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
