import { Link } from "react-router-dom";
import Silk from "@/components/Silk";

export default function Hub() {
  return (
    <div className="h-screen relative flex flex-col items-center">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Silk
          speed={5}
          scale={1}
          color="#e68bbe"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <h1 className="text-5xl text-white/70">Second</h1>
      <Link
        to={"/projects"}
        className="text-2xl underline text-blue-500 visited:text-blue-700"
      >
        Projects
      </Link>
      <Link
        to={"/cell"}
        className="text-2xl underline text-blue-500 visited:text-blue-700"
      >
        Cell
      </Link>
      <Link to={'/os'} className="text-2xl underline text-blue-500 visited:text-blue-700">
      OS
      </Link>
      <Link to={'/book'} className="text-2xl underline text-blue-500 visited:text-blue-700">
      Book
      </Link>
      <Link to={'/life'} className="text-2xl underline text-blue-500 visited:text-blue-700">
      Life
      </Link>
    </div>
  );
}
