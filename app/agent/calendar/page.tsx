"use client"

import { useState } from "react"
import AgentLayout from "@/components/agent/agent-layout"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User, Plus } from "lucide-react"

const appointments = [
  {
    id: 1,
    title: "Property Showing - 123 Oak Street",
    time: "10:00 AM",
    client: "John Smith",
    type: "showing",
    address: "123 Oak Street, Downtown",
  },
  {
    id: 2,
    title: "Client Meeting - Sarah Wilson",
    time: "2:00 PM",
    client: "Sarah Wilson",
    type: "meeting",
    address: "Office",
  },
  {
    id: 3,
    title: "Property Inspection - 456 Pine Ave",
    time: "4:30 PM",
    client: "Mike Johnson",
    type: "inspection",
    address: "456 Pine Ave, Suburbs",
  },
]

export default function AgentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <AgentLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600">Manage your appointments and schedule.</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today's Appointments</CardTitle>
              <CardDescription>{selectedDate?.toLocaleDateString() || "Select a date"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{appointment.title}</h3>
                        <Badge
                          variant={
                            appointment.type === "showing"
                              ? "default"
                              : appointment.type === "meeting"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {appointment.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {appointment.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {appointment.address}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AgentLayout>
  )
}
