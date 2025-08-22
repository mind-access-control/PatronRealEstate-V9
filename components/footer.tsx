import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-primary">Patron Real Estate</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in real estate. We help you find your dream home and make smart property investments.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-muted-foreground hover:text-primary transition-colors">
                  Search Properties
                </Link>
              </li>
              <li>
                <Link href="/selling" className="text-muted-foreground hover:text-primary transition-colors">
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link href="/buying" className="text-muted-foreground hover:text-primary transition-colors">
                  Buy a Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/communities" className="text-muted-foreground hover:text-primary transition-colors">
                  Local Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/property-management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/home-value" className="text-muted-foreground hover:text-primary transition-colors">
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Real Estate Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">323.350.3137</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">patronrealestateservices@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Serving Los Angeles County
                  <br />
                  and surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Patron Real Estate Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
