const Videos = () => {
  return (
    <div className="flex min-h-full flex-wrap gap-8 bg-pink-50 px-8 py-4 text-black/50">
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=OXgu9H3SLGg", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>7ID Song</div>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=Dndv5UydzMg", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>SBCT Training</div>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=8cvljfwAyXQ", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>Army Song</div>
      </div>
    </div>
  );
};
export default Videos;