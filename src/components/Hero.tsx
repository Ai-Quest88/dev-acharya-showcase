import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-portfolio-teal/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <p 
          className={`text-portfolio-teal font-mono mb-5 transform transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Hi, my name is
        </p>
        <h1 
          className={`text-5xl md:text-6xl lg:text-8xl font-bold text-portfolio-lightestSlate mb-2 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Devesh Acharya.
        </h1>
        <h2 
          className={`text-4xl md:text-5xl lg:text-7xl font-bold text-portfolio-slate mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          I ensure quality in everything we build.
        </h2>
        <div 
          className={`max-w-2xl transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg text-portfolio-slate mb-8">
            I'm a Senior Quality Engineer at Macquarie Group with over 17 years of experience in the technology industry. 
            I specialize in quality assurance, test automation, and leading technical teams to deliver robust software solutions 
            across financial services and enterprise applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal group rounded-full px-8" 
              size="lg"
              asChild
            >
              <a href="#projects" className="flex items-center">
                Check out my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded-full px-8" 
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#contact">
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-portfolio-slate text-sm font-mono mb-2">Scroll</span>
        <div className="w-0.5 h-12 bg-portfolio-teal/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
