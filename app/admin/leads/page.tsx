import { LeadManagement } from "@/components/admin/lead-management";

export default function AdminLeadsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Lead Management
        </h1>
        <p className="text-muted-foreground">
          Manage contact form submissions and client inquiries.
        </p>
      </div>

      <LeadManagement />
    </div>
  );
}
