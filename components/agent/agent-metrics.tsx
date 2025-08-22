import { TrendingUp, TrendingDown, DollarSign, Home, Users, Calendar } from "lucide-react"

const metrics = [
  {
    name: "Active Listings",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: Home,
  },
  {
    name: "New Leads",
    value: "8",
    change: "+3",
    changeType: "increase",
    icon: Users,
  },
  {
    name: "Scheduled Showings",
    value: "15",
    change: "+5",
    changeType: "increase",
    icon: Calendar,
  },
  {
    name: "Monthly Commission",
    value: "$24,500",
    change: "+12%",
    changeType: "increase",
    icon: DollarSign,
  },
]

export default function AgentMetrics() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item) => (
        <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        item.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.changeType === "increase" ? (
                        <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                      )}
                      <span className="ml-1">{item.change}</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
