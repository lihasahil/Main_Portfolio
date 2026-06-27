import Education from "@/components/Sections/Education";
import Experience from "@/components/Sections/Experience";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import ProjectSection from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

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
