"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, User, Shield } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: "Search", href: "/search" },
    { name: "Selling Your Home", href: "/selling" },
    { name: "Buying a Home", href: "/buying" },
    { name: "Local Communities", href: "/communities" },
    { name: "Rent/Property Mgmt", href: "/property-management" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "My Home Value", href: "/home-value" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>323.350.3137</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>patronrealestateservices@gmail.com</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/agent/login"
                className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Agent Login</span>
              </Link>
              <Link
                href="/admin/login"
                className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors"
              >
                <Shield className="h-4 w-4" />
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-primary">Patron Real Estate</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium px-3 py-2 rounded-md ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 border-l-4 border-primary font-medium"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <Link
                  href="/agent/login"
                  className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Agent Login
                </Link>
                <Link
                  href="/admin/login"
                  className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="h-4 w-4" />
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
