import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SellingProcess } from "@/components/selling-process"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, Award } from "lucide-react"

export default function SellingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sell Your Home with Confidence</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Get top dollar for your property with our proven marketing strategies and expert guidance
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Free Home Valuation
            </Button>
          </div>
        </section>

        {/* Selling Process */}
        <SellingProcess />

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Sellers Choose Patron Real Estate
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven track record and personalized approach ensure you get the best results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Higher Sale Prices</h3>
                  <p className="text-muted-foreground">Our homes sell for 8% more than the market average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Faster Sales</h3>
                  <p className="text-muted-foreground">Average time on market: 21 days vs 45 day average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">Dedicated professionals handling every detail</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">500+ successful sales in Los Angeles County</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Sell Your Home?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with a free, no-obligation home valuation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Free Valuation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
