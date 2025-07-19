import { BlogItemProps } from "@/types/blog";

export const BLOG_ITEMS: BlogItemProps[] = [
  {
    title: {
      en: "How to make a simple SaaS project",
      zh: "如何制作一个简单的SaaS项目"
    },
    slug: "how-to-make-a-simple-saas-project",
    description: {
      en: "Use Next.js, TypeScript, Supabase, Stripe to build a simple SaaS project",
      zh: "使用Next.js、TypeScript、Supabase、Stripe构建一个简单的SaaS项目"
    },
    updated_at: new Date("2025-06-01"),
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    is_featured: false,
    is_show: true,
  },
  {
    title: {
      en: "How to custom domain for your Vercel project",
      zh: "如何为你的Vercel项目设置自定义域名"
    },
    slug: "how-to-custom-domain-for-your-vercel-project",
    description: {
      en: "This blog will tell you if you buy domain from another provider, how to custom domain for your Vercel project",
      zh: "这篇博客将告诉你如果你从其他提供商购买域名，如何为你的Vercel项目设置自定义域名"
    },
    updated_at: new Date("2025-06-04"),
    tags: ["Vercel", "Cloudflare", "Domain"],
    is_featured: false,
    is_show: true,
  },
  {
    title: {
      en: "Why Tailwind CSS Feels So Right",
      zh: "为什么Tailwind CSS感觉如此合适"
    },
    slug: "why-tailwind-css-feels-so-right",
    description: {
      en: "This blog will tell you why Tailwind CSS feels so right",
      zh: "这篇博客将告诉你为什么Tailwind CSS感觉如此合适"
    },
    updated_at: new Date("2025-06-19"),
    tags: ["Tailwind CSS", "CSS", "UI"],
    is_featured: false,
    is_show: true,
  }
]; 