import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfileCard } from "@/components/agent-profile-card"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Home, TrendingUp } from "lucide-react"

// Mock agent data
const agents = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Principal Broker & Founder",
    bio: "With over 15 years of experience in Los Angeles real estate, Sarah has helped hundreds of families find their dream homes. She specializes in luxury properties and has consistently been a top performer in the Beverly Hills and West Hollywood markets.",
    phone: "323.350.3137",
    email: "sarah@patronrealestateservices.com",
    imageUrl: "/placeholder.svg?height=400&width=300",
    specialties: ["Luxury Properties", "Beverly Hills", "West Hollywood"],
    experience: "15+ years",
    salesVolume: "$150M+",
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Senior Real Estate Agent",
    bio: "Michael brings a unique perspective to real estate with his background in finance and investment analysis. He excels at helping clients make informed decisions and has extensive knowledge of the downtown LA and surrounding areas.",
    phone: "323.350.3138",
    email: "michael@patronrealestateservices.com",
    imageUrl: "/placeholder.svg?height=400&width=300",
    specialties: ["Investment Properties", "Downtown LA", "First-Time Buyers"],
    experience: "8+ years",
    salesVolume: "$85M+",
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    title: "Real Estate Agent & Staging Specialist",
    bio: "Lisa combines her passion for interior design with real estate expertise to help sellers maximize their property's appeal. Her staging and marketing strategies have resulted in faster sales and higher prices for her clients.",
    phone: "323.350.3139",
    email: "lisa@patronrealestateservices.com",
    imageUrl: "/placeholder.svg?height=400&width=300",
    specialties: ["Home Staging", "Santa Monica", "Property Marketing"],
    experience: "6+ years",
    salesVolume: "$60M+",
  },
  {
    id: "4",
    name: "David Kim",
    title: "Real Estate Agent & Property Manager",
    bio: "David specializes in investment properties and property management services. His analytical approach and deep understanding of rental markets make him invaluable for investors looking to build their real estate portfolios.",
    phone: "323.350.3140",
    email: "david@patronrealestateservices.com",
    imageUrl: "/placeholder.svg?height=400&width=300",
    specialties: ["Property Management", "Investment Analysis", "Rental Properties"],
    experience: "10+ years",
    salesVolume: "$95M+",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Patron Real Estate Services</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Your trusted partners in Los Angeles real estate, dedicated to exceptional service and results
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2009, Patron Real Estate Services has grown from a small boutique agency to one of Los
                Angeles County's most trusted real estate firms. Our commitment to personalized service, market
                expertise, and innovative marketing strategies has helped thousands of clients achieve their real estate
                goals.
              </p>
            </div>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                We believe that buying or selling a home is more than just a transaction—it's a life-changing
                experience. That's why we take the time to understand each client's unique needs and provide tailored
                solutions that exceed expectations.
              </p>
              <p>
                Our team combines decades of local market knowledge with cutting-edge technology and marketing
                strategies to deliver results. Whether you're a first-time homebuyer, seasoned investor, or looking to
                sell your property, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Track Record</h2>
              <p className="text-lg text-muted-foreground">Numbers that speak to our commitment and success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">1,200+</div>
                  <div className="text-muted-foreground">Properties Sold</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">$390M+</div>
                  <div className="text-muted-foreground">Sales Volume</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to providing exceptional service and achieving outstanding
                results for every client
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {agents.map((agent) => (
                <AgentProfileCard key={agent.id} {...agent} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
