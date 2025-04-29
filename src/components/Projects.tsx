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
      title: "BulkAI",
      description: "A comprehensive application that helps users automate file sorting and processing using AI algorithms. The tool can efficiently categorize and organize large volumes of documents based on content analysis.",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
      github: "https://github.com/Ai-Quest88/BulkAI",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: true
    },
    {
      title: "AIChat-LLM-RAG-App",
      description: "An advanced chatbot application that uses Large Language Models and Retrieval-Augmented Generation to provide accurate and context-aware responses to user queries.",
      techStack: ["Python", "LangChain", "OpenAI", "React", "Flask"],
      github: "https://github.com/Ai-Quest88/AIChat-LLM-RAG-App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true,
      reverse: true
    }
  ];

  const otherProjects = [
    {
      title: "ClimateCast",
      description: "A weather forecasting application that provides accurate predictions using data from multiple sources and machine learning algorithms.",
      techStack: ["JavaScript", "React", "Chart.js", "Weather API", "Node.js"],
      github: "https://github.com/Ai-Quest88/weather-app"
    },
    {
      title: "AI Document Scanner",
      description: "A mobile application that uses computer vision to scan documents and convert them to editable text with high accuracy.",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flutter", "Firebase"],
      github: "https://github.com/Ai-Quest88/document-scanner"
    },
    {
      title: "Smart Expense Tracker",
      description: "An AI-powered financial management tool that automatically categorizes expenses and provides insights on spending habits.",
      techStack: ["React", "Node.js", "MongoDB", "TensorFlow.js", "AWS"],
      github: "https://github.com/Ai-Quest88/finance-tracker"
    },
    {
      title: "Code Mentor AI",
      description: "An educational platform that provides personalized coding lessons and feedback using AI to adapt to the learner's progress.",
      techStack: ["TypeScript", "React", "Python", "Django", "PostgreSQL"],
      github: "https://github.com/Ai-Quest88/code-mentor"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">02.</span>
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
