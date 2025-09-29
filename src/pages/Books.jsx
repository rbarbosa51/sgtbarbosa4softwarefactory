import { useNavigate } from "react-router-dom";
import { TextFallButton } from "@/components/text-fall-button";
import Silk from "@/components/Silk";

export default function Book(){
    const navigate = useNavigate()
    return (
        <div className="h-screen relative flex justify-center items-center">
            <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <Silk
                speed={5}
                scale={1}
                color="#a2f4fd"
                noiseIntensity={1.5}
                rotation={0}
              />
            </div>
            <div className="absolute top-4 left-4">
              <TextFallButton className={"site-button"} onClick={() => navigate("/")}>
                Back
              </TextFallButton>
            </div>
            <div className='h-[60%] w-[40%] bg-gray-700/50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                <div className='w-full h-full flex flex-col'>
                    <div className="text-3xl text-center bg-slate/5 neonText opacity-90">Geometry Nodes 3.3 by Tutorials</div>
                    <div className="text-md text-white/90 bg-slate/5 text-center">A tutorial based approach to learning Blender's Geometry Nodes.</div>
                    <hr className="my-2"/>
                    <div className='flex gap-4 mt-4 mx-8'>
                        <img width={300} src="https://m.media-amazon.com/images/I/811kEWBkJAL._SY385_.jpg" alt="" />
                        <div className='flex flex-col'>
                            <div className="text-white/90 bg-slate-50/5">
                                This book is a tutorial based approach to learning the Geometry Nodes system that ships with Blender 3.3. It allows you to create dynamic shapes by using nodes. This will allow you to create extraordinary, flexible and modifiable geometrical shapes. 
                                You will then be able to parametrically alter the shape of these objects by making changes thru the modifier interface.
                            </div>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex justify-center'>
                        <TextFallButton className={"cursor-pointer site-button"}
                        onClick={() => window.open('https://www.amazon.com/Blender-3-3-Geometry-Nodes-Tutorials-ebook/dp/B0BFG6GYVN', "_blank")}
                        > View my Book on Amazon
                            
                        </TextFallButton>
                    </div>
                </div>
            </div>
        </div>
    )
}



//https://m.media-amazon.com/images/I/811kEWBkJAL._SY385_.jpg

// https://www.amazon.com/Blender-3-3-Geometry-Nodes-Tutorials-ebook/dp/B0BFG6GYVN
// bg-gradient-to-r from-blue-200 to-cyan-200