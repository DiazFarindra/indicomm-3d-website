import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

/* eslint-disable react/no-unknown-property */
export default function RocketIsland({ nodes, materials }) {
  const island = useRef()

  let step = 0

  useFrame((state, delta) => {
    step += delta * 1
    island.current.position.y = 5 * Math.sin(step)
  })

  return (
    <group ref={island} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Crater_1.geometry}
        material={materials.batu}
      />
      <mesh
        geometry={nodes.Mountain2.geometry}
        material={materials['gunung 2']}
      />
      <mesh
        geometry={nodes.Crater_6.geometry}
        material={materials['kaki monas']}
      />
      <mesh
        geometry={nodes.Crater_7.geometry}
        material={materials['cincin planet']}
      />
      <mesh
        geometry={nodes.Crater_8.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.Crater_9.geometry}
        material={materials['batu 2']}
      />
      <mesh
        geometry={nodes.Crater_10.geometry}
        material={materials['gunung gradasi']}
      />
      <mesh
        geometry={nodes.Crater_11.geometry}
        material={nodes.Crater_11.material}
      />
      <mesh
        geometry={nodes.Roundcube_002_1.geometry}
        material={materials.tanah}
      />
      <mesh
        geometry={nodes.Roundcube_002_2.geometry}
        material={materials.rumput}
      />
      <mesh
        geometry={nodes.Roundcube_002_3.geometry}
        material={materials["rumput 2"]}
      />
    </group>
  )
}
