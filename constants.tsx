import { Rocket, Users, Globe, Cpu, ShieldCheck, Zap, Code2, Coins, Network } from 'lucide-react';
import { ServiceItem, Web3Feature, InterestType } from './types';

export const APP_NAME = "Cartagena Tech Hub";

export const NAVIGATION_LINKS = [
  { name: 'El Parque', href: '#about' },
  { name: 'Por Qué Cartagena', href: '#why' },
  { name: 'Servicios', href: '#services' },
  { name: 'Web3', href: '#web3' },
  { name: 'Proyectos', href: '#projects' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'acceleration',
    title: 'Aceleración de Startups',
    description: 'Programas intensivos de 12 semanas para llevar tu MVP a Product-Market Fit con mentores globales.',
    icon: Rocket
  },
  {
    id: 'coworking',
    title: 'Coworking & Networking',
    description: 'Espacios de trabajo flexibles frente al mar diseñados para la colaboración y el flujo de ideas.',
    icon: Users
  },
  {
    id: 'mentorship',
    title: 'Mentoria Especializada',
    description: 'Acceso a una red de expertos en Blockchain, IA, Fintech y Escalamiento global.',
    icon: Globe
  }
];

export const WEB3_FEATURES: Web3Feature[] = [
  {
    id: 'nodes',
    title: 'Infraestructura de Nodos',
    description: 'Servidores dedicados y conectividad de baja latencia para validadores y despliegue de smart contracts.'
  },
  {
    id: 'tokenization',
    title: 'Lab de Tokenización',
    description: 'Asesoría legal y técnica para tokenizar activos reales (RWA) en el sector inmobiliario y turístico.'
  },
  {
    id: 'dao',
    title: 'Gobernanza DAO',
    description: 'Estructura descentralizada para la toma de decisiones comunitarias dentro del hub.'
  }
];

export const INTEREST_OPTIONS = Object.values(InterestType);

export const HERO_IMAGE = "https://images.unsplash.com/photo-1597864309327-0c20a4b8df7a?q=80&w=2070&auto=format&fit=crop"; 
// Note: Unsplash image of Cartagena or similar tropical city vibe used as placeholder logic. 
// In a real scenario, this would be a local asset.