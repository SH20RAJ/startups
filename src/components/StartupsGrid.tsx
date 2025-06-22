import { motion } from 'framer-motion';
import { Building2, TrendingUp } from 'lucide-react';
import { Startup } from '@/types';
import StartupCard from './StartupCard';

interface StartupsGridProps {
    startups: Startup[];
    isFiltered: boolean;
    activeFiltersCount: number;
}

export default function StartupsGrid({ startups, isFiltered, activeFiltersCount }: StartupsGridProps) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Building2 size={24} className="text-gray-600 dark:text-gray-400" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Portfolio Companies
                    </h1>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <TrendingUp size={16} />
                    <span>
                        {startups.length} {startups.length === 1 ? 'company' : 'companies'}
                        {isFiltered && activeFiltersCount > 0 && (
                            <span className="ml-1 text-blue-600 dark:text-blue-400">
                                (filtered)
                            </span>
                        )}
                    </span>
                </div>
            </motion.div>

            {/* Empty State */}
            {startups.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Building2 size={48} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        No companies found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        {isFiltered
                            ? "Try adjusting your filters to see more results."
                            : "No companies to display at the moment."
                        }
                    </p>
                </motion.div>
            )}

            {/* Startups Grid */}
            {startups.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {startups.map((startup, index) => (
                        <StartupCard
                            key={startup.id}
                            startup={startup}
                            index={index}
                        />
                    ))}
                </div>
            )}

            {/* Footer */}
            {startups.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-gray-500 dark:text-gray-400 pt-8"
                >
                    <p>© 2024 Shaswat Raj. All rights reserved.</p>
                </motion.div>
            )}
        </div>
    );
}
