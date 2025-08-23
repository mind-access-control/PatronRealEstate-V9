export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "house" | "apartment" | "condo" | "townhouse";
  status: "for-sale" | "for-rent" | "sold" | "pending";
  images: string[];
  description: string;
  features: string[];
  agentId: string;
  coordinates: { lat: number; lng: number };
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  specialties: string[];
  experience: number;
  propertiesSold: number;
  rating: number;
  reviews: number;
  languages: string[];
  license: string;
  office: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: "buy" | "rent" | "sell" | "invest";
  budget: number;
  location: string;
  timeline: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  assignedAgentId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  amenities: string[];
  schools: string[];
  crimeRate: string;
  walkScore: number;
  transitScore: number;
  bikeScore: number;
  coordinates: { lat: number; lng: number };
}

// Datos dummy para propiedades
export const dummyProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Modern Villa with Ocean View",
    address: "123 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    zipCode: "33139",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    description:
      "Stunning modern villa with panoramic ocean views, high-end finishes, and luxury amenities. Perfect for those seeking the ultimate beachfront lifestyle.",
    features: [
      "Ocean View",
      "Pool",
      "Garden",
      "Smart Home",
      "Garage",
      "Balcony",
    ],
    agentId: "1",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Downtown Luxury Condo",
    address: "456 Brickell Ave",
    city: "Miami",
    state: "FL",
    zipCode: "33131",
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "condo",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop",
    ],
    description:
      "Sophisticated downtown condo with city skyline views, modern amenities, and prime location near shopping, dining, and entertainment.",
    features: ["City View", "Gym", "Pool", "Doorman", "Parking", "Balcony"],
    agentId: "2",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "3",
    title: "Family Home in Coral Gables",
    address: "789 Granada Blvd",
    city: "Coral Gables",
    state: "FL",
    zipCode: "33134",
    price: 1200000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    ],
    description:
      "Beautiful family home in prestigious Coral Gables with excellent schools, tree-lined streets, and classic architecture with modern updates.",
    features: ["Garden", "Fireplace", "Basement", "Attic", "Patio", "Storage"],
    agentId: "3",
    coordinates: { lat: 25.7215, lng: -80.2683 },
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
  },
  {
    id: "4",
    title: "Waterfront Townhouse",
    address: "321 Bay Shore Dr",
    city: "Miami",
    state: "FL",
    zipCode: "33133",
    price: 950000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    type: "townhouse",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    description:
      "Elegant waterfront townhouse with private dock access, modern interior, and stunning bay views. Perfect for boat enthusiasts.",
    features: ["Waterfront", "Dock", "Pool", "Garden", "Garage", "Balcony"],
    agentId: "1",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  {
    id: "5",
    title: "Modern Apartment in Wynwood",
    address: "567 NW 2nd Ave",
    city: "Miami",
    state: "FL",
    zipCode: "33127",
    price: 450000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    type: "apartment",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop",
    ],
    description:
      "Trendy apartment in the heart of Wynwood Arts District with exposed brick, high ceilings, and walking distance to galleries and restaurants.",
    features: [
      "Arts District",
      "Exposed Brick",
      "High Ceilings",
      "Walkable",
      "Parking",
      "Balcony",
    ],
    agentId: "2",
    coordinates: { lat: 25.8019, lng: -80.1967 },
    createdAt: "2024-01-08T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
  },
  {
    id: "6",
    title: "Luxury Penthouse with City Views",
    address: "999 Biscayne Blvd",
    city: "Miami",
    state: "FL",
    zipCode: "33132",
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    type: "condo",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop",
    ],
    description:
      "Exclusive penthouse with 360-degree city and bay views, private elevator, rooftop terrace, and luxury finishes throughout.",
    features: [
      "Penthouse",
      "City Views",
      "Private Elevator",
      "Rooftop Terrace",
      "Luxury Finishes",
      "Parking",
    ],
    agentId: "3",
    coordinates: { lat: 25.7869, lng: -80.1881 },
    createdAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-03T00:00:00Z",
  },
];

// Datos dummy para agentes
export const dummyAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@patron.com",
    phone: "+1 (305) 555-0101",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Top-producing luxury real estate specialist with 15+ years of experience in Miami Beach and surrounding areas.",
    specialties: ["Luxury Homes", "Waterfront Properties", "New Construction"],
    experience: 15,
    propertiesSold: 127,
    rating: 4.9,
    reviews: 89,
    languages: ["English", "Spanish"],
    license: "FL-123456",
    office: "Miami Beach",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@patron.com",
    phone: "+1 (305) 555-0102",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Downtown Miami condo expert specializing in high-rise living and investment properties.",
    specialties: ["Condos", "Investment Properties", "Downtown Miami"],
    experience: 12,
    propertiesSold: 94,
    rating: 4.8,
    reviews: 67,
    languages: ["English", "Spanish", "Portuguese"],
    license: "FL-123457",
    office: "Downtown Miami",
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily.chen@patron.com",
    phone: "+1 (305) 555-0103",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Family home specialist in Coral Gables and Pinecrest, helping families find their perfect home.",
    specialties: ["Family Homes", "School Districts", "Coral Gables"],
    experience: 8,
    propertiesSold: 56,
    rating: 4.9,
    reviews: 42,
    languages: ["English", "Mandarin"],
    license: "FL-123458",
    office: "Coral Gables",
  },
];

// Datos dummy para leads
export const dummyLeads: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (305) 555-0201",
    interest: "buy",
    budget: 800000,
    location: "Miami Beach",
    timeline: "3-6 months",
    message: "Looking for a 2-3 bedroom condo near the beach with ocean views.",
    status: "new",
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+1 (305) 555-0202",
    interest: "sell",
    budget: 0,
    location: "Coral Gables",
    timeline: "1-2 months",
    message: "Need to sell my 4-bedroom home quickly due to job relocation.",
    status: "contacted",
    assignedAgentId: "3",
    createdAt: "2024-01-18T00:00:00Z",
    updatedAt: "2024-01-19T00:00:00Z",
  },
  {
    id: "3",
    name: "David Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (305) 555-0203",
    interest: "invest",
    budget: 1500000,
    location: "Downtown Miami",
    timeline: "6-12 months",
    message:
      "Looking for investment properties with good rental yield potential.",
    status: "qualified",
    assignedAgentId: "2",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-17T00:00:00Z",
  },
];

// Datos dummy para blog posts
export const dummyBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Miami Real Estate Market Trends 2024",
    excerpt:
      "Discover the latest trends shaping Miami's real estate market and what buyers and sellers can expect this year.",
    content:
      "The Miami real estate market continues to show strong growth in 2024...",
    author: "Sarah Johnson",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    category: "Market Analysis",
    tags: ["Market Trends", "Miami", "2024", "Real Estate"],
    publishedAt: "2024-01-20T00:00:00Z",
    readTime: 5,
  },
  {
    id: "2",
    title: "Top 5 Neighborhoods for Families in Miami",
    excerpt:
      "Explore the best family-friendly neighborhoods in Miami with excellent schools and amenities.",
    content: "Finding the perfect neighborhood for your family is crucial...",
    author: "Emily Chen",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    category: "Neighborhoods",
    tags: ["Family", "Neighborhoods", "Schools", "Miami"],
    publishedAt: "2024-01-18T00:00:00Z",
    readTime: 7,
  },
  {
    id: "3",
    title: "Investment Properties: ROI Analysis",
    excerpt:
      "Learn how to analyze potential returns on investment properties in the Miami market.",
    content: "Investing in real estate can be highly profitable...",
    author: "Michael Rodriguez",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=400&fit=crop",
    category: "Investment",
    tags: ["Investment", "ROI", "Analysis", "Miami"],
    publishedAt: "2024-01-15T00:00:00Z",
    readTime: 6,
  },
];

// Datos dummy para comunidades
export const dummyCommunities: Community[] = [
  {
    id: "1",
    name: "Coral Gables",
    description:
      'Known as "The City Beautiful," Coral Gables is famous for its Mediterranean architecture, tree-lined streets, and prestigious schools.',
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    amenities: [
      "Top Schools",
      "Shopping Centers",
      "Parks",
      "Restaurants",
      "Museums",
    ],
    schools: [
      "Coral Gables Senior High",
      "Carver Elementary",
      "Ponce de Leon Middle",
    ],
    crimeRate: "Very Low",
    walkScore: 85,
    transitScore: 78,
    bikeScore: 82,
    coordinates: { lat: 25.7215, lng: -80.2683 },
  },
  {
    id: "2",
    name: "Miami Beach",
    description:
      "Iconic beachfront city known for its Art Deco architecture, vibrant nightlife, and world-class beaches.",
    image:
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=400&fit=crop",
    amenities: [
      "Beaches",
      "Art Deco District",
      "Nightlife",
      "Restaurants",
      "Shopping",
    ],
    schools: [
      "Miami Beach Senior High",
      "Nautilus Middle",
      "North Beach Elementary",
    ],
    crimeRate: "Low",
    walkScore: 92,
    transitScore: 85,
    bikeScore: 88,
    coordinates: { lat: 25.7907, lng: -80.13 },
  },
  {
    id: "3",
    name: "Wynwood Arts District",
    description:
      "Trendy neighborhood known for its street art, galleries, craft breweries, and creative atmosphere.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    amenities: [
      "Street Art",
      "Galleries",
      "Breweries",
      "Restaurants",
      "Creative Spaces",
    ],
    schools: ["Miami Arts Charter", "Miami Central Senior High"],
    crimeRate: "Medium",
    walkScore: 89,
    transitScore: 82,
    bikeScore: 85,
    coordinates: { lat: 25.8019, lng: -80.1967 },
  },
];

// Funciones de utilidad
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getPropertyStatusColor = (status: string): string => {
  switch (status) {
    case "for-sale":
      return "bg-green-100 text-green-800";
    case "for-rent":
      return "bg-blue-100 text-blue-800";
    case "sold":
      return "bg-gray-100 text-gray-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getPropertyStatusText = (status: string): string => {
  switch (status) {
    case "for-sale":
      return "For Sale";
    case "for-rent":
      return "For Rent";
    case "sold":
      return "Sold";
    case "pending":
      return "Pending";
    default:
      return "Unknown";
  }
};
