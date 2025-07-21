'use client'
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { Group } from 'three';
import { useRef, JSX, useEffect } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: any; // 可根据实际模型结构定义
    materials: any;
  };

const ComputerModel = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<Group>(null);
  const { scene: computerScene, nodes } = useGLTF('/models/computer.glb') as GLTFResult;
  
  // 使用 useVideoTexture 替代手动创建
//   const txt = useVideoTexture('/zj-avator.jpg');
  
//   useEffect(() => {
//     if (txt) {
//       txt.flipY = false; // 防止视频上下颠倒
//     }
//   }, [txt]);

  return (
    <group ref={group} {...props}>
      <primitive object={computerScene} position={[0, -1, 0]} />
      
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
    </group>
  );
}

export default ComputerModel;