"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth";

export default function AdminDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated("admin")) {
      router.push("/admin/login");
    } else {
      // Redirect to videos page since that's the main focus
      router.push("/admin/videos");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">
          Redirecting to admin panel...
        </p>
      </div>
    </div>
  );
}
