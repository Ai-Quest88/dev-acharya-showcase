import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education & Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-500 z-50 ${
        isScrolled
          ? 'py-3 bg-portfolio-navy/80 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <a href="#" className="text-portfolio-teal text-3xl font-bold font-mono">
            D<span className="text-portfolio-white">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors duration-300 font-mono text-sm py-2"
                >
                  <span className="text-portfolio-teal">{`0${index + 1}. `}</span>
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-portfolio-teal group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-teal z-50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-portfolio-navy/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-portfolio-lightSlate hover:text-portfolio-teal transition-colors duration-300 text-xl font-mono transform text-center max-w-[85vw] ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-portfolio-teal">{`0${index + 1}. `}</span>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
