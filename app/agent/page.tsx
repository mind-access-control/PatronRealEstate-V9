"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import AgentMetrics from "@/components/agent/agent-metrics";
import AgentActivity from "@/components/agent/agent-activity";
import AgentQuickActions from "@/components/agent/agent-quick-actions";
import { auth } from "@/lib/auth";

export default function AgentDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated("agent")) {
      router.push("/agent/login");
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Sarah
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your business today.
        </p>
      </div>

      <Suspense fallback={<div>Loading metrics...</div>}>
        <AgentMetrics />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentActivity />
        <AgentQuickActions />
      </div>
    </div>
  );
}
