/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/sky.glb'

export default function Sky() {
  const model = useGLTF(skyScene)

  return (
    <primitive object={model.scene} />
  )
}
