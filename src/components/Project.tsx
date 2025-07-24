'use client'
import { Suspense, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaReact, FaVuejs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVite, SiElement } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedComputerModel from "./AnimatedComputerModel";
import { useI18n } from "@/contexts/i18n-context";
import { HOME_PROJECT_ITEMS_EN, HOME_PROJECT_ITEMS_ZH } from "@/constant/project";
import TechIcon from "./TechIcon";


export default function Project() {

    const { language } = useI18n();
    const projects = language === 'zh' ? HOME_PROJECT_ITEMS_ZH : HOME_PROJECT_ITEMS_EN;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction: string) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const currentProject = projects[selectedProjectIndex];
    
    // 技术栈图标映射

    return (
        <section className="space-y-12">
            <p className="text-5xl text-center font-semibold mb-8 text-black dark:text-white">My Projects</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-1 w-full kanit-regular">

                <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg p-6 shadow-lg relative h-[620px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold text-black dark:text-white">{currentProject.title}</h3>
                        <div className="flex gap-6">
                            <a href={currentProject.link_github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition" />
                            </a>
                            <a href={currentProject.link_demo} target="_blank" rel="noopener noreferrer" title="Website">
                                <FaExternalLinkAlt className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition" />
                            </a>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">{currentProject.description}</p>
                    {/* 技术栈logo区块 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.stacks && currentProject.stacks.map((tech) => (
                            <TechIcon key={tech} tech={tech} ifShort={false} className="mr-1 mb-1 bg-gray-100 dark:bg-gray-700 rounded p-1" />
                        ))}
                    </div>
                    {/* 预留空间防止内容被按钮遮挡 */}
                    <div style={{ height: '48px' }}></div>
                    {/* 绝对定位的切换按钮 */}
                    <div className="absolute left-0 right-0 bottom-0 flex justify-between items-center px-6 pb-4 pointer-events-none">
                        <button className="arrow-btn pointer-events-auto" onClick={() => handleNavigation('previous')}>
                            <FaArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>
                        <button className="arrow-btn pointer-events-auto" onClick={() => handleNavigation('next')}>
                            <FaArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>
                    </div>
                </div>
                <div className=" rounded-lg  flex items-center justify-center h-[620px] relative">
                    {/* 渲染所有项目，但只显示当前选中的，确保所有项目都能正确显示 */}
                    {projects.map((project, index) => (
                        <div
                            key={project.slug}
                            className={`absolute inset-0 ${
                                index === selectedProjectIndex ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300`}
                        >
                            <Canvas>
                                <ambientLight intensity={Math.PI} />
                                <directionalLight position={[10, 10, 5]} />
                                <Center>
                                    <Suspense>
                                        <group scale={2.5} position={[0, -1, 0]} rotation={[0, -0.1, 0]}>
                                            <AnimatedComputerModel 
                                                key={`${project.slug}-${selectedProjectIndex}`} 
                                                imgUrl={project.image} 
                                            />
                                        </group>
                                    </Suspense>
                                </Center>
                                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                            </Canvas>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}