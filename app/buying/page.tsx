import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Search,
  Users,
  FileText,
  ArrowRight,
  MapPin,
  Building2,
  Bed,
  Bath,
  Monitor,
  Users as UsersIcon,
  Grill,
  TreePine,
  Waves,
  Shield,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function BuyingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Are you ready to buy your
            <span className="block text-primary">home?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Watching a home buyer get those keys to their new home and light up
            is one of our favorite parts of the job! This is an exciting time
            but can also pose some challenges along the way if you don't have
            all the information you need to ensure you have covered all your
            possible options and risk factors.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Let us help you navigate the obstacles by providing you the
                proper guidance and a knowledge base with 18+ years of industry
                experience. We consider ourselves experts in the surrounding
                areas. Trust in us to help you build your knowledge and better
                position you to be able to take advantage of all your options
                available when buying your home.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you have already begun the search for a home, we want to make
                sure you have answers to the questions that may come up along
                the way.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Here are some examples:
              </h3>

              <div className="space-y-6">
                {/* Location Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Location & Geography
                    </h4>
                    <p className="text-gray-600">
                      Have you chosen at least three possible cities you want to
                      live in? Are there particular neighborhoods or communities
                      that you like? Sometimes you get outpriced in the city you
                      were primarily looking at and need to possibly expand your
                      geographical target area to neighboring cities.
                    </p>
                  </div>
                </div>

                {/* Property Style Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Property Style & Layout
                    </h4>
                    <p className="text-gray-600">
                      What kind of house styles are you interested in? Spanish,
                      Traditional, Farm Style, etc. How many bedrooms and
                      bathrooms do you want?
                    </p>
                  </div>
                </div>

                {/* Home Office Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Work & Lifestyle Needs
                    </h4>
                    <p className="text-gray-600">
                      Are you going to be working from home and need a home
                      office? Do you need a bonus room or a flex room?
                    </p>
                  </div>
                </div>

                {/* Entertainment Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <UsersIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Entertainment & Social
                    </h4>
                    <p className="text-gray-600">
                      Will your home be entertaining guests often? Space for BBQ
                      or built-in BBQ.
                    </p>
                  </div>
                </div>

                {/* Amenities Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Waves className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Amenities & Features
                    </h4>
                    <p className="text-gray-600">
                      Do you want a yard, pool, or gated community?
                    </p>
                  </div>
                </div>

                {/* Budget Questions */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Budget & Financing
                    </h4>
                    <p className="text-gray-600">
                      Based on all the above, have you determined a price range
                      or consulted a lender to determine the best price range
                      that is <strong>RIGHT FOR YOU!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-6 h-6 text-primary" />
                Property Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Use our advanced search tools to find properties that match your
                criteria and budget.
              </p>
              <Button asChild className="w-full">
                <Link href="/search">
                  Search Properties
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Expert Agents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Work with our experienced agents who know the market inside and
                out.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/agents">
                  Meet Our Agents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Buying Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive resources and guides to help you through the
                buying process.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/blog">
                  Read Our Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Home Buying Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let our experienced team guide you through every step of the
              process.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/search">Start Your Property Search</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
