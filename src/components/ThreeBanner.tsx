import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Box() {
  const mesh = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={mesh}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hsl(var(--primary))" />
    </mesh>
  );
}

function FloatingText() {
  return (
    <mesh position={[2, 0, 0]}>
      <textGeometry args={['React', { size: 0.5, height: 0.1 }]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export const ThreeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[40vh] md:h-[50vh] relative"
    >
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="bg-background/80 backdrop-blur-sm"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <FloatingText />
        <Stars />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};