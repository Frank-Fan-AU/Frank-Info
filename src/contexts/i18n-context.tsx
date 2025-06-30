'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'zh';

interface I18nContextProps {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Lang>('en');

  useEffect(() => {
    let storedLang = localStorage.getItem('lang') as Lang | null;
    if (!storedLang) {
      const browserLang = navigator.language;
      storedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
      localStorage.setItem('lang', storedLang);
    }
    setLanguageState(storedLang);
  }, []);

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