
import { ArrowRight, Briefcase, Building, Calendar } from "lucide-react";
import RobotAnimation from "./RobotAnimation";

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-portfolio-navy">
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
              
              <div className="space-y-4 mt-8 reveal">
                <h3 className="text-xl font-medium text-portfolio-lightestSlate flex items-center gap-2">
                  <Briefcase className="text-portfolio-teal h-5 w-5" />
                  Professional Experience
                </h3>
                
                <div className="pl-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building className="text-portfolio-teal h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-portfolio-lightestSlate">Microsoft</h4>
                        <p className="text-sm flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-portfolio-teal" />
                          <span>2019 - Present</span>
                        </p>
                        <p className="mt-1">
                          Lead software development teams focusing on AI-powered enterprise solutions, 
                          architecting cloud-based applications with emphasis on scalability and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building className="text-portfolio-teal h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-portfolio-lightestSlate">Oracle</h4>
                        <p className="text-sm flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-portfolio-teal" />
                          <span>2014 - 2019</span>
                        </p>
                        <p className="mt-1">
                          Developed enterprise-grade database solutions and cloud integration services, 
                          working with cross-functional teams to deliver robust applications.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building className="text-portfolio-teal h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-portfolio-lightestSlate">IBM</h4>
                        <p className="text-sm flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-portfolio-teal" />
                          <span>2010 - 2014</span>
                        </p>
                        <p className="mt-1">
                          Started career as a software developer, focused on system integration and 
                          backend development for financial services clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
            <div className="relative rounded-lg overflow-hidden w-full max-w-md mx-auto md:mx-0 bg-portfolio-navy border border-portfolio-lightNavy p-6">
              <div className="aspect-square bg-portfolio-navy">
                <RobotAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
