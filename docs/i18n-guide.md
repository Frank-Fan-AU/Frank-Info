# 国际化 (i18n) 使用指南

## 概述

本项目使用 Next.js App Router 实现了完整的中英文切换功能，支持：

- 路由级别的语言切换 (`/zh/`, `/en/`)
- 自动语言检测和记忆用户偏好
- 类型安全的翻译系统
- SEO 友好的 URL 结构

## 项目结构

```
src/
├── app/
│   ├── [lang]/           # 语言路由
│   │   ├── layout.tsx    # 语言布局
│   │   ├── page.tsx      # 首页
│   │   ├── blog/         # 博客页面
│   │   ├── projects/     # 项目页面
│   │   └── ...
│   └── page.tsx          # 根页面（重定向）
├── components/
│   ├── Header.tsx        # 头部导航
│   └── LanguageSwitcher.tsx  # 语言切换器
├── contexts/
│   └── LanguageContext.tsx   # 语言上下文
└── lib/
    └── translations.ts   # 翻译内容管理
```

## 使用方法

### 1. 在组件中使用翻译

```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
}
```

### 2. 添加新的翻译内容

在 `src/lib/translations.ts` 中添加新的翻译键：

```typescript
export interface TranslationKeys {
  // 现有翻译键...
  'new.key': string;
}

export const translations: Record<Language, TranslationKeys> = {
  zh: {
    // 现有翻译...
    'new.key': '新的中文内容',
  },
  en: {
    // 现有翻译...
    'new.key': 'New English Content',
  },
};
```

### 3. 创建新的页面

在 `src/app/[lang]/` 下创建新页面：

```tsx
// src/app/[lang]/new-page/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function NewPage({
  params,
}: {
  params: { lang: Language };
}) {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t('new.page.title')}</h1>
    </div>
  );
}
```

### 4. 博客内容管理

对于博客内容，建议使用以下结构：

```typescript
// 博客数据结构
interface BlogPost {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  excerpt: Record<Language, string>;
  date: string;
  tags: Record<Language, string[]>;
}

// 示例
const blogPosts: BlogPost[] = [
  {
    id: 'nextjs-i18n',
    title: {
      zh: 'Next.js 国际化实现方案',
      en: 'Next.js Internationalization Implementation'
    },
    content: {
      zh: '中文博客内容...',
      en: 'English blog content...'
    },
    excerpt: {
      zh: '中文摘要...',
      en: 'English excerpt...'
    },
    date: '2024-01-15',
    tags: {
      zh: ['Next.js', '国际化', '前端'],
      en: ['Next.js', 'Internationalization', 'Frontend']
    }
  }
];
```

## 路由规则

- `/` → 重定向到 `/zh`（默认语言）
- `/zh` → 中文首页
- `/en` → 英文首页
- `/zh/blog` → 中文博客列表
- `/en/blog` → 英文博客列表
- `/zh/blog/[id]` → 中文博客详情
- `/en/blog/[id]` → 英文博客详情

## 语言切换逻辑

1. **自动检测**：首次访问时根据浏览器语言自动选择
2. **用户偏好**：使用 localStorage 记住用户的语言选择
3. **URL 同步**：切换语言时自动更新 URL
4. **SEO 优化**：每个语言版本都有独立的 URL

## 最佳实践

### 1. 内容管理
- 保持中英文内容的一致性
- 使用有意义的翻译键名
- 定期更新翻译内容

### 2. 性能优化
- 翻译内容按需加载
- 使用 TypeScript 确保类型安全
- 避免在客户端进行大量翻译计算

### 3. SEO 考虑
- 为每个语言版本设置正确的 `lang` 属性
- 使用 `hreflang` 标签关联不同语言版本
- 确保每个语言版本都有完整的内容

### 4. 用户体验
- 提供明显的语言切换按钮
- 记住用户的语言偏好
- 在切换语言时保持用户的位置

## 扩展功能

### 1. 动态内容加载
```typescript
// 按需加载翻译内容
const loadTranslations = async (lang: Language) => {
  const translations = await import(`@/locales/${lang}.json`);
  return translations.default;
};
```

### 2. 格式化支持
```typescript
// 支持参数替换
const t = (key: string, params: Record<string, string>) => {
  let text = getTranslation(language, key);
  Object.entries(params).forEach(([key, value]) => {
    text = text.replace(`{${key}}`, value);
  });
  return text;
};
```

### 3. 复数形式支持
```typescript
// 支持复数形式
const t = (key: string, count: number) => {
  const baseKey = count === 1 ? key : `${key}_plural`;
  return getTranslation(language, baseKey);
};
```

## 故障排除

### 常见问题

1. **翻译键未找到**
   - 检查翻译键是否在 `TranslationKeys` 接口中定义
   - 确保中英文都有对应的翻译内容

2. **路由不匹配**
   - 确保页面组件在正确的语言路由下
   - 检查 `params.lang` 参数的使用

3. **语言切换不生效**
   - 检查 `LanguageProvider` 是否正确包裹
   - 确认 `useLanguage` hook 的使用

### 调试技巧

```typescript
// 在开发环境中启用翻译调试
const t = (key: keyof TranslationKeys): string => {
  const translation = getTranslation(language, key);
  if (process.env.NODE_ENV === 'development' && translation === key) {
    console.warn(`Translation key not found: ${key}`);
  }
  return translation;
};
``` 