import Image from "next/image";

interface Startup {
  id: number;
  name: string;
  description: string;
  status: string;
  founded: string;
  funding: string;
  employees: string;
  industry: string;
  logo: string;
  website: string;
  achievements: string[];
}

interface StartupCardProps {
  startup: Startup;
}

export default function StartupCard({ startup }: StartupCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Acquired':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Sold':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105">
      {/* Startup Header */}
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {startup.name}
            </h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(startup.status)}`}>
              {startup.status}
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {startup.description}
      </p>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Founded</div>
          <div className="font-medium text-gray-900 dark:text-white">{startup.founded}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Industry</div>
          <div className="font-medium text-gray-900 dark:text-white">{startup.industry}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Funding</div>
          <div className="font-medium text-gray-900 dark:text-white">{startup.funding}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Team Size</div>
          <div className="font-medium text-gray-900 dark:text-white">{startup.employees}</div>
        </div>
      </div>
      
      {/* Achievements */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Key Achievements</div>
        <div className="flex flex-wrap gap-2">
          {startup.achievements.map((achievement, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
              {achievement}
            </span>
          ))}
        </div>
      </div>
      
      {/* Visit Website Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
        Visit Website →
      </button>
    </div>
  );
}
