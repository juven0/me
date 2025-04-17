import { Project, TechTags } from "../types";
import frontweek from "../assets/images/front-week.png";
import codenexgen from "../assets/images/codenexgen.png";
import transtab from "../assets/images/trans-mintab.png";

export const projects: Project[] = [
  {
    name: "Cloud Decentraliser avec blockchain",
    tech: "React,Sass,Redux,Node.js,Express",
    desc: "API RESTful haute performance pour applications e-commerce",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Portfolio SPA",
    tech: "React, TypeScript, Tailwind",
    desc: "Application monopage responsive avec animations fluides",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Blue Box",
    tech: "React, Sass, TypeScript, Redux, Nestjs",
    desc: "Tableau de bord en temps réel pour dispositifs connectés",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Game Life",
    tech: "React,Tailwind,TypeScript,Socket.io,Nodejs,Express ",
    desc: "Application mobile pour la gestion financière personnelle",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "CodeNexGen",
    tech: "React,Tailwind,TypeScript,ChadcnUI",
    desc: "Application mobile pour la gestion financière personnelle",
    color: "from-amber-500 to-orange-600",
    imageUrl: codenexgen,
  },
  {
    name: "Front-Week1",
    tech: "React,Sass",
    desc: "API RESTful haute performance pour applications e-commerce",
    color: "from-cyan-500 to-blue-600",
    imageUrl: frontweek,
  },
  {
    name: "Tansp-Mintab",
    tech: "React,Sass,ReactFlow",
    desc: "API RESTful haute performance pour applications e-commerce",
    color: "from-cyan-500 to-blue-600",
    imageUrl: transtab,
  },
  {
    name: "Didi Doc",
    tech: "Python,HTML5,CSS3",
    desc: "Application monopage responsive avec animations fluides",
    color: "from-pink-500 to-purple-600",
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
    label: "Vue.js",
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-500",
  },
  { label: "Angular", bgColor: "bg-red-600/20", textColor: "text-red-600" },
  {
    label: "Tailwind CSS",
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
