import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { FounderData } from '@/types';
import { generateInitials } from '@/utils';

interface FounderProfileSidebarProps {
  founder: FounderData;
  companiesCount: number;
}

export default function FounderProfileSidebar({ founder, companiesCount }: FounderProfileSidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">
            {generateInitials(founder.name)}
          </span>
        </div>
      </div>
      
      {/* Basic Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {founder.name}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
          {founder.title}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {founder.bio}
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {founder.totalFunding}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Total Funding</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-green-600 dark:text-green-400">
            {founder.successfulExits}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Successful Exits</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {companiesCount}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Companies</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
            {founder.yearsExperience}+
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp.</div>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <MapPin size={16} className="flex-shrink-0" />
          <span>{founder.location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <Mail size={16} className="flex-shrink-0" />
          <span className="truncate">{founder.email}</span>
        </div>
        <div className="flex gap-3 pt-2">
          <a 
            href={founder.linkedin}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a 
            href={founder.twitter}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
            Twitter
          </a>
        </div>
      </div>
    </motion.div>
  );
}
