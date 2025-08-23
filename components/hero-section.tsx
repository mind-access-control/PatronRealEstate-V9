"use client";

import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Building2, Users } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated search functionality - redirect to search page
    if (searchQuery.trim()) {
      router.push(
        `/search?q=${encodeURIComponent(searchQuery)}&type=${propertyType}`
      );
    } else {
      router.push("/search");
    }
  };

  const handleViewAllProperties = () => {
    router.push("/search");
  };

  const handleMeetOurAgents = () => {
    router.push("/agents");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo de casa real más llamativa con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Overlay muy sutil para mantener elegancia y legibilidad */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/3 via-black/8 to-black/15" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Título principal más genérico y atractivo */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold mb-6 leading-tight drop-shadow-2xl">
            Find Your Dream
            <span className="block text-amber-400 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
              Home Today
            </span>
          </h1>

          {/* Subtítulo más genérico y orientado a la acción */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-xl">
            Discover exclusive properties in the most desirable neighborhoods.
            From luxury estates to cozy family homes, find the perfect place to
            create your future.
          </p>

          {/* Barra de búsqueda */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-200 mb-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Campo de búsqueda */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter city or neighborhood..."
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

                {/* Botón de búsqueda con más espacio para el texto */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer h-[52px]"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </form>
          </div>

          {/* Botones de acción adicionales centrados debajo de la barra de búsqueda */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewAllProperties}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white hover:border-white"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View All Properties
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleMeetOurAgents}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white hover:border-white"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Agents
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
