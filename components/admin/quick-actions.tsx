"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Building, MessageSquare, Settings, FileText } from "lucide-react"

const quickActions = [
  {
    title: "Add New Property",
    description: "Create a new property listing",
    icon: Building,
    action: "add-property",
  },
  {
    title: "Create Agent Account",
    description: "Add a new agent to the system",
    icon: Users,
    action: "add-agent",
  },
  {
    title: "View All Leads",
    description: "Manage contact form submissions",
    icon: MessageSquare,
    action: "view-leads",
  },
  {
    title: "Generate Report",
    description: "Create performance reports",
    icon: FileText,
    action: "generate-report",
  },
  {
    title: "System Settings",
    description: "Configure system preferences",
    icon: Settings,
    action: "settings",
  },
]

export function QuickActions() {
  const handleAction = (action: string) => {
    // TODO: Implement action handlers
    console.log(`Action: ${action}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.action}
                variant="outline"
                className="w-full justify-start h-auto p-4 bg-transparent"
                onClick={() => handleAction(action.action)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
