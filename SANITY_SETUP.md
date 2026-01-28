# Sanity CMS Setup Guide

This project is pre-configured to work with Sanity CMS. Follow these steps to connect your Sanity project.

## Quick Start

### 1. Create a Sanity Project

```bash
npm create sanity@latest -- --template clean
```

Follow the prompts to create your project.

### 2. Configure Environment Variables

Create a `.env` file in your project root (or add to your hosting platform):

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

### 3. Add Content Schemas to Sanity Studio

In your Sanity Studio project, create these schemas:

#### `schemas/hero.ts`
```typescript
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'highlight', title: 'Highlighted Text', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'backgroundVideo', title: 'Background Video', type: 'file' },
    {
      name: 'cta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
    },
    {
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
    },
  ],
}
```

#### `schemas/feature.ts`
```typescript
export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., Zap, Shield)' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
```

#### `schemas/pricingPlan.ts`
```typescript
export default {
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    { name: 'name', title: 'Plan Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'period', title: 'Period', type: 'string' },
    { name: 'description', title: 'Description', type: 'string' },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'highlighted', title: 'Highlighted', type: 'boolean' },
    { name: 'cta', title: 'CTA Text', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
```

#### `schemas/testimonial.ts`
```typescript
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'content', title: 'Testimonial', type: 'text' },
    { name: 'avatar', title: 'Avatar', type: 'image' },
    { name: 'rating', title: 'Rating', type: 'number', validation: (Rule: any) => Rule.min(1).max(5) },
  ],
}
```

#### `schemas/faq.ts`
```typescript
export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'text' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
```

#### `schemas/project.ts`
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
  ],
}
```

#### `schemas/contactInfo.ts`
```typescript
export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', type: 'string' },
          { name: 'url', type: 'url' },
          { name: 'icon', type: 'string' },
        ],
      }],
    },
  ],
}
```

### 4. Deploy and Add Content

1. Deploy your Sanity Studio: `sanity deploy`
2. Access your studio at `https://your-project.sanity.studio`
3. Add content using the visual editor
4. Content updates appear in your app automatically!

## How It Works

The app uses React Query to fetch content from Sanity with automatic caching:
- Content is cached for 5 minutes
- Falls back to mock data if Sanity is not configured
- Supports both public and authenticated queries

## Files

- `src/lib/sanity.ts` - Sanity client and GROQ queries
- `src/hooks/useSanityContent.ts` - React Query hooks for fetching content
- `src/lib/cms.ts` - Mock data fallback
