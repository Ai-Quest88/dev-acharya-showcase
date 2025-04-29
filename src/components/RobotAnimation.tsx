
import { useEffect, useRef } from 'react';
import { Robot } from 'lucide-react';

const RobotAnimation = () => {
  const robotRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        
        // Calculate the difference between current position and target
        const deltaX = x - robotX;
        const deltaY = y - robotY;
        
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
      className="fixed w-14 h-14 flex items-center justify-center pointer-events-none z-50"
      style={{ transform: 'translate(-50px, -50px)' }}
    >
      <div className="relative">
        <Robot size={28} className="text-portfolio-teal animate-float" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-portfolio-teal/20 rounded-full filter blur-sm"></div>
      </div>
    </div>
  );
};

export default RobotAnimation;
