import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import PortfolioGallery from "../components/PortfolioGallery";
import TypewriterSkills from "../components/TypeWriter";

const Hero = () => {
  const skills: string[] = [
    "Full Stack Developer",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Deployment and Maintainance",
  ];
  return (
    <section className="px-4 pt-20 py-8 mx-auto max-w-7xl border-2 border-dotted border-blue-600">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-design text-3xl sm:text-4xl font-extrabold text-center md:text-left">
            SAHIL SHRESTHA
          </h1>
          <TypewriterSkills skills={skills} />

          <p className="text-justify mt-4">
            I am a passionate Full Stack Web Developer from Nepal with a strong
            foundation in computer engineering and hands-on experience building
            modern, scalable web applications. Specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js) and Next.js, I create
            dynamic and high-performance web solutions that deliver seamless
            user experiences.
          </p>

          <p className="text-justify mt-4">
            With a deep interest in technology and problem-solving, I thrive on
            turning complex ideas into functional digital products. My academic
            background in computer engineering has equipped me with both
            theoretical knowledge and practical skills across software
            development and system design.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl text-green-600">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <IoDocumentText />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <PortfolioGallery />
        </div>
      </div>
    </section>
  );
};

export default Hero;
