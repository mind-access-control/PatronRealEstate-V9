import AgentListingManagement from "@/components/agent/agent-listing-management";

export default function AgentListings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
        <p className="text-gray-600">
          Manage your property listings and track performance.
        </p>
      </div>

      <AgentListingManagement />
    </div>
  );
}
