import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Camera, Users, Key } from "lucide-react"

const sellingSteps = [
  {
    step: 1,
    title: "Property Evaluation & Pricing",
    description: "We conduct a comprehensive market analysis to determine the optimal listing price for your home.",
    icon: Home,
    details: [
      "Comparative Market Analysis (CMA)",
      "Property condition assessment",
      "Market timing evaluation",
      "Pricing strategy development",
    ],
  },
  {
    step: 2,
    title: "Professional Marketing & Photography",
    description: "High-quality photos, virtual tours, and strategic marketing across multiple platforms.",
    icon: Camera,
    details: [
      "Professional photography & staging",
      "Virtual tours and 3D walkthroughs",
      "MLS listing optimization",
      "Social media and online marketing",
    ],
  },
  {
    step: 3,
    title: "Showings & Negotiations",
    description: "We handle all showings, open houses, and negotiate the best terms on your behalf.",
    icon: Users,
    details: [
      "Scheduled showings and open houses",
      "Buyer qualification and screening",
      "Offer review and negotiation",
      "Contract terms optimization",
    ],
  },
  {
    step: 4,
    title: "Closing & Transfer",
    description: "We guide you through the closing process to ensure a smooth and successful sale.",
    icon: Key,
    details: [
      "Escrow and title coordination",
      "Inspection and appraisal support",
      "Final walkthrough assistance",
      "Closing day coordination",
    ],
  },
]

export function SellingProcess() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Proven Selling Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From listing to closing, we handle every detail to maximize your home's value and minimize your stress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sellingSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={step.step} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge
                        variant="default"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        {step.step}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
