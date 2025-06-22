export interface FounderData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  linkedin: string;
  twitter: string;
  totalFunding: string;
  successfulExits: number;
  yearsExperience: number;
}

export interface Startup {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Acquired' | 'Sold' | 'Paused';
  founded: string;
  funding: string;
  employees: string;
  industry: string;
  logo: string;
  website: string;
  achievements: string[];
}

export interface FilterOptions {
  status: string[];
  industry: string[];
  fundingRange: {
    min: number;
    max: number;
  };
  foundedYear: {
    min: number;
    max: number;
  };
}
