/* eslint-disable react/no-unknown-property */
export default function Spawn({ nodes, materials }) {
  return (
    <group position={[-61, -19, 210]} rotation={[-Math.PI / 2, 0, -0.099]}>
      <group position={[0, 0, 20]}>
        <group position={[17.311, 21.294, 0.717]} rotation={[0, 0, 0.765]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials['planet 1']}
          />
          <mesh
            geometry={nodes.Object_2_1.geometry}
            material={materials.asep}
          />
          <mesh
            geometry={nodes.Object_2_2.geometry}
            material={materials['gunung 2']}
          />
          <mesh
            geometry={nodes.Object_2_3.geometry}
            material={materials['gunung gradasi']}
          />
        </group>
      </group>
    </group>
  )
}
