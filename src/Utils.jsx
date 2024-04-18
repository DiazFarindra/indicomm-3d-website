/* eslint-disable react/no-unknown-property */
import { CameraControls, Environment, PerspectiveCamera } from '@react-three/drei'

import environmentHdr from './assets/near_the_river_01_1k.hdr'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Utils() {
  const autoRotate = useRef()

  useFrame((delta, state) => {
    console.log(delta)
    console.log(autoRotate.current)
  })

  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[60, 46, 90]} />

      <CameraControls
        ref={autoRotate}
        makeDefault
        truckSpeed={0}
        azimuthRotateSpeed={0.2}
        polarRotateSpeed={0.2}
        minDistance={70}
        maxDistance={120}
      />

      <directionalLight
        intensity={2}
        position={[-150, 0, 0]}
      />

      <Environment files={environmentHdr} resolution={256} background blur={1} />
    </>
  )
}
