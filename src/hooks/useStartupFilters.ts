import { useState, useMemo } from 'react';
import { Startup, StartupPhase, FundingStage } from '@/types';

interface UseStartupFiltersProps {
  startups: Startup[];
}

interface UseStartupFiltersReturn {
  filteredStartups: Startup[];
  filters: {
    searchQuery: string;
    selectedPhases: StartupPhase[];
    selectedIndustries: string[];
    selectedFundingStages: FundingStage[];
    showNeedsFunding: boolean;
  };
  setSearchQuery: (query: string) => void;
  setPhaseFilter: (phases: StartupPhase[]) => void;
  setIndustryFilter: (industries: string[]) => void;
  setFundingStageFilter: (stages: FundingStage[]) => void;
  setNeedsFundingFilter: (show: boolean) => void;
  clearAllFilters: () => void;
  activeFiltersCount: number;
}

export const useStartupFilters = ({ startups }: UseStartupFiltersProps): UseStartupFiltersReturn => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhases, setSelectedPhases] = useState<StartupPhase[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedFundingStages, setSelectedFundingStages] = useState<FundingStage[]>([]);
  const [showNeedsFunding, setShowNeedsFunding] = useState<boolean>(false);

  const filteredStartups = useMemo(() => {
    return startups.filter(startup => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = (
          startup.name.toLowerCase().includes(query) ||
          startup.description.toLowerCase().includes(query) ||
          startup.industry.toLowerCase().includes(query) ||
          startup.location.toLowerCase().includes(query) ||
          startup.achievements.some(achievement => 
            achievement.toLowerCase().includes(query)
          )
        );
        if (!matchesSearch) return false;
      }

      // Phase filter
      if (selectedPhases.length > 0 && !selectedPhases.includes(startup.phase)) {
        return false;
      }

      // Industry filter
      if (selectedIndustries.length > 0 && !selectedIndustries.includes(startup.industry)) {
        return false;
      }

      // Funding stage filter
      if (selectedFundingStages.length > 0 && !selectedFundingStages.includes(startup.fundingStage)) {
        return false;
      }

      // Needs funding filter
      if (showNeedsFunding && !startup.needsFunding) {
        return false;
      }

      return true;
    });
  }, [startups, searchQuery, selectedPhases, selectedIndustries, selectedFundingStages, showNeedsFunding]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedPhases.length > 0) count++;
    if (selectedIndustries.length > 0) count++;
    if (selectedFundingStages.length > 0) count++;
    if (showNeedsFunding) count++;
    return count;
  }, [searchQuery, selectedPhases, selectedIndustries, selectedFundingStages, showNeedsFunding]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedPhases([]);
    setSelectedIndustries([]);
    setSelectedFundingStages([]);
    setShowNeedsFunding(false);
  };

  return {
    filteredStartups,
    filters: {
      searchQuery,
      selectedPhases,
      selectedIndustries,
      selectedFundingStages,
      showNeedsFunding,
    },
    setSearchQuery,
    setPhaseFilter: setSelectedPhases,
    setIndustryFilter: setSelectedIndustries,
    setFundingStageFilter: setSelectedFundingStages,
    setNeedsFundingFilter: setShowNeedsFunding,
    clearAllFilters,
    activeFiltersCount,
  };
};