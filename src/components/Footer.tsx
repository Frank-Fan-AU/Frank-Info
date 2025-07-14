'use client';

import { useI18n } from '@/contexts/i18n-context';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const { language } = useI18n();
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/frankfan',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/frankfan',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/frankfan',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:frank@example.com',
      icon: Mail,
    },
  ];

  const footerLinks = [
    { name: t.nav.home, href: `/${language}` },
    { name: t.nav.blog, href: `/${language}/blog` },
    { name: t.nav.skills, href: `/${language}/skills` },
    { name: t.nav.about, href: `/${language}/about` },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Frank Fan
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              {language === 'zh' 
                ? '全栈开发者，专注于前端技术，热爱创造优秀的用户体验。'
                : 'Full-stack developer specializing in frontend technologies, passionate about creating exceptional user experiences.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {language === 'zh' ? '快速链接' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {language === 'zh' ? '社交媒体' : 'Social Media'}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} Frank Fan. {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href={`/${language}/privacy`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link
                href={`/${language}/terms`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {language === 'zh' ? '服务条款' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 