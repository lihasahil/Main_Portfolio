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
