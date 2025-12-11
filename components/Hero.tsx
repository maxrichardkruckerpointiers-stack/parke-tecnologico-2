import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cartagena-teal/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cartagena-sea/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-left space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cartagena-teal/30 bg-cartagena-teal/10">
            <span className="text-cartagena-teal text-sm font-semibold tracking-wide">
              PRIMER HUB WEB3 DEL CARIBE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white">
            El Futuro se Descentraliza en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cartagena-teal to-cartagena-sea">Cartagena</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Un ecosistema innovador donde startups, nómadas digitales y tecnología blockchain convergen frente al mar Caribe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-center px-8 py-4 bg-cartagena-teal text-cartagena-dark font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(100,255,218,0.3)]"
            >
              Explorar Proyectos
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-cartagena-teal hover:text-cartagena-teal transition-all"
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* Visual Content - Abstract/Tech Representation */}
        <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
           {/* Abstract Nodes Visual */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                  {/* Decorative circles representing nodes */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cartagena-teal rounded-full animate-pulse shadow-[0_0_15px_#64ffda]"></div>
                  <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cartagena-coral rounded-full animate-pulse-slow"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_white]"></div>
                  
                  {/* Connecting lines (simulated with borders on a large rotated div or SVG) */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M25,25 L75,50 L50,66 Z" fill="none" stroke="#64ffda" strokeWidth="0.2" />
                    <path d="M25,25 L50,66" fill="none" stroke="#64ffda" strokeWidth="0.2" />
                    <circle cx="50" cy="50" r="30" stroke="#005f73" strokeWidth="0.5" fill="none" strokeDasharray="4 2" className="animate-spin-slow origin-center" />
                  </svg>
                  
                  {/* Main Image Masked */}
                  <div className="absolute inset-4 rounded-2xl overflow-hidden border border-gray-700 bg-cartagena-slate/50 backdrop-blur-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=2070&auto=format&fit=crop" 
                      alt="Cartagena moderna" 
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;