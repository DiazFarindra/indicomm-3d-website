/* eslint-disable react/no-unknown-property */
export default function WelcomeGate({ nodes, materials }) {
  return (
    <group
      position={[-66, 4, 171]}
      rotation={[Math.PI / 2, 0, -0.649]}
      scale={2.618}
    >
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials['badan roket']}
      />
      <mesh
        geometry={nodes.Cube_2.geometry}
        material={materials['planet 1']}
      />
      <mesh
        geometry={nodes.Cube_3.geometry}
        material={materials.asep}
      />
    </group>
  )
}
