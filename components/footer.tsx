"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/agents" },
  ],
  services: [
    { name: "Buy a Home", href: "/buying" },
    { name: "Sell a Home", href: "/selling" },
    { name: "Property Management", href: "/property-management" },
    { name: "Home Valuation", href: "/home-value" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Market Reports", href: "/blog" },
    { name: "Buying Guide", href: "/buying" },
    { name: "Selling Guide", href: "/selling" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para suscribir al newsletter
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-grotesk font-bold">
                  Patron Real Estate
                </div>
                <div className="text-sm text-gray-400">Premier Real Estate</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For over 15 years, we've been helping families find their perfect
              homes. Our commitment to excellence and personalized service sets
              us apart in the real estate industry.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+13055550123"
                  className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
                >
                  +1 (305) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@patron.com"
                  className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
                >
                  info@patron.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Miami Ave, , FL 33101</span>
              </div>
            </div>

            {/* Social Links and Newsletter */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="lg:w-80">
                <h4 className="text-sm font-semibold mb-3 text-gray-300">
                  Stay Updated
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  Subscribe to our newsletter for the latest market insights,
                  property updates, and exclusive offers.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 text-sm h-9"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-primary hover:bg-primary/90 h-9 px-3 cursor-pointer"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Patron Real Estate Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
