import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CommunitiesMap } from "@/components/communities-map"
import { Button } from "@/components/ui/button"

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Explore Local Communities</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Discover the unique character and amenities of Los Angeles County neighborhoods
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Find Your Perfect Neighborhood
            </Button>
          </div>
        </section>

        {/* Interactive Communities Map */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interactive Neighborhood Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any community marker to learn about local amenities, schools, and market trends
              </p>
            </div>

            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
              <CommunitiesMap />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us help you find the perfect community that matches your lifestyle and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Schedule Neighborhood Tour
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Get Market Reports
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
