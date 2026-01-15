
import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    { name: 'React JS', color: 'text-sky-400' },
    { name: 'Node JS', color: 'text-green-500' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'WordPress', color: 'text-sky-600' },
    { name: 'PHP', color: 'text-indigo-400' },
    { name: 'MySQL', color: 'text-orange-500' },
    { name: 'Elementor', color: 'text-pink-500' },
    { name: 'Next JS', color: 'text-white' },
    { name: 'Tailwind CSS', color: 'text-teal-400' }
  ];

  return (
    <section className="py-16 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-12">Tecnologias de Ponta Utilizadas</h2>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className={`text-xl md:text-2xl font-bold ${tech.color} opacity-60 hover:opacity-100 transition-opacity cursor-default`}
              aria-label={`Tecnologia: ${tech.name}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
