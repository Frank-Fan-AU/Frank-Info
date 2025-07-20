import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export default function LangLayout({
  children, 
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:px-20 py-2 flex flex-col">
      <Header />
      <main className="pt-16 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
} 