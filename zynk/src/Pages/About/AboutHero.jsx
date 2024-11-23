import React, { useState } from 'react';
import { 
  Target, Users, Sparkles, Globe, Shield, Award,
  Search, MapPin, Calendar, Share2, MessageSquare,
  Filter, Hash, TrendingUp, Trophy, Laptop, Gift,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const AboutHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const coreValues = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge AI and technology to provide the best event discovery experience."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, engaged communities where professionals can connect, learn, and grow together."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Maintaining the highest standards of security and reliability in every interaction on our platform."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Creating a welcoming space for diverse perspectives, backgrounds, and ideas to thrive."
    }
  ];

  const eventFeatures = [
    {
      icon: Search,
      title: "Smart Event Discovery",
      features: [
        "Location-based recommendations",
        "Category and interest filtering",
        "AI-powered event matching",
        "Price and date filtering",
        "Keyword and tag search"
      ]
    },
    {
      icon: Calendar,
      title: "Event Management",
      features: [
        "Easy registration process",
        "Automated reminders",
        "Digital tickets",
        "Event schedule planning",
        "Personalized calendar"
      ]
    },
    {
      icon: Share2,
      title: "Social Sharing",
      features: [
        "Event experience posts",
        "Photo and video sharing",
        "Achievement showcases",
        "Network building",
        "Professional portfolio"
      ]
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? coreValues.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === coreValues.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tertiary-500 rounded-full filter blur-[120px] opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full filter blur-[120px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-700/40 rounded-full backdrop-blur-sm border border-primary-600/20 mb-8">
            <Sparkles className="w-4 h-4 text-tertiary-300" />
            <span className="text-sm text-primary-100">Discover Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-50 mb-6">
            Transforming Event Discovery
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We're on a mission to revolutionize how professionals discover, connect, and grow through meaningful events and experiences.
          </p>
        </div>
      </div>

      {/* Event Discovery Section */}
      <div className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Discover Events Your Way</h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Find and join events that align with your interests, location, and goals using our advanced discovery features.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {eventFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-secondary-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-primary-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hackathon Section */}
      <div className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-50 mb-4">Hackathon Central</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Join exciting hackathons, showcase your skills, and connect with innovators from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-xl p-8">
              <Trophy className="w-10 h-10 text-tertiary-400 mb-6" />
              <h3 className="text-xl font-semibold text-secondary-50 mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML", "Web3", "Mobile", "IoT", 
                  "FinTech", "Healthcare", "Sustainability"
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-tertiary-600/20 rounded-full text-sm text-tertiary-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-xl p-8">
              <Laptop className="w-10 h-10 text-tertiary-400 mb-6" />
              <h3 className="text-xl font-semibold text-secondary-50 mb-4">Participation</h3>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>In-person events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Virtual challenges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Hybrid formats</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Team formation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Mentorship support</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-xl p-8">
              <Gift className="w-10 h-10 text-tertiary-400 mb-6" />
              <h3 className="text-xl font-semibold text-secondary-50 mb-4">Rewards</h3>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Cash prizes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Industry recognition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Job opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Mentorship access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary-400" />
                  <span>Resource credits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-50 mb-4">Our Core Values</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              These principles guide everything we do at Zynk, helping us create the best possible experience for our community.
            </p>
          </div>

          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-800/50 hover:bg-primary-700/50 text-secondary-50 rounded-full p-2 transition-colors z-10"
              onClick={handlePrevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all ${
                      activeSlide === index
                        ? 'scale-105 shadow-xl'
                        : 'scale-100 shadow-lg'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-tertiary-600/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-tertiary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-50 mb-3">{value.title}</h3>
                    <p className="text-primary-100">{value.description}</p>
                  </div>
                );
              })}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-800/50 hover:bg-primary-700/50 text-secondary-50 rounded-full p-2 transition-colors z-10"
              onClick={handleNextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Events Hosted" },
              { number: "50K+", label: "Active Users" },
              { number: "100+", label: "Cities Covered" },
              { number: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-secondary-50 mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;