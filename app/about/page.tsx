import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Target,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            About
            <span className="block text-primary">Patron Real Estate</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a premier real estate company dedicated to transforming the
            way people find, buy, and sell properties. With over 15 years of
            excellence, we've built our reputation on trust, innovation, and
            unwavering commitment to our clients.
          </p>
        </div>

        {/* Our Story Section */}
        <Card className="bg-white shadow-lg border border-gray-200 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-3xl">
              <Building2 className="w-8 h-8 text-primary" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    From Humble Beginnings to Industry Leadership
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Founded in 2009, Patron Real Estate began as a small family
                    business with a big dream: to revolutionize the real estate
                    experience. What started with just three agents has grown
                    into a powerhouse team of over 50 licensed professionals.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our journey has been marked by continuous innovation,
                    embracing cutting-edge technology while maintaining the
                    personal touch that sets us apart. We've weathered market
                    changes, embraced new opportunities, and consistently
                    delivered exceptional results.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we're proud to have helped thousands of families find
                    their perfect homes, guided investors to profitable
                    opportunities, and built lasting relationships that extend
                    far beyond the transaction.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        15+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years of Excellence
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Properties Sold
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">Expert Agents</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg border border-gray-200 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide exceptional real estate services that exceed
                expectations, while building lasting relationships based on
                trust, integrity, and personalized attention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that everyone deserves to find their perfect home,
                and we're committed to making that journey as smooth and
                rewarding as possible. Our mission drives every decision we make
                and every action we take.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be the most trusted and innovative real estate company,
                setting industry standards for excellence, customer service, and
                technological advancement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where finding the perfect property is
                effortless, where technology enhances human connection, and
                where every client becomes a lifelong advocate for our services.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Section */}
        <Card className="bg-white shadow-lg border border-gray-200 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-3xl">
              <Heart className="w-8 h-8 text-primary" />
              Our Core Values
            </CardTitle>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the
              relationships we build with our clients and community.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">
                  We conduct business with honesty, transparency, and ethical
                  practices in every transaction.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">
                  We strive for the highest quality in every service, detail,
                  and client interaction.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Client-First
                </h4>
                <p className="text-sm text-gray-600">
                  Our clients' success and satisfaction are our top priorities
                  in every decision we make.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">
                  We embrace new technologies and methods to provide better,
                  more efficient services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="bg-white shadow-lg border border-gray-200 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-3xl">
              <Users className="w-8 h-8 text-primary" />
              Our Team
            </CardTitle>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make Patron Real Estate the
              trusted choice for all your real estate needs.
            </p>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                Our team of 50+ licensed real estate professionals brings years
                of experience, deep market knowledge, and unwavering dedication
                to help you navigate the real estate market successfully. Each
                team member is carefully selected for their expertise,
                professionalism, and commitment to exceptional service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Expertise
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our agents average 8+ years of experience with specialized
                    knowledge in various property types and market segments.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Licensed & Certified
                  </h4>
                  <p className="text-sm text-gray-600">
                    All our agents are fully licensed, continuously educated,
                    and certified in the latest real estate practices and
                    technologies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Personal Touch
                  </h4>
                  <p className="text-sm text-gray-600">
                    We believe in building lasting relationships, not just
                    closing transactions. Your success is our success.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-white shadow-lg border border-gray-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">+1 (305) 555-0123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">info@patron.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">Main Office</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Office Hours
                </h4>
                <div className="text-gray-600 space-y-2">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: By Appointment</div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We're always available for urgent inquiries and after-hours
                  support for our valued clients.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Find Your Perfect Property?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let our experienced team guide you through your real estate
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/search">Search Properties</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
