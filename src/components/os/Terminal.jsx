import { useState, useRef, useEffect } from "react";
//import { handleInput } from "../utils";
export const handleInput = (input) => {
  if (!input) return;
  switch (input) {
    case "help":
      return `Available commands are: awards, barbosa, fun, projects, socials, secret`;
    case "awards":
      return `SGT Barbosa's Top 5 Awards include: Joint Service Commendation Medal, Army Commendation Medal, Joint Service Achievement Medal, Army Achievement Medal, Army Good Conduct Medal`;
    case "barbosa":
      return `SGT Barbosa is a motivated, results-oriented, and dynamic soldier with more than 5 years of comprehensive experience in Web development in an innovative and constantly evolving environments. Skilled communicator, team player, and hands-on leader about to build relationships with teams, peers, and clients. Analytical and organized with fearless approach to problem solving and an aptitude for identifying opportunities to improve.`;
    case "socials":
      return `email: rafael.barbosa51@gmail.com
army: rafael.barbosa3.mil@army.mil
facebook: https://www.facebook.com/rafael.barbosa.58958343
linkedin: https://www.linkedin.com/in/rafaelbarbosa51/`;
    case "secret":
      window.open("https://www.youtube.com/watch?v=j9V78UbdzWI", "_blank");
      break;
    case "fun":
      return `Sgt Rafael loves to listen to Puerto Rican Music.`;
    case "projects":
      return `Projects include:
Personal Portfolio Site:  https://rafael-barbosa.com
Westeros Coffee Store: https://westeros-coffee.vercel.app/
Girl Boss App: https://girl-boss-app.netlify.app/`;
    default:
      return "Unknown command type help to view available commands";
  }
};

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState();
  const inputRef = useRef();
  const promptLabel = "/user/home (type help): $ ";

  useEffect(() => {
    if (!inputRef.current) {
      console.log("Empty");
      return;
    }
    inputRef.current.scrollIntoView({ behavior: "smooth" });
    document.getElementById("prompt").value = "";
  }, [commands]);

  return (
    <div className="h-full w-full bg-slate-900 px-8 pt-4 font-inconsolata text-lg text-green-200/80">
      <div className="text-4xl">SGT Barbosa's Terminal</div>
      <div>Login: {new Date().toDateString()}</div>

      {commands &&
        commands.map((item, key) => (
          <div key={key}>
            <div className="flex flex-col">
              <div>{item.prompt}</div>
              <div className="whitespace-pre-wrap text-white/80">
                {item.response}
              </div>
            </div>
          </div>
        ))}
      <div className="flex">
        <label htmlFor="prompt">
          {promptLabel}
          <input
            ref={inputRef}
            autoFocus
            className="mb-1 border-none bg-transparent px-2 outline-none"
            id="prompt"
            type="text"
            autoComplete="false"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setCommands([
                ...commands,
                {
                  prompt: `${promptLabel} ${e.target.value}`,
                  response: handleInput(input),
                },
              ]);
            }}
          />
        </label>
      </div>
    </div>
  );
};
export default Terminal;