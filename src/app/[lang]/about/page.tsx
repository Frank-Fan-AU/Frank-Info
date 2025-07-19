'use client';

import Container from '@/components/Container';
import useTranslation from '@/hooks/useTranslation';
import Socials from '@/components/Socials';
import { Mail, MapPin, GraduationCap, Award, Briefcase, Globe, Monitor, Shield, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                            src="/zj-avator.jpg"
                            alt="Frank Fan"
                            fill
                            className="rounded-full object-cover  shadow-lg"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {t.about.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {t.about.subtitle}
                    </p>
                </div>

                

                

                {/* Work Experience Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Briefcase className="w-6 h-6 text-purple-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.experience.title}
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {t.about.experience.current.company}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {t.about.experience.current.period}
                                </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                                {t.about.experience.current.position}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.about.experience.current.description}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {t.about.experience.previous.company}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {t.about.experience.previous.period}
                                </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                                {t.about.experience.previous.position}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.about.experience.previous.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Australia Life Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Globe className="w-6 h-6 text-orange-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.australia.title}
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t.about.australia.description}
                        </p>
                    </div>
                </section>

                 {/* Visa Status Section */}
                 <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 text-green-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.visa.title}
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                {t.about.visa.status}
                            </h3>
                            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                                {t.about.visa.expiry}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {t.about.visa.description}
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                {t.about.visa.additional}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Award className="w-6 h-6 text-green-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.certificates.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                {t.about.certificates.aws}
                            </h3>
                        </div>
                    </div>
                </section>

                 {/* Education Section */}
                 <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.education.title}
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                {t.about.education.university}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {t.about.education.period}
                            </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                            {t.about.education.degree}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            {t.about.education.description}
                        </p>
                    </div>
                </section>

                {/* Personal Equipment Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Monitor className="w-6 h-6 text-indigo-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.equipment.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                {t.about.equipment.macbook}
                            </h3>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                {t.about.equipment.monitor1}
                            </h3>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                {t.about.equipment.monitor2}
                            </h3>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                {t.about.equipment.desk}
                            </h3>
                        </div>
                    </div>
                </section>

               

                {/* Contact Information Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Mail className="w-6 h-6 text-red-500 mr-3" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.contact.title}
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex items-center mb-4">
                            <Mail className="w-5 h-5 text-gray-500 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">
                                {t.about.contact.email}
                            </span>
                        </div>
                        <div className="flex items-center mb-4">
                            <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">
                                {t.about.contact.location}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-700 dark:text-gray-300 mr-3">
                                社交媒体:
                            </span>
                            <Socials />
                        </div>
                    </div>
                </section>

                {/* Best Regards Section */}
                <section className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-red-500 mr-2" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {t.about.regards}
                        </h2>
                        <Heart className="w-6 h-6 text-red-500 ml-2" />
                    </div>
                </section>
            </div>
        </Container>
    );
}