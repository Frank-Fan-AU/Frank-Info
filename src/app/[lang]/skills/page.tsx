'use client';


import {  useI18n } from '@/contexts/i18n-context';

// 技能数据


export default function SkillsPage() {
  const { language } = useI18n();


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'zh' ? '技能与学习' : 'Skills & Learning'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {language === 'zh' 
            ? '我的技术栈和学习计划' 
            : 'My tech stack and learning roadmap'
          }
        </p>
      </div>
    </div>
  );
} 