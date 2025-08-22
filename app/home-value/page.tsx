import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  Home,
  TrendingUp,
  MapPin,
  DollarSign,
  Calendar,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function HomeValuePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-4">
            My Home
            <span className="block text-primary">Value</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant, accurate estimate of your home's current market
            value using our advanced Homebot technology.
          </p>
        </div>

        {/* Home Value Calculator */}
        <Card className="bg-white shadow-xl border border-gray-200 mb-12 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Calculator className="w-8 h-8 text-primary" />
              Home Value Calculator
            </CardTitle>
            <p className="text-gray-600">
              Enter your property details for an instant valuation
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">Select Type</option>
                  <option value="house">Single Family Home</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <Input type="number" placeholder="3" min="1" max="10" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bathrooms
                </label>
                <Input
                  type="number"
                  placeholder="2"
                  min="1"
                  max="10"
                  step="0.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Square Feet
                </label>
                <Input type="number" placeholder="2000" min="500" />
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Home Value
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Advanced algorithms analyze recent sales, market trends, and
                property characteristics for accurate valuations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Real-Time Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Get instant valuations based on the most current market data and
                recent comparable sales in your area.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Historical Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View your property's value history and track market appreciation
                over time with detailed charts and reports.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Use Homebot */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0 mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Use Homebot?</h2>
              <p className="text-xl opacity-90">
                The most accurate home valuation technology trusted by millions
                of homeowners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2M+</div>
                <div className="text-blue-100">Properties Valued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Instant</div>
                <div className="text-blue-100">Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-blue-100">Valuation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Home className="w-5 h-5 mr-2" />
            Get Your Home Value Now
          </Button>
        </div>
      </div>
    </div>
  );
}
