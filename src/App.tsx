import "./App.css";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import NavBar from "./components/NavBar";
import Hero from "./Sections/Hero";
import ProjectSection from "./Sections/Projects";
import {
  FaBriefcase,
  FaFolderOpen,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { useEffect, useState } from "react";
import ContactFormPopup from "./components/ContactPop";
import Loader from "./components/Loader/Loader";
import { Helmet } from "react-helmet-async";

function App() {
  const navLinks = [
    { link: "#home", name: "Home", icon: <FaHome /> },
    { link: "#experience", name: "Experience", icon: <FaBriefcase /> },
    { link: "#education", name: "Education", icon: <FaUserGraduate /> },
    { link: "#projects", name: "Projects", icon: <FaFolderOpen /> },
    { link: "#skills", name: "Skills", icon: <GiSkills /> },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <Helmet>
        <title>Sahil Shrestha | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Sahil Shrestha, a passionate full-stack developer using React, Node.js, and TypeScript."
        />
        <meta
          name="keywords"
          content="Sahil Shrestha, Portfolio, React Developer, Node.js Developer, Full Stack Developer, Web Developer"
        />
        <meta name="author" content="Sahil Shrestha" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Sahil Shrestha | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Showcasing my work in React, Node.js, TypeScript, and full-stack development."
        />
        <meta
          property="og:image"
          content="https://www.sahilshrestha2003.com.np/preview.png"
        />
        <meta
          property="og:url"
          content="https://www.sahilshrestha2003.com.np"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sahil Shrestha | Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio showcasing React, Node.js, and full-stack development projects."
        />
        <meta
          name="twitter:image"
          content="https://www.sahilshrestha2003.com.np/preview.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sahilshrestha2003.com.np" />
      </Helmet>

      <NavBar navLinks={navLinks} onContactClick={() => setShowPopup(true)} />
      <ContactFormPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <Hero />
      <Experience />
      <Education />
      <ProjectSection />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
