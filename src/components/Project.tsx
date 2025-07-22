'use client'
import { Suspense, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaReact, FaVuejs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVite, SiElement } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ComputerModel from "./ComputerModel";


const projects = [
    {
        projectName: 'Visa Dashboard',
        projectDescription: '使用nextjs实现全栈开发，使用tailwindcss制作样式，并实现响应式布局，数据库使用mongodb，使用Contentful作为CMS，使用AWS Amplify部署。',
        projectImage: '/visadashboard.png',
        githubLink: 'https://github.com/project1',
        websiteLink: 'https://project1.com',
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        projectName: 'Project 2',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        projectImage: 'https://via.placeholder.com/150',
        githubLink: 'https://github.com/project2',
        websiteLink: 'https://project2.com',
        techStack: ['Vue', 'Vite', 'Element Plus'],
    },


]
export default function Project() {

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
    const techIcons = {
        'React': <FaReact className="w-5 h-5 text-sky-500" title="React" />,
        'Next.js': <SiNextdotjs className="w-5 h-5 text-black dark:text-white" title="Next.js" />,
        'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-cyan-400" title="Tailwind CSS" />,
        'Vue': <FaVuejs className="w-5 h-5 text-green-500" title="Vue" />,
        'Vite': <SiVite className="w-5 h-5 text-purple-400" title="Vite" />,
        'Element Plus': <SiElement className="w-5 h-5 text-blue-400" title="Element Plus" />,
    };
    return (
        <section className="space-y-12">
            <p className="text-5xl text-center font-semibold mb-8 text-black dark:text-white">My Projects</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-1 w-full kanit-regular">

                <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg p-6 shadow-lg relative" style={{ minHeight: '500px' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold text-black dark:text-white">{currentProject.projectName}</h3>
                        <div className="flex gap-2">
                            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition" />
                            </a>
                            <a href={currentProject.websiteLink} target="_blank" rel="noopener noreferrer" title="Website">
                                <FaExternalLinkAlt className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition" />
                            </a>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{currentProject.projectDescription}</p>
                    {/* 技术栈logo区块 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.techStack && currentProject.techStack.map((tech) => (
                            <span key={tech} title={tech} className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded p-1 mr-1 mb-1">
                                {techIcons[tech as keyof typeof techIcons] || <span className="text-xs text-gray-800 dark:text-gray-200">{tech}</span>}
                            </span>
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
                <div className=" rounded-lg p-6  flex items-center justify-center  lg:h-80 bg-amber-200" style={{ minHeight: '500px' }}>
                    {/* <img src={currentProject.projectImage} alt={currentProject.projectName} className="w-full h-full object-cover " /> */}
                    <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense>
                <group scale={0.2} position={[0, -1.5, 0]} rotation={[0, -0.1, 0]}>
                  <ComputerModel />
              
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
                </div>
            </div>
        </section>
    )
}