import { JSX } from "react";

export interface TechTags {
  label: string;
  bgColor: string;
  textColor: string;
  icon?: JSX.Element; // <-- new
}

export const techTags: TechTags[] = [
  {
    label: "React",
    bgColor: "bg-cyan-500/20",
    textColor: "text-cyan-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    ),
  },
  {
    label: "TypeScript",
    bgColor: "bg-blue-600/20",
    textColor: "text-blue-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    ),
  },
  {
    label: "JavaScript",
    bgColor: "bg-yellow-400/20",
    textColor: "text-yellow-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    ),
  },
  {
    label: "Node.js",
    bgColor: "bg-green-700/20",
    textColor: "text-green-700",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    ),
  },
  {
    label: "Express",
    bgColor: "bg-gray-800/20",
    textColor: "text-gray-800",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
    ),
  },
  {
    label: "MongoDB",
    bgColor: "bg-green-500/20",
    textColor: "text-green-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
    ),
  },
  {
    label: "PostgreSQL",
    bgColor: "bg-indigo-600/20",
    textColor: "text-indigo-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
    ),
  },
  {
    label: "Next.js",
    bgColor: "bg-black/10",
    textColor: "text-black",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    ),
  },
  {
    label: "MySQL",
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
    ),
  },
  {
    label: "Angular",
    bgColor: "bg-red-600/20",
    textColor: "text-red-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
    ),
  },
  {
    label: "Tailwind",
    bgColor: "bg-sky-400/20",
    textColor: "text-sky-400",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
    ),
  },
  {
    label: "HTML5",
    bgColor: "bg-orange-500/20",
    textColor: "text-orange-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    ),
  },
  {
    label: "CSS3",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    ),
  },
  {
    label: "Sass",
    bgColor: "bg-pink-400/20",
    textColor: "text-pink-400",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
    ),
  },
  {
    label: "Python",
    bgColor: "bg-yellow-600/20",
    textColor: "text-yellow-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    ),
  },
  {
    label: "Django",
    bgColor: "bg-green-800/20",
    textColor: "text-green-800",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
    ),
  },
  {
    label: "Docker",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
    ),
  },
  {
    label: "Git",
    bgColor: "bg-orange-600/20",
    textColor: "text-orange-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    ),
  },

  {
    label: "Go",
    bgColor: "bg-teal-500/20",
    textColor: "text-teal-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
    ),
  },
  {
    label: "VSCode",
    bgColor: "bg-teal-500/20",
    textColor: "text-teal-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
    ),
  },
  {
    label: "Arduino",
    bgColor: "bg-teal-500/20",
    textColor: "text-teal-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" />
    ),
  },
  {
    label: "Java",
    bgColor: "bg-red-700/20",
    textColor: "text-red-700",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
    ),
  },
  {
    label: "Spring",
    bgColor: "bg-green-600/20",
    textColor: "text-green-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
    ),
  },
  {
    label: "NestJS",
    bgColor: "bg-red-500/20",
    textColor: "text-red-500",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
    ),
  },
  {
    label: "Redux",
    bgColor: "bg-purple-600/20",
    textColor: "text-purple-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
    ),
  },
  {
    label: "Postman",
    bgColor: "bg-purple-600/20",
    textColor: "text-purple-600",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
    ),
  },
  {
    label: "Linux",
    bgColor: "bg-black/10",
    textColor: "text-black",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    ),
  },
];

export const categories = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
  "Stacks & Libraries": [
    "React",
    "Next.js",
    "Angular",
    "Redux",
    "Tailwind",
    "Sass",
    "NestJS",
    "Spring",
    "Django",
    "Arduino",
  ],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Tools: ["Git", "Docker", "Postman", "VSCode", "Linux"],
};

export const getTechTagStyle = (label: string) => {
  return (
    techTags.find((tag) => tag.label.toLowerCase() === label.toLowerCase()) ?? {
      bgColor: "bg-gray-600/20",
      textColor: "text-gray-300",
      icon: "",
    }
  );
};
