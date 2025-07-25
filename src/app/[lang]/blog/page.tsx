'use client';

import {useI18n } from '@/contexts/i18n-context';
import Link from 'next/link';
import { BLOG_ITEMS_EN, BLOG_ITEMS_ZH } from '@/constant/blog';
import { useState, useMemo } from 'react';

export default function BlogPage() {
  const { language } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  
  const posts = useMemo(() => {
    // 根据语言选择对应的博客列表
    const allPosts = language === 'zh' ? BLOG_ITEMS_ZH : BLOG_ITEMS_EN;
    const filteredPosts = allPosts.filter(post => post.is_show);
    
    // 先按日期排序，最近的排在前面
    const sortedPosts = filteredPosts.sort((a, b) => 
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
    
    // 如果有搜索查询，再进行过滤
    if (!searchQuery.trim()) return sortedPosts;
    
    return sortedPosts.filter(post => {
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      const tags = post.tags.join(' ').toLowerCase();
      const query = searchQuery.toLowerCase();
      
      return title.includes(query) || 
             description.includes(query) || 
             tags.includes(query);
    });
  }, [searchQuery, language]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'zh' ? '技术博客' : 'Tech Blog'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'zh' 
            ? '分享我的技术心得和学习经验' 
            : 'Sharing my technical insights and learning experiences'
          }
        </p>
        
        {/* Search Box */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={language === 'zh' ? '搜索博客...' : 'Search blogs...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.updated_at.toLocaleDateString('en-CA')}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.is_featured ? 'Featured' : 'Blog Post'}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.description}
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
                href={`/${language}/blog/${post.slug}`}
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