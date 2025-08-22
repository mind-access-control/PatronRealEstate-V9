"use client"

import { useState } from "react"
import { Search, Phone, Mail, Calendar, MoreHorizontal, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const leads = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    status: "Hot",
    source: "Website",
    interest: "Buying",
    budget: "$400,000 - $500,000",
    lastContact: "2 days ago",
    notes: "Looking for 3BR home in downtown area",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.w@email.com",
    phone: "(555) 987-6543",
    status: "Warm",
    source: "Referral",
    interest: "Selling",
    budget: "N/A",
    lastContact: "1 week ago",
    notes: "Wants to sell current home and upgrade",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.j@email.com",
    phone: "(555) 456-7890",
    status: "Cold",
    source: "Social Media",
    interest: "Buying",
    budget: "$300,000 - $400,000",
    lastContact: "2 weeks ago",
    notes: "First-time homebuyer, needs guidance",
  },
]

export default function AgentLeadManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot":
        return "bg-red-100 text-red-800"
      case "Warm":
        return "bg-yellow-100 text-yellow-800"
      case "Cold":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          {["All", "Hot", "Warm", "Cold"].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Leads List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredLeads.map((lead) => (
            <div key={lead.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-lg font-medium text-gray-900">{lead.name}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{lead.email}</span>
                        <span>{lead.phone}</span>
                        <span>Last contact: {lead.lastContact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Interest:</span>
                      <span className="ml-1 text-gray-600">{lead.interest}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Budget:</span>
                      <span className="ml-1 text-gray-600">{lead.budget}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Source:</span>
                      <span className="ml-1 text-gray-600">{lead.source}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Notes:</span> {lead.notes}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
