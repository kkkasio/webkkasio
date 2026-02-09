import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full text-indigo-400 text-sm font-medium mb-8 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Online Agora, Pronto para Ajudar Você a Crescer!
            </div> */}

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Criamos Sites e Landing Pages que multiplicam seus clientes
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Atraia clientes qualificados e aumente suas vendas com soluções
              digitais sob medida
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contato"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-indigo-600/20"
                aria-label="Solicitar orçamento"
              >
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5522988117846?text=Olá!%20Quero%20um%20site%20ou%20landing%20page%20para%20vender%20mais."
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
                aria-label="Falar no WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/*
            <div className="mt-16 pt-16 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">100+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Sites Criados</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">98%</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Taxa de Conversão</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">24/7</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Evolução Contínua</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">6+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Anos de Código</span>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
