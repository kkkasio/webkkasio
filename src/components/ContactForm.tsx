
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 bg-indigo-600">
            <h3 className="text-3xl font-bold text-white mb-6">Pronto para elevar seu negócio?</h3>
            <p className="text-indigo-100 text-lg mb-12">
              Preencha o formulário e agende uma consultoria gratuita. Vamos analisar suas necessidades e desenhar a melhor solução digital.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white">
                <CheckCircle2 className="w-6 h-6 text-indigo-300" />
                <span>Orçamento gratuito e detalhado</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle2 className="w-6 h-6 text-indigo-300" />
                <span>Prazo de entrega garantido</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle2 className="w-6 h-6 text-indigo-300" />
                <span>Suporte técnico premium</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-8 md:p-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Mensagem Enviada!</h4>
                <p className="text-slate-400">Entraremos em contato em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Como podemos ajudar?</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Descreva brevemente seu projeto..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
                >
                  Solicitar Consultoria <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
