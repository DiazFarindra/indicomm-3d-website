/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import islandScene from '../assets/island_v3.glb'

import {
  Balloon,
  Bridge,
  Castle,
  Clapperboard,
  Cloud,
  FerrisWheel,
  FirstIsland,
  Fountain,
  Jumbotron,
  MainIsland,
  Monument,
  Mount,
  MountIsland,
  MountTree,
  Planet,
  Plane,
  Rocket,
  RocketIsland,
  Spawn,
  Stage,
  Stone1,
  StoreBlue,
  StoreBurger,
  Street,
  // SmallMount,
  Tent,
  TentIsland,
  Tree,
  Vespa,
  Wagon,
  WelcomeGate,
  WindTurbin
} from './components'

export function Island(props) {
  const { nodes, materials } = useGLTF(
    islandScene
  )

  const componentMap = {
    Balloon,
    Bridge,
    Castle,
    Clapperboard,
    Cloud,
    FerrisWheel,
    FirstIsland,
    Fountain,
    Jumbotron,
    MainIsland,
    Monument,
    Mount,
    MountIsland,
    MountTree,
    Planet,
    Plane,
    Rocket,
    RocketIsland,
    Spawn,
    Stage,
    Stone1,
    StoreBlue,
    StoreBurger,
    Street,
    // SmallMount,
    Tent,
    TentIsland,
    Tree,
    Vespa,
    Wagon,
    WelcomeGate,
    WindTurbin
  }

  const renderComponent = (Component, props) => (
    <Component nodes={nodes} materials={materials} {...props} />
  );

  return (
    <group {...props} dispose={null}>
      {Object.entries(componentMap).map(([name, Component]) => renderComponent(Component, { key: name }))}

      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_1363_1.geometry}
          material={materials.box}
        />
        <mesh
          geometry={nodes.Object_1363_2.geometry}
          material={nodes.Object_1363_2.material}
        />
        <mesh
          geometry={nodes.Object_1363_3.geometry}
          material={materials['planet 1']}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_1333_1.geometry}
          material={nodes.Object_1333_1.material}
        />
        <mesh
          geometry={nodes.Object_1333_2.geometry}
          material={materials['roda canon']}
        />
        <mesh
          geometry={nodes.Object_1333_3.geometry}
          material={materials['badan roket']}
        />
      </group>

      <mesh
        geometry={nodes.CAMP.geometry}
        material={materials.box}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(islandScene)
