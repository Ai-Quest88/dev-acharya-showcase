
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-portfolio-navy border-t border-portfolio-lightestNavy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/Ai-Quest88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="http://linkedin.com/in/devesh-acharya-58925a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:devesh.acharya@example.com" 
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <Mail size={22} />
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
