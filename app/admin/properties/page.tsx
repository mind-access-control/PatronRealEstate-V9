import { AdminLayout } from "@/components/admin/admin-layout"
import { PropertyManagement } from "@/components/admin/property-management"

export default function AdminPropertiesPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Property Management</h1>
          <p className="text-muted-foreground">Manage all property listings and their details.</p>
        </div>

        <PropertyManagement />
      </div>
    </AdminLayout>
  )
}
