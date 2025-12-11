import React from 'react';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    id: 1,
    title: "CaribeDAO",
    cat: "DeFi / Governance",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "OceanToken",
    cat: "RWA / Environment",
    img: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "HistoricNFTs",
    cat: "Culture / NFT",
    img: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cartagena-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proyectos Destacados" subtitle="Innovación Made in Cartagena." />
        
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-cartagena-teal text-xs font-bold uppercase tracking-wider mb-1">
                  {project.cat}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Incubado en Cartagena Tech Hub.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="text-white border-b border-cartagena-coral hover:text-cartagena-coral transition-colors pb-1">
            Ver todos los proyectos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;