'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { use } from 'react';

// 技能数据
const skillsData = {
  zh: {
    currentSkills: [
      {
        category: '前端开发',
        skills: [
          { name: 'React', level: 90, description: '熟练使用React Hooks、Context API、性能优化' },
          { name: 'Next.js', level: 85, description: 'App Router、SSR/SSG、API Routes' },
          { name: 'TypeScript', level: 80, description: '类型安全、接口设计、高级类型' },
          { name: 'Tailwind CSS', level: 85, description: '响应式设计、组件化样式' },
        ]
      },
      {
        category: '后端开发',
        skills: [
          { name: 'Node.js', level: 75, description: 'Express框架、中间件开发' },
          { name: 'PostgreSQL', level: 70, description: '数据库设计、查询优化' },
          { name: 'RESTful API', level: 80, description: 'API设计、认证授权' },
        ]
      },
      {
        category: '工具和部署',
        skills: [
          { name: 'Git', level: 85, description: '版本控制、分支管理' },
          { name: 'Docker', level: 60, description: '容器化部署' },
          { name: 'Vercel', level: 80, description: '前端部署、CI/CD' },
        ]
      }
    ],
    learningRoadmap: [
      {
        skill: 'GraphQL',
        progress: 30,
        description: '学习GraphQL API设计和Apollo Client',
        target: '2024年6月',
        resources: ['官方文档', 'Apollo教程', '实战项目']
      },
      {
        skill: 'AWS',
        progress: 20,
        description: '云服务部署和架构设计',
        target: '2024年8月',
        resources: ['AWS认证', '实战项目', '最佳实践']
      },
      {
        skill: 'Python',
        progress: 40,
        description: '数据分析和机器学习基础',
        target: '2024年10月',
        resources: ['Python基础', 'Pandas', '机器学习入门']
      }
    ]
  },
  en: {
    currentSkills: [
      {
        category: 'Frontend Development',
        skills: [
          { name: 'React', level: 90, description: 'Proficient with React Hooks, Context API, performance optimization' },
          { name: 'Next.js', level: 85, description: 'App Router, SSR/SSG, API Routes' },
          { name: 'TypeScript', level: 80, description: 'Type safety, interface design, advanced types' },
          { name: 'Tailwind CSS', level: 85, description: 'Responsive design, component styling' },
        ]
      },
      {
        category: 'Backend Development',
        skills: [
          { name: 'Node.js', level: 75, description: 'Express framework, middleware development' },
          { name: 'PostgreSQL', level: 70, description: 'Database design, query optimization' },
          { name: 'RESTful API', level: 80, description: 'API design, authentication & authorization' },
        ]
      },
      {
        category: 'Tools & Deployment',
        skills: [
          { name: 'Git', level: 85, description: 'Version control, branch management' },
          { name: 'Docker', level: 60, description: 'Containerization deployment' },
          { name: 'Vercel', level: 80, description: 'Frontend deployment, CI/CD' },
        ]
      }
    ],
    learningRoadmap: [
      {
        skill: 'GraphQL',
        progress: 30,
        description: 'Learn GraphQL API design and Apollo Client',
        target: 'June 2024',
        resources: ['Official docs', 'Apollo tutorials', 'Practical projects']
      },
      {
        skill: 'AWS',
        progress: 20,
        description: 'Cloud service deployment and architecture design',
        target: 'August 2024',
        resources: ['AWS certification', 'Practical projects', 'Best practices']
      },
      {
        skill: 'Python',
        progress: 40,
        description: 'Data analysis and machine learning basics',
        target: 'October 2024',
        resources: ['Python basics', 'Pandas', 'ML introduction']
      }
    ]
  }
};

export default function SkillsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { t, language } = useLanguage();
  const { lang } = use(params);
  const data = skillsData[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'zh' ? '技能与学习' : 'Skills & Learning'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {language === 'zh' 
            ? '我的技术栈和学习计划' 
            : 'My tech stack and learning roadmap'
          }
        </p>
      </div>

      {/* Current Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {language === 'zh' ? '当前技能' : 'Current Skills'}
        </h2>
        
        <div className="space-y-8">
          {data.currentSkills.map((category) => (
            <div key={category.category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Roadmap */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {language === 'zh' ? '学习路线图' : 'Learning Roadmap'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.learningRoadmap.map((item) => (
            <div key={item.skill} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.skill}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.progress}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {item.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>{language === 'zh' ? '目标时间' : 'Target'}:</strong> {item.target}
                </p>
                
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <strong>{language === 'zh' ? '学习资源' : 'Resources'}:</strong>
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.resources.map((resource) => (
                      <span
                        key={resource}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 