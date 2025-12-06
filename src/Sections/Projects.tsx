import { useState } from "react";
import project2 from "../assets/social-book.png";
import project3 from "../assets/food-del.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
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
  Express: "/icons/express.png",
  Stripe: "/icons/stripe.png",
  Liveblocks: "/icons/liveblocks.png",
  Convex: "/icons/convex.png",
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
    name: "FindMe",
    image: project4,
    github: "https://github.com/lihasahil/Final_Year_Project",
    live: "https://yourportfolio.com",
    skills: ["React", "TailwindCSS", "Framer Motion"],
    description:
      "An academic project that identifies missing persons using gait and facial recognition, supported by a secure React-based web interface.",
  },
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
    skills: ["MongoDB", "Express", "React", "Stripe"],
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

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="p-8 mx-auto border-2 border-dotted border-green-600 border-b-0"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-bold mb-8 text-design">
          PROJECTS
        </h1>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-2 border-green-600 rounded-md border-dotted p-4 min-h-96 items-center"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={currentProject.image}
                  alt={currentProject.name}
                  className="w-full h-96 object-contain"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1b4552]/40 to-transparent" />
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                {/* Title + Description */}
                <div>
                  <h3 className="text-3xl font-bold text-[#1b4552] mb-3">
                    {currentProject.name}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Skills with Icons */}
                <div>
                  <p className="font-semibold text-[#1b4552] mb-3">
                    Technologies:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 text-sm bg-skill-bg cursor-pointer border border-dashed border-skill-border py-1 px-2 rounded-md skill-inner-shadow self-end text-text"
                      >
                        {skillIcons[skill] && (
                          <img
                            src={skillIcons[skill]}
                            alt={`${skill} logo`}
                            className="w-4 h-4 object-contain"
                          />
                        )}
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => window.open(currentProject.github, "_blank")}
                    className="flex items-center gap-2 px-3 py-1.5 border border-[#1b4552] text-[#1b4552] hover:bg-[#1b4552] hover:text-white rounded-md transition-colors font-medium"
                  >
                    <FaGithub />
                    GitHub
                  </button>
                  <button
                    onClick={() => window.open(currentProject.live, "_blank")}
                    className="flex items-center gap-2 px-3 py-1.5 border border-[#5E936C] text-[#5E936C] hover:bg-[#5E936C] hover:text-white rounded-md transition-colors font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5 ">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-[#5E936C] cursor-pointer text-white hover:bg-[#5E936C]/50 transition-colors "
            >
              <BiChevronLeft size={15} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-4 bg-[#1b4552]"
                      : "w-1.5 bg-[#A2D5C6] hover:bg-[#5E936C]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-[#5E936C] text-white cursor-pointer hover:bg-[#5E936C]/50 transition-colors"
            >
              <BiChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
