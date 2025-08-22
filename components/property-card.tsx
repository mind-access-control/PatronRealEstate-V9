import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  imageUrl: string
  status: "For Sale" | "For Rent" | "Sold" | "Pending"
  featured?: boolean
  className?: string
}

export function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  sqft,
  imageUrl,
  status,
  featured = false,
  className,
}: PropertyCardProps) {
  const statusColors = {
    "For Sale": "bg-emerald-500",
    "For Rent": "bg-blue-500",
    Sold: "bg-gray-500",
    Pending: "bg-yellow-500",
  }

  return (
    <Card className={cn("group hover:shadow-lg transition-shadow duration-300 overflow-hidden", className)}>
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${statusColors[status]} text-white`}>{status}</Badge>
          {featured && <Badge variant="secondary">Featured</Badge>}
        </div>
        <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">{title}</h3>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{bedrooms} bed</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{bathrooms} bath</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                <span>{sqft.toLocaleString()} sqft</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-transparent" variant="outline">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
