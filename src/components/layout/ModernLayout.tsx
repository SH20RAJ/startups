import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ModernSidebar from './ModernSidebar';
import { FounderData } from '@/types';

interface ModernLayoutProps {
  founder: FounderData;
  children: ReactNode;
  onSearchChange?: (query: string) => void;
}

export default function ModernLayout({ founder, children, onSearchChange }: ModernLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Fixed Navbar */}
      <Navbar onMenuClick={toggleSidebar} onSearchChange={onSearchChange} />

      {/* Fixed Sidebar */}
      <ModernSidebar
        founder={founder}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content - offset by sidebar on desktop */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-16 lg:pl-80 min-h-screen"
      >
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
