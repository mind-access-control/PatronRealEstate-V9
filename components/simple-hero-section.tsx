"use client";

import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PatronLogo } from "./patron-logo";

export function SimpleHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo simplificada */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-black/8 to-black/15" />
      </div>

      {/* Contenido principal simplificado */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Tagline principal */}
          <h1 className="text-3xl md:text-5xl font-grotesk font-bold mb-4 leading-tight text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)]">
            Patron Real Estate
          </h1>

          <p className="text-lg md:text-xl mb-4 text-white font-semibold drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
            Your Real Estate Resource
          </p>

          <p className="text-sm md:text-base mb-8 text-white font-medium drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
            DRE 02178767
          </p>

          {/* Servicios básicos */}
          <div className="mb-8">
            <p className="text-lg text-white font-semibold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
              Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-green-700 transition-colors">
                Buy
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-green-700 transition-colors">
                Sell
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-green-700 transition-colors">
                Invest
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-green-700 transition-colors">
                Manage
              </span>
            </div>
          </div>

          {/* Barra de búsqueda simplificada */}
          <div className="bg-white/98 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-2xl border border-white/50 mb-6">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-3"
            >
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
