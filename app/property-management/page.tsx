import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyManagementServices } from "@/components/property-management-services"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, DollarSign, Users } from "lucide-react"

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Professional Property Management</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Maximize your rental income while we handle all the details of property management
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Free Management Quote
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <PropertyManagementServices />

        {/* Why Choose Our Management */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Property Owners Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional management that protects your investment and maximizes returns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Higher Rental Income</h3>
                  <p className="text-muted-foreground">Our properties rent for 12% above market average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Faster Leasing</h3>
                  <p className="text-muted-foreground">Average vacancy time: 14 days vs 30 day average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Quality Tenants</h3>
                  <p className="text-muted-foreground">Rigorous screening process and background checks</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Legal Protection</h3>
                  <p className="text-muted-foreground">Full compliance with local and state regulations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Maximize Your Investment?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free property management analysis and see how much more you could be earning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Free Analysis
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
