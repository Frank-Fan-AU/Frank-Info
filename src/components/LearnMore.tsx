'use client';

import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LearnMoreProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function LearnMore({ 
  text = "Learn More", 
  className = '',
  onClick 
}: LearnMoreProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100;
      
      // 如果滚动到顶部，显示组件
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        // 当滚动超过50%时隐藏，向上滚动时显示
        if (scrollPercentage > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(currentScrollY < lastScrollY);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 group ${className}`}
      >
        <span className="text-sm font-medium">{text}</span>
        <ChevronDown className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
      </button>
    </div>
  );
} 