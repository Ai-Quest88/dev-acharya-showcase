
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <span className="text-portfolio-teal font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm Devesh, a seasoned software development professional with over 15 years of experience in the tech industry. 
                My journey in technology began at Pune University where I earned my Master's degree in Computer Applications.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of working with diverse technologies and platforms, 
                from building enterprise-level solutions at Microsoft to developing innovative AI applications.
                My expertise spans across cloud architecture, AI integration, and full-stack development.
              </p>

              <p>
                Currently, I'm focused on developing AI-powered solutions that solve real-world problems. 
                I'm passionate about creating software that is not only functional but also intuitive and user-friendly.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Python', 'Azure', 'AWS', 'Machine Learning', 'Docker', 'Kubernetes'].map(tech => (
                  <div key={tech} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-portfolio-teal mr-2" />
                    <span className="font-mono text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden w-full max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 bg-portfolio-teal/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Devesh Acharya" 
                className="rounded-md w-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -inset-1.5 border-2 border-portfolio-teal rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
