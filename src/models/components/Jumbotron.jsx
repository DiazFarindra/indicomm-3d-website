/* eslint-disable react/no-unknown-property */
export default function Jumbotron({ nodes, materials }) {
  return (
    <group
      position={[95.748, 29.498, -38.943]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={1.944}
    >
      <mesh
        geometry={nodes.Cube_1_1.geometry}
        material={materials.baliho}
      />
      <mesh
        geometry={nodes.Cube_1_2.geometry}
        material={materials.asep}
      />
      <mesh
        geometry={nodes.Cube_1_3.geometry}
        material={materials.box}
      />
      <mesh
        geometry={nodes.Cube_1_4.geometry}
        material={materials['besi kincir angin']}
      />
    </group>
  )
}
