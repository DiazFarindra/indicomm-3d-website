/* eslint-disable react/no-unknown-property */
import React from 'react'

export default function FerrisWheel({ nodes, materials }) {
  return (
    <group position={[-104.18, 29.8, -38.059]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Line036_1.geometry}
        material={materials['badan kastil']}
      />
      <mesh
        geometry={nodes.Line036_2.geometry}
        material={materials['atap kincir angin']}
      />
      <mesh
        geometry={nodes.Line036_3.geometry}
        material={materials.box}
      />
      <mesh
        geometry={nodes.Line036_4.geometry}
        material={nodes.Line036_4.material}
      />
      <mesh
        geometry={nodes.Line036_5.geometry}
        material={materials['planet 1']}
      />
      <mesh
        geometry={nodes.Line036_6.geometry}
        material={materials['besi kincir angin']}
      />
      <mesh
        geometry={nodes.Line036_7.geometry}
        material={materials['planet 3']}
      />
      <mesh
        geometry={nodes.Line036_8.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.Line036_9.geometry}
        material={materials['head roket']}
      />
      <mesh
        geometry={nodes.Line036_10.geometry}
        material={materials['badan roket']}
      />
      <mesh
        geometry={nodes.Line036_11.geometry}
        material={materials['roda canon']}
      />
    </group>
  )
}
