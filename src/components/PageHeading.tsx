interface PageHeadingProps {
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  language?: 'en' | 'zh';
}

export default function PageHeading({ title, description, language = 'en' }: PageHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title[language]}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description[language]}
      </p>
    </div>
  );
} 