
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Lead Software Engineer",
    companyName: "Tech Corp",
    period: "May 2020 - Present",
    description: "Led development of core features and mentored junior developers."
  },
  {
    company: "Software Engineer",
    companyName: "Innovative Solutions",
    period: "Jan 2018 - May 2020",
    description: "Developed and maintained multiple client-facing applications."
  },
  {
    company: "Software Developer Intern",
    companyName: "StartUp Inc",
    period: "Mar 2017 - Jan 2018",
    description: "Assisted in developing new features and fixing bugs."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-jakarta text-slate-900 mb-12 text-center">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-jakarta font-semibold text-xl text-slate-900">
                      {exp.company}
                    </h3>
                    <p className="text-sky-600">{exp.companyName}</p>
                  </div>
                  <span className="text-sm text-slate-500">{exp.period}</span>
                </div>
                <p className="text-slate-600">{exp.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
