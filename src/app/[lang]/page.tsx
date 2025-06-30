'use client';

import { use } from 'react';
import { Lang, useI18n } from '@/contexts/i18n-context';
import useTranslation from '@/hooks/useTranslation';

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          title
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          subtitle 
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          desc
        </p>
      </section>

    </div>
  );
} 