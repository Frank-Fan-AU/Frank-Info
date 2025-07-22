import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import ComputerModel from './ComputerModel';

interface AnimatedComputerModelProps {
  imgUrl?: string;
}

const AnimatedComputerModel = (props: AnimatedComputerModelProps) => {
  const groupRef = useRef<any>(null);
  const [progress, setProgress] = useState(0); // 0~1

  // 动画参数
  const startY = -Math.PI / 2; // 侧面
  const endY = -0.1;           // 目标角度
  const duration = 1;        // 动画时长（秒）

  useFrame((state, delta) => {
    if (progress < 1) {
      const next = Math.min(progress + delta / duration, 1);
      setProgress(next);
      if (groupRef.current) {
        // 插值旋转
        groupRef.current.rotation.y = startY + (endY - startY) * next;
      }
    }
  });

  return (
    <group ref={groupRef} scale={1} position={[0, 0, 0]}>
      <ComputerModel {...props} />
    </group>
  );
};

export default AnimatedComputerModel; 