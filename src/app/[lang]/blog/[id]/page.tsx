'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import Link from 'next/link';
import { use } from 'react';

// 博客详情数据示例
const blogDetails = {
  'nextjs-i18n': {
    zh: {
      title: 'Next.js 国际化实现方案',
      content: `
        <h2>引言</h2>
        <p>在当今全球化的互联网环境中，多语言支持已经成为现代Web应用的基本需求。Next.js作为React的全栈框架，提供了强大的国际化支持。</p>
        
        <h2>实现方案</h2>
        <p>我们采用了路由级别的国际化方案，通过动态路由 <code>[lang]</code> 来实现不同语言版本的页面。</p>
        
        <h3>1. 路由结构</h3>
        <pre><code>/zh/blog/xxx  # 中文博客
/en/blog/xxx  # 英文博客</code></pre>
        
        <h3>2. 翻译管理</h3>
        <p>使用TypeScript接口确保翻译内容的类型安全，集中管理所有翻译键值对。</p>
        
        <h3>3. 语言切换</h3>
        <p>通过Context API管理全局语言状态，支持用户偏好记忆和自动语言检测。</p>
        
        <h2>最佳实践</h2>
        <ul>
          <li>保持中英文内容的一致性</li>
          <li>使用有意义的翻译键名</li>
          <li>考虑SEO优化</li>
          <li>提供良好的用户体验</li>
        </ul>
      `,
      date: '2024-01-15',
      author: 'Frank Fan',
      tags: ['Next.js', '国际化', '前端', 'React'],
      readTime: '8分钟'
    },
    en: {
      title: 'Next.js Internationalization Implementation',
      content: `
        <h2>Introduction</h2>
        <p>In today's globalized internet environment, multi-language support has become a basic requirement for modern web applications. Next.js, as a full-stack React framework, provides powerful internationalization support.</p>
        
        <h2>Implementation Strategy</h2>
        <p>We adopted a route-level internationalization approach, using dynamic routes <code>[lang]</code> to implement pages in different language versions.</p>
        
        <h3>1. Route Structure</h3>
        <pre><code>/zh/blog/xxx  # Chinese blog
/en/blog/xxx  # English blog</code></pre>
        
        <h3>2. Translation Management</h3>
        <p>Use TypeScript interfaces to ensure type safety of translation content and centrally manage all translation key-value pairs.</p>
        
        <h3>3. Language Switching</h3>
        <p>Manage global language state through Context API, supporting user preference memory and automatic language detection.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Maintain consistency between Chinese and English content</li>
          <li>Use meaningful translation key names</li>
          <li>Consider SEO optimization</li>
          <li>Provide good user experience</li>
        </ul>
      `,
      date: '2024-01-15',
      author: 'Frank Fan',
      tags: ['Next.js', 'Internationalization', 'Frontend', 'React'],
      readTime: '8 min read'
    }
  },
  'react-performance': {
    zh: {
      title: 'React 性能优化实战',
      content: `
        <h2>性能优化的重要性</h2>
        <p>在大型React应用中，性能优化是确保良好用户体验的关键因素。本文将分享一些实用的性能优化技巧。</p>
        
        <h2>优化策略</h2>
        <h3>1. 组件优化</h3>
        <p>使用React.memo、useMemo和useCallback来避免不必要的重新渲染。</p>
        
        <h3>2. 状态管理</h3>
        <p>合理使用状态管理库，避免状态更新导致的级联重新渲染。</p>
        
        <h3>3. 代码分割</h3>
        <p>使用React.lazy和Suspense实现代码分割，减少初始加载时间。</p>
      `,
      date: '2024-01-10',
      author: 'Frank Fan',
      tags: ['React', '性能优化', '前端'],
      readTime: '12分钟'
    },
    en: {
      title: 'React Performance Optimization in Practice',
      content: `
        <h2>Importance of Performance Optimization</h2>
        <p>In large React applications, performance optimization is a key factor in ensuring good user experience. This article will share some practical performance optimization techniques.</p>
        
        <h2>Optimization Strategies</h2>
        <h3>1. Component Optimization</h3>
        <p>Use React.memo, useMemo, and useCallback to avoid unnecessary re-renders.</p>
        
        <h3>2. State Management</h3>
        <p>Properly use state management libraries to avoid cascading re-renders caused by state updates.</p>
        
        <h3>3. Code Splitting</h3>
        <p>Use React.lazy and Suspense to implement code splitting and reduce initial loading time.</p>
      `,
      date: '2024-01-10',
      author: 'Frank Fan',
      tags: ['React', 'Performance', 'Frontend'],
      readTime: '12 min read'
    }
  }
};

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: Language; id: string }>;
}) {
  const { t, language } = useLanguage();
  const { lang, id } = use(params);
  
  const blogData = blogDetails[id as keyof typeof blogDetails];
  
  if (!blogData) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'zh' ? '博客文章未找到' : 'Blog post not found'}
          </h1>
          <Link
            href={`/${language}/blog`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {language === 'zh' ? '返回博客列表' : 'Back to blog list'}
          </Link>
        </div>
      </div>
    );
  }

  const post = blogData[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Blog */}
      <div className="mb-8">
        <Link
          href={`/${language}/blog`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'zh' ? '返回博客列表' : 'Back to blog list'}
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
} 