'use client';

import { motion } from 'framer-motion';
import { Startup } from '@/types';

interface HomeStatsProps {
  startups: Startup[];
}

export default function HomeStats({ startups }: HomeStatsProps) {
  const totalStartups = startups.length;
  const activeStartups = startups.filter(s => s.phase === 'active').length;
  const fundraisingStartups = startups.filter(s => s.phase === 'fundraising').length;
  const exitedStartups = startups.filter(s => s.phase === 'exited').length;

  const stats = [
    {
      label: 'Total Startups',
      value: totalStartups,
      color: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-gray-50 dark:bg-gray-800/50',
      borderColor: 'border-gray-200 dark:border-gray-700',
      icon: '📊'
    },
    {
      label: 'Active',
      value: activeStartups,
      color: 'text-green-700 dark:text-green-300',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      icon: '🚀'
    },
    {
      label: 'Fundraising',
      value: fundraisingStartups,
      color: 'text-blue-700 dark:text-blue-300',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      icon: '💰'
    },
    {
      label: 'Exited',
      value: exitedStartups,
      color: 'text-purple-700 dark:text-purple-300',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      icon: '✨'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-4xl mx-auto"
    >
      {/* Notion-style database view header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Portfolio Overview
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Key metrics across all ventures
        </p>
      </div>

      {/* Notion-style cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`${stat.bgColor} ${stat.borderColor} border rounded-lg p-4 hover:shadow-sm transition-all duration-200 cursor-pointer group`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </span>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
