import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion";
import PortfolioGallery from "../components/PortfolioGallery";
import TypewriterSkills from "../components/TypeWriter";

const Hero = () => {
  const skills = [
    "Full Stack Developer",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Deployment and Maintainance",
  ];

  return (
    <section
      id="home"
      className="relative px-4 pt-28 pb-10 mx-auto max-w-7xl border-2 border-t-0 border-dotted border-green-600"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-green-300/10 rounded-full blur-2xl" />

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-design text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left leading-tight">
            SAHIL SHRESTHA
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <TypewriterSkills skills={skills} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-text text-sm sm:text-base md:text-lg text-center md:text-left mt-4 sm:mt-5 md:mt-6 leading-relaxed"
          >
            I'm a Full Stack Web Developer specializing in the MERN stack and
            Next.js. I build fast, scalable, and user-focused applications with
            clean architecture and modern design principles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start"
          >
            <a className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg font-medium text-sm sm:text-base shadow-md hover:bg-green-700 transition text-center">
              View Projects
            </a>

            <a className="px-6 sm:px-8 py-2.5 sm:py-3 border border-green-600 text-green-600 rounded-lg font-medium text-sm sm:text-base hover:bg-green-600 hover:text-white transition text-center">
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-6 sm:mt-7 md:mt-8 text-xl sm:text-2xl md:text-2xl"
          >
            <a
              href="https://github.com/lihasahil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-shrestha-b46887319/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sahil.shresthaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="/cv/Sahil-CV.pdf"
              download
              className="hover:text-green-500 transition duration-300"
            >
              <IoDocumentText />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <PortfolioGallery />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
