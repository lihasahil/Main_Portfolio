import Education from "@/components/Sections/Education";
import Experience from "@/components/Sections/Experience";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import ProjectSection from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="mx-4 sm:mx-6 lg:mx-20 xl:mx-20 border-x border-border">
        <Hero />
        <Experience />
        <Education />
        <ProjectSection />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
