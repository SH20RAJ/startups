'use client';

import { motion } from 'framer-motion';

export default function HomeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Notion-style page header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-sm">
            S
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Startup Portfolio
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Building the future, one venture at a time
            </p>
          </div>
        </div>
        
        {/* Main description in Notion block style */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Welcome to my entrepreneurial journey. From AI-powered content creation to mindful wellness companions, 
            each venture represents a passionate pursuit of innovation. Currently building{' '}
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded font-medium">
              5+ startups
            </span>{' '}
            that solve real problems and create meaningful impact across diverse industries.
          </p>
        </div>
      </div>

      {/* Notion-style property tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium border border-blue-200 dark:border-blue-800">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Active Builder
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium border border-purple-200 dark:border-purple-800">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          AI Enthusiast
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-sm font-medium border border-green-200 dark:border-green-800">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Problem Solver
        </div>
      </div>

      {/* Notion-style divider */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
    </motion.div>
  );
}
