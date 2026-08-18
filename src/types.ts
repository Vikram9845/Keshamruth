export interface ProductVariant {
  id: string;
  name: string;
  subtitle: string;
  bottles: number;
  volume: string;
  durationMonths: number;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  popular?: boolean;
  bestValue?: boolean;
  freeGifts: string[];
  image: string;
  description: string;
}

export interface Ingredient {
  id: string;
  name: string;
  sanskritName: string;
  botanicalName: string;
  role: string;
  tagline?: string;
  keyBenefits: string[];
  detailedBenefits?: { title: string; desc: string }[];
  activeCompounds: string[];
  ayurvedicDosha: 'Vata' | 'Pitta' | 'Kapha' | 'Tridoshic';
  percentage: string;
  image?: string;
  description: string;
  clinicalNote: string;
  brandDifference?: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  verified: boolean;
  date: string;
  title: string;
  content: string;
  hairType: string;
  durationUsed: string;
  helpfulCount: number;
  userVotedHelpful?: boolean;
  beforeAfterImage?: string;
  tags: string[];
}

export interface CartItem {
  variant: ProductVariant;
  quantity: number;
  customGiftWrap?: boolean;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'cod';

export interface TrackingStep {
  status: string;
  description: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current?: boolean;
}

export interface Order {
  id: string;
  date: string;
  customer: ShippingAddress;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  couponApplied?: string;
  paymentMethod: PaymentMethod;
  paymentStatus: 'PAID' | 'PENDING_COD';
  status: 'Processing' | 'Dispatched' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  courierName: string;
  trackingNumber: string;
  estimatedDelivery: string;
  timeline: TrackingStep[];
}

export interface HairQuizAnswer {
  scalpType: 'dry' | 'oily' | 'combination' | 'sensitive';
  hairConcern: 'hair_fall' | 'thinning' | 'dandruff' | 'slow_growth' | 'frizz_damage';
  oilingFrequency: 'never' | 'once_weekly' | '2_3_weekly' | 'daily';
  stressLevel: 'low' | 'moderate' | 'high';
}

export interface QuizResult {
  dominantDosha: string;
  recommendedRoutine: string;
  applicationFrequency: string;
  massageTechnique: string;
  recommendedBundleId: string;
  keyHerbsForUser: string[];
  expectedTimelineDays: number;
}
