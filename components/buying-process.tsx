import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Search, FileText, Key } from "lucide-react"

const buyingSteps = [
  {
    step: 1,
    title: "Pre-Qualification & Budget Planning",
    description: "We help you understand your budget and get pre-approved for a mortgage.",
    icon: Calculator,
    details: [
      "Credit score review and improvement tips",
      "Budget analysis and affordability assessment",
      "Mortgage pre-approval assistance",
      "Down payment and closing cost planning",
    ],
  },
  {
    step: 2,
    title: "Property Search & Viewing",
    description: "Find properties that match your criteria and schedule private showings.",
    icon: Search,
    details: [
      "Customized property search based on your needs",
      "Private showings and open house tours",
      "Neighborhood and school district research",
      "Market analysis and property comparisons",
    ],
  },
  {
    step: 3,
    title: "Offer & Negotiation",
    description: "Submit competitive offers and negotiate the best terms for your purchase.",
    icon: FileText,
    details: [
      "Competitive market analysis for offer pricing",
      "Contract preparation and review",
      "Negotiation of price and terms",
      "Contingency planning and protection",
    ],
  },
  {
    step: 4,
    title: "Closing & Move-In",
    description: "Complete inspections, finalize financing, and get the keys to your new home.",
    icon: Key,
    details: [
      "Home inspection coordination and review",
      "Appraisal and final loan approval",
      "Final walkthrough and closing preparation",
      "Key handover and move-in assistance",
    ],
  },
]

export function BuyingProcess() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Your Home Buying Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We guide you through each step to ensure a smooth and successful home purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buyingSteps.map((step, index) => {
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
