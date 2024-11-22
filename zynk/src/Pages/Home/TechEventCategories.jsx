import React, { useState } from 'react';
import { 
  Search, 
  Code2,
  Shield,
  Brain,
  Cpu,
  Globe,
  Blocks,
  Server,
  Cloud,
  Smartphone,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
  Star,
  ChevronRight,
  Rocket
} from 'lucide-react';

const TechEventCategories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep learning, NLP, computer vision, and AI engineering events',
      color: 'from-purple-500 to-indigo-600',
      count: 86,
      subcategories: ['Deep Learning', 'NLP', 'Computer Vision', 'MLOps']
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security conferences, CTFs, and ethical hacking competitions',
      color: 'from-red-500 to-pink-600',
      count: 64,
      subcategories: ['Network Security', 'CTF', 'Ethical Hacking', 'Cloud Security']
    },
    {
      id: 'blockchain',
      icon: Blocks,
      title: 'Blockchain & Web3',
      description: 'Cryptocurrency, DeFi, and blockchain development events',
      color: 'from-blue-500 to-cyan-600',
      count: 52,
      subcategories: ['DeFi', 'Smart Contracts', 'Crypto', 'NFTs']
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Cloud architecture, DevOps, and serverless events',
      color: 'from-sky-500 to-blue-600',
      count: 73,
      subcategories: ['AWS', 'Azure', 'GCP', 'DevOps']
    },
    {
      id: 'full-stack',
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Web development, mobile, and cross-platform hackathons',
      color: 'from-green-500 to-emerald-600',
      count: 95,
      subcategories: ['Frontend', 'Backend', 'Mobile', 'Cross-Platform']
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT & Hardware',
      description: 'Hardware hackathons and IoT development events',
      color: 'from-orange-500 to-red-600',
      count: 41,
      subcategories: ['Embedded Systems', 'Robotics', 'Smart Devices', 'Arduino']
    }
  ];

  const featuredHackathons = [
    {
      id: 1,
      title: "Global AI Hackathon 2024",
      category: "ai-ml",
      image: "/api/placeholder/800/600",
      date: "Dec 15-17, 2024",
      location: "Virtual & San Francisco, CA",
      prizePool: "$50,000",
      rating: 4.9,
      attendees: 1500,
      tags: ["AI", "Machine Learning", "Cloud"],
      isHot: true,
      deadline: "Dec 1, 2024",
      sponsoredBy: ["Microsoft", "AWS", "Google Cloud"]
    },
    {
      id: 2,
      title: "Blockchain Innovation Challenge",
      category: "blockchain",
      image: "/api/placeholder/800/600",
      date: "Jan 5-7, 2025",
      location: "New York, NY",
      prizePool: "$35,000",
      rating: 4.8,
      attendees: 800,
      tags: ["Web3", "DeFi", "Blockchain"],
      isHot: true,
      deadline: "Dec 20, 2024",
      sponsoredBy: ["Ethereum Foundation", "Binance", "Polygon"]
    },
    {
      id: 3,
      title: "CyberSec Defense Hackathon",
      category: "cybersecurity",
      image: "/api/placeholder/800/600",
      date: "Dec 22-24, 2024",
      location: "Virtual",
      prizePool: "$25,000",
      rating: 4.7,
      attendees: 600,
      tags: ["Security", "CTF", "Network"],
      isHot: false,
      deadline: "Dec 10, 2024",
      sponsoredBy: ["CrowdStrike", "FireEye", "Cisco"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative bg-primary-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-tertiary-900 opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-700/40 rounded-full backdrop-blur-sm border border-primary-600/20 mb-8">
            <Rocket className="w-4 h-4 text-tertiary-300" />
            <span className="text-sm text-primary-100">Tech Events & Hackathons</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary-50 mb-6">
            Discover Tech Events by Category
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
            Join the most innovative hackathons and tech events in AI, Blockchain, Cybersecurity, and more
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" />
              <input
                type="text"
                placeholder="Search events by technology, stack, or platform..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary-50/10 backdrop-blur-md border border-primary-700/30 text-secondary-50 placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-tertiary-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-secondary-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-secondary-50`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-primary-900">{category.title}</h3>
                        <span className="text-primary-600 text-sm">{category.count} events</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-primary-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm hover:bg-primary-100 transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Hackathons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Featured Hackathons</h2>
            <p className="text-lg text-primary-600">Join the most exciting tech challenges and competitions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHackathons.map((hackathon) => (
              <div key={hackathon.id} className="bg-secondary-50 rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-3 py-1 bg-primary-600/90 text-secondary-50 rounded-full text-sm font-medium backdrop-blur-sm">
                      {hackathon.category}
                    </span>
                    {hackathon.isHot && (
                      <span className="px-3 py-1 bg-red-500/90 text-secondary-50 rounded-full text-sm font-medium backdrop-blur-sm flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Hot
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {hackathon.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-primary-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{hackathon.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{hackathon.attendees} participating</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.sponsoredBy.map((sponsor, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-tertiary-50 text-tertiary-600 rounded-full text-xs"
                      >
                        {sponsor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-primary-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-sm text-primary-600">Prize Pool</span>
                      <span className="text-2xl font-bold text-primary-900">{hackathon.prizePool}</span>
                    </div>
                    <button className="px-6 py-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechEventCategories;