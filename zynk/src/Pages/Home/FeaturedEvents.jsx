import React, { useState } from 'react';
import image1 from "../../assets/FeaturedEvents/htmd.png"
import image2 from "../../assets/FeaturedEvents/unfold24.png"
import image3 from "../../assets/FeaturedEvents/AIcamp.png"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Star,
  Bookmark,
  Share2,
  TrendingUp
} from 'lucide-react';

const FeaturedEvents = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Conference', 'Hackathon', 'Workshop', 'Networking'];

  const featuredEvents = [
    {
      id: 1,
      title: "HTMD Conference",
      image: image1,
      date: "Dec 07, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Microsoft reactor-Lavelle Road",
      venue: "Lavelle Road,Bengaluru",
      category: "Conference",
      price: 299,
      rating: 4.8,
      attendees: 1200,
      spotsLeft: 50,
      tags: ["Technology", "Innovation", "AI"],
      trending: true,
      headerColor: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Unfold 24",
      image: image2,
      date: "Dec 1-2, 2024",
      time: "24 Hours",
      location: "Marriott Hotel Whitefield",
      venue: "Whitefield, Bengaluru",
      category: "Hackathon",
      price: 0,
      rating: 4.9,
      attendees: 800,
      spotsLeft: 200,
      tags: ["Coding", "Web3", "Prizes"],
      trending: true,
      headerColor: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "AI Camp",
      image: image3,
      date: "Dec 07, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Yuvapatha",
      venue: "Benagaluru",
      category: "Meetup",
      price: 0,
      rating: 4.7,
      attendees: 300,
      spotsLeft: 30,
      tags: ["AI", "ML", "Hands-on"],
      trending: false,
      headerColor: "from-tertiary-500 to-primary-600"
    }
  ];

  const EventCard = ({ event }) => (
    <div 
      className="group relative bg-secondary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setHoveredEvent(event.id)}
      onMouseLeave={() => setHoveredEvent(null)}
    >
      {/* Header Gradient */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${event.headerColor}`} />

      {/* Trending Badge */}
      {event.trending && (
        <div className="absolute top-4 left-4 flex items-center space-x-1 bg-primary-600/90 text-secondary-50 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          <TrendingUp className="w-4 h-4 mr-1" />
          Trending
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-secondary-50/90 backdrop-blur-sm rounded-full hover:bg-secondary-50 transition-colors transform hover:scale-105">
            <Share2 className="w-4 h-4 text-primary-600" />
          </button>
          <button className="p-2 bg-secondary-50/90 backdrop-blur-sm rounded-full hover:bg-secondary-50 transition-colors transform hover:scale-105">
            <Bookmark className="w-4 h-4 text-primary-600" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <span className="px-3 py-1 bg-primary-600/90 text-secondary-50 rounded-full text-sm font-medium backdrop-blur-sm">
            {event.category}
          </span>
          <div className="flex items-center bg-secondary-50/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-primary-700 font-medium">{event.rating}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-900 mb-4 line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-4">
          {/* Date and Time */}
          <div className="flex items-center justify-between text-primary-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.time}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-2 mt-1 text-primary-600" />
            <div>
              <p className="text-primary-700 font-medium">{event.venue}</p>
              <p className="text-primary-600 text-sm">{event.location}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-primary-100">
            <div className="flex items-center">
              <Users className="w-4 h-4 text-primary-600 mr-2" />
              <div className="text-sm">
                <span className="text-primary-700 font-medium">{event.attendees}</span>
                <span className="text-primary-500 ml-1">attending</span>
              </div>
            </div>
            <div className="text-lg font-semibold text-primary-900">
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 py-3 rounded-xl font-medium transition-colors flex items-center justify-center group">
            Register Now
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Discover the most exciting upcoming events curated just for you
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary-100 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-secondary-50'
                    : 'text-primary-600 hover:text-primary-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-secondary-50 px-8 py-3 rounded-full font-medium transition-colors group">
            View All Events
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;