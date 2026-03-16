import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position = [0, 0, 0], label }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <group position={position}>
      <Float speed={2.75} rotationIntensity={0.5} floatIntensity={3}>
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#3C5B6F'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.2}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
      {label && (
        <Html position={[0, -2.5, 0]} center className="text-xs text-white text-center whitespace-nowrap">
          {label}
        </Html>
      )}
    </group>
  );
};

const TechScene = ({ technologies }) => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[0, 0, 5]} intensity={1} />
    <OrbitControls enableZoom={false} />
    {technologies.map((tech, index) => {
      const col = index % 4;
      const row = Math.floor(index / 4);
      const x = (col - 1.5) * 2.5;
      const y = (1.5 - row) * 2.5;
      return (
        <Ball
          key={tech.name}
          imgUrl={tech.icon}
          position={[x, y, 0]}
          label={tech.name}
        />
      );
    })}
  </>
);

const BallCanvas = ({ icon, technologies: techList }) => {
  if (techList) {
    return (
      <Canvas
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 10], fov: 45 }}
        className="w-full h-[500px]"
      >
        <Suspense fallback={<CanvasLoader />}>
          <TechScene technologies={techList} />
        </Suspense>
        <Preload all />
      </Canvas>
    );
  }

  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 0, 0.05]} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;