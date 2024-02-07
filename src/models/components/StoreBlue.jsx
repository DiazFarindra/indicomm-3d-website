/* eslint-disable react/no-unknown-property */
export default function StoreBlue({ nodes, materials }) {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Bricks_1.geometry}
        material={materials['cincin planet']}
      />
      <mesh
        geometry={nodes.Bricks_2.geometry}
        material={materials['planet 2']}
      />
      <mesh
        geometry={nodes.Bricks_3.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.Bricks_4.geometry}
        material={materials.asep}
      />
      <mesh
        geometry={nodes.Bricks_5.geometry}
        material={materials['planet 3']}
      />
    </group>
  )
}
