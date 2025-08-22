import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BuyingProcess } from "@/components/buying-process"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Shield, Clock, Heart } from "lucide-react"

export default function BuyingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Find Your Dream Home</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Let our expert team guide you through every step of the home buying process
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your Search
            </Button>
          </div>
        </section>

        {/* Buying Process */}
        <BuyingProcess />

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Buyers Choose Patron Real Estate
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make the home buying process smooth, transparent, and stress-free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Exclusive Access</h3>
                  <p className="text-muted-foreground">First access to new listings and off-market properties</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Expert Protection</h3>
                  <p className="text-muted-foreground">Thorough inspections and contract protection</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Faster Closings</h3>
                  <p className="text-muted-foreground">Average closing time: 25 days vs 35 day average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Personal Service</h3>
                  <p className="text-muted-foreground">Dedicated agent support throughout your journey</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Start Your Home Search?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get pre-qualified and start viewing homes that match your criteria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Browse Properties
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Get Pre-Qualified
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
