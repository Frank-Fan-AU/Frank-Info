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

const FrontendTechnologies = [
  { icon: Code2, name: 'React', description: '' },
  { icon: Globe, name: 'Next.js', description: '' },
  { icon: Database, name: 'JavaScript', description: '' },
  { icon: Smartphone, name: 'TypeScript', description: '' },
  { icon: Smartphone, name: 'React Native', description: '' },
  { icon: Smartphone, name: 'Tailwind CSS', description: '' },
  { icon: Smartphone, name: 'Vue', description: '' },
  { icon: Smartphone, name: 'Jest', description: '' },
  { icon: Smartphone, name: 'Playwright', description: '' },
  { icon: Smartphone, name: 'Webpack', description: '' },
  { icon: Smartphone, name: 'Vite', description: '' }

];

const BackendTechnologies = [
  { icon: Code2, name: 'Node.js', description: '' },
  { icon: Globe, name: 'Express', description: '' },
  { icon: Smartphone, name: 'AWS Lambda', description: '' },
  { icon: Database, name: 'Java', description: '' },
  { icon: Smartphone, name: 'Spring Boot', description: '' },
  { icon: Smartphone, name: 'C#', description: '' },
  { icon: Smartphone, name: 'ASP.NET', description: '' },
  { icon: Smartphone, name: 'MySQL', description: '' },
  { icon: Smartphone, name: 'MongoDB', description: '' },
  { icon: Smartphone, name: 'PostgreSQL', description: '' },
  { icon: Smartphone, name: 'Redis', description: '' },
  { icon: Smartphone, name: 'AWS S3', description: '' }
]

const OtherTechnologies = [
  { icon: Smartphone, name: 'Git', description: '' },
  { icon: Smartphone, name: 'Jenkins', description: '' },
  { icon: Smartphone, name: 'Docker', description: '' },
  { icon: Smartphone, name: 'Kubernetes', description: '' },
  { icon: Smartphone, name: 'CI/CD', description: '' },
  { icon: Smartphone, name: 'AWS', description: '' },
  { icon: Smartphone, name: 'Azure', description: '' },
]

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
          {FrontendTechnologies.map((tech, index) => (
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
          {BackendTechnologies.map((tech, index) => (
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
          {OtherTechnologies.map((tech, index) => (
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