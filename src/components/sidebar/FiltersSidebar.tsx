import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/utils';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string[];
  setStatusFilter: (status: string[]) => void;
  industryFilter: string[];
  setIndustryFilter: (industry: string[]) => void;
  clearAllFilters: () => void;
  activeFiltersCount: number;
  statusOptions: string[];
  industryOptions: string[];
}

export default function FiltersSidebar({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  industryFilter,
  setIndustryFilter,
  clearAllFilters,
  activeFiltersCount,
  statusOptions,
  industryOptions,
}: FiltersProps) {
  const handleStatusChange = (status: string) => {
    if (statusFilter.includes(status)) {
      setStatusFilter(statusFilter.filter(s => s !== status));
    } else {
      setStatusFilter([...statusFilter, status]);
    }
  };

  const handleIndustryChange = (industry: string) => {
    if (industryFilter.includes(industry)) {
      setIndustryFilter(industryFilter.filter(i => i !== industry));
    } else {
      setIndustryFilter([...industryFilter, industry]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h3>
        </div>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
          >
            <X size={14} />
            Clear ({activeFiltersCount})
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search startups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
          />
        </div>
      </div>

      {/* Status Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Status
        </h4>
        <div className="space-y-2">
          {statusOptions.map((status) => (
            <label key={status} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={statusFilter.includes(status)}
                onChange={() => handleStatusChange(status)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {status}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Industry
        </h4>
        <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin">
          {industryOptions.map((industry) => (
            <label key={industry} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={industryFilter.includes(industry)}
                onChange={() => handleIndustryChange(industry)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {industry}
              </span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
