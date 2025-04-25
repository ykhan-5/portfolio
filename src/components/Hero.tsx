import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, #f8fafc, rgb(209, 230, 251))`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-jakarta text-slate-900 mb-6">
            Hi, I'm <span className="text-sky-500">Yusuf Khan</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            A Computer Science & MIS student passionate about building impactful
            software solutions. Currently focusing on web development and cloud
            architecture design.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Link to={"projects"} spy={true} smooth={true} offset={-64}>
                View Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="../../public/YusufKhanCS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
