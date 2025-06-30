'use client';


import { Lang, useI18n } from '@/contexts/i18n-context';
import Link from 'next/link';
import { use } from 'react';

// 博客数据示例
const blogPosts = {
  zh: [
    {
      id: 'nextjs-i18n',
      title: 'Next.js 国际化实现方案',
      excerpt: '详细介绍如何在 Next.js 项目中实现多语言支持，包括路由策略、内容管理和SEO优化。',
      date: '2024-01-15',
      tags: ['Next.js', '国际化', '前端'],
      readTime: '8分钟'
    },
    {
      id: 'react-performance',
      title: 'React 性能优化实战',
      excerpt: '分享在实际项目中遇到的性能问题和解决方案，包括组件优化、状态管理和渲染优化。',
      date: '2024-01-10',
      tags: ['React', '性能优化', '前端'],
      readTime: '12分钟'
    }
  ],
  en: [
    {
      id: 'nextjs-i18n',
      title: 'Next.js Internationalization Implementation',
      excerpt: 'A comprehensive guide on implementing multi-language support in Next.js projects, including routing strategies, content management, and SEO optimization.',
      date: '2024-01-15',
      tags: ['Next.js', 'Internationalization', 'Frontend'],
      readTime: '8 min read'
    },
    {
      id: 'react-performance',
      title: 'React Performance Optimization in Practice',
      excerpt: 'Sharing real-world performance issues and solutions encountered in projects, including component optimization, state management, and rendering optimization.',
      date: '2024-01-10',
      tags: ['React', 'Performance', 'Frontend'],
      readTime: '12 min read'
    }
  ]
};

export default function BlogPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { language } = useI18n();
  const { lang } = use(params);
  const posts = blogPosts[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'zh' ? '技术博客' : 'Tech Blog'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {language === 'zh' 
            ? '分享我的技术心得和学习经验' 
            : 'Sharing my technical insights and learning experiences'
          }
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/${language}/blog/${post.id}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                {language === 'zh' ? '阅读全文' : 'Read More'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {language === 'zh' ? '暂无博客文章' : 'No blog posts yet'}
          </p>
        </div>
      )}
    </div>
  );
} 