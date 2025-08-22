import AgentLayout from "@/components/agent/agent-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export default function AgentProfile() {
  return (
    <AgentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600">Manage your profile information and settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Photo */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Profile"
                    className="w-30 h-30 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Change Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="sarah@patronrealestate.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main Street, City, State 12345" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="license">License Number</Label>
                <Input id="license" defaultValue="RE123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" defaultValue="8" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialties">Specialties</Label>
                <Input id="specialties" defaultValue="Residential, First-time buyers, Luxury homes" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="languages">Languages</Label>
                <Input id="languages" defaultValue="English, Spanish" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="Experienced real estate agent with 8 years in the industry. Specializing in residential properties and helping first-time buyers navigate the market. Committed to providing exceptional service and achieving the best outcomes for my clients."
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="emailNotifications" defaultChecked />
                <Label htmlFor="emailNotifications">Email notifications for new leads</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="smsNotifications" defaultChecked />
                <Label htmlFor="smsNotifications">SMS notifications for urgent matters</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="marketingEmails" />
                <Label htmlFor="marketingEmails">Marketing and promotional emails</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </AgentLayout>
  )
}
