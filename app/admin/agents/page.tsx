import { AdminLayout } from "@/components/admin/admin-layout"
import { AgentManagement } from "@/components/admin/agent-management"

export default function AdminAgentsPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Agent Management</h1>
          <p className="text-muted-foreground">Create and manage agent accounts and permissions.</p>
        </div>

        <AgentManagement />
      </div>
    </AdminLayout>
  )
}
