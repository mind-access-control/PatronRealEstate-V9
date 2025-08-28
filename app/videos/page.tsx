"use client";

import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Play, Star, Eye, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { videoData, categories } from "@/lib/video-data";

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [visibleVideos, setVisibleVideos] = useState(6);

  // Filter and sort videos
  const filteredVideos = videoData.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      video.category.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured video
  const featuredVideo = filteredVideos.find((video) => video.featured);

  // Sort filtered videos
  const sortedVideos = filteredVideos.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "popular":
        return b.views - a.views;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return (
          parseFloat(a.duration.replace(":", ".")) -
          parseFloat(b.duration.replace(":", "."))
        );
      default:
        return 0;
    }
  });

  // Get videos to show (excluding featured)
  const videosToShow = sortedVideos
    .filter((video) => !video.featured)
    .slice(0, visibleVideos);

  // Load more videos
  const loadMoreVideos = () => {
    setVisibleVideos((prev) =>
      Math.min(prev + 3, sortedVideos.filter((video) => !video.featured).length)
    );
  };

  // Check if there are more videos to load
  const hasMoreVideos =
    visibleVideos < sortedVideos.filter((video) => !video.featured).length;

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Real Estate Videos
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Discover properties, expert tips, and market analysis through our
            videos
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <div className="flex items-center space-x-2">
              <Play className="w-6 h-6" />
              <span>+100 videos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span>+50k views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6" />
              <span>4.8/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search videos..."
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
                    value="property-tours"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Property Tours
                  </SelectItem>
                  <SelectItem
                    value="selling-tips"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Selling Tips
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
                    value="home-care"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Home Care
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
                    value="negotiation"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Negotiation
                  </SelectItem>
                  <SelectItem
                    value="technology"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Technology
                  </SelectItem>
                  <SelectItem
                    value="financing"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Financing
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
                  <SelectItem
                    value="rating"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Highest Rated
                  </SelectItem>
                  <SelectItem
                    value="duration"
                    className="cursor-pointer hover:bg-accent"
                  >
                    Duration
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              Featured Video
            </h2>
            <VideoCard {...featuredVideo} featured={true} />
          </div>
        </section>
      )}

      {/* Regular Videos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            Recent Videos{" "}
            {videosToShow.length > 0 &&
              `(${videosToShow.length} of ${
                sortedVideos.filter((video) => !video.featured).length
              })`}
          </h2>

          {videosToShow.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videosToShow.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No videos found</h3>
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
      {hasMoreVideos && (
        <section className="py-8 text-center">
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={loadMoreVideos}
          >
            Load More Videos (+3)
          </Button>
        </section>
      )}
    </main>
  );
}
