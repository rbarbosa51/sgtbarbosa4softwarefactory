import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Doom() {
    const navigate = useNavigate()
  const iframeRef = useRef()
  useEffect(() => {
    iframeRef.current.focus()
  }, [])
  return (
    <>
    <title>Doom</title>
    {/* <link rel="stylesheet" href="https://v8.js-dos.com/latest/js-dos.css"></link> */}
    
    <div className="h-full w-full bg-blue-200 relative">
      <iframe ref={iframeRef} src="/doom/play.html" className=" " width={window.innerWidth} height={window.innerHeight} allowFullScreen frameborder="0"></iframe>
      <button className="bg-blue-500 absolute px-4 py-2 text-white  rounded-md z-20 top-4 left-4" 
      onClick={() => navigate('/hub')}
      >Back</button>
    </div>
    </>
  );
}

