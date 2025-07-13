import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    name: "3D-Portfolio",
    image: project1,
    github: "https://github.com/lihasahil/Final_Year_Project",
    live: "https://yourportfolio.com",
    skills: ["React", "Tailwind", "GSAP", "ThreeJS"],
    description:
      "A personal 3D portfolio website developed to showcase my design and development skills using immersive visuals and modern frontend technologies. The site integrates real-time 3D rendering with a sleek UI/UX to present my work, experience, and contact details in a visually compelling format.",
  },
  {
    name: "FindMe",
    image: project4,
    github: "https://github.com/lihasahil/Final_Year_Project",
    live: "https://yourportfolio.com",
    skills: ["React", "Tailwind", "Framer Motion"],
    description:
      "Find Me is an academic project developed to assist in locating missing persons by leveraging gait pattern analysis and face pattern recognition. The system combines cutting-edge biometric technologies with a secure and scalable web application to enhance accuracy in identifying individuals from video footage or images.",
  },
  {
    name: "Social Book",
    image: project2,
    github: "https://github.com/lihasahil/social-book",
    live: "https://social-book-psi.vercel.app/",
    skills: ["Next.js", "Clerk", "ShadcnUI", "TailwindCSS", "PostgreSQL"],
    description: "",
  },
  {
    name: "FeastWave",
    image: project3,
    github: "https://github.com/lihasahil/Food_Delivery_App",
    live: "https://food-delivery-frontend-h3hs.onrender.com/",
    skills: ["MongoDB", "Express", "React", "Stripe"],
    description:
      "Feast Wave is a full-stack food delivery application designed to provide users with a seamless ordering experience. Built using the MERN stack, the platform integrates a robust Stripe payment gateway for secure transactions and features an admin panel for efficient management of food items.",
  },
];

export default function ProjectSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="p-8 mx-auto  text-black border-2 border-dotted border-blue-400 ">
      <h2 className="text-center text-2xl font-bold my-8 text-design">
        Projects
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6 bg-green-100 rounded-3xl p-2 w-fit mx-auto">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selected === index
                ? "bg-blue-600"
                : "bg-green-400 hover:bg-green-300"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Project Display */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected} // important to trigger exit/enter animation
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-8 rounded-xl p-8 shadow-lg bg-gray-800"
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={projects[selected].image}
                alt={projects[selected].name}
                className="rounded-xl w-full h-80 object-cover mb-4 shadow-md"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2">
              <h3 className="text-2xl text-amber-300 font-bold mb-4">
                {projects[selected].name}
              </h3>
              <p>{projects[selected].description}</p>

              <div className="space-y-4 text-base">
                <div className="flex gap-4 mt-4">
                  <a
                    href={projects[selected].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 justify-center items-center px-4 py-2  bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-medium transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={projects[selected].live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 justify-center items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-3xl font-medium transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>

                <div className="text-gray-300">
                  <span className="font-medium block mb-2">Skills:</span>
                  <div className="flex flex-wrap gap-3">
                    {projects[selected].skills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-green-400 text-white text-sm font-semibold shadow"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
