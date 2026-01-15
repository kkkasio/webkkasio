
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 bg-indigo-600">
            <h3 className="text-3xl font-bold text-white mb-6">Pronto para elevar seu negócio?</h3>
            <p className="text-indigo-100 text-lg mb-12">
              Fale diretamente comigo pelo WhatsApp e agende uma consultoria gratuita. Vamos analisar suas necessidades e desenhar a melhor solução digital.
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

          <div className="md:w-1/2 p-8 md:p-16 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Atendimento via WhatsApp</h4>
            <p className="text-slate-400 mb-4 max-w-md">
              Clique no botão abaixo para iniciar uma conversa direta pelo WhatsApp. Envie sua ideia e eu retorno o mais rápido possível.
            </p>
            <a
              href="https://wa.me/5522988117846?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-green-500/30 active:scale-95 w-full md:w-auto"
            >
              Falar no WhatsApp
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
