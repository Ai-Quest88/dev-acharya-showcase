
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-portfolio-teal/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="reveal section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 reveal">
            <div className="space-y-6 text-lg">
              <p className="reveal">
                Hello! I'm Devesh, a Senior Software Engineer at Microsoft with over 14 years of experience in the technology industry. 
                I hold a Master's degree in Computer Applications from Pune University and have been passionate about building innovative software solutions.
              </p>
              
              <p className="reveal">
                Throughout my career, I've specialized in developing enterprise applications with a focus on cloud solutions, 
                AI integration, and full-stack development. My experience spans across multiple domains including healthcare, 
                finance, and manufacturing sectors.
              </p>

              <p className="reveal">
                At Microsoft, I lead software development teams focusing on AI-powered enterprise solutions, architecting 
                cloud-based applications with emphasis on scalability and performance. I'm also involved in mentoring junior 
                developers and collaborating with cross-functional teams.
              </p>

              <p className="reveal mt-8 font-medium text-portfolio-lightestSlate">
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 reveal">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'C#', 'Azure', 'AWS', 'AI/ML', 'Docker', 'Kubernetes'].map(tech => (
                  <div key={tech} className="flex items-center group">
                    <ArrowRight className="h-4 w-4 text-portfolio-teal mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="font-mono text-sm group-hover:text-portfolio-teal transition-colors duration-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group reveal">
            <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-teal/20 to-purple-500/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-lg overflow-hidden w-full max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 bg-portfolio-teal/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Devesh Acharya" 
                className="rounded-lg w-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
