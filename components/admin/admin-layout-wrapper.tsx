"use client";

import { usePathname } from "next/navigation";
import { AdminLayout } from "./admin-layout";

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
}

export function AdminLayoutWrapper({ children }: AdminLayoutWrapperProps) {
  const pathname = usePathname();

  // Only apply AdminLayout to specific admin dashboard pages
  const shouldUseAdminLayout =
    pathname &&
    (pathname === "/admin" ||
      pathname === "/admin/properties" ||
      pathname === "/admin/agents" ||
      pathname === "/admin/leads" ||
      pathname === "/admin/settings");

  // Don't wrap login page or other pages with AdminLayout
  if (!shouldUseAdminLayout) {
    return <>{children}</>;
  }

  // Wrap dashboard pages with AdminLayout
  return <AdminLayout>{children}</AdminLayout>;
}
