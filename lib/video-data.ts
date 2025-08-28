export interface Video {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar?: string;
  date: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  rating: number;
  likes: number;
  dislikes: number;
  featured?: boolean;
  tags?: string[];
}

export interface RelatedVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  rating: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

export const videoData: Video[] = [
  {
    id: "1",
    title: "Virtual Tour: Luxury Home in Miami Beach",
    description:
      "Complete tour of this impressive 4-bedroom property with ocean views. Includes details of premium finishes and exclusive amenities.",
    author: "Maria Gonzalez",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-15",
    category: "Property Tours",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "3:45",
    views: 1247,
    rating: 4.8,
    likes: 89,
    dislikes: 3,
    featured: true,
    tags: [
      "Miami Beach",
      "Luxury Homes",
      "Ocean View",
      "4 Bedrooms",
      "Premium Finishes",
    ],
  },
  {
    id: "2",
    title: "Tips to Sell Your House Quickly",
    description:
      "Real estate experts share proven strategies to sell your property in the shortest time possible and at the best price.",
    author: "Carlos Rodriguez",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-12",
    category: "Selling Tips",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "8:32",
    views: 2156,
    rating: 4.6,
    likes: 156,
    dislikes: 12,
    featured: false,
    tags: ["Selling", "Tips", "Market Strategy", "Pricing"],
  },
  {
    id: "3",
    title: "Real Estate Market Analysis 2024",
    description:
      "Deep analysis of market trends, prices, and investment opportunities in the Miami metropolitan area.",
    author: "Ana Martinez",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-10",
    category: "Market Analysis",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "12:18",
    views: 3421,
    rating: 4.9,
    likes: 234,
    dislikes: 8,
    featured: false,
    tags: ["Market Analysis", "Trends", "Investment", "Miami"],
  },
  {
    id: "4",
    title: "First-Time Home Buyer Guide",
    description:
      "Everything you need to know to buy your first home: from saving for the down payment to closing the transaction.",
    author: "Luis Hernandez",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-08",
    category: "Buying Tips",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "15:45",
    views: 1897,
    rating: 4.7,
    likes: 178,
    dislikes: 15,
    featured: false,
    tags: ["First Time Buyer", "Guide", "Financing", "Process"],
  },
  {
    id: "5",
    title: "Preventive Home Maintenance",
    description:
      "Practical tips to keep your house in excellent condition and prevent costly future repairs.",
    author: "Patricia Lopez",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-05",
    category: "Home Care",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "9:12",
    views: 1567,
    rating: 4.5,
    likes: 134,
    dislikes: 22,
    featured: false,
    tags: ["Maintenance", "Home Care", "Prevention", "Tips"],
  },
  {
    id: "6",
    title: "Multi-Family Property Investment",
    description:
      "Discover why multi-family properties are an excellent investment option and how to maximize your return.",
    author: "Roberto Silva",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-03",
    category: "Investment",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "18:33",
    views: 2789,
    rating: 4.8,
    likes: 201,
    dislikes: 11,
    featured: false,
    tags: ["Investment", "Multi-Family", "ROI", "Real Estate"],
  },
  {
    id: "7",
    title: "Neighborhood Tour: Coral Gables",
    description:
      "Explore one of Miami's most exclusive neighborhoods, with its tree-lined streets, historic architecture, and excellent schools.",
    author: "Isabella Fernandez",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    date: "2024-01-01",
    category: "Neighborhoods",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "6:27",
    views: 1987,
    rating: 4.6,
    likes: 145,
    dislikes: 18,
    featured: false,
    tags: ["Coral Gables", "Neighborhood", "Miami", "Architecture"],
  },
  {
    id: "8",
    title: "Price Negotiation: Key Strategies",
    description:
      "Learn effective negotiation techniques to get the best price when buying or selling a property.",
    author: "Miguel Torres",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    date: "2023-12-28",
    category: "Negotiation",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "11:45",
    views: 2341,
    rating: 4.7,
    likes: 189,
    dislikes: 16,
    featured: false,
    tags: ["Negotiation", "Strategy", "Pricing", "Tips"],
  },
  {
    id: "9",
    title: "Smart Home Technology in 2024",
    description:
      "Discover the latest innovations in home technology that are increasing property values.",
    author: "Carmen Vega",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "2023-12-25",
    category: "Technology",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "13:22",
    views: 1678,
    rating: 4.4,
    likes: 123,
    dislikes: 28,
    featured: false,
    tags: ["Smart Home", "Technology", "Innovation", "Value"],
  },
  {
    id: "10",
    title: "Mortgage Financing: Available Options",
    description:
      "Complete guide on different types of mortgages, interest rates, and requirements to obtain financing.",
    author: "Fernando Morales",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "2023-12-22",
    category: "Financing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "16:58",
    views: 2987,
    rating: 4.8,
    likes: 267,
    dislikes: 19,
    featured: false,
    tags: ["Financing", "Mortgage", "Loans", "Guide"],
  },
];

export const getVideoById = (id: string): Video | undefined => {
  return videoData.find((video) => video.id === id);
};

export const getRelatedVideos = (
  currentVideoId: string,
  category?: string,
  limit: number = 3
): RelatedVideo[] => {
  return videoData
    .filter(
      (video) =>
        video.id !== currentVideoId &&
        (!category || video.category === category)
    )
    .slice(0, limit)
    .map((video) => ({
      id: video.id,
      title: video.title,
      thumbnailUrl: video.thumbnailUrl,
      duration: video.duration,
      views: video.views,
      rating: video.rating,
    }));
};

export const getCommentsForVideo = (videoId: string): Comment[] => {
  // Simulate comments for different videos
  const commentsMap: Record<string, Comment[]> = {
    "1": [
      {
        id: "1",
        author: "Carlos Lopez",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        content:
          "Excellent tour! The house looks incredible. Could you do more property tours in this area?",
        date: "2024-01-16",
        likes: 12,
        replies: [
          {
            id: "1-1",
            author: "Maria Gonzalez",
            avatar:
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
            content:
              "Thank you Carlos! Yes, we have more tours scheduled for next week.",
            date: "2024-01-16",
            likes: 5,
          },
        ],
      },
      {
        id: "2",
        author: "Ana Martinez",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        content:
          "I loved the kitchen and entertainment area. What's the price of this property?",
        date: "2024-01-15",
        likes: 8,
        replies: [],
      },
      {
        id: "3",
        author: "Roberto Silva",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        content:
          "The ocean view is spectacular. Do you have more information about the community and amenities?",
        date: "2024-01-15",
        likes: 15,
        replies: [],
      },
    ],
  };

  return commentsMap[videoId] || [];
};

export const categories = [
  "Property Tours",
  "Selling Tips",
  "Market Analysis",
  "Buying Tips",
  "Home Care",
  "Investment",
  "Neighborhoods",
  "Negotiation",
  "Technology",
  "Financing",
];
