'use client';

import { useI18n } from '@/contexts/i18n-context';
import { LanguageSwitcher } from './LanguageSwitcher';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

export function Header() {
  const { language } = useI18n();
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // 如果滚动到顶部，显示所有元素
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        // 向下滚动时隐藏，向上滚动时显示
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { key: t.nav.home, href: `/${language}` },
    { key: t.nav.blog, href: `/${language}/blog` },
    { key: t.nav.projects, href: `/${language}/projects` },
    { key: t.nav.skills, href: `/${language}/skills` },
    { key: t.nav.demo, href: `/${language}/demo` },
    { key: t.nav.about, href: `/${language}/about` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <Link href={`/${language}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Frank Fan
              </span>
            </Link>
          </div>

          {/* Navigation */}
         <Navbar />
          {/* Language Switcher */}
          <div className={`flex items-center space-x-4 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 