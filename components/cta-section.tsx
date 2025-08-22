import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, TrendingUp, Users, Award } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sell Your Home */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Sell Your Home</h3>
              <p className="text-muted-foreground mb-6">
                Get top dollar for your property with our expert marketing strategies and local market knowledge.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Home Valuation
              </Button>
            </CardContent>
          </Card>

          {/* Buy a Home */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Buy a Home</h3>
              <p className="text-muted-foreground mb-6">
                Find your perfect home with personalized service and access to exclusive listings.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Search
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Why Choose Patron Real Estate?</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/90">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-primary-foreground/90">Properties Sold</div>
            </div>

            <div className="text-center">
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
