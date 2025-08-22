import { Plus, Calendar, Phone, Mail, FileText, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  {
    name: "Add New Listing",
    description: "Create a new property listing",
    icon: Plus,
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    name: "Schedule Showing",
    description: "Book a property viewing",
    icon: Calendar,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Call Lead",
    description: "Follow up with prospects",
    icon: Phone,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    name: "Send Email",
    description: "Contact clients or leads",
    icon: Mail,
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    name: "Generate Report",
    description: "Create market analysis",
    icon: FileText,
    color: "bg-indigo-500 hover:bg-indigo-600",
  },
  {
    name: "Upload Photos",
    description: "Add listing images",
    icon: Camera,
    color: "bg-pink-500 hover:bg-pink-600",
  },
]

export default function AgentQuickActions() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.name}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-shadow bg-transparent"
            >
              <div className={`p-2 rounded-full ${action.color}`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">{action.name}</div>
                <div className="text-xs text-gray-500">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
