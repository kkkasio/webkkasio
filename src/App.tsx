import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Benefits } from "./components/Benefits";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <Benefits />

        {/* <Services /> */}

        {/* <TechStack /> */}

        <Process />

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-linear-to-r from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
                Escale seu faturamento <br className="hidden md:block" /> com
                tecnologia de elite.
              </h3>
              <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                Landing pages, sistemas e apps desenvolvidos para dominar o
                mercado e converter visitantes em lucro.
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
