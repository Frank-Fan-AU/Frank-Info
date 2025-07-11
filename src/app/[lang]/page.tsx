'use client';

import { use } from 'react';
import { Lang, useI18n } from '@/contexts/i18n-context';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

export default function HomePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { language, setLanguage } = useI18n();  
  const { t } = useTranslation();
  const { lang } = use(params);

  // 确保URL语言参数与当前语言状态一致
  if (lang !== language) {
    // 这里可以添加重定向逻辑
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 2">
      {/* Hero Section */}
      <section className="text-center relative overflow-hidden">
        
        {/* Main content */}
        <div className="relative">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hello, welcome to discover
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              what can I do and what I'm learning
            </span>
          </h1>
        </div>
      </section>

      <section className="flex items-center justify-between py-4 px-4">
        {/* Left side - Avatar */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <Image 
            src="/zj-avator.jpg" 
            alt="Frank" 
            width={300} 
            height={300} 
            className="rounded-full shadow-lg mb-6"
          />
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* 小红书 */}
            <a href="https://www.xiaohongshu.com/user/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side - Introduction */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hi, I'm Frank</h2>
          <p className="text-2xl mb-4">👋</p>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Based in Adelaide, Australia 🇦🇺
            </p>
            <p className="text-lg leading-relaxed font-medium text-blue-600">
              Seeking new job opportunities
            </p>
            <p className="text-lg leading-relaxed">
              Fullstack Software Engineer especially in Frontend side, with a passion for working on interesting projects and exploring new technologies. I work with TypeScript and specialize in all-things web. I thrive on collaborating with teams to deliver efficient, scalable, and visually appealing web applications.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-medium">Work Rights:</span> Australian temporary visa with no restrictions (e.g., doctoral student visa).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 