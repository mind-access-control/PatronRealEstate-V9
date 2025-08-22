import { Clock, Phone, Mail, Calendar } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "showing",
    title: "Property showing scheduled",
    description: "123 Oak Street - John & Mary Smith",
    time: "2 hours ago",
    icon: Calendar,
  },
  {
    id: 2,
    type: "lead",
    title: "New lead inquiry",
    description: "Sarah Wilson interested in downtown condos",
    time: "4 hours ago",
    icon: Mail,
  },
  {
    id: 3,
    type: "call",
    title: "Follow-up call completed",
    description: "Called Mike Johnson about 456 Pine Ave",
    time: "6 hours ago",
    icon: Phone,
  },
  {
    id: 4,
    type: "listing",
    title: "New listing published",
    description: "789 Maple Drive - $450,000",
    time: "1 day ago",
    icon: Clock,
  },
]

export default function AgentActivity() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center ring-8 ring-white">
                        <activity.icon className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
