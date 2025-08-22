import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, MessageSquare, Building, UserPlus, Calendar } from "lucide-react"

const activities = [
  {
    id: "1",
    type: "property_view",
    title: "Property viewed",
    description: "Modern Beverly Hills Estate viewed by John Smith",
    time: "2 minutes ago",
    icon: Eye,
    user: { name: "John Smith", avatar: "/placeholder.svg" },
  },
  {
    id: "2",
    type: "contact_form",
    title: "New contact form submission",
    description: "Sarah Johnson submitted a contact form for property inquiry",
    time: "15 minutes ago",
    icon: MessageSquare,
    user: { name: "Sarah Johnson", avatar: "/placeholder.svg" },
  },
  {
    id: "3",
    type: "listing_added",
    title: "New listing added",
    description: "Hollywood Hills Villa added by Agent Michael Chen",
    time: "1 hour ago",
    icon: Building,
    user: { name: "Michael Chen", avatar: "/placeholder.svg" },
  },
  {
    id: "4",
    type: "agent_registered",
    title: "New agent registered",
    description: "Lisa Rodriguez joined the team",
    time: "3 hours ago",
    icon: UserPlus,
    user: { name: "Lisa Rodriguez", avatar: "/placeholder.svg" },
  },
  {
    id: "5",
    type: "showing_scheduled",
    title: "Showing scheduled",
    description: "Property showing scheduled for tomorrow at 2:00 PM",
    time: "5 hours ago",
    icon: Calendar,
    user: { name: "David Kim", avatar: "/placeholder.svg" },
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <Badge variant="secondary" className="text-xs">
                      {activity.type.replace("_", " ")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                      <AvatarFallback className="text-xs">
                        {activity.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{activity.user.name}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
