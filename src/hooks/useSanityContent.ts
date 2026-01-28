import { useQuery } from '@tanstack/react-query';
import { fetchFromSanity, queries, SanityHero, SanityFeature, SanityPricingPlan, SanityTestimonial, SanityFAQ, SanityProject, SanityContactInfo } from '@/lib/sanity';
import { getHero, getFeatures, getPricing, getTestimonials, getFAQs, getProjects, getContactInfo } from '@/lib/cms';

// Hook for fetching hero content
export function useHero() {
  return useQuery({
    queryKey: ['sanity', 'hero'],
    queryFn: () => fetchFromSanity<SanityHero>(queries.hero, getHero()),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook for fetching features
export function useFeatures() {
  return useQuery({
    queryKey: ['sanity', 'features'],
    queryFn: () => fetchFromSanity<SanityFeature[]>(queries.features, getFeatures().map(f => ({ ...f, _id: f.id }))),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for fetching pricing plans
export function usePricing() {
  return useQuery({
    queryKey: ['sanity', 'pricing'],
    queryFn: () => fetchFromSanity<SanityPricingPlan[]>(queries.pricing, getPricing().map(p => ({ ...p, _id: p.id }))),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for fetching testimonials
export function useTestimonials() {
  return useQuery({
    queryKey: ['sanity', 'testimonials'],
    queryFn: () => fetchFromSanity<SanityTestimonial[]>(queries.testimonials, getTestimonials().map(t => ({ ...t, _id: t.id }))),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for fetching FAQs
export function useFAQs() {
  return useQuery({
    queryKey: ['sanity', 'faqs'],
    queryFn: () => fetchFromSanity<SanityFAQ[]>(queries.faqs, getFAQs().map(f => ({ ...f, _id: f.id }))),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for fetching projects
export function useProjects() {
  return useQuery({
    queryKey: ['sanity', 'projects'],
    queryFn: () => fetchFromSanity<SanityProject[]>(queries.projects, getProjects().map(p => ({ ...p, _id: p.id }))),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for fetching contact info
export function useContactInfo() {
  return useQuery({
    queryKey: ['sanity', 'contact'],
    queryFn: () => fetchFromSanity<SanityContactInfo>(queries.contact, getContactInfo()),
    staleTime: 1000 * 60 * 5,
  });
}
