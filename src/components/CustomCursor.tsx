
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = (e: MouseEvent) => {
      if ((e.target as Element).tagName === 'A' || 
          (e.target as Element).tagName === 'BUTTON' || 
          (e.target as Element).closest('a') || 
          (e.target as Element).closest('button')) {
        setLinkHovered(true);
      }
    };
    
    const handleMouseLeaveLink = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnterLink);
    document.addEventListener("mouseout", handleMouseLeaveLink);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnterLink);
      document.removeEventListener("mouseout", handleMouseLeaveLink);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-portfolio-teal pointer-events-none z-50 transition-transform duration-100 ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : ""} ${linkHovered ? "scale-150" : ""}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-portfolio-teal rounded-full pointer-events-none z-50 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
