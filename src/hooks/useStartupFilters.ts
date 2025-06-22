import { useState, useMemo } from 'react';
import { Startup } from '@/types';
import { filterStartups } from '@/utils';

interface UseStartupFiltersProps {
  startups: Startup[];
}

interface UseStartupFiltersReturn {
  filteredStartups: Startup[];
  filters: {
    status: string[];
    industry: string[];
    searchQuery: string;
  };
  setStatusFilter: (status: string[]) => void;
  setIndustryFilter: (industry: string[]) => void;
  setSearchQuery: (query: string) => void;
  clearAllFilters: () => void;
  activeFiltersCount: number;
}

export const useStartupFilters = ({ startups }: UseStartupFiltersProps): UseStartupFiltersReturn => {
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [industryFilter, setIndustryFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStartups = useMemo(() => {
    return filterStartups(startups, {
      status: statusFilter,
      industry: industryFilter,
      searchQuery,
    });
  }, [startups, statusFilter, industryFilter, searchQuery]);

  const activeFiltersCount = useMemo(() => {
    return statusFilter.length + industryFilter.length + (searchQuery ? 1 : 0);
  }, [statusFilter, industryFilter, searchQuery]);

  const clearAllFilters = () => {
    setStatusFilter([]);
    setIndustryFilter([]);
    setSearchQuery('');
  };

  return {
    filteredStartups,
    filters: {
      status: statusFilter,
      industry: industryFilter,
      searchQuery,
    },
    setStatusFilter,
    setIndustryFilter,
    setSearchQuery,
    clearAllFilters,
    activeFiltersCount,
  };
};
