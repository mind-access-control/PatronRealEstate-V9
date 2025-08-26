import AgentLeadManagement from "@/components/agent/agent-lead-management";

export default function AgentLeads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Leads</h1>
        <p className="text-gray-600">
          Track and manage your client prospects and opportunities.
        </p>
      </div>

      <AgentLeadManagement />
    </div>
  );
}
