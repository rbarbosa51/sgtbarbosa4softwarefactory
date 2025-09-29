import { useState } from "react";
import WinBox from "react-winbox";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css"; 

const Wiki = () => {
  const [article1, setArticle1] = useState(false);
  const [article2, setArticle2] = useState(false);
  return (
    <div className="flex min-h-full gap-8 bg-pink-50 px-8 py-4 text-black/50">
      <div
        className="flex flex-col items-center"
        onClick={() => setArticle1(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/wiki-article.svg" />
        </div>
        <div className="text-center">US Army</div>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => setArticle2(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/wiki-article.svg" />
        </div>
        <div className="text-center">Stryker</div>
      </div>
      {article1 && (
        <WinBox
          url="https://en.wikipedia.org/wiki/United_States_Army"
          className="modern"
          width={500}
          height={400}
          onClose={() => setArticle1(false)}
          noFull
          bottom={(window.innerHeight / 100) * 8}
        />
      )}
      {article2 && (
        <WinBox
          url="https://en.wikipedia.org/wiki/Stryker"
          className="modern"
          width={500}
          height={400}
          onClose={() => setArticle2(false)}
          noFull
          bottom={(window.innerHeight / 100) * 8}
        />
      )}
    </div>
  );
};
export default Wiki;