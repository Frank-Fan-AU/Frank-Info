'use client';

import { useI18n } from '@/contexts/i18n-context';

export default function Experience() {
    const { language } = useI18n();
    
    return (
        <div className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                What&apos;s my experience?
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
                I have a degree in Computer Science and Technology from Hainan University
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Then I have been working as a software development engineer at China Sports Lottery Technology Development Co., Ltd. for four years.
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Arrive in Australia in March 2025 to start a new life. 
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I hope I can find a local software development job as soon as possible to better integrate into local life. 
            </div>
            <a href={`/${language}/about`} className="text-blue-600 dark:text-blue-400 hover:underline">read more about me</a>
        </div>
    )
}