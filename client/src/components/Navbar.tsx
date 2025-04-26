import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Products', href: '#products' },
    { name: 'Skills', href: '#skills' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full bg-primary/90 text-white z-50 backdrop-blur-sm transition-all ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <i className="fas fa-anchor text-accent mr-2"></i>
          <span className="font-heading font-bold">Product Voyage</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-accent transition"
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  // Update URL without page reload
                  window.history.pushState(null, '', link.href);
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-primary/95 backdrop-blur-sm transition-all duration-300 ease-in-out`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="hover:text-accent transition py-2"
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', link.href);
                  setIsMenuOpen(false);
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
