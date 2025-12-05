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
    <section
      id="home"
      className="px-4 pt-20 py-8 mx-auto max-w-7xl border-2 border-t-0 border-dotted border-green-600"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-design text-3xl sm:text-4xl font-extrabold text-center md:text-left ">
            SAHIL SHRESTHA
          </h1>
          <TypewriterSkills skills={skills} />

          <p className="text-justify text-text mt-4">
            I am a passionate Full Stack Web Developer from Nepal with a strong
            foundation in computer engineering and hands-on experience building
            modern, scalable web applications. Specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js) and Next.js, I create
            dynamic and high-performance web solutions that deliver seamless
            user experiences.
          </p>

          <p className="text-justify text-text mt-4">
            With a deep interest in technology and problem-solving, I thrive on
            turning complex ideas into functional digital products. My academic
            background in computer engineering has equipped me with both
            theoretical knowledge and practical skills across software
            development and system design.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl">
            <div className="flex gap-4">
              {/* Github */}
              <a
                href="https://github.com/lihasahil"
                target="_blank"
                className="relative group text-[#5E936C] hover:text-[#93DA97]"
              >
                <FaGithub />
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                         px-2 py-1 bg-tool text-tool-text text-sm rounded opacity-0 
                         group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  Github
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sahil-shrestha-b46887319/"
                target="_blank"
                className="relative group text-[#5E936C] hover:text-[#93DA97]"
              >
                <FaLinkedin />
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                         px-2 py-1 bg-tool text-tool-text text-sm rounded opacity-0 
                         group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  LinkedIn
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sahil.shresthaa/"
                target="_blank"
                className="relative group text-[#5E936C] hover:text-[#93DA97]"
              >
                <FaInstagram />
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                         px-2 py-1 bg-tool text-tool-text text-sm rounded opacity-0 
                         group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  Instagram
                </span>
              </a>

              {/* CV Download */}
              <a
                href="/cv/Sahil-CV.pdf"
                download
                className="relative group text-[#5E936C] hover:text-[#93DA97]"
              >
                <IoDocumentText />
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                         px-2 py-1 bg-tool text-tool-text text-sm rounded opacity-0 
                         group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  Download My CV
                </span>
              </a>
            </div>
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
