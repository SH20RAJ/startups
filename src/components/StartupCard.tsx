import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users, DollarSign, Building } from "lucide-react";
import { Startup } from "@/types";
import { getStatusColor, cn } from "@/utils";

interface StartupCardProps {
  startup: Startup;
  index?: number;
}

export default function StartupCard({ startup, index = 0 }: StartupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 p-6"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <Image
              src={startup.logo}
              alt={`${startup.name} logo`}
              width={24}
              height={24}
              className="dark:invert"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {startup.name}
            </h3>
            <span className={cn("inline-block px-2 py-1 rounded-full text-xs font-medium", getStatusColor(startup.status))}>
              {startup.status}
            </span>
          </div>
        </div>
        <a
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {startup.description}
      </p>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-gray-400" />
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Founded</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{startup.founded}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Building size={14} className="text-gray-400" />
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Industry</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{startup.industry}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={14} className="text-gray-400" />
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Funding</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{startup.funding}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-gray-400" />
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Team Size</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{startup.employees}</div>
          </div>
        </div>
      </div>
      
      {/* Achievements */}
      <div className="mb-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Achievements</div>
        <div className="flex flex-wrap gap-1">
          {startup.achievements.slice(0, 3).map((achievement, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
              {achievement}
            </span>
          ))}
          {startup.achievements.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +{startup.achievements.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      {/* CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full">
        Visit Website →
      </button>
    </motion.div>
  );
}
