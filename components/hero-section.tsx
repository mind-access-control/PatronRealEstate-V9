"use client";

import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Building2, Users } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda
    console.log("Searching for:", searchQuery, "Type:", propertyType);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo con overlay más oscuro */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold mb-6 leading-tight">
            Find Your Dream
            <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Home in Miami
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white max-w-2xl mx-auto leading-relaxed font-medium">
            Discover exclusive properties in Miami's most desirable
            neighborhoods. From luxury condos to family homes, we have the
            perfect place for you.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                Properties
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                Agents
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                Years Experience
              </div>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-200">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Campo de búsqueda */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter city, neighborhood, or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 placeholder:text-gray-500"
                  />
                </div>

                {/* Tipo de propiedad */}
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="all">All Property Types</option>
                    <option value="house">Houses</option>
                    <option value="condo">Condos</option>
                    <option value="apartment">Apartments</option>
                    <option value="townhouse">Townhouses</option>
                  </select>
                </div>

                {/* Botón de búsqueda */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </form>
          </div>

          {/* Botones de acción adicionales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View All Properties
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Agents
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
