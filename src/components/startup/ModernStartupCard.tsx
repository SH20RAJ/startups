import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Download,
  Eye,
  Building,
  Lightbulb,
  Zap,
  Pause,
  CheckCircle,
  Heart,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Startup } from "@/types";
import { useState } from "react";

interface ModernStartupCardProps {
  startup: Startup;
}

export default function ModernStartupCard({ startup }: ModernStartupCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPhaseInfo = (phase: string) => {
    const phases = {
      'ideation': {
        label: 'Ideation',
        icon: '💡',
        className: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800'
      },
      'building': {
        label: 'Building',
        icon: '🔨',
        className: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
      },
      'fundraising': {
        label: 'Fundraising',
        icon: '💰',
        className: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
      },
      'active': {
        label: 'Active',
        icon: '🚀',
        className: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
      },
      'exited': {
        label: 'Exited',
        icon: '✨',
        className: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800'
      },
      'paused': {
        label: 'Paused',
        icon: '⏸️',
        className: 'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
      },
    };
    return phases[phase as keyof typeof phases] || phases.active;
  };

  const phaseInfo = getPhaseInfo(startup.phase);

  return (
    <motion.div
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col overflow-hidden group"
    >
      {/* Notion-style header with logo and title */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-3">
          {/* Actual startup logo */}
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 group-hover:scale-110 transition-transform duration-200 overflow-hidden">
            <Image
              src={startup.logo}
              alt={`${startup.name} logo`}
              width={40}
              height={40}
              className="rounded-lg object-cover"
              onError={(e) => {
                // Fallback to emoji if logo fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling!.classList.remove('hidden');
              }}
            />
            <span className="hidden text-2xl">
              {startup.phase === 'building' ? '🔨' :
               startup.phase === 'fundraising' ? '💰' :
               startup.phase === 'active' ? '🚀' :
               startup.phase === 'exited' ? '✨' :
               startup.phase === 'ideation' ? '💡' : '⏸️'}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                {startup.name}
              </h3>
              {startup.needsFunding && (
                <span className="text-sm">❤️</span>
              )}
            </div>
            
            {/* Phase tag */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium ${phaseInfo.className}`}>
              <span>{phaseInfo.icon}</span>
              <span>{phaseInfo.label}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-4 mb-4">
          {startup.description}
        </p>

        {/* Accordion Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-2.5 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 rounded-lg transition-all duration-200 group/toggle border border-gray-200 dark:border-gray-600"
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="text-xs">📊</span>
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isExpanded ? 'Less' : 'More'}
            </span>
            {isExpanded ? (
              <ChevronUp size={16} className="text-gray-500 group-hover/toggle:text-gray-700 dark:group-hover/toggle:text-gray-300 transition-colors" />
            ) : (
              <ChevronDown size={16} className="text-gray-500 group-hover/toggle:text-gray-700 dark:group-hover/toggle:text-gray-300 transition-colors" />
            )}
          </div>
        </button>
      </div>

      {/* Expandable Details Section */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 space-y-1">
          {/* Building Progress */}
          {startup.phase === 'building' && startup.buildingProgress && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center gap-1">
                  <span>🔨</span>
                  Progress
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {startup.buildingProgress}%
                </span>
              </div>
              <div className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${startup.buildingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Notion-style properties section */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-2">
            {/* Industry property */}
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xs">🏭</span>
                Industry
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600">
                {startup.industry}
              </span>
            </div>

            {/* Founded property */}
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xs">📅</span>
                Founded
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600">
                {startup.founded}
              </span>
            </div>

            {/* Funding property */}
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xs">💰</span>
                Funding
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600">
                {startup.funding}
              </span>
            </div>

            {/* Team size property */}
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xs">👥</span>
                Team
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600">
                {startup.employees}
              </span>
            </div>

            {/* Location property */}
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xs">📍</span>
                Location
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600">
                {startup.location}
              </span>
            </div>

            {/* Revenue property (if available) */}
            {startup.monthlyRevenue && startup.monthlyRevenue !== "$0" && (
              <div className="flex items-center justify-between py-1.5">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="text-xs">📈</span>
                  Revenue
                </span>
                <span className="text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-md border border-green-200 dark:border-green-800">
                  {startup.monthlyRevenue}
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Success indicators - Always visible */}
      {startup.achievements && startup.achievements.length > 0 && (
        <div className="px-6 pb-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 dark:text-green-400">🏆</span>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Recent Win</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              {startup.achievements[0]}
            </p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="p-6 pt-0 mt-auto">
        <div className="flex gap-2">
          <a
            href={`/startups/${startup.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors text-center"
          >
            View Details
          </a>
          
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
          >
            <ExternalLink size={14} />
            Visit
          </a>

          {startup.pitchDeckUrl && (
            <a
              href={startup.pitchDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
            >
              <Download size={14} />
              Deck
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}