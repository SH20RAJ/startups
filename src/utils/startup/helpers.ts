import { Startup, StartupPhase } from '@/types';
import clsx from 'clsx';

export const getPhaseColor = (phase: StartupPhase): string => {
  const phaseColors = {
    'ideation': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'building': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'fundraising': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'exited': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    'paused': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };
  
  return phaseColors[phase] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};

export const getStatusColor = (status: string): string => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Acquired': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Sold': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Paused': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };
  
  return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};

export const capitalizePhase = (phase: StartupPhase): string => {
  const phaseNames = {
    'ideation': 'Ideation',
    'building': 'Building',
    'fundraising': 'Fundraising',
    'active': 'Active',
    'exited': 'Exited',
    'paused': 'Paused',
  };
  
  return phaseNames[phase] || phase;
};

export const filterStartups = (
  startups: Startup[],
  filters: {
    phase?: StartupPhase[];
    industry?: string[];
    searchQuery?: string;
  }
): Startup[] => {
  return startups.filter(startup => {
    // Phase filter
    if (filters.phase && filters.phase.length > 0 && !filters.phase.includes(startup.phase)) {
      return false;
    }
    
    // Industry filter
    if (filters.industry && filters.industry.length > 0 && !filters.industry.includes(startup.industry)) {
      return false;
    }
    
    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        startup.name.toLowerCase().includes(query) ||
        startup.description.toLowerCase().includes(query) ||
        startup.industry.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
};

export const generateInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

export const formatFunding = (funding: string): string => {
  return funding.replace(/\$(\d+)M/, '$$$1M').replace(/\$(\d+)K/, '$$$1K');
};

export const cn = clsx;
