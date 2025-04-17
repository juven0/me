import { useState } from "react";
import { Project } from "../types";
import { techTags } from "../data/projects";
import { Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  // console.log(showDesc)

  const getTechTagStyle = (label: string) => {
    const tag = techTags.find(
      (t) => t.label.toLowerCase() === label.toLowerCase()
    );
    return {
      bg: tag?.bgColor ?? "bg-gray-300/20",
      text: tag?.textColor ?? "text-gray-600",
    };
  };

  return (
    <div className="relative w-full max-w-md" key={project.name}>
      <div
        className={`absolute  w-full h-full bg-[#a71ca0a1]  opacity-30 rounded-3xl  transition-all duration-700 group-hover:rotate-[35deg]  ${
          isHovered ? "transform rotate-12" : ""
        }`}
      ></div>
      <div
        className={`absolute  w-full h-full bg-[#26116ce6] opacity-40 transition-all duration-500 rounded-3xl group-hover:rotate-[15deg]  ${
          isHovered ? "transform rotate-6" : ""
        }`}
      ></div>
      <div
        className={`relative h-full z-10 bg-[#0c1015] rounded-3xl  shadow-lg overflow-hidden transition-all duration-500 `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={` ${showDesc? "opacity-0": ""} w-full h-full box-border p-2 absolute  bg-gradient-to-tr from-pink-600/90 to-blue-600/90  group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
          <p className="font-mono">{project.desc}</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center"></div>
            <div className="flex items-center flex-wrap  border border-gray-300 rounded-full px-4 py-2">
              {project.tech.split(",").map((el: string) => {
                return (
                  <span
                    className={`text-xs mx-0.5 ${
                      getTechTagStyle(el.replace(" ", "")).bg
                    } ${
                      getTechTagStyle(el.replace(" ", "")).text
                    } px-3 py-1 rounded-full`}
                  >
                    {el}
                  </span>
                );
              })}
            </div>
          </div>

          <h2 className="font-[Orbitron] text-xl font-bold text-gray-50 mb-4">
            {project.name}
          </h2>

          <div className="flex gap-2 mb-4">
            <img src={project.imageUrl} alt="" />
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between items-center mt-4 cursor-pointer">
            <div className="   flex items-center ">
              <span className="font-mono mx-1">Github</span>
              <div className="p-2 bg-gray-900 bg-opacity-70 rounded-full backdrop-blur-sm hover:bg-pink-600 transition-all duration-300 cursor-pointer shadow-lg">
                <Github
                  size={20}
                  className="transform hover:rotate-12 transition-all duration-300"
                />
              </div>
            </div>
            <button onClick={()=>{setShowDesc(true)}} className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300" >
              Description
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div
// key={project.name}
// className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
// style={{ animationDelay: `${index * 150}ms` }}
// >
// <div
//   className={`h-2 w-full bg-gradient-to-r ${project.color}`}
// ></div>
// <div className="p-6 border-b border-gray-800">
//   <div className="flex justify-between items-start mb-4">
//     <div
//       className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
//     >
//       <Code size={24} className="text-white" />
//     </div>
//     <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
//       {project.tech}
//     </span>
//   </div>
//   <h3 className="text-white text-xl font-bold group-hover:text-pink-400 transition-colors duration-300">
//     {project.name}
//   </h3>
//   <p className="text-gray-400 mt-2 text-sm">
//     {project.desc}
//   </p>
// </div>
// <div className="px-6 py-4 flex justify-between items-center">
//   <button className="text-white flex items-center space-x-2 group-hover:text-pink-400 transition-colors">
//     <span>Voir détails</span>
//     <ArrowRight
//       size={16}
//       className="transform group-hover:translate-x-1 transition-transform duration-300"
//     />
//   </button>
//   <div className="flex space-x-2">
//     <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors duration-300">
//       <Github size={16} />
//     </button>
//     <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300">
//       <ExternalLink size={16} />
//     </button>
//   </div>
// </div>
// </div>
