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
  Phone,
  Mail,
  MapPin,
  Building2,
  Users,
  Search,
  Info,
  FileText,
  User,
  Shield,
  ChevronDown,
  MessageCircle,
  Home,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Properties", href: "/search", icon: Search },
  { name: "About", href: "/about", icon: Info },
  { name: "Buying", href: "/buying", icon: Home },
  { name: "Selling", href: "/selling", icon: Building2 },
  { name: "Rent Mgmt", href: "/property-management", icon: Building2 },
  { name: "Home Value", href: "/home-value", icon: Calculator },
  { name: "Communities", href: "/communities", icon: MapPin },
  { name: "Blog", href: "/blog", icon: FileText },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  // Función para detectar si estamos en páginas de login específicas
  const isLoginActive = () => {
    return (
      pathname === "/agent/login" ||
      pathname === "/admin/login" ||
      pathname.startsWith("/admin/") ||
      pathname.startsWith("/agent/")
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-grotesk font-bold text-gray-900 leading-tight">
                Real Estate
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side - Login & Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-gray-600 hover:text-primary cursor-pointer ${
                    isLoginActive() ? "text-primary bg-primary/10" : ""
                  }`}
                >
                  <User className="w-4 h-4 mr-1" />
                  Login
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link
                    href="/agent/login"
                    className="flex items-center cursor-pointer"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Agent Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/admin/login"
                    className="flex items-center cursor-pointer"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Contact Us
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link
                    href="tel:+13055550123"
                    className="flex items-center cursor-pointer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (305) 555-0123
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="mailto:info@patron.com"
                    className="flex items-center cursor-pointer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    info@patron.com
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/agents"
                    className="flex items-center cursor-pointer"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Meet Our Agents
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-grotesk font-bold">
                      Real Estate
                    </div>
                  </div>
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

                {/* Mobile Contact Info */}
                <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">+1 (305) 555-0123</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-700">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">info@patron.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">Miami, FL</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <Link
                        href="/agents"
                        className="flex items-center space-x-3 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>Meet Our Agents</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Login Links */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide px-1">
                    Login Options
                  </h4>
                  <Button
                    variant="outline"
                    className={`w-full justify-start cursor-pointer ${
                      isLoginActive() ? "text-primary bg-primary/10" : ""
                    }`}
                    asChild
                  >
                    <Link href="/agent/login">
                      <User className="w-4 h-4 mr-2" />
                      Agent Login
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-full justify-start cursor-pointer ${
                      isLoginActive() ? "text-primary bg-primary/10" : ""
                    }`}
                    asChild
                  >
                    <Link href="/admin/login">
                      <Shield className="w-4 h-4 mr-2" />
                      Admin Login
                    </Link>
                  </Button>
                </div>

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
