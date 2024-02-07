/* eslint-disable react/no-unknown-property */
export default function FirstIsland({ nodes, materials }) {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Roundcube_003_1.geometry}
        material={materials.tanah}
      />
      <mesh
        geometry={nodes.Roundcube_003_2.geometry}
        material={materials['rumput 2']}
      />
      <mesh
        geometry={nodes.Roundcube_003_3.geometry}
        material={materials.rumput}
      />
    </group>
  )
}
