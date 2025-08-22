import { PropertyCard } from "@/components/property-card"

// Mock data for featured properties
const featuredProperties = [
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
]

export function FeaturedListings() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties in Los Angeles' most desirable neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
