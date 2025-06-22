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
  totalValuation: string;
  companiesActive: number;
}

export type StartupPhase = 'ideation' | 'building' | 'fundraising' | 'active' | 'exited' | 'paused';
export type FundingStage = 'bootstrapped' | 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'series-c' | 'ipo' | 'acquired';

export interface Startup {
  id: number;
  name: string;
  description: string;
  phase: StartupPhase;
  fundingStage: FundingStage;
  founded: string;
  funding: string;
  valuation?: string;
  employees: string;
  industry: string;
  logo: string;
  website: string;
  achievements: string[];
  buildingProgress?: number; // 0-100 for building phase
  needsFunding?: boolean;
  pitchDeckUrl?: string;
  monthlyRevenue?: string;
  growthRate?: string;
  location: string;
  teamSize: number;
  keyMetrics: {
    users?: string;
    revenue?: string;
    growth?: string;
  };
}

export interface FilterOptions {
  phases: StartupPhase[];
  industries: string[];
  fundingStages: FundingStage[];
  searchQuery: string;
  needsFunding?: boolean;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  current?: boolean;
}
