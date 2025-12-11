import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAVIGATION_LINKS, APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cartagena-dark/90 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Hexagon className="h-8 w-8 text-cartagena-teal fill-cartagena-teal/20" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cartagena-teal transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-5 py-2 border border-cartagena-teal text-cartagena-teal hover:bg-cartagena-teal hover:text-cartagena-dark transition-all rounded-md font-medium text-sm"
            >
              Únete Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cartagena-teal transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cartagena-slate/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-gray-800">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center w-full px-5 py-3 bg-cartagena-teal text-cartagena-dark font-bold rounded-md"
              >
                Únete al Ecosistema
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;