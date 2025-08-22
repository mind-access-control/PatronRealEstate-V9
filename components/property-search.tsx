"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export function PropertySearch() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  })

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Search data:", searchData)
  }

  return (
    <div className="space-y-4">
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Search Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </label>
          <Input
            placeholder="City, neighborhood, or ZIP"
            value={searchData.location}
            onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
          />
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Home className="h-4 w-4" />
            Property Type
          </label>
          <Select
            value={searchData.propertyType}
            onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Price Range
          </label>
          <Select
            value={searchData.priceRange}
            onValueChange={(value) => setSearchData({ ...searchData, priceRange: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500000">Under $500K</SelectItem>
              <SelectItem value="500000-750000">$500K - $750K</SelectItem>
              <SelectItem value="750000-1000000">$750K - $1M</SelectItem>
              <SelectItem value="1000000-1500000">$1M - $1.5M</SelectItem>
              <SelectItem value="1500000+">$1.5M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Bedrooms</label>
          <Select
            value={searchData.bedrooms}
            onValueChange={(value) => setSearchData({ ...searchData, bedrooms: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto px-8 py-3 text-lg">
        <Search className="h-5 w-5 mr-2" />
        Search Properties
      </Button>
    </div>
  )
}
