'use client';

import { motion } from 'framer-motion';
import { FOUNDER_DATA, STARTUPS_DATA } from '@/constants';
import { useStartupFilters } from '@/hooks';
import ModernLayout from '@/components/layout/ModernLayout';
import ModernStartupCard from '@/components/startup/ModernStartupCard';
import { HomeHeader, HomeStats } from '@/components/home';

export default function Home() {
  const {
    filteredStartups,
    clearAllFilters,
    activeFiltersCount,
  } = useStartupFilters({ startups: STARTUPS_DATA });

  return (
    <ModernLayout founder={FOUNDER_DATA}>
      <div className="space-y-8">
        {/* Header Section */}
        <HomeHeader />

        {/* Stats Overview */}
        <HomeStats startups={STARTUPS_DATA} />

        {/* Filters - Hidden for now */}
        {/* <ModernFilters
          filters={filters}
          onPhaseChange={setPhaseFilter}
          onIndustryChange={setIndustryFilter}
          onFundingStageChange={setFundingStageFilter}
          onNeedsFundingChange={setNeedsFundingFilter}
          onSearchChange={setSearchQuery}
          onClearAll={clearAllFilters}
          activeFiltersCount={activeFiltersCount}
        /> */}

        {/* Startups Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredStartups.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No startups found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your filters to see more results
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ModernStartupCard
                    startup={startup}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results Footer */}
        {filteredStartups.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 dark:text-gray-400 text-sm"
          >
            Showing {filteredStartups.length} of {STARTUPS_DATA.length} startups
            {activeFiltersCount > 0 && (
              <span> with {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied</span>
            )}
          </motion.div>
        )}
      </div>
    </ModernLayout>
  );
}
