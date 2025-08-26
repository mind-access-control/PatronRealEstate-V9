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
  // Nuevas propiedades para renta
  {
    id: "7",
    title: "Cozy Studio in South Beach",
    address: "234 Collins Ave",
    city: "Miami Beach",
    state: "FL",
    zipCode: "33139",
    price: 2500,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 550,
    type: "apartment",
    status: "for-rent",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "Charming studio apartment steps from the beach with modern amenities and ocean breeze views.",
    features: ["Beach Access", "Pool", "Gym", "Parking", "Balcony"],
    agentId: "1",
    coordinates: { lat: 25.7907, lng: -80.13 },
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "8",
    title: "Family House for Rent in Pinecrest",
    address: "456 SW 120th St",
    city: "Pinecrest",
    state: "FL",
    zipCode: "33156",
    price: 4500,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    type: "house",
    status: "for-rent",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    ],
    description:
      "Spacious family home in quiet Pinecrest neighborhood with large backyard and excellent schools nearby.",
    features: ["Large Backyard", "Garage", "Fireplace", "Storage", "Patio"],
    agentId: "3",
    coordinates: { lat: 25.6671, lng: -80.3089 },
    createdAt: "2024-01-18T00:00:00Z",
    updatedAt: "2024-01-18T00:00:00Z",
  },
  {
    id: "9",
    title: "Luxury Condo Rental in Brickell",
    address: "789 SW 1st Ave",
    city: "Miami",
    state: "FL",
    zipCode: "33130",
    price: 3800,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "condo",
    status: "for-rent",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "High-end condo rental in the heart of Brickell with premium amenities and stunning city views.",
    features: ["City Views", "Gym", "Pool", "Doorman", "Parking", "Spa"],
    agentId: "2",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    createdAt: "2024-01-16T00:00:00Z",
    updatedAt: "2024-01-16T00:00:00Z",
  },
  // Propiedades vendidas
  {
    id: "10",
    title: "Historic Home in Coconut Grove",
    address: "321 Main Hwy",
    city: "Coconut Grove",
    state: "FL",
    zipCode: "33133",
    price: 1800000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: "house",
    status: "sold",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    ],
    description:
      "Charming historic home in the heart of Coconut Grove with original character and modern updates.",
    features: ["Historic", "Garden", "Porch", "Hardwood Floors", "Fireplace"],
    agentId: "3",
    coordinates: { lat: 25.7289, lng: -80.2444 },
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "11",
    title: "Waterfront Condo in Key Biscayne",
    address: "567 Crandon Blvd",
    city: "Key Biscayne",
    state: "FL",
    zipCode: "33149",
    price: 2100000,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1600,
    type: "condo",
    status: "sold",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "Exclusive waterfront condo with private beach access and panoramic ocean views.",
    features: ["Waterfront", "Private Beach", "Pool", "Gym", "Parking"],
    agentId: "1",
    coordinates: { lat: 25.6921, lng: -80.1625 },
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
  },
  // Propiedades pendientes
  {
    id: "12",
    title: "Modern Townhouse in Doral",
    address: "890 NW 87th Ave",
    city: "Doral",
    state: "FL",
    zipCode: "33172",
    price: 680000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1900,
    type: "townhouse",
    status: "pending",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    ],
    description:
      "Contemporary townhouse in Doral with modern design, community amenities, and convenient location.",
    features: ["Modern Design", "Community Pool", "Gym", "Garage", "Patio"],
    agentId: "2",
    coordinates: { lat: 25.8195, lng: -80.3553 },
    createdAt: "2024-01-22T00:00:00Z",
    updatedAt: "2024-01-22T00:00:00Z",
  },
  // Propiedades con diferentes números de habitaciones y baños
  {
    id: "13",
    title: "Studio Loft in Downtown",
    address: "123 NE 2nd St",
    city: "Miami",
    state: "FL",
    zipCode: "33132",
    price: 2800,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 650,
    type: "apartment",
    status: "for-rent",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "Modern studio loft with high ceilings and industrial design in the heart of downtown.",
    features: [
      "High Ceilings",
      "Industrial Design",
      "Gym",
      "Parking",
      "Rooftop",
    ],
    agentId: "2",
    coordinates: { lat: 25.7869, lng: -80.1881 },
    createdAt: "2024-01-19T00:00:00Z",
    updatedAt: "2024-01-19T00:00:00Z",
  },
  {
    id: "14",
    title: "Mansion in Gables Estates",
    address: "456 Gables Estates Dr",
    city: "Coral Gables",
    state: "FL",
    zipCode: "33156",
    price: 8500000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    description:
      "Magnificent estate home with luxury amenities, tennis court, and private dock access.",
    features: [
      "Tennis Court",
      "Private Dock",
      "Pool",
      "Wine Cellar",
      "Home Theater",
      "Staff Quarters",
    ],
    agentId: "1",
    coordinates: { lat: 25.7215, lng: -80.2683 },
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "15",
    title: "Penthouse Suite in Bal Harbour",
    address: "789 Bal Harbour Dr",
    city: "Bal Harbour",
    state: "FL",
    zipCode: "33154",
    price: 5200000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3200,
    type: "condo",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "Ultra-luxury penthouse with panoramic ocean views, private elevator, and world-class amenities.",
    features: [
      "Ocean Views",
      "Private Elevator",
      "Rooftop Terrace",
      "Spa",
      "Concierge",
      "Valet",
    ],
    agentId: "1",
    coordinates: { lat: 25.8901, lng: -80.1269 },
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  // Propiedades adicionales para Los Angeles
  {
    id: "16",
    title: "Investment Property in Santa Monica",
    address: "456 Ocean Ave",
    city: "Santa Monica",
    state: "CA",
    zipCode: "90401",
    price: 1800000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    ],
    description:
      "Excellent investment opportunity in Santa Monica with high rental potential and strong appreciation history.",
    features: [
      "Investment",
      "Rental Potential",
      "Good Schools",
      "Near Beach",
      "Parking",
      "Garden",
    ],
    agentId: "4",
    coordinates: { lat: 34.0195, lng: -118.4912 },
    createdAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-03T00:00:00Z",
  },
  {
    id: "17",
    title: "First-Time Buyer Home in Culver City",
    address: "789 Washington Blvd",
    city: "Culver City",
    state: "CA",
    zipCode: "90232",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    ],
    description:
      "Perfect starter home for first-time buyers in a family-friendly neighborhood with great schools.",
    features: [
      "Starter Home",
      "Family Friendly",
      "Good Schools",
      "Backyard",
      "Garage",
      "Updated Kitchen",
    ],
    agentId: "5",
    coordinates: { lat: 34.0211, lng: -118.3965 },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "18",
    title: "Ultra-Luxury Estate in Malibu",
    address: "123 Pacific Coast Hwy",
    city: "Malibu",
    state: "CA",
    zipCode: "90265",
    price: 15000000,
    bedrooms: 6,
    bathrooms: 8,
    sqft: 8500,
    type: "house",
    status: "for-sale",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    description:
      "Breathtaking oceanfront estate with panoramic views, private beach access, and world-class amenities.",
    features: [
      "Oceanfront",
      "Private Beach",
      "Infinity Pool",
      "Wine Cellar",
      "Home Theater",
      "Helipad",
    ],
    agentId: "6",
    coordinates: { lat: 34.0259, lng: -118.7798 },
    createdAt: "2023-12-28T00:00:00Z",
    updatedAt: "2023-12-28T00:00:00Z",
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
    bio: "Top-producing luxury real estate specialist with 15+ years of experience in Los Angeles and surrounding areas. Sarah has helped over 200 families find their dream homes in Beverly Hills, Bel Air, and Pacific Palisades.",
    specialties: [
      "Luxury Homes",
      "Waterfront Properties",
      "New Construction",
      "Beverly Hills",
    ],
    experience: 15,
    propertiesSold: 127,
    rating: 4.9,
    reviews: 89,
    languages: ["English", "Spanish"],
    license: "CA-123456",
    office: "Beverly Hills",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@patron.com",
    phone: "+1 (305) 555-0102",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Downtown LA condo expert specializing in high-rise living and investment properties. Michael has a deep understanding of the urban market and helps clients navigate the competitive downtown real estate landscape.",
    specialties: [
      "Condos",
      "Investment Properties",
      "Downtown LA",
      "Arts District",
    ],
    experience: 12,
    propertiesSold: 94,
    rating: 4.8,
    reviews: 67,
    languages: ["English", "Spanish", "Portuguese"],
    license: "CA-123457",
    office: "Downtown LA",
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily.chen@patron.com",
    phone: "+1 (305) 555-0103",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Family home specialist in Pasadena and Arcadia, helping families find their perfect home in excellent school districts. Emily understands the unique needs of growing families.",
    specialties: ["Family Homes", "School Districts", "Pasadena", "Arcadia"],
    experience: 8,
    propertiesSold: 56,
    rating: 4.9,
    reviews: 42,
    languages: ["English", "Mandarin"],
    license: "CA-123458",
    office: "Pasadena",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@patron.com",
    phone: "+1 (305) 555-0104",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Investment property specialist with expertise in multi-family units and commercial real estate. David helps investors build wealth through strategic property acquisitions.",
    specialties: [
      "Investment Properties",
      "Multi-Family",
      "Commercial",
      "Santa Monica",
    ],
    experience: 18,
    propertiesSold: 203,
    rating: 4.7,
    reviews: 156,
    languages: ["English", "Korean"],
    license: "CA-123459",
    office: "Santa Monica",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    email: "lisa.rodriguez@patron.com",
    phone: "+1 (305) 555-0105",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "First-time homebuyer specialist who makes the home buying process simple and stress-free. Lisa has helped over 150 first-time buyers achieve their homeownership dreams.",
    specialties: [
      "First-Time Buyers",
      "Starter Homes",
      "FHA Loans",
      "Culver City",
    ],
    experience: 6,
    propertiesSold: 78,
    rating: 4.9,
    reviews: 89,
    languages: ["English", "Spanish"],
    license: "CA-123460",
    office: "Culver City",
  },
  {
    id: "6",
    name: "Robert Martinez",
    email: "robert.martinez@patron.com",
    phone: "+1 (305) 555-0106",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Luxury market expert specializing in properties over $5M. Robert has closed deals on some of LA's most prestigious properties and understands the unique needs of high-net-worth clients.",
    specialties: ["Ultra-Luxury", "Celebrity Homes", "Malibu", "Bel Air"],
    experience: 22,
    propertiesSold: 89,
    rating: 4.9,
    reviews: 67,
    languages: ["English", "Spanish", "French"],
    license: "CA-123461",
    office: "Malibu",
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
