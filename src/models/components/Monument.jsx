/* eslint-disable react/no-unknown-property */
export default function Monument({ nodes, materials }) {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Areas_building_001_1.geometry}
        material={nodes.Areas_building_001_1.material}
      />
      <mesh
        geometry={nodes.Areas_building_001_2.geometry}
        material={materials['kaki monas']}
      />
      <mesh
        geometry={nodes.Areas_building_001_3.geometry}
        material={materials['pucuk monas']}
      />
    </group>
  )
}
