import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingGeometry({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (meshRef.current) {
      meshRef.current.rotation.x = time.current * 0.2
      meshRef.current.rotation.y = time.current * 0.3
      meshRef.current.position.y = position[1] + Math.sin(time.current * 0.5) * 0.5
    }
  })

  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.5), [])

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshStandardMaterial color={color} transparent opacity={0.3} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingGeometry position={[-4, 2, -5]} color="#6366F1" />
      <FloatingGeometry position={[4, -1, -3]} color="#F59E0B" />
      <FloatingGeometry position={[0, 3, -4]} color="#8B5CF6" />
      <FloatingGeometry position={[-2, -2, -6]} color="#6366F1" />
      <FloatingGeometry position={[3, 1, -2]} color="#F59E0B" />
    </>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}