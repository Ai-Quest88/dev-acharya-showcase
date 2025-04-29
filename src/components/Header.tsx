
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? 'py-3 bg-portfolio-navy/90 backdrop-blur-sm shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <a href="#" className="text-portfolio-teal text-2xl font-bold font-mono">
            Devesh<span className="text-portfolio-white">.dev</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                <a
                  href={link.href}
                  className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors duration-300 font-mono text-sm"
                >
                  <span className="text-portfolio-teal">{`0${index + 1}. `}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="outline"
          className="hidden md:inline-flex border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-mono text-sm"
          asChild
        >
          <a href="/Devesh_Acharya_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-teal" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-portfolio-lightNavy/95 z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors duration-300 text-lg font-mono"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-portfolio-teal">{`0${index + 1}. `}</span>
              {link.name}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          className="mt-8 border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-mono"
          asChild
        >
          <a href="/Devesh_Acharya_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
