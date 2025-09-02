"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Menu,
  MapPin,
  Building2,
  Search,
  Info,
  FileText,
  MessageCircle,
  Home,
  Calculator,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PatronLogo } from "./patron-logo";

const navigation = [
  { name: "Buyers", href: "/buying", icon: Home },
  { name: "Sellers", href: "/selling", icon: Building2 },
  { name: "My Home Value", href: "/home-value", icon: Calculator },
  { name: "Rent/Property Mgmt", href: "/property-management", icon: Building2 },
  { name: "Local Communities", href: "/communities", icon: MapPin },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "FabFriday", href: "/videos", icon: Video },
  { name: "Testimonials", href: "/testimonials", icon: MessageCircle },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <PatronLogo size="medium" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 flex items-center space-x-1.5 px-2.5 py-2 rounded-lg cursor-pointer text-sm ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 h-full max-h-screen">
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>
              <div className="py-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {/* Mobile Logo */}
                <div className="mb-8">
                  <PatronLogo size="medium" showLink={false} />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2 mb-8">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide px-1">
                    Navigation
                  </h4>
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center space-x-3 font-medium transition-colors duration-200 p-3 rounded-lg cursor-pointer ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10 border-l-4 border-primary"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }`}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="space-y-3 pb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide px-1">
                    Quick Actions
                  </h4>
                  <Button className="w-full cursor-pointer" asChild>
                    <Link href="/search">Search Properties</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    asChild
                  >
                    <Link href="/about">About Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
