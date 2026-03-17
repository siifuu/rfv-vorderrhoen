import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    navLabel: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

const pricing = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    priceLabel: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    highlighted: z.boolean().optional(),
    order: z.number().optional(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional()
  })
});

export const collections = { pages, news, pricing };
