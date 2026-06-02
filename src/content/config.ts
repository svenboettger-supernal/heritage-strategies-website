import { defineCollection, z } from "astro:content";

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    isPrincipal: z.boolean().default(false),
    credentials: z.array(z.string()).optional(),
    licenses: z.array(z.string()).optional(),
    education: z.string().optional(),
    location: z.string().optional(),
    headshot: z.string().optional(),
    status: z.enum(["published", "placeholder"]).default("published"),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    summary: z.string(),
    bullets: z.array(z.string()).optional(),
    order: z.number(),
    deepDive: z.string().optional(),
    audiences: z.array(z.string()).optional(),
  }),
});

const press = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    date: z.coerce.date(),
    url: z.string().url().optional(),
    summary: z.string().optional(),
    tag: z.enum(["press", "award", "speaking", "industry"]).default("press"),
    status: z.enum(["published", "placeholder"]).default("published"),
  }),
});

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    summary: z.string(),
    category: z.enum(["Estate Planning", "Business Continuity", "Employee Benefits", "Family Office", "Firm Notes"]),
    readingTime: z.string().optional(),
    status: z.enum(["published", "placeholder"]).default("published"),
    cover: z.string().optional(),
  }),
});

const roles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
    posted: z.coerce.date(),
    summary: z.string(),
    status: z.enum(["open", "placeholder"]).default("open"),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    quote: z.string(),
    attribution: z.string(),
    role: z.string().optional(),
    anonymized: z.boolean().default(true),
    status: z.enum(["published", "placeholder"]).default("placeholder"),
  }),
});

export const collections = { team, services, press, insights, roles, testimonials };
