
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-24">
      <div className="container mx-auto px-4">
        <p className="text-portfolio-teal font-mono mb-5 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Devesh Acharya.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-portfolio-slate mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h2>
        <div className="max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-lg text-portfolio-slate mb-8">
            I'm a software development professional with over 15 years of experience in
            designing and implementing innovative solutions. Specializing in AI integration,
            cloud architecture, and enterprise software development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal group" 
              size="lg"
              asChild
            >
              <a href="#projects">
                Check out my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal" 
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
    </section>
  );
};

export default Hero;
