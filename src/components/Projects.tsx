import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  reverse?: boolean;
}

const ProjectCard = ({ title, description, techStack, github, demo, image, featured = false, reverse = false }: ProjectProps) => {
  if (featured) {
    return (
      <div className={`relative grid md:grid-cols-12 gap-4 md:gap-10 items-center mb-16 md:mb-24 ${reverse ? 'md:text-right' : ''}`}>
        {/* Project Image (changes position based on reverse prop) */}
        <div className={`md:col-span-7 ${reverse ? 'md:col-start-1 order-2 md:order-1' : 'md:col-start-6 order-2'} relative rounded-md overflow-hidden`}>
          <a href={demo || github || '#'} target="_blank" rel="noopener noreferrer" className="block">
            <div className="absolute inset-0 bg-portfolio-teal/20 hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img 
              src={image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"} 
              alt={title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
        
        {/* Project Content */}
        <div className={`md:col-span-7 md:col-start-1 ${reverse ? 'md:col-start-6 order-1' : 'md:col-start-1 order-1'} md:absolute z-20`}>
          <div className={`p-6 rounded-lg ${reverse ? 'md:text-right' : ''}`}>
            <p className="text-portfolio-teal font-mono text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-portfolio-lightestSlate mb-4">
              <a href={demo || github || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-teal transition-colors">
                {title}
              </a>
            </h3>
            
            <div className={`bg-portfolio-lightNavy p-6 rounded-lg shadow-xl mb-4 ${reverse ? 'md:ml-auto' : ''}`}>
              <p className="text-portfolio-lightSlate">{description}</p>
            </div>
            
            <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 font-mono text-sm text-portfolio-slate ${reverse ? 'md:justify-end' : ''}`}>
              {techStack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            
            <div className={`flex gap-4 ${reverse ? 'md:justify-end' : ''}`}>
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-portfolio-lightestSlate hover:text-portfolio-teal">
                  <Github size={20} />
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-lightestSlate hover:text-portfolio-teal">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Non-featured project card (smaller)
  return (
    <div className="bg-portfolio-lightNavy rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-portfolio-lightestSlate">
          <a href={demo || github || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-teal transition-colors">
            {title}
          </a>
        </h3>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-portfolio-lightSlate hover:text-portfolio-teal">
              <Github size={18} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-lightSlate hover:text-portfolio-teal">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-portfolio-slate mb-4 flex-grow">{description}</p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-portfolio-slate">
        {techStack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "AIQE — AI Quality Engineering Platform",
      description: "An AI-powered quality engineering platform for automated test execution, requirement analysis and AI-assisted test case generation — turning plain-English requirements into executable test suites. Built AI-natively and live at aiqe.info.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "AI Test Generation"],
      github: "https://github.com/Ai-Quest88/aiqe-wizard.github.io",
      demo: "https://aiqe.info",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: true
    },
    {
      title: "FinSight — AI Personal Finance",
      description: "A personal finance platform with AI-assisted transaction categorisation and universal statement upload — import any bank's CSV and let AI parse, classify and organise transactions across entities and accounts. Built end-to-end with Claude Code on React, Supabase and Express.",
      techStack: ["React", "TypeScript", "Supabase", "Express", "TanStack Query", "Claude Code"],
      github: "https://github.com/Ai-Quest88/pocket-penny-wizard",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true,
      reverse: true
    }
  ];

  const otherProjects = [
    {
      title: "Developer Portfolio (this site)",
      description: "This portfolio is itself an AI-built product — generated with Lovable, then evolved and maintained with Claude Code, including its .claude/ workflow configuration and custom slash commands.",
      techStack: ["React", "TypeScript", "Vite", "Lovable", "Claude Code"],
      github: "https://github.com/Ai-Quest88/dev-acharya-showcase",
      demo: "https://devesh.aiqe.info"
    },
    {
      title: "MCP Playwright (fork)",
      description: "Fork of the Playwright Model Context Protocol server — browser and API automation for Claude Desktop, Cline and Cursor. Base for my agentic browser-automation experiments.",
      techStack: ["TypeScript", "Playwright", "MCP", "Node.js"],
      github: "https://github.com/Ai-Quest88/mcp-playwright"
    },
    {
      title: "Browser-Use Web UI (fork)",
      description: "Fork of the browser-use web UI for running AI agents in the browser — an experimentation platform for autonomous web navigation and agentic task execution.",
      techStack: ["Python", "browser-use", "AI Agents", "Gradio"],
      github: "https://github.com/Ai-Quest88/web-ui"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 md:mb-40">
          <span className="text-portfolio-teal font-mono text-xl mr-2">04.</span>
          Things I've Built
        </h2>
        
        {/* Featured Projects */}
        <div className="mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-portfolio-lightestSlate mb-4">Other Noteworthy Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal" 
            size="lg"
            asChild
          >
            <a href="https://github.com/Ai-Quest88" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
