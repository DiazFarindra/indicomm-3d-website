/* eslint-disable react/no-unknown-property */
import React from 'react'

export default function Stage({ nodes, materials }) {
  return (
    <group
      position={[15.992, 14.137, -96.271]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <mesh
        geometry={nodes.concert_stage_main_final_1.geometry}
        material={materials.asep}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_2.geometry}
        material={materials.box}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_3.geometry}
        material={materials['badan roket']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_4.geometry}
        material={materials['planet 1']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_5.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_6.geometry}
        material={materials['planet 3']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_7.geometry}
        material={materials['batang pohon']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_8.geometry}
        material={materials['head roket']}
      />
      <mesh
        geometry={nodes.concert_stage_main_final_9.geometry}
        material={materials['daun 2']}
      />
    </group>
  )
}
