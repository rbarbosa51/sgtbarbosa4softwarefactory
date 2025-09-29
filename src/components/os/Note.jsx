const Note = () => {
  return (
    <div className="flex h-full flex-col bg-pink-50 text-black/50">
      <div className="flex h-[15%] w-full items-center justify-center">
        <h1 className="font-water-brush pt-2 text-center text-5xl tracking-wider text-red-300">
          Thank you
        </h1>
      </div>
      <div className="flex h-[90%] w-full flex-col items-center justify-start p-4">
        <p className="first-letter:font-water-brush first-letter:ml-2 first-letter:text-2xl first-letter:text-red-300">
          Thank you for taking the time to review my application and consider me for this opportunity. 
          I truly appreciate the chance to share my background, experiences, and enthusiasm for this mission. I look forward to the possibility of contributing to the Army's mission.
        </p>
        <p className="font-water-brush mt-4 self-end text-3xl tracking-wider text-red-300">
          Rafael Barbosa
        </p>
      </div>
    </div>
  );
};
export default Note;