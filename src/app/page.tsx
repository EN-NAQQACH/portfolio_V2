import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
