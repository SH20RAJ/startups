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
  Play,
  Pause,
  CheckCircle,
  Heart
} from "lucide-react";
import { Startup } from "@/types";

interface ModernStartupCardProps {
  startup: Startup;
  onViewDetails: (id: number) => void;
}

export default function ModernStartupCard({ startup, onViewDetails }: ModernStartupCardProps) {
  const getPhaseInfo = (phase: string) => {
    const phases = {
      'ideation': {
        label: 'Ideation',
        icon: <Lightbulb size={14} />,
        className: 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border border-yellow-300/50'
      },
      'building': {
        label: 'Building',
        icon: <Building size={14} />,
        className: 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300/50'
      },
      'fundraising': {
        label: 'Fundraising',
        icon: <TrendingUp size={14} />,
        className: 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border border-purple-300/50'
      },
      'active': {
        label: 'Active',
        icon: <Zap size={14} />,
        className: 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300/50'
      },
      'exited': {
        label: 'Exited',
        icon: <CheckCircle size={14} />,
        className: 'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 border border-cyan-300/50'
      },
      'paused': {
        label: 'Paused',
        icon: <Pause size={14} />,
        className: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300/50'
      },
    };
    return phases[phase as keyof typeof phases] || phases.active;
  };

  const getFundingStageLabel = (stage: string) => {
    const stages = {
      'bootstrapped': 'Bootstrapped',
      'pre-seed': 'Pre-Seed',
      'seed': 'Seed',
      'series-a': 'Series A',
      'series-b': 'Series B',
      'series-c': 'Series C',
      'ipo': 'IPO',
      'acquired': 'Acquired'
    };
    return stages[stage as keyof typeof stages] || stage;
  };

  const phaseInfo = getPhaseInfo(startup.phase);

  return (
    <motion.div
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="cute-card h-full flex flex-col"
    >
      {/* Header with Logo and Phase */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src={startup.logo}
                alt={`${startup.name} logo`}
                width={40}
                height={40}
                className="rounded-xl object-cover"
              />
            </div>
            {startup.needsFunding && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <Heart size={8} className="text-white" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate mb-1">
              {startup.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{startup.industry}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${phaseInfo.className}`}>
          {phaseInfo.icon}
          <span>{phaseInfo.label}</span>
        </div>
      </div>

      {/* Description - Fixed height */}
      <div className="mb-4 h-12 overflow-hidden">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {startup.description}
        </p>
      </div>

      {/* Building Progress (only for building phase) */}
      {startup.phase === 'building' && startup.buildingProgress && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Building Progress</span>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
              {startup.buildingProgress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary via-pink-400 to-orange-400 h-full rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${startup.buildingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Key Metrics - Fixed height grid */}
      <div className="grid grid-cols-2 gap-4 mb-4 h-20">
        <div className="cute-metric-card">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
            <DollarSign size={12} className="text-green-500" />
            <span>Funding</span>
          </div>
          <div className="font-bold text-sm text-gray-900 dark:text-white truncate">{startup.funding}</div>
          <div className="text-xs text-gray-500 capitalize truncate">{getFundingStageLabel(startup.fundingStage)}</div>
        </div>
        
        <div className="cute-metric-card">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
            <Users size={12} className="text-blue-500" />
            <span>Team</span>
          </div>
          <div className="font-bold text-sm text-gray-900 dark:text-white">{startup.teamSize}</div>
          <div className="text-xs text-gray-500 truncate">{startup.employees}</div>
        </div>
      </div>

      {/* Location & Founded */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl px-3 py-2">
        <div className="flex items-center gap-1">
          <MapPin size={12} className="text-purple-500" />
          <span className="truncate">{startup.location}</span>
        </div>
        <div className="text-right">Founded {startup.founded}</div>
      </div>

      {/* Revenue & Growth (if available) */}
      {(startup.monthlyRevenue || startup.growthRate) && (
        <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-3 mb-4 border border-green-100 dark:border-green-800/30">
          {startup.monthlyRevenue && (
            <div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Monthly Revenue</div>
              <div className="font-bold text-sm text-green-600 dark:text-green-400">{startup.monthlyRevenue}</div>
            </div>
          )}
          {startup.growthRate && (
            <div className="text-right">
              <div className="text-xs text-gray-600 dark:text-gray-400">Growth Rate</div>
              <div className="font-bold text-sm text-blue-600 dark:text-blue-400">{startup.growthRate}</div>
            </div>
          )}
        </div>
      )}

      {/* Achievements - Fixed height */}
      {startup.achievements && startup.achievements.length > 0 && (
        <div className="mb-4 h-8 overflow-hidden">
          <div className="flex flex-wrap gap-1">
            {startup.achievements.slice(0, 2).map((achievement, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-primary/10 to-orange-400/10 text-primary text-xs font-medium rounded-full border border-primary/20 truncate"
              >
                {achievement}
              </span>
            ))}
            {startup.achievements.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                +{startup.achievements.length - 2}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Spacer to push buttons to bottom */}
      <div className="flex-1"></div>

      {/* Action Buttons - Fixed height */}
      <div className="flex gap-2 pt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewDetails(startup.id)}
          className="cute-btn-primary flex-1"
        >
          <Eye size={14} />
          <span>View</span>
        </motion.button>
        
        {startup.needsFunding && startup.pitchDeckUrl && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(startup.pitchDeckUrl, '_blank')}
            className="cute-btn-secondary"
          >
            <Download size={14} />
          </motion.button>
        )}
        
        {startup.website && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(startup.website, '_blank')}
            className="cute-btn-secondary"
          >
            <ExternalLink size={14} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}