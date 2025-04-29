
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs: Job[] = [
    {
      company: "Microsoft",
      title: "Senior Software Engineer",
      period: "2018 - Present",
      description: [
        "Leading development team focused on AI-powered enterprise solutions",
        "Architecting and implementing cloud-based software applications with a focus on performance and scalability",
        "Spearheading the integration of AI and ML technologies into existing software products",
        "Collaborating with cross-functional teams to define and implement product strategy",
        "Mentoring junior developers and conducting code reviews"
      ],
      technologies: ["C#", "Azure", "Microservices", "AI/ML", "React", "TypeScript"]
    },
    {
      company: "TCS",
      title: "Technology Lead",
      period: "2013 - 2018",
      description: [
        "Led multiple development teams across different projects",
        "Designed and implemented enterprise-level applications for banking and finance clients",
        "Established coding standards, best practices, and architectural guidelines",
        "Coordinated with onshore and offshore teams to ensure timely delivery of projects",
        "Conducted technical interviews and participated in talent acquisition"
      ],
      technologies: ["Java", "Spring", "Hibernate", "Oracle", "Angular", "AWS"]
    },
    {
      company: "Infosys",
      title: "Software Developer",
      period: "2008 - 2013",
      description: [
        "Developed and maintained web applications for retail and e-commerce clients",
        "Participated in full software development lifecycle from requirement analysis to deployment",
        "Implemented responsive design principles to enhance user experience",
        "Collaborated with QA teams to identify and fix software defects",
        "Documented technical specifications and prepared user manuals"
      ],
      technologies: ["Java", ".NET", "SQL Server", "JavaScript", "jQuery", "CSS"]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">04.</span>
          Where I've Worked
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab buttons for larger screens */}
          <div className="hidden lg:flex flex-col border-l border-portfolio-lightestNavy">
            {jobs.map((job, index) => (
              <Button
                key={job.company}
                variant="ghost"
                className={cn(
                  "justify-start rounded-none py-3 px-5 font-mono text-sm",
                  activeTab === index
                    ? "border-l-2 border-l-portfolio-teal text-portfolio-teal -ml-[1px]"
                    : "text-portfolio-slate hover:text-portfolio-teal hover:bg-portfolio-lightNavy/30"
                )}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </Button>
            ))}
          </div>
          
          {/* Tab buttons for mobile */}
          <div className="flex lg:hidden overflow-x-auto hide-scrollbar pb-2 border-b border-portfolio-lightestNavy mb-6">
            {jobs.map((job, index) => (
              <Button
                key={job.company}
                variant="ghost"
                className={cn(
                  "justify-start py-2 px-4 font-mono text-sm flex-shrink-0",
                  activeTab === index
                    ? "border-b-2 border-b-portfolio-teal text-portfolio-teal rounded-none"
                    : "text-portfolio-slate hover:text-portfolio-teal"
                )}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </Button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="lg:flex-1">
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-1">
              {jobs[activeTab].title} <span className="text-portfolio-teal">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-portfolio-slate mb-4">{jobs[activeTab].period}</p>
            
            <ul className="space-y-3 mb-6">
              {jobs[activeTab].description.map((point, i) => (
                <li key={i} className="flex">
                  <ArrowRight className="h-5 w-5 text-portfolio-teal flex-shrink-0 mt-0.5 mr-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {jobs[activeTab].technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-portfolio-lightNavy text-portfolio-lightSlate text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
