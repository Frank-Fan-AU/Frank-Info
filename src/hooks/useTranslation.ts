import { Lang, useI18n } from '../contexts/i18n-context';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

type Translations = typeof en;

export default function useTranslation(): {
  language: Lang;
  t: Translations;
  setLanguage: (lang: Lang) => void;
} {
  const { language, setLanguage } = useI18n();
  const t = language === 'zh' ? zh : en;

  return { language, t, setLanguage };
}