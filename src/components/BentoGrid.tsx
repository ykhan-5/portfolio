
import { Card } from "@/components/ui/card";
import TechCarousel from "./TechCarousel";

const experiences = [
  {
    title: "Technologies",
    content: <TechCarousel />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Education",
    content: "Computer Science & MIS",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Leadership",
    content: "Tech Club President",
    className: "md:col-span-1 md:row-span-1",
  },
];

const BentoGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-jakarta text-slate-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all ${exp.className} group hover:-translate-y-1`}
            >
              <h3 className="font-jakarta font-semibold text-xl mb-2 text-slate-900">
                {exp.title}
              </h3>
              <div className="text-slate-600">{exp.content}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
