
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/*  
        <section className="py-12 border-y border-slate-900 bg-slate-950/50 overflow-hidden">
          <div className="container mx-auto px-6">
            <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-[0.2em] mb-10">Projetos que Geram Valor Real</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl font-black italic">TECHFLOW</span>
              <span className="text-2xl font-black italic">NEXUS</span>
              <span className="text-2xl font-black italic">ALPHA_DIGITAL</span>
              <span className="text-2xl font-black italic">GROWTH_HQ</span>
              <span className="text-2xl font-black italic">LUMINA_WEB</span>
            </div>
          </div>
        </section>
        */}

        <Services />

        <TechStack />

        <Process />

        {/* Testimonials 
        <section id="depoimentos" className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
              <h3 className="text-4xl font-bold">Resultados que Falam por Si</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl relative">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      className="w-12 h-12 rounded-full border border-indigo-500/30"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
                Escale seu faturamento <br className="hidden md:block" /> com tecnologia de elite.
              </h3>
              <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                Landing pages, sistemas e apps desenvolvidos para dominar o mercado e converter visitantes em lucro.
              </p>
              <a
                href="#contato"
                className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl relative z-10"
              >
                Solicitar Consultoria Gratuita
              </a>
            </div>
          </div>
        </section>

        <FAQ />

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
