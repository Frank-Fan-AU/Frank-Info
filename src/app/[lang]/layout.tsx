import { Header } from '@/components/Header';

export default function LangLayout({
  children, 
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 