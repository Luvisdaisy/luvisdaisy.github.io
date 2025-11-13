import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, MeshWobbleMaterial } from '@react-three/drei'

// 单个技术键组件
function TechKey({ position, text, color = '#60a5fa' }) {
  const meshRef = useRef()

  const handlePointerOver = () => {
    if (meshRef.current) {
      meshRef.current.scale.set(1.15, 1.15, 1.3)
    }
  }

  const handlePointerOut = () => {
    if (meshRef.current) {
      meshRef.current.scale.set(1, 1, 1)
    }
  }

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
      >
        {/* 键帽主体 */}
        <boxGeometry args={[1.8, 0.8, 0.4]} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          emissive={color}
          emissiveIntensity={0.1}
        />

        {/* 文字 */}
        <Text
          position={[0, 0, 0.21]}
          fontSize={0.25}
          color='white'
          anchorX='center'
          anchorY='middle'
          outlineWidth={0.02}
          outlineColor='#000000'
        >
          {text}
        </Text>

        {/* 键帽侧面阴影效果 */}
        <mesh position={[0, 0, -0.15]}>
          <boxGeometry args={[1.7, 0.7, 0.1]} />
          <meshStandardMaterial color='#1e3a8a' metalness={0.5} roughness={0.5} />
        </mesh>
      </mesh>
    </Float>
  )
}

// 主场景组件
function Scene() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  // 定义技术栈数据和布局（类似键盘排列）
  const techStacks = [
    // 第一行
    [
      { name: 'React', color: '#61dafb' },
      { name: 'Vue', color: '#42b883' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Vite', color: '#646cff' },
    ],
    // 第二行
    [
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Python', color: '#3776ab' },
    ],
    // 第三行
    [
      { name: 'TailwindCSS', color: '#06b6d4' },
      { name: 'Three.js', color: '#049ef4' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'MySQL', color: '#4479a1' },
    ],
    // 第四行（空格键样式 - 更宽的按键）
    [
      { name: 'Git', color: '#f05032' },
      { name: 'Docker', color: '#2496ed' },
      { name: 'AWS', color: '#ff9900' },
    ],
  ]

  return (
    <group ref={groupRef}>
      {techStacks.map((row, rowIndex) => {
        const rowWidth = row.length * 2
        return row.map((tech, colIndex) => {
          const x = (colIndex - (row.length - 1) / 2) * 2.2
          const y = (1.5 - rowIndex) * 1.2
          return (
            <TechKey
              key={`${rowIndex}-${colIndex}`}
              position={[x, y, 0]}
              text={tech.name}
              color={tech.color}
            />
          )
        })
      })}

      {/* 环境光和平行光 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color='#60a5fa' />
    </group>
  )
}

// 主组件
function TechStack() {
  return (
    <div className='w-full h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl overflow-hidden'>
      <div className='text-center py-6'>
        <h2 className='text-4xl font-bold text-white mb-2'>技术栈</h2>
        <p className='text-slate-400'>悬停查看3D效果</p>
      </div>
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }} shadows className='cursor-pointer'>
        <Scene />
      </Canvas>
    </div>
  )
}

export default TechStack
