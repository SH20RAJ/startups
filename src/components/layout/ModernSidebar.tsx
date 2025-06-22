import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Linkedin, Twitter, TrendingUp, Target, Award, Calendar, Building, ExternalLink, Code, User, Github, FileText, Heart, Quote } from 'lucide-react';
import Image from 'next/image';
import { FounderData } from '@/types';

interface ModernSidebarProps {
  founder: FounderData;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModernSidebar({ founder, isOpen, onClose }: ModernSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Fixed Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-30">
        <div className="flex flex-col h-full">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6 space-y-6">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center border-b border-gray-100 dark:border-gray-800 pb-6"
              >
                <div className="relative mb-4">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 mx-auto rounded-2xl object-cover shadow-lg"
                    onError={(e) => {
                      // Fallback to gradient background with initials
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ display: 'none' }}>
                    <span className="text-xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {founder.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {founder.title}
                </p>
                
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <MapPin size={12} />
                  {founder.location}
                </div>

                {founder.availability && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {founder.availability}
                  </div>
                )}

                {founder.remoteWork && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {founder.remoteWork}
                  </div>
                )}
              </motion.div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-3 border border-green-100 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <TrendingUp size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">Total Value</span>
                  </div>
                  <div className="text-lg font-bold text-green-800 dark:text-green-200">
                    {founder.totalValuation}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-3 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Award size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                      {founder.projects ? 'Projects' : 'Exits'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    {founder.projects || founder.successfulExits}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-3 border border-purple-100 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Building size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-purple-700 dark:text-purple-300">Active</span>
                  </div>
                  <div className="text-lg font-bold text-purple-800 dark:text-purple-200">
                    {founder.companiesActive}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-3 border border-orange-100 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Calendar size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-orange-700 dark:text-orange-300">Experience</span>
                  </div>
                  <div className="text-lg font-bold text-orange-800 dark:text-orange-200">
                    {founder.yearsExperience}y
                  </div>
                </div>
              </div>

              {/* Funding Raised */}
              <div className="bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Total Funding Raised</div>
                    <div className="text-xl font-bold gradient-text">{founder.totalFunding}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Across {founder.companiesActive + founder.successfulExits} companies
                </div>
              </div>

              {/* Skills Section */}
              {founder.skills && founder.skills.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={16} className="text-gray-600 dark:text-gray-400" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Core Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.slice(0, 8).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specializations */}
              {founder.specializations && founder.specializations.length > 0 && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} className="text-blue-600 dark:text-blue-400" />
                    <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100">Specializations</h3>
                  </div>
                  <div className="space-y-2">
                    {founder.specializations.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-xs text-blue-800 dark:text-blue-200">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote */}
              {founder.quote && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800">
                  <div className="flex items-start gap-3">
                    <Quote size={16} className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-purple-800 dark:text-purple-200 italic leading-relaxed">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {/* Interests */}
              {founder.interests && founder.interests.length > 0 && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-4 border border-orange-100 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart size={16} className="text-orange-600 dark:text-orange-400" />
                    <h3 className="text-sm font-semibold text-orange-900 dark:text-orange-100">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-md border border-orange-200 dark:border-orange-700"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bio */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User size={16} className="text-gray-600 dark:text-gray-400" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">About</h3>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Connect</h3>
                <div className="space-y-2">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <Mail size={14} className="text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
                  </a>

                  {founder.website && (
                    <a
                      href={founder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                        <ExternalLink size={14} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Portfolio</span>
                    </a>
                  )}

                  {founder.resume && (
                    <a
                      href={founder.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                        <FileText size={14} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Resume</span>
                    </a>
                  )}

                  {founder.github && (
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                        <Github size={14} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">GitHub</span>
                    </a>
                  )}

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Linkedin size={14} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</span>
                  </a>

                  <a
                    href={founder.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center group-hover:bg-sky-200 dark:group-hover:bg-sky-900/50 transition-colors">
                      <Twitter size={14} className="text-sky-600 dark:text-sky-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 z-50 custom-scrollbar overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-6 space-y-6 pt-16">
              {/* Mobile content - same structure as desktop */}
              <div className="text-center border-b border-gray-100 dark:border-gray-800 pb-6">
                <div className="relative mb-4">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 mx-auto rounded-2xl object-cover shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ display: 'none' }}>
                    <span className="text-xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {founder.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {founder.title}
                </p>
                
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <MapPin size={12} />
                  {founder.location}
                </div>

                {founder.availability && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {founder.availability}
                  </div>
                )}
              </div>

              {/* Mobile Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-3 border border-green-100 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <TrendingUp size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">Total Value</span>
                  </div>
                  <div className="text-lg font-bold text-green-800 dark:text-green-200">
                    {founder.totalValuation}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-3 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Award size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Projects</span>
                  </div>
                  <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    {founder.projects}
                  </div>
                </div>
              </div>

              {/* Mobile Bio */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Mobile Quick Links */}
              <div className="flex flex-wrap gap-2 justify-center">
                {founder.website && (
                  <a
                    href={founder.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                  >
                    <ExternalLink size={16} className="text-green-600 dark:text-green-400" />
                  </a>
                )}
                {founder.github && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} className="text-gray-600 dark:text-gray-400" />
                  </a>
                )}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Linkedin size={16} className="text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href={founder.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors"
                >
                  <Twitter size={16} className="text-sky-600 dark:text-sky-400" />
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}