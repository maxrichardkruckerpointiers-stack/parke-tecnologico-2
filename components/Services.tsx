import React from 'react';
import SectionHeader from './SectionHeader';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cartagena-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Nuestros Servicios" subtitle="Todo lo que necesitas para escalar tu proyecto tecnológico." />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-cartagena-dark p-8 rounded-2xl border border-gray-800 hover:border-cartagena-teal transition-all hover:shadow-xl hover:shadow-cartagena-teal/10 group"
            >
              <div className="w-14 h-14 bg-cartagena-slate rounded-lg flex items-center justify-center mb-6 group-hover:bg-cartagena-teal transition-colors">
                <service.icon className="w-8 h-8 text-cartagena-teal group-hover:text-cartagena-dark transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="inline-block mt-6 text-cartagena-teal text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                Más información &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;