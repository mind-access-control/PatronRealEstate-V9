import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

// Mock blog data
const blogPosts = [
  {
    id: "1",
    title: "2024 Los Angeles Real Estate Market Trends",
    excerpt: "Discover the latest trends shaping the LA real estate market and what they mean for buyers and sellers.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Market Analysis",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    title: "First-Time Homebuyer's Guide to Los Angeles",
    excerpt: "Everything you need to know about buying your first home in the competitive LA market.",
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Buying Tips",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: "3",
    title: "Staging Your Home for Maximum Appeal",
    excerpt: "Professional staging tips that can help your home sell faster and for more money.",
    author: "Lisa Rodriguez",
    date: "2024-01-10",
    category: "Selling Tips",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "4",
    title: "Investment Properties: What to Look For",
    excerpt: "Key factors to consider when evaluating rental properties in Los Angeles County.",
    author: "David Kim",
    date: "2024-01-08",
    category: "Investment",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "5",
    title: "Neighborhood Spotlight: Beverly Hills",
    excerpt: "An in-depth look at one of LA's most prestigious neighborhoods and its real estate market.",
    author: "Sarah Johnson",
    date: "2024-01-05",
    category: "Neighborhoods",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "6",
    title: "Home Maintenance Tips for New Owners",
    excerpt: "Essential maintenance tasks every new homeowner should know to protect their investment.",
    author: "Michael Chen",
    date: "2024-01-03",
    category: "Home Care",
    imageUrl: "/placeholder.svg?height=300&width=400",
    readTime: "10 min read",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Real Estate Insights & News</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest market trends, tips, and expert advice
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="market-analysis">Market Analysis</SelectItem>
                    <SelectItem value="buying-tips">Buying Tips</SelectItem>
                    <SelectItem value="selling-tips">Selling Tips</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="neighborhoods">Neighborhoods</SelectItem>
                    <SelectItem value="home-care">Home Care</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Featured Article</h2>
              <BlogCard {...featuredPost} featured={true} />
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Load More */}
        <section className="py-8 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}
