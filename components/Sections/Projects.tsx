"use client";

import { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "../icons/BrandIcons";

const skillIcons: Record<string, string> = {
  React: "/tech_logo/reactjs.png",
  TailwindCSS: "/tech_logo/tailwindcss.png",
  GSAP: "/tech_logo/gsap.png",
  "Framer Motion": "/icons/framer.svg",
  NextJs: "/tech_logo/nextjs.png",
  Clerk: "/icons/clerk.png",
  ShadcnUI: "/icons/shadcn.png",
  PostgreSQL: "/tech_logo/postgre.png",
  MongoDB: "/tech_logo/mongodb.png",
  ExpressJS: "/tech_logo/express.png",
  Stripe: "/icons/stripe.png",
  Liveblocks: "/icons/liveblocks.png",
  Convex: "/icons/convex.png",
  "Socket.io": "/icons/socket.png",
  NodeJs: "/tech_logo/nodejs.png",
  NestJs: "/tech_logo/nest-logo.png",
};

interface Project {
  name: string;
  image: string;
  github?: string;
  live: string;
  skills: string[];
  description: string;
  category: "featured" | "personal";
}

const projects: Project[] = [
  {
    name: "NextWave Company Website",
    image: "/assets/project-nxt.png",
    live: "https://nxtwaveai.com/",
    skills: ["NextJs", "Framer Motion", "ShadcnUI", "TailwindCSS"],
    description:
      "Built a website for the NextWave Ai company I worked for using Nestjs, framer motions for animations and tailwindcss for styling.",
    category: "featured",
  },
  {
    name: "OCR Next",
    image: "/assets/ocr-nxt.png",
    live: "https://ocrnext.com/",
    skills: ["NextJs", "Framer Motion", "ShadcnUI", "TailwindCSS"],
    description:
      "Built a inhouse project using NextJs integrating apis using axios and tanstack query for handling asynchronous function state management.",
    category: "featured",
  },
  {
    name: "Next Reply",
    image: "/assets/whats-nxt.png",
    live: "https://whatsapp.nxtwaveai.com/",
    skills: ["NextJs", "GSAP", "ShadcnUI", "TailwindCSS"],
    description:
      "Built a inhouse project using NextJs integrating apis using axios and tanstack query for handling asynchronous function state management and GSAP for animations.",
    category: "featured",
  },
  {
    name: "ReachDr",
    image: "/assets/reachdr.png",
    live: "https://reachdr.com.au/",
    skills: ["NextJs", "NestJs", "PostgreSQL", "TailwindCSS"],
    description:
      "A full-stack project for managing RACFs for an Australian client using NextJs for frontend and NestJs for backend. Consists of 3 types of user facility, nurse, doctor aand admin. Admin can impersonate others and handle varios tasks. Facility creates booking for their patients and doctor can view them and accept them.",
    category: "featured",
  },
  {
    name: "Social Book",
    image: "/assets/social-book.png",
    github: "https://github.com/lihasahil/social-book",
    live: "https://social-book-psi.vercel.app/",
    skills: ["NextJs", "Clerk", "ShadcnUI", "TailwindCSS", "PostgreSQL"],
    description:
      "A full-stack social media app where users can post, interact, and follow others. Built with Next.js, PostgreSQL, Clerk, and ShadcnUI.",
    category: "personal",
  },
  {
    name: "Formaker",
    image: "/assets/project4.png",
    github: "https://github.com/lihasahil/formaker",
    live: "https://formaker-beta.vercel.app/",
    skills: ["NextJs", "TailwindCSS", "Framer Motion", "Clerk"],
    description:
      "An AI-powered form builder with Next.js and Framer Motion, enabling users to create and share forms with ease.",
    category: "personal",
  },
  {
    name: "FeastWave",
    image: "/assets/food-del.png",
    github: "https://github.com/lihasahil/Food_Delivery_App",
    live: "https://food-delivery-frontend-h3hs.onrender.com/",
    skills: ["MongoDB", "ExpressJS", "React", "Stripe"],
    description:
      "A MERN-based food delivery platform with Stripe payments and an admin panel for managing menu items.",
    category: "personal",
  },
  {
    name: "GuffGaff",
    image: "/assets/guffgaff.png",
    github: "https://github.com/lihasahil/GuffGaff",
    live: "https://guff-gaff-umber.vercel.app",
    skills: ["React", "MongoDB", "NodeJs", "ExpressJS", "Socket.io"],
    description:
      "A real-time chat app built with the MERN stack and Socket.io for instant bidirectional communication.",
    category: "personal",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg-card">
      <div className="h-40 overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-text">{project.name}</h3>
          <p className="text-xs text-secondary mt-1 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 text-xs bg-bg border border-border px-2 py-0.5 rounded text-secondary"
            >
              {skillIcons[skill] && (
                <img
                  src={skillIcons[skill]}
                  alt=""
                  className="w-3 h-3 object-contain"
                />
              )}
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost h-7 px-3 text-xs flex-1 justify-center"
            >
              <GithubIcon size={12} /> GitHub
            </a>
          ) : null}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost h-7 px-3 text-xs flex-1 justify-center"
          >
            <Globe size={12} /> Live
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectGroup({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Project[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const previewProject = hoveredIndex !== null ? items[hoveredIndex] : null;

  return (
    <div className="mb-12 last:mb-0">
      <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-1">
        {label}
      </p>
      <h2 className="text-xl font-semibold text-text mb-8">{title}</h2>

      <div className="flex gap-10" onMouseLeave={() => setHoveredIndex(null)}>
        {/* ── Project name list ── */}
        <div className="flex-1 min-w-0">
          {items.map((project, i) => (
            <div key={project.name}>
              <button
                onMouseEnter={() => setHoveredIndex(i)}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-4 border-t border-border group text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-secondary tabular-nums w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors duration-150 ${
                      hoveredIndex === i ? "text-text" : "text-secondary"
                    }`}
                  >
                    {project.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-secondary hidden sm:block">
                    {project.skills.slice(0, 2).join(" · ")}
                  </span>
                  <span
                    className={`text-xs transition-transform duration-150 ${
                      hoveredIndex === i
                        ? "translate-x-0.5 text-text"
                        : "text-secondary"
                    }`}
                  >
                    <ChevronRight size={15} />
                  </span>
                </div>
              </button>

              {/* Mobile inline expand */}
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden lg:hidden pb-4"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* closing border */}
          <div className="border-t border-border" />
        </div>

        {/* ── Desktop sticky preview ── */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              {previewProject ? (
                <motion.div
                  key={previewProject.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                >
                  <ProjectCard project={previewProject} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-64 border border-border rounded-xl flex items-center justify-center"
                >
                  <p className="text-xs text-secondary">Hover a project</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const featured = projects.filter((p) => p.category === "featured");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section
      id="projects"
      className="border-t border-border px-6 sm:px-10 py-10"
    >
      <ProjectGroup
        label="Selected Work"
        title="Featured Apps"
        items={featured}
      />
      <ProjectGroup label="Side Projects" title="Personal" items={personal} />
    </section>
  );
}
