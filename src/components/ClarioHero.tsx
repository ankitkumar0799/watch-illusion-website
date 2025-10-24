"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* 🔹 3D watch rotation component */
function RotatingWatch() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/watch.glb");

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return <primitive ref={ref} object={scene} scale={1.4} />;
}

/* 🔹 Enhanced Animated “Analyzing” text component */
function AnalyzingText() {
  const analyzingTexts = ["Analyzing", "Syncing", "Measuring", "Ready"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % analyzingTexts.length);
    }, 2500); // change every 2.5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-[6%] md:translate-y-[10%]">

      {/* Soft circular glass overlay */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(90,255,158,0.08),transparent_70%)] blur-2xl" />

      {/* Animated text */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(3px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="relative font-mono text-center uppercase tracking-[0.25em] text-[clamp(14px,2vw,22px)] font-semibold"
      >
        {/* Neon gradient text */}
        <motion.span
          animate={{
            textShadow: [
              "0 0 8px rgba(89,245,158,0.5)",
              "0 0 14px rgba(89,245,158,0.8)",
              "0 0 8px rgba(89,245,158,0.5)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-r from-[#59f59e] via-[#94ffd0] to-[#59f59e] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(89,245,158,0.4)]"
        >
          {analyzingTexts[index]}
        </motion.span>

        {/* subtle reflection line sweep */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent mix-blend-overlay"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

/* 🔹 Full hero section */
export default function ClarioHero3D() {
  return (
    <section className="relative min-h-screen w-full bg-[#0e0f14] text-white overflow-hidden">
      {/* Top nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-wide opacity-90">clario</div>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-neutral-300/80">
          <a className="hover:text-white transition" href="#">Technology</a>
          <a className="hover:text-white transition" href="#">Product</a>
          <a className="hover:text-white transition" href="#">Support</a>
          <a
            className="ml-6 rounded-full border border-white/15 px-4 py-1.5 hover:bg-white hover:text-black transition"
            href="#"
          >
            Shop now
          </a>
        </nav>
      </div>

      {/* Hero grid */}
    {/* Hero grid */}
<div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col md:grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
  {/* Right side first on mobile */}
  <div className="order-1 md:order-2 relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px] mx-auto aspect-square">
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <RotatingWatch />
        <Environment preset="city" />
      </Suspense>
    </Canvas>

    {/* Sequential glowing text */}
    <AnalyzingText />
  </div>

  {/* Left text */}
  <div className="order-2 md:order-1 w-full">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
      Driven by <span className="text-[#59f59e]">data</span>
      <br />
      <span className="italic text-[#59f59e]">Defined by design</span>
    </h1>

    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-neutral-400 text-sm sm:text-base">
      <span>Smart focus</span>
      <span>·</span>
      <span>Data privacy</span>
      <span>·</span>
      <span>Real learning</span>
    </div>

    <div className="mt-10 space-y-2">
      <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wide flex items-center justify-center md:justify-start gap-3">
        <span className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-[#59f59e] to-[#1ac77f]" />
        CASIO
      </div>
      <p className="text-neutral-400 text-sm sm:text-lg tracking-wide uppercase">
        Beyond Time.
      </p>
    </div>
  </div>
</div>

    </section>
  );
}





// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { Suspense, useRef, useState, useEffect } from "react";
// import * as THREE from "three";

// /* 🔹 3D watch rotation component */
// function RotatingWatch() {
//   const ref = useRef<THREE.Group>(null);
//   const { scene } = useGLTF("/models/watch.glb");

//   useFrame(() => {
//     if (ref.current) ref.current.rotation.y += 0.005;
//   });

//   return <primitive ref={ref} object={scene} scale={1.4} />;
// }

// /* 🔹 Animated “Analyzing” text component */
// function AnalyzingText() {
//   const analyzingTexts = ["Analyzing", "Syncing", "Measuring", "Ready"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % analyzingTexts.length);
//     }, 2500); // change every 2.5 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       key={index} // triggers reanimation when text changes
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       className="absolute inset-0 flex items-center justify-center font-mono text-white/95 text-xl tracking-[0.2em] uppercase pointer-events-none"
//     >
//       {analyzingTexts[index]}
//     </motion.div>
//   );
// }

// /* 🔹 Full hero section */
// export default function ClarioHero3D() {
//   return (
//     <section className="relative min-h-screen w-full bg-[#0e0f14] text-white overflow-hidden">
//       {/* Top nav */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 flex items-center justify-between">
//         <div className="text-xl font-semibold tracking-wide opacity-90">clario</div>
//         <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-neutral-300/80">
//           <a className="hover:text-white transition" href="#">Technology</a>
//           <a className="hover:text-white transition" href="#">Product</a>
//           <a className="hover:text-white transition" href="#">Support</a>
//           <a
//             className="ml-6 rounded-full border border-white/15 px-4 py-1.5 hover:bg-white hover:text-black transition"
//             href="#"
//           >
//             Shop now
//           </a>
//         </nav>
//       </div>

//       {/* Hero grid */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
//         {/* Left text */}
//         <div className="order-2 md:order-1">
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             Driven by <span className="text-[#59f59e]">data</span>
//             <br />
//             <span className="italic text-[#59f59e]">Defined by design</span>
//           </h1>

//           <div className="mt-8 flex gap-6 text-neutral-400 md:text-base text-sm">
//             <span>Smart focus</span>
//             <span>·</span>
//             <span>Data privacy</span>
//             <span>·</span>
//             <span>Real learning</span>
//           </div>

//           <div className="mt-14">
//             <div className="text-5xl md:text-7xl font-black tracking-wide flex items-center gap-3">
//               <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[#59f59e] to-[#1ac77f]" />
//               clario
//             </div>
//           </div>

//           <div className="mt-16 hidden md:block">
//             <div className="h-px w-full bg-white/10" />
//             <div className="flex justify-between text-xs text-neutral-400 mt-3">
//               <span>Simple start</span>
//               <span>Personal growth</span>
//             </div>
//           </div>
//         </div>

//         {/* Right side — 3D watch with “Analyzing” overlay */}
//         <div className="order-1 md:order-2 relative mx-auto w-full max-w-[560px] aspect-square">
//           <Canvas camera={{ position: [0, 0, 3] }}>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[3, 3, 5]} intensity={1.2} />
//             <Suspense fallback={null}>
//               <RotatingWatch />
//               <Environment preset="city" />
//             </Suspense>
//           </Canvas>

//           {/* Sequential Analyzing text */}
//           <AnalyzingText />

//           {/* Soft radial glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,255,158,0.1),transparent_70%)] blur-2xl pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// }
