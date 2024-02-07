/* eslint-disable react/no-unknown-property */
export default function SmallMount({ nodes, materials }) {
  return (
    <mesh
      geometry={nodes.Mountain2.geometry}
      material={materials['gunung 2']}
      rotation={[Math.PI / 2, 0, 0]}
    />
  )
}
