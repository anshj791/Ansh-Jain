import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Create a simple 3D desktop model instead of loading external file
const DesktopModel3D = () => {
  return (
    <group>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[1.8, 1, 0.01]} />
        <meshStandardMaterial color="#1A202C" />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.2]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.7, 0.8]}>
        <boxGeometry args={[1.5, 0.1, 0.5]} />
        <meshStandardMaterial color="#E2E8F0" />
      </mesh>
      
      {/* Mouse */}
      <mesh position={[1.2, -0.65, 0.6]}>
        <boxGeometry args={[0.2, 0.05, 0.3]} />
        <meshStandardMaterial color="#CBD5E0" />
      </mesh>
    </group>
  );
};

const DesktopModel: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas camera={{ position: [3, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={0.3} />
        
        <Suspense fallback={null}>
          <DesktopModel3D />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          autoRotate 
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
};

export default DesktopModel;