import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/models";
import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "motion/react"
import { useAtom } from "jotai";
import { storeCameraState, cameraPosition } from "../store";
import {Loader} from '@react-three/drei'
import { TextFallButton } from "@/components/text-fall-button";

export default function Hub() {
  const audioRef = useRef(new Audio("/music/armysong.mp3"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [_, setCameraState] = useAtom(storeCameraState);

  useEffect(() => {
    if (!isPlaying) return;
    audioRef.current.play();
    return () => audioRef.current.pause();
  }, [isPlaying]);

  const variants = {
    open: {
      clipPath: `circle(2500px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        mass: 75,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <Canvas shadows camera={{ position: [0, 3, 5], fov: 35 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
      <div className="absolute left-1/2 top-1/2 z-50 hidden w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#60a6fb] p-4 text-white portrait:block pointer-events-none">
        <h2 className="text-center text-4xl">Warning</h2>
        <p className="p-4 text-center text-2xl">
          Please view in landscape mode
        </p>
      </div>
      
      <TextFallButton className={"site-button absolute text-4xl bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"} onClick={() => {
          setCameraState((prev) =>
            prev === Object.keys(cameraPosition).length - 1 ? 0 : prev + 1,
          );
        }}>
          Next
        </TextFallButton>
      {/* Navbar */}
      <motion.nav
        className="absolute bottom-0 left-0 top-0 flex w-80 flex-col items-center border-r border-black/50 bg-white bg-opacity-90"
        initial={"closed"}
        variants={variants}
        animate={menuOpen ? "open" : "closed"}
      >
        <img
          className="absolute left-[30px] top-[30px] scale-150 cursor-pointer select-none"
          src="/images/menu.svg"
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* Music Button */}
        <div
          className="absolute top-[20%] flex flex-col items-center justify-center rounded-2xl p-4 pb-2 hover:bg-slate-300/50"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div
            className={` ${isPlaying ? "bg-pause" : "bg-volume"} cursor-pointer rounded-lg border border-slate-600 bg-cover bg-center p-8`}
          ></div>
          <div>{isPlaying ? "Stop" : "Army Song"}</div>
        </div>
        
       
      </motion.nav>
      
    </div>
  );
}

