import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title:
        "DropAwf - Hosted Full-Stack Courier App (COSC 3380 Database Project)",
      description:
        "Dropawf is a full-stack database web application project created to design and implement a database system for a courier service complete with shipping services, package tracking, product sales, reporting, and customer and employee management.",
      tags: ["React", "Node.js", "MySQL", "Azure", "Cloudflare"],
      image: "/placeholder.svg",
      githubURL: "https://github.com/ykhan-5/dropawf",
    },
    {
      title:
        "ConocoPhillips Innovation Challenge - Machine Learning Drilling Support System",
      description:
        "This project implements a machine learning-based decision support system for well drilling operations. The system predicts potential failures during drilling operations and recommends whether to continue drilling or perform repairs based on real-time data.",
      tags: ["Python", "pandas", "scikit-learn"],
      image: "/placeholder.svg",
      githubURL: "https://github.com/ykhan-5/challenge",
    },
    // {
    //   title: "Project Three",
    //   description: "API integration and data visualization",
    //   tags: ["TypeScript", "React", "D3.js"],
    //   image: "/placeholder.svg",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-jakarta text-slate-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:-translate-y-1 transition-all relative" // Added 'relative' for absolute positioning of the icon
            >
              {/* <div className="aspect-video bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="p-6">
                <h3 className="font-jakarta font-semibold text-xl mb-2 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.githubURL && (
                <div className="absolute bottom-4 right-4">
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
