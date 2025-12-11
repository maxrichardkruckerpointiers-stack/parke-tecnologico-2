import React from 'react';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cartagena-slate relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Sobre el Parque" subtitle="Conectando tradición con innovación disruptiva." align="left" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              El <strong className="text-white">Cartagena Tech Hub</strong> nace con la misión de transformar la joya del Caribe en el epicentro tecnológico de Latinoamérica. No somos solo un espacio físico; somos un nodo de conexión global.
            </p>
            <p>
              Nuestra visión es crear un ecosistema autosostenible donde la tecnología <span className="text-cartagena-teal">Web3</span>, la Inteligencia Artificial y el talento local se fusionen para resolver problemas globales desde un entorno inspirador.
            </p>
            <ul className="space-y-4 pt-4">
              {['Comunidad Global', 'Infraestructura de Vanguardia', 'Foco en Sostenibilidad'].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-cartagena-teal rounded-full"></div>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             <div className="aspect-video rounded-lg overflow-hidden border border-gray-700 relative group">
                <div className="absolute inset-0 bg-cartagena-teal/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?q=80&w=2069&auto=format&fit=crop" 
                  alt="Cartagena Walled City Tech Overlay" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
             </div>
             {/* Decorative box */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-cartagena-coral opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;