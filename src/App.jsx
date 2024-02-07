/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

export default function App() {
  return (
    <div className='relative w-full h-screen'>
      <Canvas
        className='absolute w-full h-screen'
      >
        <PerspectiveCamera makeDefault fov={75} position={[60, 46, 90]} />

        <OrbitControls enableDamping enablePan={false} autoRotate autoRotateSpeed={0.02} rotateSpeed={0.2} minDistance={70} maxDistance={120} />

        <directionalLight
          intensity={2}
          position={[325, 259, -174]}
        />

        <ambientLight intensity={2} />

        <Environment preset={'night'} background blur={1} />

        <Experience />
      </Canvas>
    </div>
  )
}
