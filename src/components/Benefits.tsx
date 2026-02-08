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
                Sites otimizados para SEO local e Google Meu Negócio, para que
                clientes próximos encontrem você facilmente
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Seus clientes não encontram sua empresa online? Criamos páginas
                otimizadas para ranquear e converter.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Paga anúncios e não converte? Landing pages com CTA claro e
                design limpo aumentam os leads.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">•</span>
              <span>
                Site lento e confuso? Performance e UX focadas em reduzir
                rejeição e aumentar contatos.
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
                Páginas com CTA claro convertem até <strong>2–3x</strong> mais
                que layouts sem hierarquia visual.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">▲</span>
              <p className="text-slate-200">
                Melhorar velocidade de carregamento pode elevar a taxa de
                conversão em <strong>7–15%</strong>.
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
