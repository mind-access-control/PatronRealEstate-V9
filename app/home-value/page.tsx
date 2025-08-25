"use client";

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
  CheckCircle,
  Star,
  Shield,
  Loader2,
  Users,
  Target,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import HollyAvatar from "../../components/HollyAvatar";

export default function HomeValuePage() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    // Función para cargar el widget de Homebot
    const loadHomebotWidget = () => {
      try {
        // Verificar si Homebot ya está disponible
        if ((window as any).Homebot) {
          (window as any).Homebot(
            "#homebot_homeowner",
            "6172d27b4c8835f47f7692e42c2fe8296fbc5631fff6439c"
          );
          setWidgetLoaded(true);
          return;
        }

        // Si no está disponible, cargar el script
        const script = document.createElement("script");
        script.src = "https://embed.homebotapp.com/lgw/v1/widget.js";
        script.async = true;

        script.onload = () => {
          // Esperar un poco para que Homebot se inicialice
          setTimeout(() => {
            if ((window as any).Homebot) {
              (window as any).Homebot(
                "#homebot_homeowner",
                "6172d27b4c8835f47f7692e42c2fe8296fbc5631fff6439c"
              );
              setWidgetLoaded(true);
            } else {
              setWidgetError(true);
            }
          }, 1000);
        };

        script.onerror = () => {
          setWidgetError(true);
        };

        document.head.appendChild(script);

        // Timeout de seguridad
        setTimeout(() => {
          if (!widgetLoaded) {
            setWidgetError(true);
          }
        }, 10000);
      } catch (error) {
        console.error("Error loading Homebot widget:", error);
        setWidgetError(true);
      }
    };

    // Cargar el widget cuando el componente se monte
    loadHomebotWidget();
  }, [widgetLoaded]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 relative z-0">
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

        {/* Homebot Widget Integration */}
        <Card className="bg-white shadow-xl border border-gray-200 mb-12 max-w-4xl mx-auto relative z-0">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Calculator className="w-8 h-8 text-primary" />
              Professional Home Valuation
            </CardTitle>
            <p className="text-gray-600">
              Powered by Homebot - The most accurate home valuation technology
            </p>
          </CardHeader>
          <CardContent>
            {/* Homebot Widget Container */}
            <div id="homebot_homeowner" className="min-h-[200px] relative z-0">
              {!widgetLoaded && !widgetError && (
                <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
                  <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
                  <p className="text-base">Loading Homebot Widget...</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Please wait while we load the valuation tool
                  </p>
                </div>
              )}

              {widgetError && (
                <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
                  <Calculator className="w-12 h-12 text-gray-300 mb-3" />
                  <p className="text-base text-gray-600 mb-2">
                    Widget Loading Issue
                  </p>
                  <p className="text-xs text-gray-400 mb-3 text-center">
                    There was an issue loading the Homebot widget. Please use
                    the direct link below.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href="https://hmbt.co/aypqLM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Use Direct Homebot Link
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Alternative Direct Link */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">
            Prefer to use the direct Homebot link?
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <a
              href="https://hmbt.co/aypqLM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Open Homebot Valuation Tool
            </a>
          </Button>
        </div>

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

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Trusted Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Homebot is used by leading real estate professionals and
                financial institutions nationwide, ensuring you get the most
                reliable and up-to-date property valuations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Professional Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-4">
                Access the same valuation tools used by real estate agents,
                appraisers, and mortgage professionals for accurate market
                insights.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Homebot Demo Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See How Homebot Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here is an example. See how Holly is strengthening her position in
              the real estate market. Some pretty cool stuff to stay up to date
              in this crazy market!
            </p>
          </div>

          {/* Meet Holly Section - Simulated Image */}
          <Card className="bg-white shadow-xl border border-gray-200 mb-12 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Meet Holly Homeowner
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Holly just bought a new home for $385,000. Follow her journey as
                she uses Homebot to build wealth over time.
              </p>

              {/* Real Holly Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Real Holly Image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=128&h=128&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                      alt="Holly Homeowner - Young Professional Woman"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>

                  {/* Name Tag */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
                    <span className="text-xs font-semibold text-gray-700">
                      Holly
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">$77,000</div>
                <div className="text-sm">HOME EQUITY</div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Scenarios Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Home Digest */}
            <div className="space-y-8">
              {/* HOME DIGEST */}
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                          alt="Holly Homeowner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                        <div className="text-lg font-bold">$102,000</div>
                        <div className="text-xs">HOME EQUITY</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                        HOME DIGEST
                      </h4>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">
                        Holly receives Homebot from her loan officer or real
                        estate agent
                      </h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Home className="w-4 h-4 text-primary" />
                          Personalized home financial data
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          Track home value and equity
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* TIPS TO SAVE MONEY */}
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                          alt="Holly Homeowner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                        <div className="text-lg font-bold">$156,000</div>
                        <div className="text-xs">HOME EQUITY</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                        TIPS TO SAVE MONEY
                      </h4>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">
                        Holly receives tips and tricks to save money and build
                        wealth
                      </h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-primary" />
                          Personalized calculations to save you money and pay
                          off your loan earlier
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Actionable home wealth information
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Data Visualizations */}
            <div className="space-y-8">
              {/* Home Value Estimation */}
              <Card className="bg-gray-800 text-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">
                    The estimated value of your home is
                  </h4>
                  <div className="text-4xl font-bold text-pink-400 mb-4">
                    $410,000
                  </div>
                  <div className="bg-gray-700 p-4 rounded">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>350k</span>
                      <span>400k</span>
                      <span>450k</span>
                    </div>
                    <div className="h-20 bg-gray-600 rounded flex items-end justify-center">
                      <div className="w-full h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-t"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Sept</span>
                      <span>Jun</span>
                      <span>Today</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Savings Tip */}
              <Card className="bg-gray-800 text-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">
                    Tip: If you pay just{" "}
                    <span className="text-green-400">$300</span> more each
                    month, you could save
                  </h4>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    $54,000
                  </div>
                  <p className="text-sm text-gray-300">
                    (You could pay off your loan 6 years earlier!)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* REFINANCE */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                        alt="Holly Homeowner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                      <div className="text-lg font-bold">$230,000</div>
                      <div className="text-xs">HOME EQUITY</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                      REFINANCE
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      Holly is notified of a great refinancing option
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Customized refinancing scenarios
                      </div>
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-primary" />
                        Real-time savings calculations
                      </div>
                    </div>

                    {/* Refinance Details Card */}
                    <Card className="bg-gray-800 text-white p-4">
                      <h6 className="font-semibold mb-2">
                        What could refinancing your loan save you?
                      </h6>
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        $73,235
                      </div>
                      <div className="text-sm text-gray-300 mb-3">
                        15 Year - 4.125% RATE - 4.21% APR
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Long term savings
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Payment goes down $100/mo
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TAKE CASH OUT */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                        alt="Holly Homeowner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                      <div className="text-lg font-bold">$280,000</div>
                      <div className="text-xs">HOME EQUITY</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                      TAKE CASH OUT
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      Holly takes cash out to remodel and add a new bedroom
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Accurate loan-to-value calculations
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Easy access to their lender for more info
                      </div>
                    </div>

                    {/* Cash Out Details Card */}
                    <Card className="bg-gray-800 text-white p-4">
                      <h6 className="font-semibold mb-2">
                        Estimated cash you could take out
                      </h6>
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        $43,138
                      </div>
                      <p className="text-sm text-gray-300">
                        Taking money out against your home can help save money
                        on credit card debt or investing in home improvement.
                      </p>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* EARN EXTRA CASH */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                        alt="Holly Homeowner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                      <div className="text-lg font-bold">$330,000</div>
                      <div className="text-xs">HOME EQUITY</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                      EARN EXTRA CASH
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      Holly rents out her newly remodeled room on Airbnb
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Monthly cashflow calculations
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        Advanced market rental data
                      </div>
                    </div>

                    {/* Airbnb Property Card */}
                    <Card className="bg-gray-100 p-4">
                      <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center">
                        <Home className="w-12 h-12 text-gray-500" />
                      </div>
                      <div className="text-pink-500 font-semibold text-sm">
                        PRIVATE ROOM - DENVER
                      </div>
                      <div className="font-semibold text-gray-900">
                        Newly Remodeled Bedroom
                      </div>
                      <div className="text-lg font-bold text-primary">
                        $145/night
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PURCHASE NEW HOME */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&crop=face&auto=compress&cs=tinysrgb"
                        alt="Holly Homeowner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded text-center">
                      <div className="text-lg font-bold">$505,000</div>
                      <div className="text-xs">HOME EQUITY</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                      PURCHASE NEW HOME
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      Holly uses her additional revenue to buy her dream home
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Home trade-up insights
                      </div>
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-primary" />
                        Investment property calculations
                      </div>
                    </div>

                    {/* New Home Card */}
                    <Card className="bg-gray-100 p-4">
                      <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center relative">
                        <Home className="w-12 h-12 text-gray-500" />
                        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                          <span className="text-gray-800 font-bold text-lg">
                            SOLD
                          </span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        $880,000
                      </div>
                      <div className="text-gray-600">3421 Mountain Drive</div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Contact Section */}
        <div className="text-center mt-16 mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                If you have any questions or require additional information,
                please click here to get in contact with a Patron Real Estate
                Team Member. We look forward to helping you increase your
                knowledge and grow your wealth.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Our Team
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
