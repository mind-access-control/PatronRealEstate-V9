import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Edit, Trash2 } from "lucide-react";

export default function AdminAgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Agent Management
            </h1>
            <p className="text-gray-600">
              Create and manage agent accounts and permissions.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Agent
          </Button>
        </div>

        {/* Content */}
        <Card className="bg-white shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Agents List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Agent management functionality will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
