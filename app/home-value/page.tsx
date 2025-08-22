import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeValueForm } from "@/components/home-value-form"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Bell, Shield } from "lucide-react"

export default function HomeValuePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">What's Your Home Worth?</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Get an instant estimate of your home's value with our advanced HomeBot technology
            </p>
          </div>
        </section>

        {/* Home Value Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <HomeValueForm />
          </div>
        </section>

        {/* HomeBot Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Use HomeBot for Home Valuation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our advanced technology provides accurate, real-time insights into your property's value and market
                trends
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-muted-foreground">Get monthly updates on your home's value and market changes</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Market Analytics</h3>
                  <p className="text-muted-foreground">Comprehensive market analysis and neighborhood comparisons</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Smart Alerts</h3>
                  <p className="text-muted-foreground">Receive notifications about optimal selling opportunities</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Accurate Data</h3>
                  <p className="text-muted-foreground">Powered by MLS data and advanced algorithms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How HomeBot Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our simple 3-step process gives you comprehensive insights into your home's value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Enter Your Address</h3>
                <p className="text-muted-foreground">Simply provide your home address to get started</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Instant Analysis</h3>
                <p className="text-muted-foreground">Our AI analyzes market data and comparable sales</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Get Your Report</h3>
                <p className="text-muted-foreground">Receive detailed valuation and market insights</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
