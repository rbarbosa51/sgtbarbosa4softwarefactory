import { useRef , useState} from 'react'
import { useGLTF, useCursor, useAspect } from '@react-three/drei'
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { useNavigate } from 'react-router-dom';

export default function Room(props) {
    const navigate = useNavigate();
  const { nodes, materials } = useGLTF('/models/DeskAll.glb')
  const portraitRef = useRef();
  const bookRef = useRef();
  const laptopRef = useRef();
  const cellRef = useRef();
  const arcadeRef = useState();
  const cardsRef = useState();
  const lamp1Ref = useRef();
  const lamp2Ref = useRef();
  const printerRef = useRef()
//   const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  useCursor(hover);
  return (
    <>
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.floor}
        />
        <group name="laptop">
          <mesh
          ref={laptopRef}
            name="laptop_1"
            castShadow
            receiveShadow
            geometry={nodes.laptop_1.geometry}
            material={materials['Material.011']}
            onClick={() => navigate("/os")}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          />
          <mesh
            name="laptop_2"
            castShadow
            receiveShadow
            geometry={nodes.laptop_2.geometry}
            material={materials.Screen}
          />
        </group>
        <mesh
          name="furnature"
          castShadow
          receiveShadow
          geometry={nodes.furnature.geometry}
          material={materials.furnature}
        />
        <group name="Cell">
          <mesh
            name="Cell_1"
            castShadow
            receiveShadow
            geometry={nodes.Cell_1.geometry}
            material={materials.CellScreen}
          />
          <mesh
          ref={cellRef}
            name="Cell_2"
            castShadow
            receiveShadow
            geometry={nodes.Cell_2.geometry}
            material={materials.Black}
            onClick={() => navigate("/cell")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          />
        </group>
        <mesh
            ref={portraitRef}
          name="Portrait"
          castShadow
          receiveShadow
          geometry={nodes.Portrait.geometry}
          material={materials.portrait}
          onClick={() => navigate("/projects")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={bookRef}
          name="Book2"
          castShadow
          receiveShadow
          geometry={nodes.Book2.geometry}
          material={materials.Book2}
          position={[1.494, 2.36, -2.15]}
          rotation={[0, -0.519, 0]}
          scale={0.334}
          onClick={() => navigate("/book")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={lamp1Ref}
          name="lamp"
          castShadow
          receiveShadow
          geometry={nodes.lamp.geometry}
          material={materials.furnature}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={lamp2Ref}
          name="lamp2"
          castShadow
          receiveShadow
          geometry={nodes.lamp2.geometry}
          material={materials.furnature}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={cardsRef}
          name="cards"
          castShadow
          receiveShadow
          geometry={nodes.cards.geometry}
          material={materials.FLOR}
          onClick={() => navigate("/armycards")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={arcadeRef}
          name="arcade"
          castShadow
          receiveShadow
          geometry={nodes.arcade.geometry}
          material={materials['Arcade_machine.001']}
          onClick={() => navigate("/doom")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
        ref={printerRef}
          name="Printer"
          castShadow
          receiveShadow
          geometry={nodes.Printer.geometry}
          material={materials['Material.001']}
          position={[2.386, 1.961, -2.223]}
          scale={2.099}
          onClick={e => {
            e.stopPropagation();
            window.open('https://drive.google.com/file/d/19Spm7JkAt2ReJDG3wJdiKIavdNU1xM6N/view?usp=sharing', '_blank')
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
      </group>
    </group>
    <EffectComposer autoClear={false}>
        <Outline
          selection={[cellRef, bookRef, laptopRef, portraitRef, arcadeRef, lamp1Ref, lamp2Ref, cardsRef, printerRef]}
          blur={true}
          visibleEdgeColor={"#ffffff"}
          edgeStrength={5}
          pulseSpeed={0.6}
          width={400}
        />
      </EffectComposer>
    </>
  )
}

useGLTF.preload('/models/DeskAll.glb')
