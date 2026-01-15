
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <button 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-indigo-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 text-slate-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
