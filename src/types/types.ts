import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}