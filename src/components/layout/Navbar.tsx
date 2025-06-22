import { Search, Bell, User, Menu, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          >
            <Menu size={20} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg gradient-text">Shaswat Raj</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Portfolio</p>
            </div>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search startups, industries, locations..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-gray-700 transition-all placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <Settings size={20} className="text-gray-600 dark:text-gray-400" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-900 dark:text-white">You</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}