import { ChevronDown } from 'lucide-react';

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
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 group ${className}`}
    >
      <span className="text-sm font-medium">{text}</span>
      <ChevronDown className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
    </button>
  );
} 