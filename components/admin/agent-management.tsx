"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Mail, Phone, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock agent data
const agents = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@patronrealestateservices.com",
    phone: "323.350.3137",
    role: "Principal Broker",
    status: "active",
    joinDate: "2009-01-15",
    avatar: "/placeholder.svg",
    properties: 23,
    sales: "$150M",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@patronrealestateservices.com",
    phone: "323.350.3138",
    role: "Senior Agent",
    status: "active",
    joinDate: "2016-03-20",
    avatar: "/placeholder.svg",
    properties: 18,
    sales: "$85M",
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    email: "lisa@patronrealestateservices.com",
    phone: "323.350.3139",
    role: "Agent",
    status: "active",
    joinDate: "2018-07-10",
    avatar: "/placeholder.svg",
    properties: 12,
    sales: "$60M",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david@patronrealestateservices.com",
    phone: "323.350.3140",
    role: "Agent",
    status: "inactive",
    joinDate: "2014-11-05",
    avatar: "/placeholder.svg",
    properties: 15,
    sales: "$95M",
  },
]

export function AgentManagement() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newAgent, setNewAgent] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  })

  const handleCreateAgent = () => {
    // TODO: Implement agent creation
    console.log("Creating agent:", newAgent)
    setIsCreateDialogOpen(false)
    setNewAgent({ name: "", email: "", phone: "", role: "" })
  }

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">All Agents</h2>
          <p className="text-sm text-muted-foreground">{agents.length} total agents</p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Agent
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Agent</DialogTitle>
              <DialogDescription>
                Add a new agent to your team. They will receive login credentials via email.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={newAgent.email}
                  onChange={(e) => setNewAgent({ ...newAgent, email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={newAgent.phone}
                  onChange={(e) => setNewAgent({ ...newAgent, phone: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={newAgent.role} onValueChange={(value) => setNewAgent({ ...newAgent, role: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="senior-agent">Senior Agent</SelectItem>
                    <SelectItem value="broker">Broker</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateAgent}>Create Agent</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={agent.avatar || "/placeholder.svg"} alt={agent.name} />
                    <AvatarFallback>
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{agent.role}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Agent
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Agent
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={agent.status === "active" ? "default" : "secondary"}>
                  {agent.status === "active" ? "Active" : "Inactive"}
                </Badge>
                <span className="text-xs text-muted-foreground">Joined {new Date(agent.joinDate).getFullYear()}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{agent.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{agent.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-semibold">{agent.properties}</div>
                  <div className="text-xs text-muted-foreground">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">{agent.sales}</div>
                  <div className="text-xs text-muted-foreground">Sales Volume</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
