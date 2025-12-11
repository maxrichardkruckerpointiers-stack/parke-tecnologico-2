import React from 'react';
import { Sun, Anchor, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Sun,
    title: "Lifestyle Incomparable",
    desc: "Trabaja con vista al mar. Calidad de vida que atrae y retiene al mejor talento global."
  },
  {
    icon: Anchor,
    title: "Hub Estratégico",
    desc: "Conectividad directa con USA y Latam. Zona horaria EST perfecta para negocios internacionales."
  },
  {
    icon: TrendingUp,
    title: "Beneficios Fiscales",
    desc: "Ubicado en Zona Franca con incentivos tributarios especiales para exportación de servicios tech."
  }
];

const WhyCartagena: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-cartagena-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
             <h2 className="text-4xl font-display font-bold text-white mb-6">
               ¿Por qué <br/> <span className="text-cartagena-coral">Cartagena?</span>
             </h2>
             <p className="text-gray-400 mb-8">
               Más que turismo, Cartagena es una ciudad emergente preparada para la economía digital. Combina historia, ubicación y futuro.
             </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-cartagena-slate border border-gray-800 hover:border-cartagena-coral/50 transition-colors group">
                <reason.icon className="w-10 h-10 text-cartagena-coral mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCartagena;