export const Pricing = () => {
  return (
    <section
      id="planos"
      className="relative py-16 md:py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 ">
          Pacotes e preços
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Básico */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left shadow-xl">
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-semibold text-white">Starter</h3>
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Landing Page Essencial
              </span>
            </div>
            <p className="text-3xl font-bold text-white mb-4">R$ 993</p>
            <ul className="space-y-2 text-slate-200 text-sm mb-6">
              <li>Para começar rápido</li>
              <li>Design profissional e responsivo</li>
              <li>Copy persuasiva e CTA claro</li>
              <li>WhatsApp e formulários integrados</li>
              <li>SEO básico e performance otimizada</li>
              <li>Suporte inicial e ajustes pós-lançamento</li>
              <li>Entrega em 7–10 dias úteis</li>
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold transition-all w-full justify-center"
            >
              Escolher Starter
            </a>
          </div>

          {/* Profissional */}
          <div className="bg-slate-900 border border-indigo-600/60 rounded-2xl p-6 text-left shadow-2xl shadow-indigo-600/20">
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <span className="text-xs text-indigo-300 uppercase tracking-wide">
                Site Profissional
              </span>
            </div>
            <p className="text-3xl font-bold text-white mb-4">R$ 1.993</p>
            <ul className="space-y-2 text-slate-200 text-sm mb-6">
              <li>Tudo do Básico</li>
              <li>Blog</li>
              <li>Wordpress + Elementor</li>
              <li>Performance Otimizada</li>
              <li>Automação de leads por e-mail/CRM</li>
              <li>Configuração de pixel/analytics</li>
              <li>Entrega em 7–12 dias úteis</li>
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold transition-all w-full justify-center"
            >
              Escolher Profissional
            </a>
          </div>

          {/* Premium */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left shadow-xl">
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-semibold text-white">Premium</h3>
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Projeto Personalizado
              </span>
            </div>
            <p className="text-3xl font-bold text-white mb-4">Sob Consulta</p>
            <ul className="space-y-2 text-slate-200 text-sm mb-6">
              <li>Tudo do pro</li>
              <li>
                3–8 páginas completas (Quem Somos, Serviços, Portfólio, Blog,
                Contato)
              </li>
              <li>Design exclusivo e identidade refinada</li>
              <li>Integrações API/CRM e formulários avançados</li>
              <li>SEO on-page, performance e segurança reforçadas</li>
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold transition-all w-full justify-center"
            >
              Escolher Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
