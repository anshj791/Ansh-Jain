import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  // Try multiple possible paths for your GLTF file
  const modelPath = '/src/assets/desktop/scene.gltf'; // Based on your folder structure
  
  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
  } catch (error) {
    console.error('Error loading GLTF:', error);
    // Return a fallback 3D object
    return (
      <mesh>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
    );
  }
};

const DesktopModel: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {error && (
        <div className="text-red-500 p-4 bg-red-50 rounded mb-4">
          Error loading 3D model: {error}
        </div>
      )}
      <Canvas 
        camera={{ position: [0, 1.5, 4] }}
        onError={(error) => {
          console.error('Canvas error:', error);
          setError(error.message);
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        }>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default DesktopModel;