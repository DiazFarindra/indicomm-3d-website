/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Utils from './Utils'
import StoreBurger from './contents/StoreBurger'

export default function App() {
  return (
    <div className='relative w-full h-screen'>
      {/* <div className='absolute z-10 top-1/3 right-1/4'>
        <StoreBurger />
      </div> */}
      <Canvas
        className='absolute w-full h-screen'
      >
        <Utils />
        <Experience />

      </Canvas>
    </div>
  )
}
