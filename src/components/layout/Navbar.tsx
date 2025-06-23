'use client';

import { Search, Bell, User, Menu, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onMenuClick: () => void;
  onSearchChange?: (query: string) => void;
}

export default function Navbar({ onMenuClick, onSearchChange }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

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
          
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">श</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg gradient-text">Shaswat Raj</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Portfolio</p>
            </div>
          </Link>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search startups, industries, locations..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-gray-700 transition-all placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3">
          {/* Navigation Links */}
          <Link 
            href="https://sh20raj.substack.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Newsletter
          </Link>
          <Link 
            href="/about" 
            className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            About
          </Link>
          
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <button className="relative p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-900 dark:text-white">Investor</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Guest</div>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}