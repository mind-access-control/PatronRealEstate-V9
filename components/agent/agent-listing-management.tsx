"use client"

import { useState } from "react"
import { Search, Plus, Edit, Eye, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const listings = [
  {
    id: 1,
    address: "123 Oak Street",
    city: "Downtown",
    price: "$450,000",
    status: "Active",
    views: 245,
    leads: 8,
    image: "/placeholder.svg?height=100&width=150",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,850",
    daysOnMarket: 12,
  },
  {
    id: 2,
    address: "456 Pine Avenue",
    city: "Suburbs",
    price: "$325,000",
    status: "Pending",
    views: 189,
    leads: 12,
    image: "/placeholder.svg?height=100&width=150",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,200",
    daysOnMarket: 8,
  },
  {
    id: 3,
    address: "789 Maple Drive",
    city: "Westside",
    price: "$675,000",
    status: "Active",
    views: 156,
    leads: 5,
    image: "/placeholder.svg?height=100&width=150",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "3,100",
    daysOnMarket: 25,
  },
]

export default function AgentListingManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredListings = listings.filter(
    (listing) =>
      listing.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.city.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Listing
        </Button>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow border overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Property Image */}
                <div className="flex-shrink-0">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.address}
                    className="w-full lg:w-48 h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Property Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{listing.address}</h3>
                      <p className="text-gray-600">{listing.city}</p>
                      <p className="text-2xl font-bold text-emerald-600 mt-1">{listing.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          listing.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : listing.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {listing.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">{listing.bedrooms}</span> beds
                    </div>
                    <div>
                      <span className="font-medium">{listing.bathrooms}</span> baths
                    </div>
                    <div>
                      <span className="font-medium">{listing.sqft}</span> sqft
                    </div>
                    <div>
                      <span className="font-medium">{listing.daysOnMarket}</span> days on market
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-blue-600 font-medium">Views</div>
                      <div className="text-2xl font-bold text-blue-900">{listing.views}</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <div className="text-emerald-600 font-medium">Leads</div>
                      <div className="text-2xl font-bold text-emerald-900">{listing.leads}</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none bg-transparent">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 lg:flex-none text-red-600 hover:text-red-700 bg-transparent"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
