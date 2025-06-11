
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Job {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs: Job[] = [
    {
      company: "Macquarie Group",
      title: "Senior Quality Engineer",
      period: "Jan 2023 - Present",
      location: "Sydney, New South Wales, Australia • Hybrid",
      description: [
        "Leading quality assurance initiatives across fintech projects",
        "Implementing automated testing frameworks for critical financial systems",
        "Collaborating with cross-functional teams to ensure product quality",
        "Developing quality metrics and reporting mechanisms",
        "Mentoring junior engineers in quality best practices"
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Python", "CI/CD", "AWS"]
    },
    {
      company: "Commonwealth Bank",
      title: "Automation Test Lead",
      period: "Mar 2022 - Jan 2023",
      location: "Sydney, New South Wales, Australia",
      description: [
        "Led test automation strategy for banking applications",
        "Designed and implemented automated testing frameworks",
        "Managed a team of test automation engineers",
        "Collaborated with product owners and developers on quality requirements",
        "Reduced testing cycle time by 40% through automation improvements"
      ],
      technologies: ["TestNG", "Selenium", "JavaScript", "Java", "Docker", "Jenkins"]
    },
    {
      company: "Fluent Commerce",
      title: "Senior Quality Assurance Engineer",
      period: "Oct 2019 - Feb 2022",
      location: "Sydney, New South Wales, Australia",
      description: [
        "Developed and maintained test automation frameworks for e-commerce platforms",
        "Implemented BDD approaches using Cucumber and Gherkin",
        "Conducted performance testing on high-traffic commerce systems",
        "Collaborated with development teams in an agile environment",
        "Improved test coverage by 60% through systematic test planning"
      ],
      technologies: ["Cucumber", "Playwright", "API Testing", "Postman", "JavaScript", "Java"]
    },
    {
      company: "Macquarie Group",
      title: "Test Automation Lead",
      period: "Jun 2018 - Oct 2019",
      location: "Sydney, Australia",
      description: [
        "Led testing initiatives for financial services applications",
        "Established automated testing infrastructure and CI/CD pipelines",
        "Trained and mentored quality engineers on automation best practices",
        "Collaborated with product owners to translate requirements into testable criteria",
        "Implemented shift-left testing methodologies"
      ],
      technologies: ["Selenium", "Python", "TestNG", "JMeter", "Docker", "Jenkins"]
    },
    {
      company: "Ansarada",
      title: "Quality Assistance Tech Lead",
      period: "Apr 2016 - Jun 2018",
      location: "Sydney, Australia",
      description: [
        "Provided technical leadership for QA team in a SaaS environment",
        "Developed test strategies for data room and M&A software products",
        "Implemented test automation frameworks using Selenium and JavaScript",
        "Mentored junior QA engineers and promoted best practices",
        "Collaborated with development teams to improve product quality"
      ],
      technologies: ["JavaScript", "Selenium", "API Testing", "SQL", "Azure DevOps"]
    },
    {
      company: "Commonwealth Bank",
      title: "Technical Team Lead",
      period: "Apr 2015 - Mar 2016",
      location: "Sydney, Australia",
      description: [
        "Led technical testing team for banking applications",
        "Developed and implemented testing strategies across multiple projects",
        "Coordinated with business stakeholders to ensure quality standards",
        "Managed test environments and test data",
        "Mentored team members on technical testing approaches"
      ],
      technologies: ["Java", "Selenium", "JMeter", "SQL", "TestNG"]
    },
    {
      company: "Siemens Technology India",
      title: "Associate Consultant",
      period: "Nov 2011 - Apr 2015",
      location: "Bengaluru Area, India",
      description: [
        "Provided consulting services for enterprise software implementations",
        "Developed and executed test strategies for industrial software systems",
        "Collaborated with international teams on global projects",
        "Implemented automation frameworks for continuous testing",
        "Trained clients on quality assurance methodologies"
      ],
      technologies: ["Java", "Selenium", "TestNG", "SQL", "Jenkins"]
    },
    {
      company: "Accenture",
      title: "Senior Software Engineer",
      period: "Jun 2009 - Oct 2011",
      location: "Bengaluru Area, India",
      description: [
        "Developed enterprise software solutions for global clients",
        "Implemented test-driven development practices",
        "Collaborated with cross-functional teams in an agile environment",
        "Contributed to continuous improvement of development processes",
        "Mentored junior engineers on software development best practices"
      ],
      technologies: ["Java", "Spring", "Hibernate", "JavaScript", "Oracle"]
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
                key={`${job.company}-${job.period}`}
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
                key={`${job.company}-${job.period}-mobile`}
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
            <p className="text-sm font-mono text-portfolio-slate mb-1">{jobs[activeTab].period}</p>
            <p className="text-sm font-mono text-portfolio-slate mb-4">{jobs[activeTab].location}</p>
            
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
