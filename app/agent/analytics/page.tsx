import AgentLayout from "@/components/agent/agent-layout"
import { DollarSign, Home, Users, Eye } from "lucide-react"

const metrics = [
  {
    title: "Total Sales",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Properties Sold",
    value: "18",
    change: "+3 this month",
    trend: "up",
    icon: Home,
  },
  {
    title: "Active Listings",
    value: "12",
    change: "-2 from last month",
    trend: "down",
    icon: Eye,
  },
  {
    title: "New Leads",
    value: "34",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
]

export default function AgentAnalytics() {
  return (
    <AgentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track your performance and business metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-full">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart placeholder - Sales over time
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Sources</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart placeholder - Lead source breakdown
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { action: "Property sold", details: "123 Oak Street - $450,000", time: "2 hours ago" },
                { action: "New lead", details: "John Smith interested in downtown condos", time: "4 hours ago" },
                { action: "Listing updated", details: "456 Pine Avenue - Price reduced", time: "1 day ago" },
                { action: "Appointment scheduled", details: "Property showing at 789 Elm Street", time: "2 days ago" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AgentLayout>
  )
}
