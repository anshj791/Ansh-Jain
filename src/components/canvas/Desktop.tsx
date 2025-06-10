import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

// Create a simple 3D desktop model with image on screen
const DesktopModel3D = ({ scale }: { scale: number }) => {
  // Load texture for the screen (you can replace this URL with your own image)
  const screenTexture = useLoader(TextureLoader, 'https://knowledge.hubspot.com/hubfs/how-to-start-coding-13-20250321-3779156.webp');
  
  return (
    <group scale={scale}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
      
      {/* Screen with image texture */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[1.8, 1, 0.01]} />
        <meshStandardMaterial 
          map={screenTexture}
          emissive="#1a1a2e"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Screen glow effect */}
      <mesh position={[0, 0.5, 0.07]}>
        <boxGeometry args={[0, 1.1, 0.01]} />
        <meshStandardMaterial 
          color="#667eea" 
          emissive="#4c1d95"
          emissiveIntensity={0.1}
          transparent
          opacity={0.3}
        />
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
  const [scrollY, setScrollY] = useState(0);
  const [modelScale, setModelScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate scale based on scroll position
      // Base scale of 1, increases as user scrolls down
      const scrollFactor = currentScrollY / 1000; // Adjust divisor to control sensitivity
      const newScale = Math.min(1 + scrollFactor, 3); // Max scale of 3
      setModelScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w- h-[300px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
      <Canvas 
        camera={{ position: [3, 2, 4], fov: 50 }}
        style={{ 
          pointerEvents: 'auto',
          touchAction: 'manipulation'
        }}
        onCreated={({ gl }) => {
          gl.domElement.style.touchAction = 'manipulation';
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={0.3} />
        {/* Add colorful lighting for the screen */}
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#667eea" />
        <pointLight position={[2, 2, 1]} intensity={0.2} color="#f093fb" />
        
        <Suspense fallback={null}>
          <DesktopModel3D scale={modelScale} />
        </Suspense>
        
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={4}
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          touches={{
            ONE: null, // Disable single touch rotation
            TWO: null  // Disable two touch zoom/pan
          }}
        />
      </Canvas>
      
      
    </div>
  );
};

export default DesktopModel;