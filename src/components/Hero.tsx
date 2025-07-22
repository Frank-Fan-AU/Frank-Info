'use client';

import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";
import useTranslation from "@/hooks/useTranslation";

import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import LegoModel from "./LegoModel";
import { useFrame } from '@react-three/fiber';

// 自动旋转的LegoModel子组件
function RotatingLegoModel() {
  const groupRef = useRef<any>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  return (
    <group
      ref={groupRef}
      scale={[2.5, 2.5, 2.5]}
      position={[-1, 0, -1]}
      rotation={[0, Math.PI - 0.5, 0]}
    >
      <Center>
        <LegoModel />
      </Center>
    </group>
  );
}

export default function Hero() {
  const { t } = useTranslation();


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
        <div className="flex-shrink-0 overflow-auto z-10 flex mt-14 items-center justify-center w-full md:w-96 h-[400px] md:h-[400px] dark:bg-gray-900">
        <Canvas camera={{ position: [1, 0.5, 6], fov: 60 }} >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 3, 5]} />
            <Center>
              <Suspense>
                <RotatingLegoModel />
              </Suspense>
            </Center>
            <OrbitControls  enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
