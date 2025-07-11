'use client';

import { use } from 'react';
import { Lang, useI18n } from '@/contexts/i18n-context';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import Hero from '@/components/Hero';

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
    </div>
  );
} 