import React from 'react';
import {FaJava } from 'react-icons/fa';
import {
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiSpring,
  SiAwslambda,
  SiAmazons3,
  SiSharp,
  SiDotnet,
  SiRedis,
  SiGit,
  SiExpress,
  SiPostgresql,
  SiGithubactions
} from 'react-icons/si';
import { LiaAws } from 'react-icons/lia';
import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';

// 自定义SVG图标组件
const SvgIcon = ({ src, className }: { src: string; className?: string }) => (
  <Image src={src} alt="" width={20} height={20} className={className} />
);

// 技术名到icon的映射
const techIcons: Record<string, React.ReactNode> = {
  'React': <SiReact className="w-5 h-5 text-sky-500" />,
  'React Native': <SiReact className="w-5 h-5 text-sky-500" />,
  'Next.js': <SiNextdotjs className="w-5 h-5 text-black dark:text-white" />,
  'JavaScript': <SiJavascript className="w-5 h-5 text-yellow-400" />,
  'TypeScript': <SiTypescript className="w-5 h-5 text-blue-600" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-cyan-500" />,
  'Vue': <SiVuedotjs className="w-5 h-5 text-green-500" />,
  'Jest': <SiJest className="w-5 h-5 text-red-600" />,
  'Playwright': <SvgIcon src="/icons/Playwright.svg" className="w-5 h-5" />,
  'Webpack': <SiWebpack className="w-5 h-5 text-blue-600" />,
  'Vite': <SiVite className="w-5 h-5 text-purple-500" />,
  'Node.js': <SiNodedotjs className="w-5 h-5 text-green-600" />,
  'Express.js': <SiExpress className="w-5 h-5" />,
  'AWS Lambda': <SiAwslambda className="w-5 h-5 text-orange-500" />,
  'Java': <FaJava className="w-5 h-5 text-red-600" />,
  'Spring Boot': <SiSpring className="w-5 h-5 text-green-600" />,
  'C#': <SiSharp className="w-5 h-5 text-purple-600" />,
  'ASP.NET': <SiDotnet className="w-5 h-5 text-purple-600" />,
  'MySQL': <SiMysql className="w-5 h-5 text-blue-600" />,
  'MongoDB': <SiMongodb className="w-5 h-5 text-green-600" />,
  'PostgreSQL': <SiPostgresql className="w-5 h-5" />,
  'Redis': <SiRedis className="w-5 h-5 text-red-600" />,
  'AWS S3': <SiAmazons3 className="w-5 h-5 text-orange-500" />,
  'Git': <SiGit className="w-5 h-5 text-orange-600" />,
  'Jenkins': <SiJenkins className="w-5 h-5 text-red-600" />,
  'Docker': <SiDocker className="w-5 h-5 text-blue-500" />,
  'Kubernetes': <SiKubernetes className="w-5 h-5 text-blue-600" />,
  'CI/CD': <SiGithubactions className="w-5 h-5 text-purple-600" />,
  'AWS': <LiaAws className="w-5 h-5 text-yellow-500" />,
  // 新增的SVG图标
  'shadcn/ui': <SvgIcon src="/icons/ico-shadcn.svg" className="w-5 h-5" />,
  'Contentful CMS': <SvgIcon src="/icons/contentful.svg" className="w-5 h-5" />,
  'AWS Amplify': <SvgIcon src="/icons/amplify.svg" className="w-5 h-5" />,
  'OpenAI API': <SvgIcon src="/icons/openai.svg" className="w-5 h-5" />,
  'MDX': <SvgIcon src="/icons/mdx.svg" className="w-5 h-5" />,
  'Three.js': <SvgIcon src="/icons/Threejs-logo.svg" className="w-5 h-5" />,
  'Vercel': <SvgIcon src="/icons/Vercel.svg" className="w-5 h-5" />,
  'Stripe': <SvgIcon src="/icons/stripe.svg" className="w-5 h-5" />,
};

interface TechIconProps {
  tech: string;
  ifShort?: boolean;
  description?: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ tech, ifShort = false, description, className = '' }) => {
  const icon = techIcons[tech] || <span className="w-5 h-5 text-gray-400">?</span>;
  // 悬浮内容
  const tooltip = description || tech;

  if (ifShort) {
    // 只显示icon，悬浮显示技术名
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className={`inline-flex items-center justify-center ${className}`}>
              {icon}
            </span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              sideOffset={1}
            >
              {tech}
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }
  
  // 详细模式，icon+技术名，悬浮显示description
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className={`inline-flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded ${className}`}>
            {icon}
            <span className="text-sm text-gray-800 dark:text-gray-200">{tech}</span>
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={1}
          >
            {tooltip}
            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TechIcon; 