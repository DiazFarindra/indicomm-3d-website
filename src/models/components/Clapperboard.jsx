/* eslint-disable react/no-unknown-property */
export default function Clapperboard({ nodes, materials }) {
  return (
    <group position={[90.589, 13.886, 38.709]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.Cube001_3.geometry}
        material={nodes.Cube001_3.material}
      />
      <mesh
        geometry={nodes.Cube001_4.geometry}
        material={materials['besi kincir angin']}
      />
    </group>
  )
}
