"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Search, Home } from "lucide-react"

export function HomeValueForm() {
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!address.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // TODO: Implement actual HomeBot integration
      alert(`Home value analysis requested for: ${address}`)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Form */}
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-serif text-2xl">Get Your Free Home Valuation</CardTitle>
          <p className="text-muted-foreground">
            Enter your address below to receive an instant estimate of your home's current market value
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Property Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter your full address (e.g., 123 Main St, Los Angeles, CA 90210)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-base"
                required
              />
            </div>

            <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Get My Home Value
                </>
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>✓ Free and confidential</p>
              <p>✓ No obligation</p>
              <p>✓ Instant results</p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Illustration/Benefits */}
      <div className="space-y-6">
        <div className="text-center lg:text-left">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Powered by Advanced Technology</h3>
          <p className="text-muted-foreground mb-6">
            Our HomeBot platform uses cutting-edge algorithms and real-time market data to provide you with the most
            accurate home valuation possible.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Home valuation technology illustration"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">MLS data integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Comparable sales analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Market trend predictions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Neighborhood insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
