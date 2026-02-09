import React from "react";
import {
  Code2,
  Layout,
  Smartphone,
  Globe,
  Database,
  Rocket,
  Search,
  Cpu,
  Layers,
} from "lucide-react";
import { Service, Testimonial, FAQItem } from "./types/types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Websites & Landing Pages",
    description:
      "Páginas de alta conversão projetadas para transformar visitantes em clientes fiéis.",
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: "wordpress",
    title: "WordPress & Elementor",
    description:
      "Desenvolvimento e manutenção premium em WordPress com customização total via Elementor.",
    icon: <Globe className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: "mobile",
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com performance excepcional.",
    icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: "backend",
    title: "PHP & Node JS",
    description:
      "Sistemas escaláveis com arquiteturas robustas em PHP (MySQL) ou Node.js moderno.",
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: "react",
    title: "React JS & Next JS",
    description:
      "Interfaces modernas, ultra-velozes e reativas para experiências digitais de luxo.",
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: "custom-solutions",
    title: "Sistemas Personalizados",
    description:
      "Software sob medida para automatizar processos e escalar sua operação digital.",
    icon: <Database className="w-8 h-8 text-indigo-400" />,
  },
];

export const PROCESS_STEPS = [
  {
    title: "Descoberta & Estratégia",
    description:
      "Entendemos seu negócio, público-alvo e objetivos para traçar o melhor caminho técnico.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Arquitetura & Design",
    description:
      "Estruturamos a solução focando na melhor experiência de usuário e conversão.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Desenvolvimento Ágil",
    description:
      "Codificação limpa, escalável e testada, com entregas constantes de valor.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Lançamento & Evolução",
    description:
      "Colocamos seu projeto no ar e acompanhamos os dados para melhorias contínuas.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ricardo Mendes",
    role: "CEO da TechFlow",
    content:
      "O Kásio entregou uma Landing Page que triplicou nossa taxa de conversão em menos de um mês. O nível de detalhes é impressionante.",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    id: "2",
    name: "Juliana Costa",
    role: "Diretora de Marketing",
    content:
      "Profissionalismo impecável. Nosso sistema em Node.js roda liso e a interface em React é extremamente intuitiva.",
    image: "https://picsum.photos/100/100?random=2",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Quanto tempo leva para entregar uma landing page?",
    answer:
      "Landing pages simples são entregues em 7 a 10 dias. Projetos completos levam de 4 a 6 semanas, dependendo da complexidade.",
  },
  {
    question: "Vocês dão manutenção em sites já existentes?",
    answer:
      "Sim. Oferecemos um serviço de manutenção que inclui atualizações, correções de segurança e melhorias de performance.",
  },
  {
    question: "O site será responsivo (celular)?",
    answer:
      "Absolutamente Sim! Todos os projetos são desenvolvidos com design responsivo e são otimizados para dispositivos móveis, pois a maioria do tráfego vem de smartphones",
  },
  {
    question: "Vocês otimizam para SEO?",
    answer:
      "Sim. Realizamos otimização on‑page (títulos, meta tags, palavras-chave locais) e configuramos ferramentas para que você acompanhe resultados.",
  },
  {
    question: "Você atende Cabo Frio e Região?",
    answer:
      "Sim, atendemos Cabo Frio e toda a Região dos Lagos, e o Brasil todo oferecendo soluções personalizadas para o seu negócio.",
  },
];
