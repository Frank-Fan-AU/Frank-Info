'use client'
import { useGLTF, useTexture } from '@react-three/drei';
import { Group } from 'three';
import { useMemo, useRef, JSX } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: any; // 可根据实际模型结构定义
    materials: any;
  };

const LegoModel = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<Group>(null);
  const { scene: computerScene, nodes } = useGLTF('/models/lego_man.glb') as GLTFResult;
  // 关键：clone 场景，避免多 Canvas 共享同一个对象
  const clonedScene = useMemo(() => computerScene.clone(true), [computerScene]);



  return (
    <group ref={group} {...props}>
      <primitive object={clonedScene} position={[0, -1, 0]} />
    </group>
  );
}

export default LegoModel;