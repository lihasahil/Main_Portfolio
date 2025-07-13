import "./App.css";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import NavBar from "./components/NavBar";
import Hero from "./Sections/Hero";
import ProjectSection from "./Sections/Projects";

function App() {
  const navLinks = [
    { link: "#about", name: "About" },
    { link: "#experience", name: "Experience" },
    { link: "#projects", name: "Projects" },
    { link: "#skills", name: "Skills" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <NavBar navLinks={navLinks} />
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
