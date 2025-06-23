'use client';

import { motion } from 'framer-motion';
import { FOUNDER_DATA } from '@/constants';
import ModernLayout from '@/components/layout/ModernLayout';
import { ArrowRight, CheckCircle, Target, Users, Zap, TrendingUp, Shield, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const trustFactors = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Successfully building and scaling multiple startups across different industries with real traction and user growth."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data-Driven Approach",
      description: "Every decision backed by metrics, user feedback, and market research. Transparent reporting on progress and challenges."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strong Network",
      description: "Connected with industry leaders, mentors, and fellow entrepreneurs. Leveraging collective wisdom for better outcomes."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Hands-on founder with deep technical knowledge. Can build, iterate, and scale products efficiently."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Communication",
      description: "Regular updates, honest about challenges, clear roadmaps. You'll always know where your investment stands."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long-term Vision",
      description: "Building sustainable businesses, not just quick exits. Focused on creating lasting value for all stakeholders."
    }
  ];

  const achievements = [
    "Building 5+ startups simultaneously with real user traction",
    "Technical background with hands-on product development",
    "Experience across AI, wellness, design, and fintech sectors",
    "Proven ability to identify and solve real market problems",
    "Strong execution track record with launched products"
  ];

  return (
    <ModernLayout founder={FOUNDER_DATA}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Investment Opportunity
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Why Invest in My Ventures?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I'm Shaswat Raj, a serial entrepreneur building the next generation of innovative startups. 
            This portfolio represents years of dedication, technical expertise, and a proven track record 
            of turning ideas into reality.
          </p>
        </motion.div>

        {/* Newsletter CTA - Priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-lg"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Priority Access
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Get Exclusive Startup Insights
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Join my Substack newsletter for behind-the-scenes updates, investment opportunities, 
              and exclusive insights into my startup journey. First access to funding rounds and partnerships.
            </p>
            <Link
              href="https://sh20raj.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-blue-200 mt-4">
              🔥 Join 1000+ investors and entrepreneurs • Weekly insights • No spam, ever
            </p>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I'm a passionate entrepreneur and technologist with a deep commitment to solving real-world problems 
                through innovative solutions. My journey spans across multiple industries, from AI-powered content 
                creation to mindful wellness companions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                What sets me apart is my hands-on approach to building products. I don't just have ideas – I execute 
                them. Each startup in my portfolio represents months of dedicated development, user research, and 
                iterative improvement based on real market feedback.
              </p>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">My Mission</h3>
                <p className="leading-relaxed mb-6">
                  To build technology that meaningfully improves people's lives while creating sustainable, 
                  profitable businesses that generate significant returns for investors.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Active Startups</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm opacity-90">Years Building</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why You Can Trust Me With Your Investment
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Investing in startups requires trust. Here's why I've earned it from partners, users, and stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              My Investment Philosophy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Building sustainable, impactful businesses together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Partnership Mindset
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I view investors as partners, not just funding sources. Your success is my success.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Sustainable Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focused on building long-term value, not just quick wins or inflated valuations.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Risk Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Careful planning, diversified portfolio, and contingency strategies for every venture.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Invest in the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join me in building the next generation of innovative startups. Start with my newsletter for exclusive insights and investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://sh20raj.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              📧 Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={FOUNDER_DATA.linkedin || '#'}
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-xl transition-colors"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-xl transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </ModernLayout>
  );
}
