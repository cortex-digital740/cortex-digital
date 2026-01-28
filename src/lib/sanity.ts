import { createClient } from '@sanity/client';

// Sanity client configuration
// To connect to your Sanity project:
// 1. Create a project at sanity.io
// 2. Add your projectId and dataset below
// 3. Generate a read token for authenticated requests (optional for public data)

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster responses
});

// GROQ queries for fetching content
export const queries = {
  hero: `*[_type == "hero"][0]{
    title,
    highlight,
    subtitle,
    "backgroundVideo": backgroundVideo.asset->url,
    cta { label, href },
    secondaryCta { label, href }
  }`,
  
  navigation: `*[_type == "navigation"][0]{
    items[]{
      _key,
      label,
      href,
      children[]{
        _key,
        label,
        href
      }
    }
  }`,
  
  features: `*[_type == "feature"] | order(order asc){
    _id,
    icon,
    title,
    description
  }`,
  
  pricing: `*[_type == "pricingPlan"] | order(order asc){
    _id,
    name,
    price,
    period,
    description,
    features,
    highlighted,
    cta
  }`,
  
  testimonials: `*[_type == "testimonial"]{
    _id,
    name,
    role,
    company,
    content,
    "avatar": avatar.asset->url,
    rating
  }`,
  
  faqs: `*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer
  }`,
  
  projects: `*[_type == "project"]{
    _id,
    title,
    category,
    description,
    "image": image.asset->url,
    tags
  }`,
  
  contact: `*[_type == "contactInfo"][0]{
    email,
    phone,
    address,
    socials[]{
      platform,
      url,
      icon
    }
  }`,
  
  siteConfig: `*[_type == "siteConfig"][0]{
    name,
    tagline,
    description
  }`,
};

// Fetch function with fallback to mock data
export async function fetchFromSanity<T>(query: string, fallback: T): Promise<T> {
  try {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    
    // If no project ID configured, use fallback
    if (!projectId || projectId === 'your-project-id') {
      console.info('Sanity not configured, using mock CMS data');
      return fallback;
    }
    
    const result = await sanityClient.fetch<T>(query);
    return result ?? fallback;
  } catch (error) {
    console.warn('Failed to fetch from Sanity, using fallback:', error);
    return fallback;
  }
}

// Type definitions for Sanity content
export interface SanityHero {
  title: string;
  highlight: string;
  subtitle: string;
  backgroundVideo?: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface SanityNavItem {
  _key: string;
  label: string;
  href: string;
  children?: SanityNavItem[];
}

export interface SanityFeature {
  _id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SanityPricingPlan {
  _id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface SanityFAQ {
  _id: string;
  question: string;
  answer: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SanityContactInfo {
  email: string;
  phone: string;
  address: string;
  socials: { platform: string; url: string; icon: string }[];
}
