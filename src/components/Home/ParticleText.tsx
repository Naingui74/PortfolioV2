import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

const ParticleText = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#000000', 5, 15]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Particles />
        <Float
          speed={4}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <AnimatedText />
        </Float>
      </Canvas>
    </div>
  );
};

function Particles() {
  const count = 2000;
  const mesh = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      colors[i * 3] = 0.2 + Math.random() * 0.2;     // R
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.2; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B

      sizes[i] = Math.random() * 0.2;
    }

    return [positions, colors, sizes];
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const dx = mousePosition.current.x * 0.1;
      const dy = mousePosition.current.y * 0.1;

      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time * 0.5 + positions[i3] * 0.1) * 0.01 + dx * 0.02;
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time * 0.5 + positions[i3 + 1] * 0.1) * 0.01 + dy * 0.02;
      mesh.current.geometry.attributes.position.array[i3 + 2] += Math.sin(time * 0.3 + positions[i3 + 2] * 0.1) * 0.01;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null);
  const [spring, api] = useSpring(() => ({
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    config: { mass: 2, tension: 200, friction: 50 },
  }));

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    
    api.start({
      rotation: [y / 8, x / 8, 0],
      scale: [1 + mouse.y * 0.1, 1 + mouse.x * 0.1, 1],
    });
  });

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#4f46e5"),
    metalness: 0.8,
    roughness: 0.2,
    emissive: new THREE.Color("#2563eb"),
    emissiveIntensity: 0.5,
  });

  return (
    <animated.group {...spring}>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Aaron Groux
        </Text3D>
      </Center>
    </animated.group>
  );
}

export default ParticleText;