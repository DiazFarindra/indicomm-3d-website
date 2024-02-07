/* eslint-disable react/no-unknown-property */
export default function Vespa({ nodes, materials }) {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.CAMP003_1.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.CAMP003_2.geometry}
        material={materials['badan roket']}
      />
      <mesh
        geometry={nodes.CAMP003_3.geometry}
        material={materials['planet 2']}
      />
      <mesh
        geometry={nodes.CAMP003_4.geometry}
        material={nodes.CAMP003_4.material}
      />
    </group>
  )
}
