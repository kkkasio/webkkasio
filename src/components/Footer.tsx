
import React from 'react';
import { Code2, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter">
                KÁSIO<span className="text-indigo-500">DIGITAL</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Consultoria premium de soluções digitais focada em transformar tecnologia em crescimento para o seu negócio.
            </p>
            {/*
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contato@kasio.dev" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            */ }
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">Websites</a></li>
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">Landing Pages</a></li>
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">Apps Mobile</a></li>
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">Sistemas PHP/Node</a></li>
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">WordPress/Elementor</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kásio Digital - Vamos agendar uma conversa ?</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
