import { useNavigate } from "react-router-dom";
import LetterGlitch from "@/components/LetterGlitch";
import { ScrambleText } from "@/components/scramble-text";
import { TextFallButton } from "@/components/text-fall-button";
import { TiltCard } from "@/components/tilt-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";

const projects = [
  {
    image: "/projects/portfolio.png",
    title: "Rafael Barbosa Portfolio",
    badge: "React Three Fiber",
    description: "This is the personal portfolio site for Rafael Barbosa",
    tags: [
      "React Three Fiber",
      "Three.JS",
      "TailwindCSS",
      "React Router Dom",
      "DaisyUI",
    ],
    page: "https://rafael-barbosa.com",
    github: "https://github.com/rbarbosa51/Portfolio",
    button: "Personal Portfolio",
  },
  {
    image: "/projects/westeros.png",
    title: "Westers Coffee Store",
    badge: "JAMStack",
    description:
      "This is the Westeros Coffee shop. It simulates purchasing Game of Thrones inspired Coffee.",
    tags: [
      "NextJS",
      "TypeScript",
      "Stripe-API",
      "Zustand",
      "TailwindCSS",
      "DaisyUI",
    ],
    page: "https://westeros-coffee.vercel.app",
    github: "https://github.com/rbarbosa51/westeros-coffee",
    button: "Westeros Coffee Store",
  },
  {
    image: "/projects/girlboss.png",
    title: "Girl Boss App",
    badge: "MERN",
    description:
      "This is the Girl Boss App, a SPA MERN site. It provides a set of tools for organizational purposes. It includes a KanBan board, a Scheduler, and Quotes. Please enjoy",
    tags: [
      "Express",
      "TypeScript",
      "MongoDB",
      "React",
      "Prisma",
      "React-Router",
    ],
    page: "https://girl-boss-app.netlify.app/",
    github: "https://github.com/rbarbosa51/girl-boss-app",
    button: "Girl Boss Web App",
  },
  {
    image: "/projects/mlfinger.png",
    title: "Machine Learning Finger Trails",
    badge: "Machine Leaning",
    description:
      "This page is an example of Google's Mediapipe Solutions. The library is bult on top of TensorFlow Lite. It uses the hand landmark detection features to create a trail of hearts around the index finger.",
    tags: ["mediapipe", "material-components-web", "JavaScript", "Vite"],
    page: "https://machine-learning-finger-trails.netlify.app/",
    github: "https://github.com/rbarbosa51/machine-learning-finger-trails",
    button: "Machine Learning Finger Trails",
  },
  {
    image: "/projects/toxicity.png",
    title: "TensorFlow.JS Toxicity Detector",
    badge: "Machine Leaning",
    description:
      "This page is an example of TensorFlow.JS Toxicity Detection AI model. It also utilizes the Web Speech API to transpile your speech to text. While it is not error proof, it does illustrate the potential uses of Artificial Intelligence in detecting toxic language.",
    tags: ["TensorFlow.JS", "JavaScript", "Vite"],
    page: "https://rbarbosa51.github.io/TensorFlow.JS_Toxicity_Detector/",
    github: "https://github.com/rbarbosa51/TensorFlow.JS_Toxicity_Detector",
    button: "TensorFlow.JS Toxicity Detector",
  },
  {
    image: "/projects/whatacrypto.png",
    title: "Whatacrypto Crypto Game",
    badge: "API - Vanilla",
    description:
      "WhataCrypto is a cryptocurrency game that allows people to make decisions on how and when to buy and sell crypto. WhataCrypto promotes strategic thinking and gives people opportunities to learn in a low stakes environment.",
    tags: ["API", "JavaScript", "ChartJS", "Firebase", "BulmaCSS"],
    page: "https://rbarbosa51.github.io/whatacrypto-crypto-game/",
    github: "https://github.com/rbarbosa51/whatacrypto-crypto-game",
    button: "Whatacrypto Crypto Game",
  },
  {
    image: "/projects/weather.png",
    title: "Glass Weather Dashboard",
    badge: "API - Vanilla",
    description:
      "Glass Weather Dashboard is a webapp designed to enable a person to determine the current and 5 day forcasted weather condition for any arbitrary city. The webapp uses the Glassmorphism UI scheme.",
    tags: ["API", "JavaScript"],
    page: "https://rbarbosa51.github.io/Glass-Weather-Dashboard/",
    github: "https://github.com/rbarbosa51/Glass-Weather-Dashboard",
    button: "Glass Weather Dashboard",
  },
  {
    image: "/projects/particles.png",
    title: "JSParticleEffect",
    badge: "HTML5 Canvas",
    description:
      "This is an example of a particle animation system inside of an HTML5 Canvas",
    tags: ["HTML5 Canvas", "JavaScript"],
    page: "https://rbarbosa51.github.io/JSParticleEffect/",
    github: "https://github.com/rbarbosa51/JSParticleEffect",
    button: "JS Particle Effect",
  },
];
export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen flex flex-col items-center gap-4">
      <div className="w-full h-full absolute -z-10 opacity-100">
        <LetterGlitch
          glitchSpeed={25}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      <div className="absolute top-4 left-4">
        <TextFallButton className={"site-button"} onClick={() => navigate("/")}>
          Back
        </TextFallButton>
      </div>
      <ScrambleText className="text-8xl font-thin neonText px-4 bg-black/60 rounded-md text-center">
        Projects
      </ScrambleText>
      <ScrambleText className="text-2xl bg-black/60  overflow-hidden mx-96 font-thin neonText px-2 rounded-md  text-center">
        <p>View my past project's source code and websites</p>
      </ScrambleText>
      <Carousel className={"w-full max-w-xl"}>
        <CarouselContent className={"mx-auto w-full h-full"}>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <TiltCard
                className="bg-card w-full rounded-md p-4"
                highlightClassName="bg-white/15 dark:bg-white/2"
              >
                <div className="flex justify-between pb-2 mb-2 border-b-2 border-blue-400/60">
                  <div className="text-blue-400 text-xl">{project.title}</div>
                  <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/20">
                    {project.badge}
                  </span>
                </div>

                <img src={project.image} />
                <div className="flex justify-between my-2">
                  {project.tags.map((tag, tIndex) => (
                    <div
                      key={tIndex}
                      className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/20"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className={"first-letter:ml-2 text-blue-900 h-[100px]"}>
                  {project.description}
                </p>
                <div className="text-center my-2 text-blue-900">
                  Source:{" "}
                  <a
                    className="underline text-blue-500 cursor-pointer"
                    target="_blank"
                    onClick={() => window.open(`${project.github}`, "_blank")}
                  >
                    {project.github}
                  </a>
                </div>
                <div className="flex justify-center">
                  <TextFallButton
                    className={"cursor-pointer site-button"}
                    onClick={() => window.open(`${project.page}`, "_blank")}
                  >
                    {project.page}
                  </TextFallButton>
                </div>
              </TiltCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={" size-16"} />
        <CarouselNext className={"size-16"} />
      </Carousel>

      {/* <Link className="text-4xl bg-lime-100/20 text-white underline cursor-pointer" to={'/'}>Home</Link> */}
    </div>
  );
}
