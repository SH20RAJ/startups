'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MapPin, Users, Calendar, DollarSign, TrendingUp, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Startup } from '@/types';
import Image from 'next/image';

interface StartupDetailPageProps {
  startup: Startup;
}

export default function StartupDetailPage({ startup }: StartupDetailPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const getPhaseInfo = (phase: string) => {
    const phases = {
      'ideation': { label: 'Ideation', className: 'status-ideation', emoji: '💡' },
      'building': { label: 'Building', className: 'status-building', emoji: '🔨' },
      'fundraising': { label: 'Fundraising', className: 'status-fundraising', emoji: '💰' },
      'active': { label: 'Active', className: 'status-active', emoji: '🚀' },
      'exited': { label: 'Exited', className: 'status-exited', emoji: '🎉' },
      'paused': { label: 'Paused', className: 'status-paused', emoji: '⏸️' },
    };
    return phases[phase as keyof typeof phases] || phases.active;
  };

  const phaseInfo = getPhaseInfo(startup.phase);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'team', label: 'Team' },
    { id: 'financials', label: 'Financials' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-4 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Portfolio</span>
        </button>

        <div className="modern-card p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
                <Image
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  width={32}
                  height={32}
                  className="dark:invert"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {startup.name}
                </h1>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${phaseInfo.className}`}>
                    {phaseInfo.emoji} {phaseInfo.label}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    {startup.fundingStage.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  {startup.needsFunding && (
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                      🔥 Seeking Investment
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                  {startup.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {startup.needsFunding && startup.pitchDeckUrl && (
                <motion.a
                  href={startup.pitchDeckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Download size={16} />
                  Pitch Deck
                </motion.a>
              )}
              <motion.a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Visit Website
              </motion.a>
            </div>
          </div>

          {/* Building Progress */}
          {startup.phase === 'building' && startup.buildingProgress && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Development Progress
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {startup.buildingProgress}%
                </span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${startup.buildingProgress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="progress-fill"
                />
              </div>
            </div>
          )}

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="modern-card p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {startup.founded}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Founded</div>
            </div>
            
            <div className="modern-card p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users size={16} className="text-blue-400" />
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {startup.teamSize}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Team Size</div>
            </div>
            
            <div className="modern-card p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign size={16} className="text-green-400" />
                <span className="text-lg font-bold text-green-600 dark:text-green-400">
                  {startup.funding}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Funding</div>
            </div>
            
            <div className="modern-card p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {startup.location.split(',')[0]}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Location</div>
            </div>
            
            <div className="modern-card p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp size={16} className="text-orange-400" />
                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  {startup.industry}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Industry</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="modern-card mb-6"
      >
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              {startup.keyMetrics && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {startup.keyMetrics.users && (
                      <div className="modern-card p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {startup.keyMetrics.users}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                      </div>
                    )}
                    {startup.keyMetrics.revenue && (
                      <div className="modern-card p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                          {startup.keyMetrics.revenue}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue</div>
                      </div>
                    )}
                    {startup.keyMetrics.growth && (
                      <div className="modern-card p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {startup.keyMetrics.growth}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Achievements & Milestones
                </h3>
                <div className="flex flex-wrap gap-2">
                  {startup.achievements.map((achievement, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center py-12">
                <TrendingUp size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Detailed Metrics
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Detailed metrics and analytics coming soon.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center py-12">
                <Users size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Team Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Team profiles and information coming soon.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'financials' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center py-12">
                <DollarSign size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Financial Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Financial data and projections coming soon.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
