"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/admin-layout"
import { DashboardMetrics } from "@/components/admin/dashboard-metrics"
import { RecentActivity } from "@/components/admin/recent-activity"
import { QuickActions } from "@/components/admin/quick-actions"
import { auth } from "@/lib/auth"

export default function AdminDashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (!auth.isAuthenticated("admin")) {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your real estate business.</p>
        </div>

        <DashboardMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
