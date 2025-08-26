"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Check for admin and agent pages that should NOT show public header/footer
  const isAdminDashboardPage =
    pathname &&
    (pathname === "/admin" ||
      pathname === "/admin/properties" ||
      pathname === "/admin/agents" ||
      pathname === "/admin/leads" ||
      pathname === "/admin/settings");

  const isAgentDashboardPage =
    pathname &&
    (pathname === "/agent" ||
      pathname === "/agent/listings" ||
      pathname === "/agent/leads" ||
      pathname === "/agent/calendar" ||
      pathname === "/agent/messages" ||
      pathname === "/agent/analytics" ||
      pathname === "/agent/profile" ||
      pathname === "/agent/settings");

  // Don't show public header/footer on admin or agent dashboard pages
  if (isAdminDashboardPage || isAgentDashboardPage) {
    return <>{children}</>;
  }

  // Show public header/footer on all other pages
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
