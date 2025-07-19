'use client';

import { PROJECT_ITEMS_EN, PROJECT_ITEMS_ZH } from '@/constant/project';
import { useI18n } from '@/contexts/i18n-context';
import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
    const { language } = useI18n();
    const [searchQuery, setSearchQuery] = useState('');
    
    const projects = useMemo(() => {
        const allProjects = language === 'zh' ? PROJECT_ITEMS_ZH : PROJECT_ITEMS_EN;
        const filteredProjects = allProjects.filter(project => project.is_show);
        
        // 先按日期排序，最近的排在前面
        const sortedProjects = filteredProjects.sort((a, b) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        
        // 如果有搜索查询，再进行过滤
        if (!searchQuery.trim()) return sortedProjects;
        
        return sortedProjects.filter(project => {
            const title = project.title.toLowerCase();
            const description = project.description.toLowerCase();
            const stacks = project.stacks.join(' ').toLowerCase();
            const query = searchQuery.toLowerCase();
            
            return title.includes(query) || 
                   description.includes(query) || 
                   stacks.includes(query);
        });
    }, [searchQuery, language]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {language === 'zh' ? '项目展示' : 'Projects'}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {language === 'zh' 
                        ? '展示我的技术项目和实践经验' 
                        : 'Showcasing my technical projects and practical experience'
                    }
                </p>
                
                {/* Search Box */}
                <div className="max-w-md mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={language === 'zh' ? '搜索项目...' : 'Search projects...'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <article
                        key={project.slug}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {project.updated_at.toLocaleDateString('en-CA')}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {project.is_featured ? 'Featured' : 'Project'}
                                </span>
                            </div>
                            
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {project.title}
                            </h2>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stacks.map((stack) => (
                                    <span
                                        key={stack}
                                        className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                                    >
                                        {stack}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-2">
                                {project.link_demo && (
                                    <Link
                                        href={project.link_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                                    >
                                        {language === 'zh' ? '查看演示' : 'Demo'}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                )}
                                {project.link_github && (
                                    <Link
                                        href={project.link_github}
                        target="_blank"
                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium"
                                    >
                                        GitHub
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        {language === 'zh' ? '暂无项目' : 'No projects yet'}
                    </p>
                </div>
            )}
        </div>
    );
}