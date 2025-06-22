import FounderProfile from "@/components/FounderProfile";
import StartupCard from "@/components/StartupCard";

// Mock data for the founder and startups
const founderData = {
  name: "Sarah Chen",
  title: "Serial Entrepreneur & Investor",
  bio: "Passionate about building innovative technologies that solve real-world problems. 10+ years of experience in tech entrepreneurship with 3 successful exits.",
  avatar: "/next.svg", // Using available placeholder
  location: "San Francisco, CA",
  email: "sarah@example.com",
  linkedin: "https://linkedin.com/in/sarahchen",
  twitter: "https://twitter.com/sarahchen",
  totalFunding: "$50M+",
  successfulExits: 3,
  yearsExperience: 12
};

const startups = [
  {
    id: 1,
    name: "TechFlow AI",
    description: "AI-powered workflow automation platform helping businesses streamline their operations.",
    status: "Active",
    founded: "2023",
    funding: "$15M Series A",
    employees: "45-50",
    industry: "AI/ML",
    logo: "/next.svg",
    website: "https://techflow.ai",
    achievements: ["YC W23", "Forbes 30 Under 30", "Best AI Startup 2024"]
  },
  {
    id: 2,
    name: "GreenEnergy Solutions",
    description: "Renewable energy management system for commercial buildings.",
    status: "Acquired",
    founded: "2020",
    funding: "$8M Series A",
    employees: "25-30",
    industry: "CleanTech",
    logo: "/globe.svg",
    website: "https://greenenergy.com",
    achievements: ["Acquired by Tesla 2022", "Carbon Neutral Certified", "LEED Platinum"]
  },
  {
    id: 3,
    name: "HealthTrack Pro",
    description: "Digital health platform connecting patients with healthcare providers.",
    status: "Active",
    founded: "2021",
    funding: "$12M Seed",
    employees: "30-35",
    industry: "HealthTech",
    logo: "/vercel.svg",
    website: "https://healthtrack.pro",
    achievements: ["FDA Approved", "HIPAA Compliant", "500K+ Active Users"]
  },
  {
    id: 4,
    name: "EduTech Labs",
    description: "Personalized learning platform for K-12 education.",
    status: "Sold",
    founded: "2018",
    funding: "$5M Seed",
    employees: "15-20",
    industry: "EdTech",
    logo: "/file.svg",
    website: "https://edutech.labs",
    achievements: ["Sold to Pearson 2021", "1M+ Students", "Award-winning Platform"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <FounderProfile founder={founderData} companiesCount={startups.length} />

        {/* Startups Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio Companies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {startups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>© 2024 {founderData.name}. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
