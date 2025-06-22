import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SidebarLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function SidebarLayout({ sidebar, children }: SidebarLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex min-h-screen">
        {/* Sidebar - 30% width */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-80 lg:w-96 xl:w-1/3 max-w-sm bg-transparent p-4 overflow-y-auto scrollbar-thin"
        >
          <div className="sticky top-4 space-y-4">
            {sidebar}
          </div>
        </motion.aside>

        {/* Main Content - 70% width */}
        <motion.main
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 p-4 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
}
