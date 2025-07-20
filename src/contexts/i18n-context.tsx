'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export type Lang = 'en' | 'zh';

interface I18nContextProps {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Lang>('en');

  useEffect(() => {
    // 从URL中获取语言
    const urlLang = pathname?.split('/')[1] as Lang;
    if (urlLang === 'zh' || urlLang === 'en') {
      setLanguageState(urlLang);
      localStorage.setItem('lang', urlLang);
    } else {
      // 如果URL中没有语言，则从localStorage或浏览器语言获取
      let storedLang = localStorage.getItem('lang') as Lang | null;
      if (!storedLang) {
        const browserLang = navigator.language;
        // 默认使用英文，除非浏览器语言明确是中文
        storedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
        localStorage.setItem('lang', storedLang);
      }
      setLanguageState(storedLang);
    }
  }, [pathname]);

  const setLanguage = (newLang: Lang) => {
    setLanguageState(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};