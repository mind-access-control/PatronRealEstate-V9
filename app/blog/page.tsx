"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

// Real blog data with actual house images
const blogPosts = [
  {
    id: "1",
    title:
      "2024 Los Angeles Real Estate Market: Prices Up 15% in Premium Areas",
    excerpt:
      "Exclusive analysis reveals Beverly Hills, Santa Monica, and Malibu lead the market with unprecedented growth. Discover which neighborhoods offer the best investment opportunities.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Market Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&crop=center",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title:
      "First-Time Homebuyer's Complete Guide: LA's Hidden Gems Under $800K",
    excerpt:
      "Skip the bidding wars! We've found 5 up-and-coming neighborhoods where first-time buyers can still find affordable homes with great potential for appreciation.",
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Buying Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: "3",
    title: "Staging Secrets: How We Sold a $2.5M Home in 3 Days",
    excerpt:
      "Professional stager reveals the exact techniques used to sell luxury homes at record speed. From lighting to furniture placement, learn what really works.",
    author: "Lisa Rodriguez",
    date: "2024-01-10",
    category: "Selling Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&crop=center",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "4",
    title: "Investment Goldmine: Multi-Family Properties in Downtown LA",
    excerpt:
      "Why savvy investors are flocking to downtown LA's multi-family market. ROI analysis shows 8-12% annual returns with minimal vacancy rates.",
    author: "David Kim",
    date: "2024-01-08",
    category: "Investment",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: "5",
    title: "Neighborhood Deep Dive: Why Pasadena is LA's Best-Kept Secret",
    excerpt:
      "Historic charm meets modern convenience. Pasadena's real estate market is heating up with tech professionals and families seeking the perfect balance.",
    author: "Sarah Johnson",
    date: "2024-01-05",
    category: "Neighborhoods",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&crop=center",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "6",
    title:
      "Home Maintenance Calendar: What to Do Every Month to Protect Your Investment",
    excerpt:
      "Prevent costly repairs with our month-by-month maintenance checklist. From HVAC to roof inspections, keep your home in top condition year-round.",
    author: "Michael Chen",
    date: "2024-01-03",
    category: "Home Care",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center",
    readTime: "14 min read",
    featured: false,
  },
  {
    id: "7",
    title: "Luxury Market Report: $10M+ Homes Breaking Records in 2024",
    excerpt:
      "Ultra-luxury real estate in LA is experiencing unprecedented demand. See which properties are setting new price records and why.",
    author: "Emma Thompson",
    date: "2024-01-01",
    category: "Market Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&crop=center",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: "8",
    title: "Mortgage Rate Guide: How to Lock in the Best Rate This Year",
    excerpt:
      "With rates fluctuating, timing is everything. Our mortgage experts share strategies to secure the lowest possible rate for your dream home.",
    author: "Robert Martinez",
    date: "2023-12-28",
    category: "Buying Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
    readTime: "11 min read",
    featured: false,
  },
  {
    id: "9",
    title: "Smart Home Technology: What Buyers Want in 2024",
    excerpt:
      "From smart thermostats to security systems, discover which home automation features are driving up property values and attracting tech-savvy buyers.",
    author: "Jennifer Lee",
    date: "2023-12-25",
    category: "Buying Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    readTime: "13 min read",
    featured: false,
  },
  {
    id: "10",
    title: "Green Homes: Eco-Friendly Features That Pay Off",
    excerpt:
      "Solar panels, energy-efficient appliances, and sustainable materials are not just good for the planet—they're great for your property's resale value.",
    author: "Carlos Rodriguez",
    date: "2023-12-22",
    category: "Investment",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
    readTime: "16 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [visiblePosts, setVisiblePosts] = useState(6); // Show 6 posts initially

  // Filter and sort posts (including featured)
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured post from filtered results
  const featuredPost = filteredPosts.find((post) => post.featured);

  // Sort filtered posts
  const sortedPosts = filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "popular":
        return Math.random() - 0.5; // Simulate popularity for demo
      default:
        return 0;
    }
  });

  // Get posts to display (excluding featured)
  const postsToShow = sortedPosts
    .filter((post) => !post.featured)
    .slice(0, visiblePosts);

  // Load more function
  const loadMorePosts = () => {
    setVisiblePosts((prev) =>
      Math.min(prev + 3, sortedPosts.filter((post) => !post.featured).length)
    );
  };

  // Check if there are more posts to load
  const hasMorePosts =
    visiblePosts < sortedPosts.filter((post) => !post.featured).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Real Estate Insights & News
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest market trends, tips, and expert
              advice
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
                  <Input
                    placeholder="Search articles..."
                    className="pl-10 cursor-pointer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48 cursor-pointer hover:bg-accent transition-colors">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="all"
                      className="cursor-pointer hover:bg-accent"
                    >
                      All Categories
                    </SelectItem>
                    <SelectItem
                      value="market-analysis"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Market Analysis
                    </SelectItem>
                    <SelectItem
                      value="buying-tips"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Buying Tips
                    </SelectItem>
                    <SelectItem
                      value="selling-tips"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Selling Tips
                    </SelectItem>
                    <SelectItem
                      value="investment"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Investment
                    </SelectItem>
                    <SelectItem
                      value="neighborhoods"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Neighborhoods
                    </SelectItem>
                    <SelectItem
                      value="home-care"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Home Care
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 cursor-pointer hover:bg-accent transition-colors">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="newest"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Newest First
                    </SelectItem>
                    <SelectItem
                      value="oldest"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Oldest First
                    </SelectItem>
                    <SelectItem
                      value="popular"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Most Popular
                    </SelectItem>
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
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Featured Article
              </h2>
              <BlogCard {...featuredPost} featured={true} />
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              Latest Articles{" "}
              {postsToShow.length > 0 &&
                `(${postsToShow.length} of ${
                  sortedPosts.filter((post) => !post.featured).length
                })`}
            </h2>

            {postsToShow.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsToShow.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSortBy("newest");
                  }}
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Load More */}
        {hasMorePosts && (
          <section className="py-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={loadMorePosts}
            >
              Load More Articles (+3)
            </Button>
          </section>
        )}
      </main>
    </div>
  );
}
