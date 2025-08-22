import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Award, TrendingUp } from "lucide-react"

interface AgentProfileCardProps {
  id: string
  name: string
  title: string
  bio: string
  phone: string
  email: string
  imageUrl: string
  specialties: string[]
  experience: string
  salesVolume: string
}

export function AgentProfileCard({
  id,
  name,
  title,
  bio,
  phone,
  email,
  imageUrl,
  specialties,
  experience,
  salesVolume,
}: AgentProfileCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-primary font-medium">{title}</p>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-4">{bio}</p>

              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">{experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">{salesVolume}</div>
                    <div className="text-xs text-muted-foreground">Sales Volume</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  {phone}
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
              <Button className="w-full">Contact {name.split(" ")[0]}</Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
