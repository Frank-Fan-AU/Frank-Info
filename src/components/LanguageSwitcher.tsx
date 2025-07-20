'use client';

import useTranslation from '@/hooks/useTranslation';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const {language, setLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    
    // 更新浏览器URL
    const currentPath = pathname;
    const pathWithoutLang = currentPath.replace(/^\/(zh|en)/, '');
    const newPath = `/${newLanguage}${pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      title={language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
    >
      <span className="text-sm font-medium">
        {language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
      </span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </button>
  );
} 