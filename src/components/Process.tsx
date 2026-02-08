import React from "react";
import { PROCESS_STEPS } from "../constants";

const Process: React.FC = () => {
  return (
    <>
      <section
        id="processo"
        className="relative py-16 md:py-24 bg-slate-950 border-t border-slate-900"
      >
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Processo de trabalho simplificado
          </h2>
          <p className="text-slate-400 mb-10">
            Entrega rápida e transparente em 4 passos: você acompanha tudo e
            aprova cada etapa.
          </p>

          <div className="grid gap-6 md:grid-cols-4 text-left">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <span className="text-indigo-400 font-semibold">
                1. Diagnóstico gratuito
              </span>
              <p className="text-slate-300 mt-2 text-sm">
                Entrevista por Google meet ou WhatsApp para entender objetivos,
                mercado e concorrentes.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <span className="text-indigo-400 font-semibold">
                2. Criação do projeto
              </span>
              <p className="text-slate-300 mt-2 text-sm">
                Definição de estrutura, design e funcionalidades ideais. Envio
                de proposta formal com prazos e valores.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <span className="text-indigo-400 font-semibold">
                3. Desenvolvimento ágil
              </span>
              <p className="text-slate-300 mt-2 text-sm">
                Criação do site/landing page em ambiente de testes, com revisões
                junto ao cliente.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <span className="text-indigo-400 font-semibold">
                4. Lançamento e monitoramento
              </span>
              <p className="text-slate-300 mt-2 text-sm">
                Publicação do site, integração com ferramentas de analytics,
                ajustes finais e treinamento para uso.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <span className="text-indigo-400 font-semibold">
                5. Suporte e evolução
              </span>
              <p className="text-slate-300 mt-2 text-sm">
                Planos mensais de manutenção, atualizações de conteúdo,
                otimizações para SEO e novas campanhas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
