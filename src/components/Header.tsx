
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Processo', href: '#processo' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            KÁSIO<span className="text-indigo-500">DIGITAL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Vamos Conversar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 absolute top-full left-0 right-0 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-indigo-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
