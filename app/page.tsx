import Hero from "@/Sections/Hero";
import Experience from "@/Sections/Experience";
import Education from "@/Sections/Education";
import ProjectSection from "@/Sections/Projects";
import Skills from "@/Sections/Skills";
import Footer from "@/Sections/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <Experience />
      <Education />
      <ProjectSection />
      <Skills />
      <Footer />
    </div>
  );
}
