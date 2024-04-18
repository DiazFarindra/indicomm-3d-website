import { Html, Sparkles, Stars } from "@react-three/drei";
import { Island } from "./models/Island";
import { Suspense } from "react";

export default function Experience() {
  return (
    <Suspense fallback={<Html className='text-black'>loading...</Html>}>
      <Island position={[-5, -2, -5]} scale={[0.4, 0.4, 0.4]} />

      <Stars radius={100} depth={30} count={3000} factor={3} saturation={0} fade speed={1000} />
      <Sparkles size={50} scale={[500, 500, 500]} speed={5} count={1000} />
    </Suspense>
  )
}
