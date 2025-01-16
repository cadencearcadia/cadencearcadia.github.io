import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
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
      <Text
        color="white"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        React
      </Text>
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
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
};