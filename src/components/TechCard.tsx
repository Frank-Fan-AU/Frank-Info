import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  description?: string;
  className?: string;
}

export default function TechCard({ icon: Icon, name, description, className = '' }: TechCardProps) {
  return (
    <div className={`relative flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group ${className}`}>
      <div className="flex items-center justify-center w-6 h-6">
        <Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {name}
      </span>
      
      {description && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
          {description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
} 