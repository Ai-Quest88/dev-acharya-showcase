
import { useEffect, useRef, useState } from 'react';
import { Bot, Circle, Heart } from 'lucide-react';

const RobotAnimation = () => {
  const robotRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Calculate position for the robot to follow the cursor
      const x = e.clientX;
      const y = e.clientY;
      
      const robotElement = robotRef.current;
      
      // Apply some easing to make movement smooth
      const updatePosition = () => {
        if (!robotElement) return;
        
        const robotRect = robotElement.getBoundingClientRect();
        const robotX = robotRect.left + robotRect.width / 2;
        const robotY = robotRect.top + robotRect.height / 2;
        
        // Calculate the distance between cursor and robot
        const deltaX = x - robotX;
        const deltaY = y - robotY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Set hovering state based on distance
        setIsHovering(distance < 100);
        
        // Ease towards the target position
        const newX = robotX + deltaX * 0.1;
        const newY = robotY + deltaY * 0.1;
        
        // Update the position
        robotElement.style.transform = `translate(${newX - 25}px, ${newY - 25}px)`;
        
        // Continue animation if still moving significantly
        if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
          timeoutRef.current = setTimeout(updatePosition, 16);
        }
      };
      
      updatePosition();
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={robotRef}
      className="fixed w-28 h-28 flex items-center justify-center pointer-events-none z-50"
      style={{ transform: 'translate(-50px, -50px)' }}
    >
      {/* Animated robot container with orbit effect */}
      <div className="relative w-full h-full">
        {/* Circular orbit paths */}
        <div className="absolute inset-0 border-2 border-dashed border-portfolio-teal/30 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-2 border border-dashed border-blue-400/30 rounded-full animate-reverse-spin-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-500 rounded-full animate-float-particle-delay"></div>
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-blue-400 rounded-full animate-float-particle-delay-2"></div>
        
        {/* Main robot with glow effect */}
        <div className={`absolute inset-0 flex items-center justify-center ${isHovering ? 'animate-robot-hover' : 'animate-float'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-teal/20 rounded-full filter blur-lg transform scale-150"></div>
            <Bot size={40} className="text-portfolio-teal z-10 relative" />
            
            {/* Heart icon that appears on hover */}
            <div className={`absolute -top-4 -right-2 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <Heart size={16} className="text-pink-500 fill-pink-500 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Shadow effect */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-portfolio-teal/20 rounded-full filter blur-md"></div>
        
        {/* Orbital elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 animate-orbit">
          <Circle size={10} className="text-portfolio-teal fill-portfolio-teal/20" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 animate-orbit-delay">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RobotAnimation;
