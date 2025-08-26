import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600">
          Manage system-wide settings and configurations.
        </p>
      </div>

      {/* System Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>System Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Patron Real Estate Services" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Input
              id="siteDescription"
              defaultValue="Professional real estate services in your area"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Primary Contact Email</Label>
            <Input
              id="contactEmail"
              type="email"
              defaultValue="patronrealestateservices@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Primary Contact Phone</Label>
            <Input id="contactPhone" type="tel" defaultValue="323.350.3137" />
          </div>
        </CardContent>
      </Card>

      {/* User Management Settings */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-approve Agent Registrations</Label>
              <p className="text-sm text-gray-600">
                Automatically approve new agent registrations
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require Email Verification</Label>
              <p className="text-sm text-gray-600">
                Require email verification for new accounts
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
            <Input id="sessionTimeout" type="number" defaultValue="60" />
          </div>
        </CardContent>
      </Card>

      {/* Property Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Property Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-publish Listings</Label>
              <p className="text-sm text-gray-600">
                Automatically publish new property listings
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxImages">Maximum Images per Listing</Label>
            <Input id="maxImages" type="number" defaultValue="20" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="featuredDuration">
              Featured Listing Duration (days)
            </Label>
            <Input id="featuredDuration" type="number" defaultValue="30" />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>System Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-gray-600">
                Send email notifications for system events
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Lead Notifications</Label>
              <p className="text-sm text-gray-600">
                Notify admins of new leads
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminEmail">Admin Notification Email</Label>
            <Input
              id="adminEmail"
              type="email"
              defaultValue="admin@patronrealestate.com"
            />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-gray-600">
                Require 2FA for admin accounts
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordPolicy">Minimum Password Length</Label>
            <Input id="passwordPolicy" type="number" defaultValue="8" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Login Attempt Limit</Label>
              <p className="text-sm text-gray-600">
                Lock account after failed attempts
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
}
