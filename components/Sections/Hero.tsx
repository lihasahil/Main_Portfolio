"use client";

import { Volume2, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";
import TypewriterSkills from "../TypeWriter";
import { useRef, useState } from "react";
import ContactFormPopup from "../ContactPop";

const Hero = () => {
  const skills = [
    "Full Stack Developer",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Deployment & Maintenance",
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="home"
      className="hero-grid relative w-full min-h-[88vh] flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center overflow-hidden border-b border-border"
    >
      {/* Corner quarter-arcs — clipped by overflow-hidden */}
      <div className="pointer-events-none absolute -top-12 -left-12 w-40 h-40 rounded-full border border-border" />
      <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full border border-border" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 rounded-full border border-border" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full border border-border" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text leading-[0.95] flex flex-wrap items-center justify-center gap-x-4">
          Sahil Shrestha
          <button
            onClick={() => audioRef.current?.play()}
            aria-label="Hear pronunciation"
            className="text-secondary hover:text-text transition text-2xl md:text-3xl self-center"
          >
            <Volume2 size={20} />
          </button>
          <audio ref={audioRef}>
            <source src="/voice/name.m4a" type="audio/mp4" />
          </audio>
        </h1>

        {/* Typewriter role */}
        <div className="text-lg sm:text-xl text-secondary">
          <TypewriterSkills skills={skills} />
        </div>

        {/* Bio */}
        <p className="text-secondary text-sm sm:text-base max-w-xl leading-relaxed">
          I build fast, scalable web applications with the MERN stack &amp;
          Next.js —{" "}
          <span className="font-semibold text-text">
            clean architecture, modern design.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary h-11 px-7 text-sm"
          >
            View Projects
          </button>
          <button
            onClick={() => setIsContactOpen(true)}
            className="btn-ghost h-11 px-7 text-sm"
          >
            Contact Me
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 text-secondary mt-1">
          <a
            href="https://github.com/lihasahil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-shrestha-b46887319/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/sahil.shresthaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="/cv/Sahil-CV.pdf"
            download
            className="hover:text-text transition-colors duration-200"
          >
            <FileText size={18} />
          </a>
        </div>
      </motion.div>

      <ContactFormPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
};

export default Hero;
