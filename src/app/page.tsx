'use client';

import { motion } from 'framer-motion';
import { FOUNDER_DATA, STARTUPS_DATA } from '@/constants';
import { useStartupFilters } from '@/hooks';
import ModernLayout from '@/components/layout/ModernLayout';
import ModernStartupCard from '@/components/startup/ModernStartupCard';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Building the Future, One Startup at a Time
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to my entrepreneurial journey. From AI-powered content creation to mindful wellness companions, 
            each venture represents a passionate pursuit of innovation. Currently building <span className="font-semibold text-primary">5+ startups</span> 
            that solve real problems and create meaningful impact across diverse industries.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              🚀 Active Builder
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              🤖 AI Enthusiast
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              💡 Problem Solver
            </span>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="modern-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">{STARTUPS_DATA.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Startups</div>
          </div>
          <div className="modern-card p-4 text-center">
            <div className="text-2xl font-bold text-green-500">
              {STARTUPS_DATA.filter(s => s.phase === 'active').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
          </div>
          <div className="modern-card p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">
              {STARTUPS_DATA.filter(s => s.phase === 'fundraising').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Fundraising</div>
          </div>
          <div className="modern-card p-4 text-center">
            <div className="text-2xl font-bold text-cyan-500">
              {STARTUPS_DATA.filter(s => s.phase === 'exited').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Exited</div>
          </div>
        </motion.div>

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
