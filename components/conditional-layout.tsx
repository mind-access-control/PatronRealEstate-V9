"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Check for admin and agent dashboard pages that should NOT show public header/footer
  const isAdminDashboardPage = pathname && pathname.startsWith("/admin/");

  const isAgentDashboardPage = pathname && pathname.startsWith("/agent/");

  // Don't show public header/footer on admin or agent dashboard pages
  if (isAdminDashboardPage || isAgentDashboardPage) {
    return <>{children}</>;
  }

  // Show public header/footer on all other pages (including login pages)
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
