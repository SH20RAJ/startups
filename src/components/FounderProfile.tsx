interface FounderData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  linkedin: string;
  twitter: string;
  totalFunding: string;
  successfulExits: number;
  yearsExperience: number;
}

interface FounderProfileProps {
  founder: FounderData;
  companiesCount: number;
}

export default function FounderProfile({ founder, companiesCount }: FounderProfileProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">
              {founder.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {founder.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {founder.title}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
            {founder.bio}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {founder.totalFunding}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Funding</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {founder.successfulExits}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Successful Exits</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {companiesCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {founder.yearsExperience}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>📍</span>
              <span>{founder.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>✉️</span>
              <span>{founder.email}</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href={founder.linkedin} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                LinkedIn
              </a>
              <a href={founder.twitter} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
