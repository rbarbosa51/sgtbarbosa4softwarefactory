import { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import {storeCameraState, cameraPosition} from '@/store'
import { CameraControls} from "@react-three/drei";
import {Lights,Room, Rafael} from "@/components/models"

export default function Scene() {
  const [cameraState, setCameraState] = useAtom(storeCameraState);
  const cameraControls = useRef();

  useEffect(() => {
    switch (cameraState) {
      case 0:
        cameraControls.current.setLookAt(...cameraPosition.start, true);
        break;
      case 1:
        cameraControls.current.setLookAt(...cameraPosition.arcade, true);
        break;
      case 2:
        cameraControls.current.setLookAt(...cameraPosition.skill, true);
        break;
      case 3:
        cameraControls.current.setLookAt(...cameraPosition.book, true);
        break;
      case 4:
        cameraControls.current.setLookAt(...cameraPosition.os, true);
        break;
      case 5:
        cameraControls.current.setLookAt(...cameraPosition.cell, true);
        break;
    }
  }, [cameraState]);

  return (
    <>
      
      <CameraControls
        ref={cameraControls}
        smoothTime={2.0}
        mouseButtons={{ left: 0, right: 0, middle: 0, wheel: 0 }}
        touches={{ one: 0, two: 0, three: 0 }}
      />
      {/* <color attach={'background'} args={['#ffffff']} /> */}
      <Lights />
      <Room />
      <Rafael position={[0, 0.25, 0]} />
    </>
  );
}