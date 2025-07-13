import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Shield,
  Palette,
  Cpu
} from 'lucide-react';
import TechCard from './TechCard';

const technologies = [
  { icon: Code2, name: 'React', description: '现代前端框架，构建用户界面' },
  { icon: Globe, name: 'Next.js', description: '全栈React框架，服务端渲染' },
  { icon: Database, name: 'TypeScript', description: '类型安全的JavaScript超集' },
  { icon: Smartphone, name: 'Mobile Dev', description: '移动端应用开发' },
  { icon: Zap, name: 'Performance', description: '性能优化和最佳实践' },
  { icon: Shield, name: 'Security', description: '网络安全和防护' },
  { icon: Palette, name: 'UI/UX', description: '用户界面和体验设计' },
  { icon: Cpu, name: 'Backend', description: '后端服务和API开发' },
];

export default function TechStack() {
  return (
    <div className="w-full space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          What can I do ?
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          In Frontend, I can do well in
        </h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4"> 
          In Backend, I can do well in
        </h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4"> 
          I also have experience in these tools
        </h3>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 