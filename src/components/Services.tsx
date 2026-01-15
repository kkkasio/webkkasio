
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4 italic">Nossa Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Serviços que Impulsionam seu Negócio</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Combinamos design moderno com as melhores tecnologias do mercado para criar produtos que realmente fazem a diferença na sua receita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  Foco em Performance
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  Código Limpo & SEO
                </li>
              </ul>
              <a href="#contato" className="text-indigo-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Saber mais <span className="text-xl">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
