
import { Heart, Star, Circle, Moon, Rocket } from 'lucide-react';

const RobotAnimation = () => {
  return (
    <div className="w-full h-full relative">
      {/* Outer orbit paths */}
      <div className="absolute inset-0 border-2 border-dashed border-portfolio-teal/30 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-4 border border-dashed border-portfolio-lightSlate/30 rounded-full animate-reverse-spin-slow"></div>
      <div className="absolute inset-8 border border-dotted border-portfolio-teal/20 rounded-full animate-spin-slow"></div>
      
      {/* Space particles */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-portfolio-teal rounded-full animate-float-particle"></div>
      <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-portfolio-lightestSlate rounded-full animate-float-particle-delay"></div>
      <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-portfolio-teal/70 rounded-full animate-float-particle-delay-2"></div>
      <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-portfolio-white/70 rounded-full animate-float-particle"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-portfolio-teal/80 rounded-full animate-float-particle-delay-2"></div>
      
      {/* Small decorative shapes in orbit */}
      <div className="absolute top-1/4 right-1/4 animate-orbit">
        <div className="w-3 h-3 bg-portfolio-teal/80 rounded-sm transform rotate-45"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-orbit-delay">
        <div className="w-2 h-2 border border-portfolio-teal rounded-full"></div>
      </div>
      <div className="absolute top-2/3 left-1/2 animate-orbit-delay-2">
        <Star size={10} className="text-portfolio-white fill-portfolio-white/80" />
      </div>
      
      {/* Main astronaut image */}
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <img 
          src="/lovable-uploads/2b758864-5e34-4a57-a90d-7212f659c3aa.png" 
          alt="Space astronaut" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]"
        />
      </div>
      
      {/* Orbital elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 animate-orbit">
        <Moon size={10} className="text-portfolio-teal fill-portfolio-teal/30" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 animate-orbit-delay">
        <Rocket size={12} className="text-portfolio-lightestSlate" />
      </div>
      
      {/* Heart element */}
      <div className="absolute top-1/4 right-1/4 animate-pulse-slow">
        <Heart size={14} className="text-portfolio-teal fill-portfolio-teal/50" />
      </div>
    </div>
  );
};

export default RobotAnimation;
