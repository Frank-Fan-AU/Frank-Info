import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import LearnMore from '@/components/LearnMore';
import Experience from '@/components/Experience';
import Project from '@/components/Project';

export default function HomePage() {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="mt-8 flex justify-center">
          <LearnMore />
        </div>
      <div className="mt-16">
        <TechStack />
      </div>
      {/* <div className="mt-16">
        <Project />
      </div> */}
      <div className="mt-16">
        <Experience />
      </div>
    </div>
  );
} 