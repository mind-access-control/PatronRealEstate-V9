import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Eye, Users, Building, MessageSquare, DollarSign, Calendar } from "lucide-react"

const metrics = [
  {
    title: "Total Website Visits",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
    description: "This month",
  },
  {
    title: "Property Views",
    value: "3,421",
    change: "+8.2%",
    trend: "up",
    icon: Building,
    description: "This month",
  },
  {
    title: "Contact Form Submissions",
    value: "156",
    change: "+23.1%",
    trend: "up",
    icon: MessageSquare,
    description: "This month",
  },
  {
    title: "Active Listings",
    value: "47",
    change: "-2.1%",
    trend: "down",
    icon: Building,
    description: "Currently active",
  },
  {
    title: "Total Agents",
    value: "8",
    change: "+1",
    trend: "up",
    icon: Users,
    description: "Active agents",
  },
  {
    title: "Sales Volume",
    value: "$2.4M",
    change: "+15.7%",
    trend: "up",
    icon: DollarSign,
    description: "This month",
  },
  {
    title: "Scheduled Showings",
    value: "23",
    change: "+4.5%",
    trend: "up",
    icon: Calendar,
    description: "This week",
  },
  {
    title: "Average Days on Market",
    value: "18",
    change: "-3.2%",
    trend: "up",
    icon: TrendingUp,
    description: "Days average",
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"
        const TrendIcon = isPositive ? TrendingUp : TrendingDown

        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendIcon className={`h-3 w-3 ${isPositive ? "text-emerald-500" : "text-red-500"}`} />
                <span className={isPositive ? "text-emerald-500" : "text-red-500"}>{metric.change}</span>
                <span>from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
