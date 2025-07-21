'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import ComputerModel from '@/components/ComputerModel';

export default function Test() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 7]} intensity={1} />

        <Suspense fallback={null}>
          <ComputerModel scale={[1, 1, 1]} position={[0, 0, 0]} />
        </Suspense>

        <OrbitControls
          enableZoom={false}   // 禁止缩放
          enablePan={false}    // 可选：禁止平移
          maxPolarAngle={Math.PI / 2}   // 限制垂直旋转范围
          minPolarAngle={Math.PI / 2}   // 让它只能水平旋转（可选）
        />
      </Canvas>
    </div>
  );
}