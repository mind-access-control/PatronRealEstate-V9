"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock property data
const properties = [
  {
    id: "1",
    title: "Modern Beverly Hills Estate",
    address: "123 Beverly Dr, Beverly Hills, CA 90210",
    price: "$2,850,000",
    status: "For Sale",
    agent: "Sarah Johnson",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    dateAdded: "2024-01-15",
    views: 234,
  },
  {
    id: "2",
    title: "Contemporary Santa Monica Condo",
    address: "456 Ocean Ave, Santa Monica, CA 90401",
    price: "$1,250,000",
    status: "For Sale",
    agent: "Michael Chen",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    dateAdded: "2024-01-12",
    views: 189,
  },
  {
    id: "3",
    title: "Hollywood Hills Villa",
    address: "789 Sunset Blvd, Hollywood, CA 90028",
    price: "$3,200,000",
    status: "Pending",
    agent: "Lisa Rodriguez",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    dateAdded: "2024-01-10",
    views: 156,
  },
  {
    id: "4",
    title: "Manhattan Beach Family Home",
    address: "321 Strand St, Manhattan Beach, CA 90266",
    price: "$1,850,000",
    status: "Sold",
    agent: "David Kim",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    dateAdded: "2024-01-08",
    views: 298,
  },
]

export function PropertyManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || property.status.toLowerCase().replace(" ", "-") === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "For Sale":
        return "bg-emerald-500"
      case "Pending":
        return "bg-yellow-500"
      case "Sold":
        return "bg-gray-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-80"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Property
        </Button>
      </div>

      {/* Properties Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Properties ({filteredProperties.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.title}</div>
                      <div className="text-sm text-muted-foreground">{property.address}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{property.price}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(property.status)} text-white`}>{property.status}</Badge>
                  </TableCell>
                  <TableCell>{property.agent}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {property.bedrooms} bed • {property.bathrooms} bath • {property.sqft.toLocaleString()} sqft
                    </div>
                  </TableCell>
                  <TableCell>{property.views}</TableCell>
                  <TableCell>{new Date(property.dateAdded).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Property
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Property
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
