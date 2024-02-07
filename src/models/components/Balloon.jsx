/* eslint-disable react/no-unknown-property */
import { Float } from "@react-three/drei";

export default function Balloon({ nodes, materials }) {
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Hot_Air_Balloon_1.geometry}
          material={materials.asep}
        />
        <mesh
          geometry={nodes.Hot_Air_Balloon_2.geometry}
          material={materials["head roket"]}
        />
        <mesh
          geometry={nodes.Hot_Air_Balloon_3.geometry}
          material={materials["badan roket"]}
        />
        <mesh
          geometry={nodes.Hot_Air_Balloon_4.geometry}
          material={materials["badan launchpad"]}
        />
        <mesh
          geometry={nodes.Hot_Air_Balloon_5.geometry}
          material={materials.batu}
        />
      </group>
    </Float>
  )
}
