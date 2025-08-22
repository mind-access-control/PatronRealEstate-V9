import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchBarAdvanced } from "@/components/search-bar-advanced"
import { PropertyResults } from "@/components/property-results"

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Property Search</h1>
            <p className="text-muted-foreground">Find your perfect home from our extensive listings</p>
          </div>

          {/* Advanced Search Bar */}
          <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
            <SearchBarAdvanced />
          </div>

          {/* Search Results */}
          <PropertyResults />
        </div>
      </main>
      <Footer />
    </div>
  )
}
