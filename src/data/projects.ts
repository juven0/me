import { Project, TechTags } from "../types";
import frontweek from "../assets/images/front-week.png";
import codenexgen from "../assets/images/codenexgen.png";
import transtab from "../assets/images/trans-mintab.png";
import dididoc from "../assets/images/diddoc.png";
import bluebox from "../assets/images/bluebox.png";
import nebula from "../assets/images/nebula.png";
import gamelife from "../assets/images/Capture d’écran 2025-04-18 112424.png";

export const projects: Project[] = [
  {
    name: "Decentralized Cloud with Blockchain",
    tech: "React,Sass,Redux,Node.js,Express",
    desc: "Our decentralized cloud web application is built on the principles of a public blockchain and a peer-to-peer network.It enables users to securely store their data across a distributed network, eliminating reliance on centralized servers.At the same time, individuals can join the network as peer nodes by contributing storage space. In return, they are rewarded for their participation and for supporting the stability and growth of the network.",
    color: "from-cyan-500 to-blue-600",
    imageUrl: nebula,
  },
  //   {
  //     name: "Portfolio SPA",
  //     tech: "React, TypeScript, Tailwind  ",
  //     desc: "Application monopage responsive avec animations fluides",
  //     color: "from-pink-500 to-purple-600",
  //   },
  {
    name: "Blue Box",
    tech: "React, Sass, TypeScript, Redux, Nestjs",
    desc: "Conception et développement d'un système permettant le transfert sécurisé de fichiers entre différentes machines.Utilisation de NestJS pour la création de l'API côté serveur et de React pour le développement de l'interface utilisateur.",
    color: "from-green-500 to-emerald-600",
    imageUrl: bluebox,
  },
  {
    name: "Game Life",
    tech: "React,Tailwind,TypeScript,Socket.io,Node.js,Express ",
    desc: "An online game based on cellular automata, inspired by the work of mathematician John Horton Conway.Players can join game rooms to compete in a strategic challenge: starting from an initial population, each player aims to grow their automaton to achieve the largest final population. The game combines logic, strategy, and mathematical simulation in a competitive and interactive environment.",
    color: "from-amber-500 to-orange-600",
    imageUrl: gamelife,
  },
  {
    name: "CodeNexGen",
    tech: "React,Tailwind,TypeScript,ChadcnUI",
    desc: "A modern and dynamic website designed to showcase our freelance brand, CodeNexGen.The site highlights our skills, services, and past projects through a clean, responsive, and user-friendly interface. It serves as a professional portfolio that reflects our expertise in web development and our commitment to quality.",
    color: "from-amber-500 to-orange-600",
    imageUrl: codenexgen,
  },
  {
    name: "Front-Week1",
    tech: "React,Sass",
    desc: "A modern website developed as part of a front-end integration challenge.This project allowed me to apply my skills in responsive design, UI/UX fidelity, and user interface optimization. It showcases my ability to tackle technical challenges while adhering to modern front-end development standards.",
    color: "from-cyan-500 to-blue-600",
    imageUrl: frontweek,
  },
  {
    name: "Tansp-Mintab",
    tech: "React,Sass,ReactFlow",
    desc: "A web interface built to leverage a custom-developed logistics optimization algorithm.The interface enables users to visualize and interact with the algorithm's results, supporting decision-making in complex logistics scenarios. This project combines algorithmic modeling with front-end development to deliver an intuitive and efficient solutio",
    color: "from-cyan-500 to-blue-600",
    imageUrl: transtab,
  },
  {
    name: "Didi Doc",
    tech: "Python,HTML5,CSS3,JavaScript,MySQL",
    desc: "Développement d’une plateforme pour le partage, lecture, discussion des livre numériques. Développement d’une intelligence artificielle pour la classification, suggestion des livres et des publications. Utilisation de Python, Flask, MySQL pour le développement du partie backend et du modèle de machine Learning. HTML, CSS et Javascript pour la partie frontend.",
    color: "from-pink-500 to-purple-600",
    imageUrl: dididoc,
  },
];

export const techTags: TechTags[] = [
  { label: "React", bgColor: "bg-cyan-500/20", textColor: "text-cyan-500" },
  {
    label: "TypeScript",
    bgColor: "bg-blue-600/20",
    textColor: "text-blue-600",
  },
  {
    label: "JavaScript",
    bgColor: "bg-yellow-400/20",
    textColor: "text-yellow-500",
  },
  { label: "Node.js", bgColor: "bg-green-700/20", textColor: "text-green-700" },
  { label: "Express", bgColor: "bg-gray-800/20", textColor: "text-gray-800" },
  { label: "MongoDB", bgColor: "bg-green-500/20", textColor: "text-green-500" },
  {
    label: "PostgreSQL",
    bgColor: "bg-indigo-600/20",
    textColor: "text-indigo-600",
  },
  { label: "Next.js", bgColor: "bg-black/10", textColor: "text-black" },
  {
    label: "MySQL",
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-500",
  },
  { label: "Angular", bgColor: "bg-red-600/20", textColor: "text-red-600" },
  {
    label: "Tailwind",
    bgColor: "bg-sky-400/20",
    textColor: "text-sky-400",
  },
  { label: "HTML5", bgColor: "bg-orange-500/20", textColor: "text-orange-500" },
  { label: "CSS3", bgColor: "bg-blue-500/20", textColor: "text-blue-500" },
  { label: "Sass", bgColor: "bg-pink-400/20", textColor: "text-pink-400" },
  {
    label: "Python",
    bgColor: "bg-yellow-600/20",
    textColor: "text-yellow-600",
  },
  { label: "Django", bgColor: "bg-green-800/20", textColor: "text-green-800" },
  { label: "Docker", bgColor: "bg-blue-500/20", textColor: "text-blue-500" },
  { label: "Git", bgColor: "bg-orange-600/20", textColor: "text-orange-600" },
  { label: "GraphQL", bgColor: "bg-pink-500/20", textColor: "text-pink-500" },
  { label: "Go", bgColor: "bg-teal-500/20", textColor: "text-teal-500" },
  { label: "Java", bgColor: "bg-red-700/20", textColor: "text-red-700" },
  { label: "Spring", bgColor: "bg-green-600/20", textColor: "text-green-600" },
  { label: "NestJS", bgColor: "bg-red-500/20", textColor: "text-red-500" },
  { label: "Redux", bgColor: "bg-purple-600/20", textColor: "text-purple-600" },
];
