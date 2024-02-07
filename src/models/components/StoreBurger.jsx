/* eslint-disable react/no-unknown-property */
import { Html } from '@react-three/drei'

export default function StoreBurger({ nodes, materials }) {
  return (
    <group
      position={[-13.928, 10.223, 98.949]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <Html rotation={[-(Math.PI / 2), 0, 0]} position={[-10, 10, -20]} transform distanceFactor={100}>
        <div className='absolute bg-blue-500 p-5 text-white'>
          test
        </div>
      </Html>
      <mesh
        geometry={nodes.lo_poly_1.geometry}
        material={materials['planet 1']}
      />
      <mesh
        geometry={nodes.lo_poly_2.geometry}
        material={materials['head roket']}
      />
      <mesh
        geometry={nodes.lo_poly_3.geometry}
        material={materials['badan launchpad']}
      />
      <mesh
        geometry={nodes.lo_poly_4.geometry}
        material={materials.asep}
      />
      <mesh
        geometry={nodes.lo_poly_5.geometry}
        material={materials['daun 2']}
      />
      <mesh
        geometry={nodes.lo_poly_6.geometry}
        material={materials.box}
      />
      <mesh
        geometry={nodes.lo_poly_7.geometry}
        material={materials.tanah}
      />
      <mesh
        geometry={nodes.lo_poly_8.geometry}
        material={materials['planet 3']}
      />
      <mesh
        geometry={nodes.lo_poly_9.geometry}
        material={materials['badan launchpad']}
      />
    </group>
  )
}
