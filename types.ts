export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Web3Feature {
  id: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  interest: string;
  consent: boolean;
}

export enum InterestType {
  STARTUP = "Startup / Emprendedor",
  INVESTOR = "Inversionista",
  TALENT = "Talento Tech",
  CORPORATE = "Corporativo",
  OTHER = "Otro"
}