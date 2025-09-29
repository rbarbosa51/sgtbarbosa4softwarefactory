import { memo } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css"; //Optional
import WinBox from "react-winbox";
import { useState } from "react";

const SgtB1 = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <img src="/images/sgtb.jpeg" />
    </div>
  );
};
const SgtB2 = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <img src="/images/sgtb2.jpg" />
    </div>
  );
};
const Photos = () => {
  const [sgtB, setSgtB] = useState(false);
  const [sgtB2, setSgtB2] = useState(false);

  return (
    <div className="flex min-h-full bg-pink-50 text-black/50">
      <div
        className="flex flex-col items-center p-6 cursor-pointer"
        onClick={() => setSgtB(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/image.svg" />
        </div>
        <div>Barbosa</div>
      </div>
      <div
        className="flex flex-col items-center p-6 cursor-pointer"
        onClick={() => setSgtB2(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/image.svg" />
        </div>
        <div>Barbosa 2</div>
      </div>

      {sgtB && (
        <WinBox
          title="SGT Barbosa"
          noMax
          noFull
          width={400}
          height={400}
          className="modern"
          onClose={() => setSgtB(false)}
          bottom={(window.innerHeight / 100) * 8}
        >
          <SgtB1 />
        </WinBox>
      )}
      {sgtB2 && (
        <WinBox
          title="SGT Barbosa"
          noMax
          noFull
          width={400}
          height={400}
          className="modern"
          onClose={() => setSgtB2(false)}
          bottom={(window.innerHeight / 100) * 8}
        >
          <SgtB2 />
        </WinBox>
      )}
    </div>
  );
};
export default memo(Photos);