"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Home, DollarSign, Bed, Bath, Square, Calendar, ChevronDown, ChevronUp } from "lucide-react"

export function SearchBarAdvanced() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    minPrice: 0,
    maxPrice: 5000000,
    bedrooms: "",
    bathrooms: "",
    minSqft: 0,
    maxSqft: 10000,
    yearBuilt: "",
    features: [] as string[],
    listingType: "sale",
  })

  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [sqftRange, setSqftRange] = useState([0, 10000])

  const propertyFeatures = [
    "Pool",
    "Garage",
    "Fireplace",
    "Garden",
    "Balcony",
    "Gym",
    "Security System",
    "Air Conditioning",
    "Hardwood Floors",
    "Updated Kitchen",
  ]

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setSearchData({ ...searchData, features: [...searchData.features, feature] })
    } else {
      setSearchData({ ...searchData, features: searchData.features.filter((f) => f !== feature) })
    }
  }

  const handleSearch = () => {
    const updatedSearchData = {
      ...searchData,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minSqft: sqftRange[0],
      maxSqft: sqftRange[1],
    }
    console.log("Advanced search data:", updatedSearchData)
    // TODO: Implement search functionality
  }

  const resetFilters = () => {
    setSearchData({
      location: "",
      propertyType: "",
      minPrice: 0,
      maxPrice: 5000000,
      bedrooms: "",
      bathrooms: "",
      minSqft: 0,
      maxSqft: 10000,
      yearBuilt: "",
      features: [],
      listingType: "sale",
    })
    setPriceRange([0, 5000000])
    setSqftRange([0, 10000])
  }

  return (
    <div className="space-y-6">
      {/* Basic Search Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </Label>
          <Input
            placeholder="City, neighborhood, or ZIP"
            value={searchData.location}
            onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Listing Type</Label>
          <Select
            value={searchData.listingType}
            onValueChange={(value) => setSearchData({ ...searchData, listingType: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
              <SelectItem value="sold">Recently Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Property Type
          </Label>
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
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end gap-2">
          <Button onClick={handleSearch} className="flex-1">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="px-3">
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Advanced Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Price Range */}
            <div className="space-y-4">
              <Label className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={5000000}
                min={0}
                step={50000}
                className="w-full"
              />
            </div>

            {/* Bedrooms and Bathrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Bed className="h-4 w-4" />
                  Bedrooms
                </Label>
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

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  Bathrooms
                </Label>
                <Select
                  value={searchData.bathrooms}
                  onValueChange={(value) => setSearchData({ ...searchData, bathrooms: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Square Footage */}
            <div className="space-y-4">
              <Label className="flex items-center gap-2">
                <Square className="h-4 w-4" />
                Square Footage: {sqftRange[0].toLocaleString()} - {sqftRange[1].toLocaleString()} sqft
              </Label>
              <Slider
                value={sqftRange}
                onValueChange={setSqftRange}
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
            </div>

            {/* Year Built */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Year Built
              </Label>
              <Select
                value={searchData.yearBuilt}
                onValueChange={(value) => setSearchData({ ...searchData, yearBuilt: value })}
              >
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Any year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020+">2020 or newer</SelectItem>
                  <SelectItem value="2010+">2010 or newer</SelectItem>
                  <SelectItem value="2000+">2000 or newer</SelectItem>
                  <SelectItem value="1990+">1990 or newer</SelectItem>
                  <SelectItem value="1980+">1980 or newer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Features */}
            <div className="space-y-4">
              <Label>Property Features</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {propertyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={searchData.features.includes(feature)}
                      onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                    />
                    <Label htmlFor={feature} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button onClick={handleSearch} className="flex-1 md:flex-none">
                <Search className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
