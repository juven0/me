import { useState, useEffect, useRef } from "react";
import {
  Menu,
  ArrowRight,
  Github,
  Linkedin,
  // Code,
  X,
  User,
  Activity,
  Phone,
  Briefcase,
  Mail,
  ExternalLink,
  Award,
  BookOpen,
  Globe,
} from "lucide-react";

import me from "../assets/images/me.jpg";
import { projects } from "../data/projects";
import ProjectCard from "../components/card";
import { categories, getTechTagStyle } from "../data/skill";
import nebula from "../assets/images/nebula.png";
import me2 from "../assets/images/me2.jpg"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");
  const pageHistory = useRef(["home"]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  type Page = "home" | "projects" | "about" | "contact";

  const changePage = (page: Page) => {
    const pageOrder = ["home", "projects", "about", "contact"];
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(page);

    setAnimationDirection(newIndex > currentIndex ? "right" : "left");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      pageHistory.current.push(page);
      setIsTransitioning(false);
    }, 600);

    setIsMenuOpen(false);
  };

  const technologies = [
    {
      name: "TypeScript",
      color: "",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
      ),
    },
    {
      name: "JavaScript",
      color: "",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      ),
    },
    {
      name: "Go",
      color: "",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
      ),
    },
    {
      name: "Java",
      color: "",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
      ),
    },
    {
      name: "Python",
      color: "",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
      ),
    },
  ];

  const skills = [
    { name: "Front-end", level: 90, color: "bg-pink-500" },
    { name: "Back-end", level: 85, color: "bg-blue-500" },
    { name: "DevOps", level: 75, color: "bg-purple-500" },
    { name: "UI/UX", level: 80, color: "bg-cyan-500" },
    { name: "Mobile", level: 70, color: "bg-green-500" },
  ];

  // Animation for tech stack items
  useEffect(() => {
    if (currentPage === "home") {
      const techItems = document.querySelectorAll(".tech-item");
      techItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("opacity-100", "translate-x-0");
        }, index * 150);
      });
    }

    if (currentPage === "about") {
      const skillBars = document.querySelectorAll(".skill-bar-fill");
      skillBars.forEach((bar, index) => {
        const htmlBar = bar as HTMLElement; 
        setTimeout(() => {
          htmlBar.style.width = htmlBar.getAttribute("data-width") || "0";
        }, 300 + index * 200);
      });
    }
  }, [currentPage, isTransitioning]);

  return (
    <div className="relative h-screen bg-gradient-to-tr from-indigo-800 via-pink-700 to-blue-800 transition-all duration-700 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main content container */}
      <div className="absolute inset-4 md:inset-8 bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 md:px-10 relative z-10">
          <div className="text-white font-bold text-xl md:text-2xl transform transition-transform hover:scale-110 duration-300">
            <span className="font-[Orbitron] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              JUVENO•EDDY
            </span>
          </div>

          <button
            onClick={toggleMenu}
            className="text-white z-20 rounded-full p-2 bg-gray-800 bg-opacity-60 backdrop-blur-sm hover:bg-pink-700 hover:rotate-90 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMenuOpen && (
            <div className="font-[Orbitron] fixed inset-0 bg-black bg-opacity-95 z-10 flex items-center justify-center animate-fadeIn backdrop-blur-sm">
              <ul className="text-white text-2xl space-y-8">
                <li className="transform hover:translate-x-2 transition-transform">
                  <button
                    onClick={() => changePage("home")}
                    className={`hover:text-pink-500 flex items-center gap-3 p-2 ${
                      currentPage === "home" ? "text-pink-500" : ""
                    }`}
                  >
                    <Activity size={20} className="text-blue-400" /> Home
                  </button>
                </li>
                <li className="transform hover:translate-x-2 transition-transform">
                  <button
                    onClick={() => changePage("projects")}
                    className={`hover:text-pink-500 flex items-center gap-3 p-2 ${
                      currentPage === "projects" ? "text-pink-500" : ""
                    }`}
                  >
                    <Briefcase size={20} className="text-pink-400" />  Projects
                  </button>
                </li>
                <li className="transform hover:translate-x-2 transition-transform">
                  <button
                    onClick={() => changePage("about")}
                    className={`hover:text-pink-500 flex items-center gap-3 p-2 ${
                      currentPage === "about" ? "text-pink-500" : ""
                    }`}
                  >
                    <User size={20} className="text-purple-400" /> About
                  </button>
                </li>
                <li className="transform hover:translate-x-2 transition-transform">
                  <button
                    onClick={() => changePage("contact")}
                    className={`hover:text-pink-500 flex items-center gap-3 p-2 ${
                      currentPage === "contact" ? "text-pink-500" : ""
                    }`}
                  >
                    <Phone size={20} className="text-green-400" /> Contact
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div className="font-[Orbitron] hidden md:flex items-center space-x-6">
            <button
              onClick={() => changePage("projects")}
              className="text-white flex items-center space-x-2 hover:text-pink-300 transition-colors duration-300"
            >
              <span>Projects</span>
              <ArrowRight size={16} className="animate-pulse" />
            </button>
            <button
              onClick={() => changePage("about")}
              className="text-white flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
            >
              <span>About</span>
              <User size={16} />
            </button>
            <button
              onClick={() => changePage("contact")}
              className="text-white bg-transparent border border-white px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Content Area with transitions */}
        <div
          className={`transition-all duration-700 ease-in-out transform h-[calc(100%-140px)] overflow-y-auto 
            ${
              isTransitioning
                ? animationDirection === "right"
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        >
          {/* Home Page */}
          {currentPage === "home" && (
            <div className=" flex flex-col md:flex-row h-full animate-fadeInUp">
              {/* Left Column */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between relative">
                <div className="relative z-10">
                  <div className="font-[Orbitron] overflow-hidden">
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide animate-slideUp">
                    Full-stack 
                      <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                      Developer
                      </span>
                    </h1>
                  </div>
                  <div className="overflow-hidden mt-2">
                    <p className="font-mono text-gray-300 text-lg animate-slideUp animation-delay-200">
                    Creating reliable and refined web and mobile apps with a strong focus on user experience.
                    </p>
                  </div>

                  <div className="mt-6 max-w-md">
                    <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mb-6"></div>
                    <p className="font-mono text-gray-400 animate-fadeIn animation-delay-300">
                    I specialize in building modern, efficient, and scalable applications. I'm passionate about emerging technologies and innovation, with a focus on delivering reliable solutions tailored to real-world user needs.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex space-x-6">
                  <button
                    onClick={() => changePage("projects")}
                    className="rounded-full bg-gradient-to-r from-pink-600 to-blue-600 text-white p-4 hover:shadow-lg hover:shadow-pink-600/50 transform hover:scale-110 transition-all duration-300 animate-bounce"
                  >
                    <ArrowRight />
                  </button>
                  <p className="font-[Orbitron] text-white self-center">
                  Explore my work 
                  </p>
                </div>

                {/* Technologies Section - Vertical */}
                <div className="mt-12 relative z-10 flex flex-col items-center">
                  <p className="text-gray-300 mb-4 font-[Orbitron] font-medium">
                  Technologies
                  </p>
                  <div className="font-mono flex flex-wrap gap-4">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className={`tech-item flex items-center space-x-3 opacity-0 -translate-x-4 transition-all duration-500 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 border-l-2 ${tech.color.replace(
                          "bg-",
                          "border-"
                        )}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${tech.color} flex items-center justify-center text-black font-bold transform hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="w-6 h-6">{tech.icon}</div>
                        </div>
                        <span className="text-white text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Photo + Gradient */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-blue-800">
                  {/* Photo area */}
                  <div className="w-full h-full bg-opacity-60 bg-black flex items-center justify-center overflow-hidden relative">
                    {/* Background elements */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>

                    {/* Profile photo */}
                    <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-pink-500 overflow-hidden transition-all duration-500 hover:scale-105 shadow-lg shadow-pink-500/50 z-10 animate-floatUp">
                      <img
                        src={me}
                        alt="Votre photo"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Decoration circles */}
                    <div className="absolute w-80 h-80 border-2 border-dashed border-pink-500/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-96 h-96 border border-blue-500/30 rounded-full"></div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="absolute right-6 top-1/3 flex flex-col space-y-6 text-white">
                  <a
                    href="https://github.com/juven0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 bg-gray-900 bg-opacity-70 rounded-full backdrop-blur-sm hover:bg-pink-600 transition-all duration-300 cursor-pointer shadow-lg">
                      <Github
                        size={20}
                        className="transform hover:rotate-12 transition-all duration-300"
                      />
                    </div>
                  </a>
                  <a
                    href="www.linkedin.com/in/eddy-bocquelin-a9986a306"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 bg-gray-900 bg-opacity-70 rounded-full backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 cursor-pointer shadow-lg">
                      <Linkedin
                        size={20}
                        className="transform hover:rotate-12 transition-all duration-300"
                      />
                    </div>
                  </a>
                </div>

                {/* Projects Teaser Box */}
                {/* <div className="absolute bottom-16 right-8 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 w-72 hover:bg-opacity-90 transition-all duration-500 transform hover:-translate-y-2 border-t border-pink-500/30 shadow-xl">
                  <div className="rounded-full w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 overflow-hidden mb-4 flex items-center justify-center animate-pulse-slow">
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold uppercase">
                    Projets
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                  Discover my fullstack project portfolio using modern technologies.
                  </p>
                  <div className="flex justify-end mt-4">
                    <ArrowRight
                      className="text-white animate-pulse"
                      size={20}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          )}

          {/* Projects Page */}
          {currentPage === "projects" && (
            <div className="p-6 md:p-10 h-full animate-fadeInUp">
              <h1 className="text-white text-4xl font-bold uppercase tracking-wide mb-2">
                <span className="font-[Orbitron] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                My Projects
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard project={project} key={project.name} />
                ))}
              </div>

              {/* Featured Project */}
              <div className="mt-10">
                <h2 className="text-white text-2xl font-bold mb-6">
                Featured Project
                </h2>
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-pink-500/40 transition-all duration-500">
                  <div className="md:flex">
                    <div className="md:w-1/2 bg-gradient-to-br from-blue-500/20 to-pink-500/20 p-8 flex items-center justify-center">
                      <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center relative group overflow-hidden">
                        <img
                          src={nebula}
                          alt="Project screenshot"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/90 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ExternalLink size={40} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-white text-2xl font-bold">
                        Decentralized Cloud with Blockchain
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-pink-600/30 text-pink-400 px-3 py-1 rounded-full">
                          React
                        </span>
                        <span className="text-xs bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full">
                          TypeScript
                        </span>
                        <span className="text-xs bg-purple-600/30 text-purple-400 px-3 py-1 rounded-full">
                          Node.js
                        </span>
                        <span className="text-xs bg-green-600/30 text-green-400 px-3 py-1 rounded-full">
                          Redux
                        </span>
                      </div>
                      <p className="text-gray-400 mt-4">
                        Our decentralized cloud web application is built on the
                        principles of a public blockchain and a peer-to-peer
                        network.It enables users to securely store their data
                        across a distributed network, eliminating reliance on
                        centralized servers.At the same time, individuals can
                        join the network as peer nodes by contributing storage
                        space. In return, they are rewarded for their
                        participation and for supporting the stability and
                        growth of the network.
                      </p>
                      <div className="mt-6 flex justify-between items-center">
                        <button className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                          Découvrir
                        </button>
                        <div className="flex space-x-3">
                          <Github
                            size={20}
                            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
                          />
                          <ExternalLink
                            size={20}
                            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About Page */}
          {currentPage === "about" && (
            <div className="font-mono p-6 md:p-10 h-full animate-fadeInUp">
              <h1 className="text-white text-4xl font-bold uppercase tracking-wide mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                About Me
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mb-8"></div>

              <div className="flex flex-col-reverse md:flex-row gap-8">
                {/* Left content column - Info (reversed as requested) */}
                <div className="w-full md:w-2/3 text-white">
                  <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-800">
                    <p className="mb-4 text-lg">
                    Passionate fullstack developer with strong experience in building modern web and mobile applications.
                    I handle the full development lifecycle—from backend logic to user interface design—ensuring seamless integration, performance optimization, and a user-centered approach. I’m driven by curiosity and committed to delivering innovative and scalable solutions.
                    </p>

                    <div className="h-1 w-16 bg-pink-500 my-6"></div>

                    <p className="mb-4">
                    I have strong proficiency in multiple languages and technologies, allowing me to approach each project with the most suitable strategy and select the tools best aligned with its goals and technical requirements.
                    </p>
                    <p className="mb-4">
                    My goal is to design elegant, high-performance, and scalable solutions that are perfectly aligned with users' needs.
                    </p>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <Award size={20} className="text-pink-500 mr-2" />
                        Skills
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(categories).map(([category, techs]) => (
                          <div
                            key={category}
                            className="border border-white/10 rounded-xl p-4 shadow-sm bg-white/5"
                          >
                            <h4 className="text-lg font-semibold mb-3 text-white">
                              {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech) => {
                                const { bgColor, icon } = getTechTagStyle(tech);
                                return (
                                  <span
                                    key={tech}
                                    className={`flex items-center gap-1 text-ml font-medium ${bgColor} $ px-3 py-2 rounded-full`}
                                  >
                                    <div className="h-6 w-6">{icon}</div>
                                    {tech}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills section */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <Award size={20} className="text-pink-500 mr-2" />
                        Skills
                      </h3>

                      <div className="space-y-4">
                        {skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className={`skill-bar-fill h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: "0%" }}
                                data-width={`${skill.level}%`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience timeline */}

                    {/* <div className="mt-10">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <Briefcase size={20} className="text-blue-500 mr-2" />
                        Expérience
                      </h3>

                      <div className="space-y-6">
                        <div className="relative pl-8 border-l-2 border-pink-500">
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                          <h4 className="font-bold text-lg">
                            Développeur Senior - Entreprise XYZ
                          </h4>
                          <p className="text-gray-400 mb-2">2020 - Présent</p>
                          <p className="text-sm">
                            Développement d'applications web et d'APIs RESTful.
                            Lead technique sur plusieurs projets importants.
                            Mise en place de CI/CD et amélioration des processus
                            de développement.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-500">
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                          <h4 className="font-bold text-lg">
                            Développeur Fullstack - StartUp ABC
                          </h4>
                          <p className="text-gray-400 mb-2">2018 - 2020</p>
                          <p className="text-sm">
                            Création de solutions e-commerce et applications
                            mobiles. Développement frontend avec React et
                            backend avec Node.js. Participation à la conception
                            UX/UI.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-purple-500">
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                          <h4 className="font-bold text-lg">
                            Développeur Junior - Agence Web
                          </h4>
                          <p className="text-gray-400 mb-2">2016 - 2018</p>
                          <p className="text-sm">
                            Développement de sites web et applications pour
                            divers clients. Travail en équipe sur des projets
                            variés.
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* Education */}
                    <div className="mt-10">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <BookOpen size={20} className="text-green-500 mr-2" />
                        Education
                      </h3>

                      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border-l-4 border-green-500">
                        <h4 className="font-bold">Master's in Computer Science</h4>
                        <p className="text-gray-400">2019 - 2024 | ASJA</p>
                        <p className="text-sm mt-2">
                        Software Engineering Specialization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Photo (reversed as requested) */}
                <div className="w-full md:w-1/3">
                  <div className="sticky top-4">
                    <div className="bg-gradient-to-br from-pink-600/30 to-blue-600/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
                      <div className="w-full aspect-square rounded-xl bg-gray-800 border-4 border-pink-500 overflow-hidden mx-auto shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-500 transform hover:scale-105">
                        <img
                          src={me2}
                          alt="Votre photo"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3 text-white">
                          <User className="text-pink-500" size={18} />
                          <span>BOCQUELIN Eddy Juveno</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Briefcase className="text-blue-500" size={18} />
                          <span>Fullstack Developer</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Globe className="text-purple-500" size={18} />
                          <span>Antananarivo</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <h4 className="text-white font-medium mb-4">
                        Contact me
                        </h4>
                        <div className="flex justify-between">
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                          >
                            <Linkedin size={20} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                          >
                            <Mail size={20} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                          >
                            <Phone size={20} />
                          </a>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => changePage("contact")}
                          className="w-full bg-gradient-to-r from-pink-600 to-blue-600 text-white py-3 rounded-lg hover:from-pink-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                        >
                          <Mail size={18} />
                          <span>Contact me</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Page */}
          {currentPage === "contact" && (
            <div className="p-6 md:p-10 h-full animate-fadeInUp">
              <h1 className="text-white text-4xl font-bold uppercase tracking-wide mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                  Contact
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mb-8"></div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <form className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg">
                    <h3 className="text-white text-xl font-bold mb-6 flex items-center">
                      <Mail size={20} className="text-pink-500 mr-2" />
                      Send me a message
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-400 mb-2 font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:border-pink-500 outline-none transition-all duration-300 focus:shadow-md focus:shadow-pink-500/20"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2 font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:border-pink-500 outline-none transition-all duration-300 focus:shadow-md focus:shadow-pink-500/20"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2 font-medium">
                        Subject
                        </label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:border-pink-500 outline-none transition-all duration-300 focus:shadow-md focus:shadow-pink-500/20 appearance-none">
                          <option>Project Request</option>
                          <option>Job Offer</option>
                          <option>Question</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2 font-medium">
                          Message
                        </label>
                        <textarea
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:border-pink-500 outline-none transition-all h-36 resize-none duration-300 focus:shadow-md focus:shadow-pink-500/20"
                          placeholder="Votre message"
                        ></textarea>
                      </div>
                      <div>
                        <button className="w-full bg-gradient-to-r from-pink-600 to-blue-600 text-white p-4 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transform hover:translate-y-[-2px] transition-all duration-300 font-medium">
                        Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  {/* Info card */}
                  <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg">
                    <h3 className="text-white text-xl font-bold mb-6 flex items-center">
                      <Phone size={20} className="text-blue-500 mr-2" />
                      Contact Information
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center shadow-md shadow-pink-500/20">
                          <Mail size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <p className="text-white">bocquelin@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                          <Phone size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <p className="text-white">+261 34 76 249 88</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                          <Globe size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Localisation</p>
                          <p className="text-white">Antananarivo</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg">
                    <h3 className="text-white text-xl font-bold mb-6">
                    Social Media
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="https://github.com/juven0"
                        className="flex items-center gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                          <Github size={20} className="text-white" />
                        </div>
                        <span className="text-white">Github</span>
                      </a>

                      <a
                        href="www.linkedin.com/in/eddy-bocquelin-a9986a306"
                        className="flex items-center gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <Linkedin size={20} className="text-white" />
                        </div>
                        <span className="text-white">LinkedIn</span>
                      </a>

                      {/* <a
                        href="#"
                        className="flex items-center gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                          <Code size={20} className="text-white" />
                        </div>
                        <span className="text-white">CodePen</span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                          <Terminal size={20} className="text-white" />
                        </div>
                        <span className="text-white">Dev.to</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className=" font-[Orbitron] absolute bottom-6 left-0 right-0 flex justify-center items-center gap-1 md:gap-8 text-white">
          <button
            onClick={() => changePage("home")}
            className={`px-2 py-1 md:px-4 md:py-2 hover:text-pink-500 transition-colors duration-300 text-sm md:text-base relative group ${
              currentPage === "home" ? "text-pink-500" : ""
            }`}
          >
            Home
            <div
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${
                currentPage === "home" ? "w-full" : ""
              }`}
            ></div>
          </button>
          <button
            onClick={() => changePage("projects")}
            className={`px-2 py-1 md:px-4 md:py-2 hover:text-pink-500 transition-colors duration-300 text-sm md:text-base relative group ${
              currentPage === "projects" ? "text-pink-500" : ""
            }`}
          >
            Projects
            <div
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${
                currentPage === "projects" ? "w-full" : ""
              }`}
            ></div>
          </button>
          <button
            onClick={() => changePage("about")}
            className={`px-2 py-1 md:px-4 md:py-2 hover:text-pink-500 transition-colors duration-300 text-sm md:text-base relative group ${
              currentPage === "about" ? "text-pink-500" : ""
            }`}
          >
            About
            <div
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${
                currentPage === "about" ? "w-full" : ""
              }`}
            ></div>
          </button>
          <button
            onClick={() => changePage("contact")}
            className={`px-2 py-1 md:px-4 md:py-2 hover:text-pink-500 transition-colors duration-300 text-sm md:text-base relative group ${
              currentPage === "contact" ? "text-pink-500" : ""
            }`}
          >
            Contact
            <div
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${
                currentPage === "contact" ? "w-full" : ""
              }`}
            ></div>
          </button>
        </footer>

        {/* Floating action button (visible on mobile) */}
        <div className="fixed bottom-4 right-4 md:hidden z-10">
          <button
            onClick={() => changePage("contact")}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 animate-pulse"
          >
            <Mail size={24} />
          </button>
        </div>
      </div>

      {/* Add CSS keyframes and animations */}
      <style>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s forwards;
        }

        .animate-floatUp {
          animation: floatUp 5s infinite ease-in-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}
