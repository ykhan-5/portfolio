
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-white bg-noise">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Experience />
      <Projects />
    </div>
  );
};

export default Index;
