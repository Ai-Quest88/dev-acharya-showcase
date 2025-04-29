
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
      company: "NVIDIA",
      title: "Principal Member of Technical Staff",
      period: "2020 - Present",
      description: [
        "Leading the development of AI infrastructure tools and platforms",
        "Architecting and implementing scalable machine learning systems",
        "Driving innovation in GPU-accelerated computing solutions",
        "Collaborating with research teams to develop cutting-edge AI applications",
        "Mentoring team members and providing technical leadership"
      ],
      technologies: ["CUDA", "Python", "TensorFlow", "PyTorch", "C++", "Kubernetes"]
    },
    {
      company: "VMware",
      title: "Sr. Member of Technical Staff",
      period: "2015 - 2020",
      description: [
        "Led development of virtualization and cloud infrastructure components",
        "Designed and implemented enterprise-level solutions for hybrid cloud environments",
        "Optimized system performance and resource utilization for virtualized workloads",
        "Developed automation tools for cloud deployment and management",
        "Collaborated with product teams to define technical roadmaps"
      ],
      technologies: ["vSphere", "Java", "Spring", "JavaScript", "AWS", "Docker"]
    },
    {
      company: "Oracle",
      title: "Principal Software Engineer",
      period: "2010 - 2015",
      description: [
        "Led development teams for Oracle Fusion Middleware products",
        "Designed and implemented enterprise database solutions",
        "Architected high-availability systems for mission-critical applications",
        "Optimized query performance and database operations",
        "Mentored junior engineers and conducted code reviews"
      ],
      technologies: ["Oracle DB", "PL/SQL", "Java", "WebLogic", "SOA", "JEE"]
    },
    {
      company: "NetApp",
      title: "Software Engineer",
      period: "2006 - 2010",
      description: [
        "Developed storage management solutions for enterprise environments",
        "Implemented fault-tolerant systems for data protection",
        "Designed data backup and recovery mechanisms",
        "Optimized storage performance for large-scale deployments",
        "Collaborated on cross-functional projects with hardware teams"
      ],
      technologies: ["C", "Unix", "Storage Systems", "Networking", "File Systems", "Clustering"]
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
