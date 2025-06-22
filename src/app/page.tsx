'use client';
'use client';

import { FOUNDER_DATA, STARTUPS_DATA, INDUSTRIES, STATUS_OPTIONS } from '@/constants';
import { useStartupFilters } from '@/hooks';
import { SidebarLayout } from '@/wrappers';
import { FounderProfileSidebar, FiltersSidebar } from '@/components/sidebar';
import StartupsGrid from '@/components/StartupsGrid';

export default function Home() {
  const {
    filteredStartups,
    filters,
    setStatusFilter,
    setIndustryFilter,
    setSearchQuery,
    clearAllFilters,
    activeFiltersCount,
  } = useStartupFilters({ startups: STARTUPS_DATA });

  const sidebar = (
    <>
      <FounderProfileSidebar 
        founder={FOUNDER_DATA} 
        companiesCount={STARTUPS_DATA.length} 
      />
      <FiltersSidebar
        searchQuery={filters.searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={filters.status}
        setStatusFilter={setStatusFilter}
        industryFilter={filters.industry}
        setIndustryFilter={setIndustryFilter}
        clearAllFilters={clearAllFilters}
        activeFiltersCount={activeFiltersCount}
        statusOptions={STATUS_OPTIONS}
        industryOptions={INDUSTRIES}
      />
    </>
  );

  return (
    <SidebarLayout sidebar={sidebar}>
      <StartupsGrid 
        startups={filteredStartups}
        isFiltered={activeFiltersCount > 0}
        activeFiltersCount={activeFiltersCount}
      />
    </SidebarLayout>
  );
}
