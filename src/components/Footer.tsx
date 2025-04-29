
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-portfolio-navy border-t border-portfolio-lightestNavy/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <div className="flex space-x-8 mb-8">
            <a 
              href="https://github.com/Ai-Quest88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all relative group"
              aria-label="GitHub"
            >
              <Github size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-portfolio-lightNavy py-1 px-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
            </a>
            <a 
              href="http://linkedin.com/in/devesh-acharya-58925a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all relative group"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-portfolio-lightNavy py-1 px-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
            </a>
            <a 
              href="mailto:devesh.acharya@example.com" 
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all relative group"
              aria-label="Email"
            >
              <Mail size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-portfolio-lightNavy py-1 px-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Email</span>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-portfolio-slate text-sm font-mono">
              Designed & Built by Devesh Acharya
            </p>
            <p className="text-portfolio-slate text-xs mt-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
