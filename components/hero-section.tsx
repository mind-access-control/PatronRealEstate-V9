"use client"
import { PropertySearch } from "@/components/property-search"

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=700&width=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Find Your Dream Home</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover exceptional properties with Los Angeles' most trusted real estate professionals
        </p>

        {/* Property Search Component */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
          <PropertySearch />
        </div>
      </div>
    </section>
  )
}
