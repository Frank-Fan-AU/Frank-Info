'use client'
import { useGLTF, useTexture } from '@react-three/drei';
import { Group } from 'three';
import { useMemo, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import React from 'react';

type GLTFResult = GLTF & {
    nodes: any; // 可根据实际模型结构定义
    materials: any;
  };

interface ComputerModelProps extends React.ComponentProps<'group'> {
  imgUrl?: string;
}

const ComputerModel = ({ imgUrl = '/code.png', ...props }: ComputerModelProps) => {
    const group = useRef<Group>(null);
    const { scene: computerScene, nodes } = useGLTF('/models/computer.glb') as GLTFResult;
    // 关键：clone 场景，避免多 Canvas 共享同一个对象
    const clonedScene = useMemo(() => computerScene.clone(true), [computerScene]);

   // 1. 加载图片贴图
   const imgTexture = useTexture(imgUrl);
   imgTexture.flipY = false; // 关键：防止图片上下颠倒
  // 使用 useVideoTexture 替代手动创建
//   const txt = useVideoTexture('/zj-avator.jpg');
  
//   useEffect(() => {
//     if (txt) {
//       txt.flipY = false; // 防止视频上下颠倒
//     }
//   }, [txt]);

  return (
    <group ref={group} {...props}>
      <primitive object={clonedScene} position={[0, -1, 0]} />
      
      {/* 使用原始屏幕几何体完美嵌套视频 */}
      {/* {txt && nodes['monitor-screen'] && (
        <mesh
          geometry={nodes['monitor-screen'].geometry}
          position={[3.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}>
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
      )} */}

      {/* 2. 将图片贴到屏幕上（假设屏幕 mesh 名为 'monitor-screen'，位置参数需根据你的模型实际调整） */}
      {imgTexture && nodes['monitor-screen'] && (
                <mesh
                    geometry={nodes['monitor-screen'].geometry}
                    position={[0.127, 0.831, 0.52]}
                    rotation={[1.571, -0.005, 0.031]}
                    scale={[0.661, 0.608, 0.401]}
                >
                    <meshBasicMaterial map={imgTexture} toneMapped={false} />
                </mesh>
            )}
    </group>
  );
}

export default ComputerModel;