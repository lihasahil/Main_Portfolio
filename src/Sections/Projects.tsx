import { useState } from "react";
import project2 from "../assets/social-book.png";
import project3 from "../assets/food-del.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import guffgaff from "../assets/guffgaff.png";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// ----------------------------
// Skill Icons Mapping
// ----------------------------
const skillIcons: Record<string, string> = {
  React: "/icons/reactjs.png",
  TailwindCSS: "/icons/tailwindcss.png",
  "Framer Motion": "/icons/framer.svg",
  NextJs: "/icons/nextjs.png",
  Clerk: "/icons/clerk.png",
  ShadcnUI: "/icons/shadcn.png",
  PostgreSQL: "/icons/postgre.png",
  MongoDB: "/icons/mongodb.png",
  ExpressJS: "/icons/express.png",
  Stripe: "/icons/stripe.png",
  Liveblocks: "/icons/liveblocks.png",
  Convex: "/icons/convex.png",
  "Socket.io": "/icons/socket.png",
  NodeJs: "/icons/nodejs.png",
};

// ----------------------------
// Project Interface + Data
// ----------------------------
interface Project {
  name: string;
  image: string;
  github: string;
  live: string;
  skills: string[];
  description: string;
}

const projects: Project[] = [
  {
    name: "Social Book",
    image: project2,
    github: "https://github.com/lihasahil/social-book",
    live: "https://social-book-psi.vercel.app/",
    skills: ["NextJs", "Clerk", "ShadcnUI", "TailwindCSS", "PostgreSQL"],
    description:
      "A full-stack social media app where users can post, interact, and follow others. Built with Next.js, PostgreSQL, Clerk, and ShadcnUI.",
  },
  {
    name: "FeastWave",
    image: project3,
    github: "https://github.com/lihasahil/Food_Delivery_App",
    live: "https://food-delivery-frontend-h3hs.onrender.com/",
    skills: ["MongoDB", "ExpressJS", "React", "Stripe"],
    description:
      "A MERN-based food delivery platform with Stripe payments and an admin panel for managing menu items.",
  },
  {
    name: "IdeaDoodle",
    image: project5,
    github: "httpsgithub.com/lihasahil/Idea-doodle",
    live: "https://idea-doodle.vercel.app/",
    skills: ["NextJs", "Liveblocks", "Convex", "Clerk"],
    description:
      "A real-time collaborative whiteboard for brainstorming, built with Next.js, Convex, Clerk, and Liveblocks.",
  },
  {
    name: "GuffGaff",
    image: guffgaff,
    github: "https://github.com/lihasahil/GuffGaff",
    live: "https://guff-gaff-umber.vercel.app",
    skills: ["React", "MongoDB", "NodeJS", "ExpressJS", "Socket.io"],
    description:
      "A real-time web application built with the MERN stack and Socket.io to enable instant, bidirectional communication between users.",
  },
  {
    name: "FindMe",
    image: project4,
    github: "https://github.com/lihasahil/Final_Year_Project",
    live: "https://yourportfolio.com",
    skills: ["React", "TailwindCSS", "Framer Motion", "MongoDB", "ExpressJS"],
    description:
      "An academic project that identifies missing persons using gait and facial recognition, supported by a secure React-based web interface.",
  },
];

// ----------------------------
// Component
// ----------------------------
export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  // Get 3 projects: previous, current, next
  const getPrevIndex = (idx: number) =>
    (idx - 1 + projects.length) % projects.length;
  const getNextIndex = (idx: number) => (idx + 1) % projects.length;

  const prevProject3 = projects[getPrevIndex(currentIndex)];
  const currentProject = projects[currentIndex];
  const nextProject3 = projects[getNextIndex(currentIndex)];

  return (
    <section
      id="projects"
      className="py-12 sm:py-14 px-4 sm:px-6  mx-auto border-2 border-dotted border-green-600 border-b-0"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl  font-bold mb-8 text-design">
          PROJECTS
        </h1>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {/* Left Button */}
            <button
              onClick={prevProject}
              className="p-2 sm:p-3 rounded-full bg-[#5A9F68] cursor-pointer text-white hover:bg-green-700 transition-colors shrink-0"
            >
              <BiChevronLeft size={20} />
            </button>

            {/* Projects Carousel */}
            <div className="overflow-hidden flex-1">
              <div className="flex gap-4 sm:gap-6 justify-center">
                {/* Left Project (Dimmed) */}
                <motion.div
                  layoutId="left"
                  className="w-full sm:w-60 md:w-72 shrink-0 opacity-50 scale-90 transition-all duration-300"
                >
                  <div className=" border-2 border-green-600 border-dotted rounded-lg overflow-hidden shadow-md">
                    <div className="relative overflow-hidden h-32 sm:h-40">
                      <img
                        src={prevProject3.image}
                        alt={prevProject3.name}
                        className="w-full h-full object-cover p-1"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                        {prevProject3.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {prevProject3.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Center Project  */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    layoutId="center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="w-full sm:w-72 md:w-80 shrink-0 scale-100"
                  >
                    <div className=" border-2 border-green-600 border-dotted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      {/* Image */}
                      <div className="relative overflow-hidden h-40 sm:h-48">
                        <img
                          src={currentProject.image}
                          alt={currentProject.name}
                          className="w-full h-full object-cover p-1"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                        {/* Title */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-1">
                            {currentProject.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {currentProject.description}
                          </p>
                        </div>

                        {/* Skills */}
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {currentProject.skills
                              .slice(0, 4)
                              .map((skill, i) => (
                                <div
                                  key={i}
                                  className="inline-flex items-center gap-2 text-xs bg-skill-bg cursor-pointer border border-dashed border-skill-border py-1 px-2 rounded-md skill-inner-shadow self-end text-text"
                                >
                                  {skillIcons[skill] && (
                                    <img
                                      src={skillIcons[skill]}
                                      alt={`${skill} logo`}
                                      className="w-3 h-3 object-contain"
                                    />
                                  )}
                                  <span className="hidden sm:inline">
                                    {skill}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() =>
                              window.open(currentProject.github, "_blank")
                            }
                            className=" flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-xs sm:text-sm rounded cursor-pointer font-medium text-text border border-text relative"
                          >
                            <FaGithub size={14} />
                            <span className="hidden sm:inline">GitHub</span>
                          </button>

                          <button
                            onClick={() =>
                              window.open(currentProject.live, "_blank")
                            }
                            className=" flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-xs sm:text-sm rounded cursor-pointer font-medium text-green-400 border border-green-400 relative"
                          >
                            <FaGlobe size={14} />
                            <span className="hidden sm:inline">Live</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Project (Dimmed) */}
                <motion.div
                  layoutId="right"
                  className="w-full sm:w-60 md:w-72 shrink-0 opacity-50 scale-90 transition-all duration-300"
                >
                  <div className=" border-2 border-green-600 border-dotted rounded-lg overflow-hidden shadow-md">
                    <div className="relative overflow-hidden h-32 sm:h-40">
                      <img
                        src={nextProject3.image}
                        alt={nextProject3.name}
                        className="w-full h-full object-cover p-1"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                        {nextProject3.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {nextProject3.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextProject}
              className="p-2 sm:p-3 rounded-full bg-[#5A9F68] text-white cursor-pointer hover:bg-green-700 transition-colors shrink-0"
            >
              <BiChevronRight size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex gap-2 justify-center mt-6 sm:mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`h-1.5 rounded-full cursor-pointer transition-all ${
                  index === currentIndex
                    ? "w-4 bg-[#5A9F68]"
                    : "w-1.5 bg-gray-300 hover:bg-green-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
