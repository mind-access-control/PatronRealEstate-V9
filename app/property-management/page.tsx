import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Home,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-4">
            Property
            <span className="block text-primary">Management</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional property management services for landlords and property
            investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-6 h-6 text-primary" />
                Tenant Screening
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Comprehensive background checks, credit reports, and rental
                history verification for all potential tenants.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                Rent Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Automated rent collection, late fee management, and detailed
                financial reporting for property owners.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                24/7 emergency maintenance response and regular property
                inspections to maintain property value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Tenant Relations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Professional tenant communication, lease renewals, and conflict
                resolution services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Legal Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Stay compliant with all local, state, and federal rental
                property regulations and requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Regular market analysis to ensure competitive rental rates and
                maximize property income.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA Section */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let us handle your property management needs so you can focus on
              what matters most. Contact us to discuss your specific
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">
                  <Plus className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
