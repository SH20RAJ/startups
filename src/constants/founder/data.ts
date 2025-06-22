import { FounderData, Startup } from '@/types';

export const FOUNDER_DATA: FounderData = {
  name: "Sarah Chen",
  title: "Serial Entrepreneur & Investor",
  bio: "Passionate about building innovative technologies that solve real-world problems. 10+ years of experience in tech entrepreneurship with 3 successful exits.",
  avatar: "/next.svg",
  location: "San Francisco, CA",
  email: "sarah@example.com",
  linkedin: "https://linkedin.com/in/sarahchen",
  twitter: "https://twitter.com/sarahchen",
  totalFunding: "$50M+",
  successfulExits: 3,
  yearsExperience: 12
};

export const STARTUPS_DATA: Startup[] = [
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
  },
  {
    id: 5,
    name: "CryptoSecure",
    description: "Blockchain-based security solutions for financial institutions.",
    status: "Active",
    founded: "2022",
    funding: "$10M Seed",
    employees: "20-25",
    industry: "FinTech",
    logo: "/window.svg",
    website: "https://cryptosecure.io",
    achievements: ["SOC 2 Certified", "Enterprise Ready", "Zero Breaches"]
  },
  {
    id: 6,
    name: "SmartLogistics",
    description: "IoT-enabled supply chain optimization platform.",
    status: "Paused",
    founded: "2019",
    funding: "$3M Pre-Seed",
    employees: "10-15",
    industry: "Logistics",
    logo: "/globe.svg",
    website: "https://smartlogistics.com",
    achievements: ["Patent Pending", "Pilot Program Success", "Cost Reduction 30%"]
  }
];

export const INDUSTRIES = [
  "AI/ML",
  "CleanTech", 
  "HealthTech",
  "EdTech",
  "FinTech",
  "Logistics",
  "SaaS",
  "E-commerce",
  "Gaming",
  "Hardware"
];

export const STATUS_OPTIONS = [
  "Active",
  "Acquired", 
  "Sold",
  "Paused"
];
