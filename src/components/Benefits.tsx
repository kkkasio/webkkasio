export const Benefits = () => {
  return (
    <section
      id="beneficios"
      className="relative py-16 md:py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefícios / Problemas que resolvemos
          </h2>
          <p className="text-slate-400 mb-6">
            Focamos em conversão, velocidade e confiança para transformar
            visitantes em clientes.
          </p>
          <ul className="space-y-3 text-slate-200">
            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Seu site não aparece no Google? Otimizamos SEO local e Google
                Meu Negócio para clientes próximos encontrarem você
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Cansado de gastar com anúncios sem retorno? Criamos landing
                pages com CTA claro e design limpo que transformam cliques em
                leads
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Sites lentos espantam clientes. Otimizamos performance e
                experiência do usuário para reduzir rejeição e aumentar contatos
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Dificuldade para agendar visitas? Integramos WhatsApp e
                formulários que disparam alertas imediatos.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Precisa provar autoridade? Layout profissional que reforça
                confiança e credibilidade.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Estatísticas que importam
          </h3>
          <div className="space-y-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex gap-3">
              <span className="text-green-400">▲</span>
              <p className="text-slate-200">
                Páginas com CTA claro convertem até <strong>3x</strong> mais que
                layouts sem hierarquia visual.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">▲</span>
              <p className="text-slate-200">
                Melhorar a velocidade do site pode aumentar a conversão em até{" "}
                <strong>15%</strong>
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">▲</span>
              <p className="text-slate-200">
                Seções focadas em benefícios geram mais cliques que descrições
                técnicas em até <strong>50%</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
