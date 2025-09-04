"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Blog posts data (same as main blog page)
const blogPosts = [
  {
    id: "1",
    title: "🏡 Why Now Might Be the Best Time for Buyers in 2025",
    excerpt:
      "After years of intense competition and sky-high prices, the U.S. housing market is finally showing signs of relief for homebuyers—and the timing couldn't be better.",
    author: "Patron Real Estate Services",
    date: "2025-06-17",
    category: "Market Analysis",
    imageUrl: "/placeholder.jpg",
    readTime: "5 min read",
    featured: true,
    content: `
      After years of intense competition and sky-high prices, the U.S. housing market is finally showing signs of relief for homebuyers—and the timing couldn't be better.

      According to a recent article from MarketWatch, housing inventory in the U.S. has climbed to over 1 million active listings, the highest level since before the pandemic. With more homes on the market and fewer bidding wars, buyers now have more room to breathe, think, and negotiate.

      📉 Price Drops Are Back

      One of the most telling signs of this shift? Roughly 1 in 5 listings have had a price cut, and 37% of newly built homes are also reducing prices. Builders and sellers alike are adjusting to slower market conditions—and savvy buyers are reaping the benefits.

      🕰 Homes Are Sitting Longer

      Another shift from the seller-dominated days of the past: homes are spending about 38 days on the market before going under contract. This gives buyers more time to view properties, do their homework, and even revisit homes before making an offer. Gone are the days of rushing in with a blind bid the same day a home is listed.

      🔍 What This Means for Buyers

      If you've been sitting on the sidelines waiting for the market to cool down—this might be your window of opportunity. While interest rates remain elevated, buyers now have more negotiating power, flexibility on terms, and the ability to avoid risky practices like waiving inspections or contingencies.

      👀 Local Perspective

      Here in Los Angeles, we're seeing similar trends, especially in neighborhoods where inventory is growing. If you're buying in areas like Altadena, Tujunga, Burbank, or surrounding parts of L.A., you may start to notice more listings with price reductions or seller incentives.

      📲 Thinking About Buying or Selling?

      Whether you're a first-time buyer or looking to sell and upgrade, I'm here to guide you through this evolving market with clarity, confidence, and strategy. Reach out anytime—I'd love to help you make your next move.
    `,
    contactInfo: {
      email: "patronrealestateservices@gmail.com",
      phone: "323.350.3137",
      location:
        "Serving Greater Los Angeles | Patron Real Estate Inc. | DRE #02178767",
    },
    disclaimer:
      'This post references insights from a MarketWatch article published on June 17, 2025: "The housing market is finally buyer-friendly as more sellers slash prices." The article is not my own, but the observations shared align with current market activity across many L.A. neighborhoods.',
  },
  {
    id: "2",
    title:
      "First-Time Homebuyer's Complete Guide: LA's Hidden Gems Under $800K",
    excerpt:
      "Skip the bidding wars! We've found 5 up-and-coming neighborhoods where first-time buyers can still find affordable homes with great potential for appreciation.",
    author: "Patron Real Estate Services",
    date: "2024-01-12",
    category: "Buying Tips",
    imageUrl: "/placeholder.jpg",
    readTime: "12 min read",
    featured: false,
    content: `
      Finding an affordable home in Los Angeles can feel like searching for a needle in a haystack, but there are still hidden gems waiting to be discovered.

      In this comprehensive guide, we'll explore five up-and-coming neighborhoods where first-time buyers can find homes under $800K with great potential for appreciation.

      🏘️ Neighborhood #1: Altadena

      Nestled below the San Gabriel Mountains, Altadena offers a unique blend of historic charm and modern convenience. With median home prices around $750K, this neighborhood is becoming increasingly popular with young families and professionals.

      🏘️ Neighborhood #2: Tujunga

      For those seeking a more rural feel within city limits, Tujunga provides spacious lots and equestrian-friendly streets. Homes here typically range from $650K to $800K, offering excellent value for money.

      🏘️ Neighborhood #3: Sunland

      Known for its peaceful atmosphere and proximity to nature, Sunland features homes in the $700K range with plenty of outdoor space and mountain views.

      🏘️ Neighborhood #4: La Crescenta

      This family-oriented community offers excellent schools and a strong sense of community. Home prices average around $750K, making it accessible for first-time buyers.

      🏘️ Neighborhood #5: Shadow Hills

      With its semi-rural atmosphere and equestrian culture, Shadow Hills provides a unique lifestyle option. Homes here range from $650K to $800K.

      💡 Tips for First-Time Buyers

      When exploring these neighborhoods, consider factors like commute times, school districts, and future development plans. Work with a local real estate agent who understands these areas and can help you find the perfect home.

      📲 Ready to Start Your Search?

      Whether you're a first-time buyer or looking to invest in these up-and-coming areas, I'm here to guide you through the process with expertise and local knowledge.
    `,
    contactInfo: {
      email: "patronrealestateservices@gmail.com",
      phone: "323.350.3137",
      location:
        "Serving Greater Los Angeles | Patron Real Estate Inc. | DRE #02178767",
    },
  },
  {
    id: "7",
    title: "Market Trends: Los Angeles Real Estate in 2025",
    excerpt:
      "An in-depth analysis of current market conditions and predictions for the coming year in the Los Angeles real estate market.",
    author: "Patron Real Estate Services",
    date: "2024-01-01",
    category: "Market Analysis",
    imageUrl: "/placeholder.jpg",
    readTime: "8 min read",
    featured: false,
    content: `
       The Los Angeles real estate market continues to evolve, presenting both challenges and opportunities for buyers and sellers alike.
       
       As we move into 2025, several key trends are shaping the landscape of real estate in the greater Los Angeles area.
       
       📊 Market Overview
       
       Current data shows a balanced market with moderate price growth and stable inventory levels. This creates a favorable environment for both buyers and sellers.
       
       🏘️ Neighborhood Spotlight
       
       Several neighborhoods are experiencing increased interest, including Altadena, Tujunga, and La Crescenta. These areas offer excellent value and quality of life.
       
       💡 Investment Opportunities
       
       For investors, multi-family properties and single-family homes in emerging neighborhoods present attractive opportunities for long-term growth.
       
       📲 Stay Informed
       
       Whether you're buying, selling, or investing, staying informed about market trends is crucial for making the best decisions.
     `,
    contactInfo: {
      email: "patronrealestateservices@gmail.com",
      phone: "323.350.3137",
      location:
        "Serving Greater Los Angeles | Patron Real Estate Inc. | DRE #02178767",
    },
  },
  {
    id: "8",
    title: "Investment Strategies for First-Time Real Estate Investors",
    excerpt:
      "Essential tips and strategies for those looking to enter the real estate investment market for the first time.",
    author: "Patron Real Estate Services",
    date: "2023-12-28",
    category: "Investment",
    imageUrl: "/placeholder.jpg",
    readTime: "12 min read",
    featured: false,
    content: `
       Entering the real estate investment market can be both exciting and overwhelming for first-time investors.
       
       This guide provides essential strategies and tips to help you navigate your first real estate investment successfully.
       
       💰 Understanding Your Investment Goals
       
       Before diving into real estate investment, it's crucial to clearly define your financial goals and risk tolerance.
       
       🏠 Types of Investment Properties
       
       From single-family homes to multi-family units, understanding the different types of investment properties helps you choose the right option.
       
       📈 Market Research
       
       Thorough market research is essential for identifying profitable investment opportunities in the Los Angeles area.
       
       🤝 Working with Professionals
       
       Building a team of experienced professionals, including real estate agents, property managers, and financial advisors, is key to success.
       
       📲 Ready to Start Investing?
       
       Whether you're a first-time investor or looking to expand your portfolio, I'm here to guide you through the process.
     `,
    contactInfo: {
      email: "patronrealestateservices@gmail.com",
      phone: "323.350.3137",
      location:
        "Serving Greater Los Angeles | Patron Real Estate Inc. | DRE #02178767",
    },
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;

  const blogPost = blogPosts.find((post) => post.id === postId);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="text-foreground hover:text-white border-2 hover:border-primary hover:bg-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />← Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog */}
      <section className="py-6 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button
              variant="outline"
              className="text-foreground hover:text-white border-2 hover:border-primary hover:bg-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />← Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Post */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {blogPost.category}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{blogPost.readTime}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {blogPost.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                By {blogPost.author}
              </p>
            </div>

            {/* Post Content */}
            <Card className="p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                {blogPost.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Contact Section */}
            {blogPost.contactInfo && (
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  📲 Thinking About Buying or Selling?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're a first-time buyer or looking to sell and
                  upgrade, I'm here to guide you through this evolving market
                  with clarity, confidence, and strategy. Reach out anytime—I'd
                  love to help you make your next move.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href={`mailto:${blogPost.contactInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {blogPost.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href={`tel:${blogPost.contactInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {blogPost.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {blogPost.contactInfo.location}
                    </span>
                  </div>
                </div>
              </Card>
            )}

            {/* Disclaimer */}
            {blogPost.disclaimer && (
              <Card className="p-6 bg-muted/30 mb-8">
                <p className="text-sm text-muted-foreground italic">
                  {blogPost.disclaimer}
                </p>
              </Card>
            )}

            {/* Back to Blog Button */}
            <div className="text-center py-8">
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-foreground hover:text-white border-2 hover:border-primary hover:bg-primary"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />← Back to All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
