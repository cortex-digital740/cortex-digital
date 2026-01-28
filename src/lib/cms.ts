// Mock CMS Data Layer - Simulates headless CMS like Sanity/Contentful

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroContent {
  title: string;
  highlight: string;
  subtitle: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socials: { platform: string; url: string; icon: string }[];
}

// CMS Mock Data
export const cmsData = {
  siteConfig: {
    name: "Cortex Digital",
    tagline: "Transform Your Digital Presence",
    description: "Enterprise-grade digital solutions that drive growth and innovation.",
  },

  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "features", label: "Features", href: "/features" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "contact", label: "Contact", href: "/contact" },
  ] as NavItem[],

  hero: {
    title: "Build The Future of",
    highlight: "Digital Excellence",
    subtitle: "Empower your business with cutting-edge solutions designed for scale. From startups to enterprises, we deliver technology that transforms.",
    cta: { label: "Get Started Free", href: "/register" },
    secondaryCta: { label: "View Demo", href: "/features" },
  } as HeroContent,

  features: [
    {
      id: "1",
      icon: "Zap",
      title: "Lightning Performance",
      description: "Optimized infrastructure delivering sub-100ms response times globally with 99.99% uptime guarantee.",
    },
    {
      id: "2",
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC2 compliance, and advanced threat detection to protect your data.",
    },
    {
      id: "3",
      icon: "BarChart3",
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics to drive data-informed decision making.",
    },
    {
      id: "4",
      icon: "Workflow",
      title: "Seamless Integration",
      description: "Connect with 500+ tools and platforms. REST APIs, webhooks, and native integrations.",
    },
    {
      id: "5",
      icon: "Users",
      title: "Team Collaboration",
      description: "Built-in workflows for teams of any size. Real-time sync, comments, and version control.",
    },
    {
      id: "6",
      icon: "Globe",
      title: "Global Scale",
      description: "Deploy to 40+ edge locations worldwide. Auto-scaling that handles millions of requests.",
    },
  ] as Feature[],

  pricing: [
    {
      id: "starter",
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access",
      ],
      cta: "Start Free Trial",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For growing teams that need more power",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Full API access",
        "Custom integrations",
        "SSO authentication",
      ],
      highlighted: true,
      cta: "Start Free Trial",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom development",
        "On-premise option",
        "SLA guarantee",
        "Security audit",
      ],
      cta: "Contact Sales",
    },
  ] as PricingPlan[],

  testimonials: [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechVentures Inc",
      content: "Cortex Digital transformed our entire infrastructure. We've seen a 300% improvement in deployment speed and our team productivity has skyrocketed.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: "2",
      name: "Marcus Johnson",
      role: "VP Engineering",
      company: "ScaleUp Solutions",
      content: "The security features alone made the switch worth it. We passed our SOC2 audit with flying colors thanks to Cortex Digital's robust security framework.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Product Director",
      company: "Innovation Labs",
      content: "The analytics dashboard gives us insights we never had before. We've increased our conversion rate by 150% since implementing their solutions.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: "4",
      name: "David Kim",
      role: "Founder & CEO",
      company: "NextGen Startup",
      content: "As a startup, we needed something that could scale with us. Cortex Digital exceeded all expectations. Their support team is phenomenal.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "1",
      question: "How quickly can we get started?",
      answer: "You can be up and running within minutes. Our onboarding process is streamlined, and we offer free migration assistance for enterprise customers.",
    },
    {
      id: "2",
      question: "Is there a free trial available?",
      answer: "Yes! All plans come with a 14-day free trial, no credit card required. You'll have full access to all features during the trial period.",
    },
    {
      id: "3",
      question: "How does pricing work for larger teams?",
      answer: "We offer volume discounts for larger teams. Contact our sales team for custom pricing that fits your organization's needs.",
    },
    {
      id: "4",
      question: "What kind of support do you offer?",
      answer: "We provide email support for all plans, priority support for Professional, and 24/7 dedicated support with a named account manager for Enterprise customers.",
    },
    {
      id: "5",
      question: "Can I export my data?",
      answer: "Absolutely. You own your data. We provide easy export tools in multiple formats, and our team can assist with any migration needs.",
    },
    {
      id: "6",
      question: "Do you offer custom integrations?",
      answer: "Yes, our Professional and Enterprise plans include custom integration development. We also have a robust API for building your own integrations.",
    },
  ] as FAQ[],

  projects: [
    {
      id: "1",
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      description: "Complete redesign and rebuild of a major retail platform, resulting in 200% increase in mobile conversions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "AWS"],
    },
    {
      id: "2",
      title: "FinTech Dashboard",
      category: "SaaS",
      description: "Real-time financial analytics dashboard processing millions of transactions daily.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
    },
    {
      id: "3",
      title: "Healthcare Management System",
      category: "Enterprise",
      description: "HIPAA-compliant patient management system serving 50+ healthcare facilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["Python", "React", "Azure"],
    },
    {
      id: "4",
      title: "AI-Powered Marketing Suite",
      category: "AI/ML",
      description: "Machine learning platform for automated marketing campaign optimization.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["TensorFlow", "Python", "GCP"],
    },
    {
      id: "5",
      title: "Logistics Tracking Platform",
      category: "Enterprise",
      description: "Real-time fleet management and delivery tracking for a global logistics company.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      tags: ["Go", "Kubernetes", "Redis"],
    },
    {
      id: "6",
      title: "Social Media Analytics",
      category: "SaaS",
      description: "Comprehensive social media analytics platform with sentiment analysis.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Next.js", "Python", "MongoDB"],
    },
  ] as Project[],

  contact: {
    email: "hello@cortexdigital.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345",
    socials: [
      { platform: "Twitter", url: "#", icon: "Twitter" },
      { platform: "LinkedIn", url: "#", icon: "Linkedin" },
      { platform: "GitHub", url: "#", icon: "Github" },
    ],
  } as ContactInfo,
};

// Mock CMS fetch functions
export const getCMSData = () => cmsData;
export const getNavigation = () => cmsData.navigation;
export const getHero = () => cmsData.hero;
export const getFeatures = () => cmsData.features;
export const getPricing = () => cmsData.pricing;
export const getTestimonials = () => cmsData.testimonials;
export const getFAQs = () => cmsData.faqs;
export const getProjects = () => cmsData.projects;
export const getContactInfo = () => cmsData.contact;
