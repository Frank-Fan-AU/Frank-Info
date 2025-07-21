'use client';

import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";
import useTranslation from "@/hooks/useTranslation";

import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import ComputerModel from "./ComputerModel";

export default function Hero() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 计算一个合适的旋转角度（比如随滚动最大转45度）
  const rotationY = (scrollY / 500) * Math.PI / 4; // 500px内最多转45度

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
        {/* 左侧：个人信息 */}
        <div className="flex-1 min-w-[220px]">
          <p className="mb-6 font-semibold">
            <span className="text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
              Hi, I&apos;m Frank
            </span>
          </p>
          <div className="h-10 mb-8 sm:mb-10">
            <HeroAnimation
              words={[
                "<Frontend Developer />",
                "<Backend Developer />",
                "<Full Stack Developer />",
              ]}
            />
          </div>
          <div className="text-lg mt-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-6xl  space-y-2">
            <p>{t.hero.description1}</p>
            <p>{t.hero.description2}</p>
            <p>{t.hero.description3}</p>
          </div>
          <p className="mt-8">{t.hero.description4}</p>
          <div className="mt-8">
            <Socials />
          </div>
        </div>

        {/* 右侧：3D电脑Canvas */}
        <div className="flex-shrink-0 z-10 flex mt-14 items-center justify-center w-full md:w-96 h-96 md:h-80 dark:bg-gray-900 ">
          <Canvas camera={{ position: [3.5, 2.8, 6], fov: 50 }} style={{ width: '100%', height: '100%',zIndex:100 }}>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[5, 10, 7]} intensity={1} />
            <Center>
            <Suspense fallback={null}>
              <ComputerModel scale={[1.8, 1.8, 1.8]} position={[0, 0, 0]} rotation={[0, rotationY, 0]} />
            </Suspense>
              </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
