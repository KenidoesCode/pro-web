import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CubeWithNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  const positions: [number, number, number][] = [
    [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1],
    [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1]
  ];

  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3],
    [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]
  ];

  return (
    <group ref={groupRef}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.6}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {positions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {edges.map((edge, idx) => {
        const start = new THREE.Vector3(...positions[edge[0]]);
        const end = new THREE.Vector3(...positions[edge[1]]);
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={idx} geometry={geometry}>
            <lineBasicMaterial color="#22d3ee" linewidth={2} />
          </line>
        );
      })}
    </group>
  );
}

interface Logo3DProps {
  className?: string;
  scale?: number;
}

export default function Logo3D({ className = '', scale = 1 }: Logo3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3, 3, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <group scale={scale}>
          <CubeWithNodes />
        </group>
      </Canvas>
    </div>
  );
}
