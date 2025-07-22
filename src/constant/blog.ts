import { BlogItemProps } from "@/types/blog";

// 英文博客列表
export const BLOG_ITEMS_EN: BlogItemProps[] = [
  {
    title: "How to make a simple SaaS project",
    slug: "how-to-make-a-simple-saas-project",
    description: "Use Next.js, TypeScript, Supabase, Stripe to build a simple SaaS project",
    updated_at: new Date("2025-06-01"),
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "How to custom domain for your Vercel project",
    slug: "how-to-custom-domain-for-your-vercel-project",
    description: "This blog will tell you if you buy domain from another provider, how to custom domain for your Vercel project",
    updated_at: new Date("2025-06-04"),
    tags: ["Vercel", "Cloudflare", "Domain"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "Why Tailwind CSS Feels So Right",
    slug: "why-tailwind-css-feels-so-right",
    description: "This blog will tell you why Tailwind CSS feels so right",
    updated_at: new Date("2025-06-19"),
    tags: ["Tailwind CSS", "CSS", "UI"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "How to Use 3D Models in Your Project",
    slug: "how-to-use-3dmodel-in-project",
    description: "A step-by-step guide on how to integrate 3D models (.glb files) into your web project using Three.js and React Three Fiber",
    updated_at: new Date("2025-01-27"),
    tags: ["Three.js", "React Three Fiber", "3D", "WebGL"],
    is_featured: false,
    is_show: true,
  }
];

// 中文博客列表
export const BLOG_ITEMS_ZH: BlogItemProps[] = [
  {
    title: "如何制作一个简单的SaaS项目",
    slug: "how-to-make-a-simple-saas-project",
    description: "使用Next.js、TypeScript、Supabase、Stripe构建一个简单的SaaS项目",
    updated_at: new Date("2025-06-01"),
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "如何为你的Vercel项目设置自定义域名",
    slug: "how-to-custom-domain-for-your-vercel-project",
    description: "这篇博客将告诉你如果你从其他提供商购买域名，如何为你的Vercel项目设置自定义域名",
    updated_at: new Date("2025-06-04"),
    tags: ["Vercel", "Cloudflare", "Domain"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "为什么Tailwind CSS感觉如此合适",
    slug: "why-tailwind-css-feels-so-right",
    description: "这篇博客将告诉你为什么Tailwind CSS感觉如此合适",
    updated_at: new Date("2025-06-19"),
    tags: ["Tailwind CSS", "CSS", "UI"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "如何在项目中使用3D模型",
    slug: "how-to-use-3dmodel-in-project",
    description: "一步步教你如何使用Three.js和React Three Fiber在网页项目中集成3D模型(.glb文件)",
    updated_at: new Date("2025-01-27"),
    tags: ["Three.js", "React Three Fiber", "3D", "WebGL"],
    is_featured: false,
    is_show: true,
  }
];

// 为了向后兼容，保留原来的BLOG_ITEMS
export const BLOG_ITEMS = BLOG_ITEMS_EN; 