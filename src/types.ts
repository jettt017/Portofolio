export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  techStack: string[];
  contributions: string[];
  link?: string;
}

export interface Certification {
  id: string;
  issuer: string;
  title: string;
  description: string;
  date?: string;
  credentialUrl?: string;
}
