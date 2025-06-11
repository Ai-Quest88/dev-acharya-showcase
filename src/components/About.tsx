
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
                Hello! I'm Devesh, a Senior Quality Engineer at Macquarie Group with over 17 years of experience in the technology industry. 
                I specialize in quality assurance, test automation, and leading technical teams to deliver robust software solutions across financial services and enterprise applications.
              </p>
              
              <p className="reveal">
                My journey began at Accenture where I developed enterprise software solutions, and has evolved through various leadership roles at top-tier companies including Siemens, Commonwealth Bank, Ansarada, Fluent Commerce, and now Macquarie Group. 
                I'm passionate about implementing cutting-edge testing methodologies and building scalable automation frameworks.
              </p>

              <p className="reveal">
                What truly excites me about the current technological landscape is the transformative potential of AI in quality engineering. 
                I'm actively exploring how artificial intelligence can revolutionize testing processes - from intelligent test generation and self-healing automation 
                to predictive quality analytics and AI-powered code review. The intersection of traditional QA practices with modern AI capabilities 
                represents the future of software quality, and I'm committed to staying at the forefront of this evolution.
              </p>
              
              <div className="space-y-4 mt-8 reveal">
                <h3 className="text-xl font-medium text-portfolio-lightestSlate flex items-center gap-2">
                  <Briefcase className="text-portfolio-teal h-5 w-5" />
                  Current Role
                </h3>
                
                <div className="pl-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building className="text-portfolio-teal h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-portfolio-lightestSlate">Macquarie Group</h4>
                        <p className="text-sm flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-portfolio-teal" />
                          <span>2023 - Present</span>
                        </p>
                        <p className="mt-1">
                          Leading quality assurance initiatives across fintech projects, implementing automated testing frameworks 
                          for critical financial systems, and mentoring engineering teams in quality best practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="reveal mt-8 font-medium text-portfolio-lightestSlate">
                Here are the key technologies and tools I work with:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 reveal">
                {['Playwright', 'Cypress', 'Selenium', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Python', '.NET Core', 'Spring Boot', 'Node.js', 'Jest', 'TestNG', 'API Testing', 'REST Assured', 'Azure', 'AWS', 'Docker', 'CI/CD', 'SQL Server', 'PostgreSQL', 'BDD', 'Performance Testing', 'Machine Learning'].map(tech => (
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
