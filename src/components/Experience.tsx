import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Software Engineering Intern",
    companyName: "HCSS",
    period: "Jan 2025 - Present",
    description:
      "Redesigned and migrated a company-wide internal form from legacy Razor to React and C#, streamlining product access management for 4,000+ companies.",
  },
  {
    company: "API Product Management Intern",
    companyName: "HCSS",
    period: "Aug 2024 - January 2025",
    description:
      "Developed API guides in collaboration with 10+ SMEs, improving the depth and clarity of technical documentation, and streamlined customer workflows across API endpoints — reducing support call volume by 15% through clearer guides like Costs for Cost Code and User Setup.",
  },
  {
    company: "Data Structures SEP Workshop Facilitator",
    companyName: "University of Houston",
    period: "Dec 2023 - May 2025",
    description:
      "Guided 400+ students through an advanced data structures and algorithms curriculum in C++, achieving an 85% pass rate. Created comprehensive study materials and practice problems that boosted exam scores by 10% over the average. Designed and led weekly interactive workshops for 30+ students, incorporating live coding sessions and algorithmic problem-solving exercises.",
  },
  {
    company: "Business Optimization Intern",
    companyName: "Waste Management",
    period: "June 2024 - August 2024",
    description:
      "Validated service availability across 1,500+ zones on WM.com, preventing inaccurate bulk pickup orders. Improved chatbot performance with AWS Lex and Snowflake analysis. Built 50+ SQL scripts, uncovering a 9.31% increase in chatbot interaction volume from new features.",
  },
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
