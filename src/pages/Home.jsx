import { useNavigate } from "react-router-dom";
import { TextFallButton } from "@/components/text-fall-button";
import {Vortex} from '@/components/vortex'

const morphText = ["SGT Barbosa's", "Portfio"]
export default function Home() {
    const navigate = useNavigate()
  return (
    <div
      className="h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={180}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <h1 className="neonText text-2xl md:text-6xl font-bold text-center mb-10">
          SGT Barbosa&apos;s Portfolio
        </h1>
        <p className="text-white/70 text-sm md:text-xl w-1/2 mt-6 text-center">
          Hello, and thank you for your time. I would greatly appreciate it if you could take a moment to view my talent showcase portfolio. I am passionate about building efficient, user-friendly applications and am eager for the opportunity to contribute to the Army Software Factory.
          Please consider me for any track that align with my skills and experience. 
        </p>
        <p className="text-white/80 text-sm md:text-xl w-1/2 mt-6 text-center">I look forward to the possibility of working towards fulfilling the Army's mission.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {/* <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button> */}
          {/* <button className="px-4 py-2  text-white ">For your consideration</button> */}
          <TextFallButton className={"site-button"} onClick={() => navigate("/hub")}>
          For your consideration
        </TextFallButton>
        </div>
      </Vortex>
    </div>
  );
}


// import React from "react";


// export function VortexDemoSecond() {
//   return (
//     <div
//       className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         rangeY={800}
//         particleCount={500}
//         baseHue={120}
//         className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The hell is this?
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//           burned and you&apos;ll have a scar.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button
//             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2  text-white ">Watch trailer</button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }

// <div className="relative h-screen flex flex-col items-center justify-center">
//       <div className="absolute inset-0">
//         <div className="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
//           <div></div>
//         </div>
//       </div>
//       <div className="w-1/2 border-black border-2 text-center flex flex-col gap-4">
//         <h1 className="font-bold text-5xl">SGT Barbosa's Profile</h1>
        
//         <p>Talent showcase for consideration for the Army Software Factory Program </p>
//       </div>
      
//     </div>
