
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">Metodologia</h2>
            <h3 className="text-4xl font-bold mb-8">Como Construímos sua Solução</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Trabalhamos com uma abordagem ágil e transparente. Você acompanha cada etapa do desenvolvimento, garantindo que o produto final supere suas expectativas.
            </p>
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-600/30 flex items-center justify-center text-indigo-400">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-indigo-600/20 absolute inset-0 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="Work Process" 
              className="relative rounded-3xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
