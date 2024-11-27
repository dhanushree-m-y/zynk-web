import React, { useState } from 'react';
import { Calendar, MapPin, Star, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-secondary-200 hover:shadow-lg transition-all h-full">
    <div className="relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          event.type === 'Conference' 
            ? 'bg-primary-100 text-primary-700'
            : 'bg-tertiary-100 text-tertiary-700'
        }`}>
          {event.type}
        </span>
      </div>
      <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
        <Star className="w-4 h-4 text-yellow-400" />
        <span className="ml-1 text-sm font-medium">{event.rating}</span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-primary-900 mb-2">{event.title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-primary-600">
          <Calendar className="w-4 h-4 mr-2" />
          {event.date}
        </div>
        <div className="flex items-center text-primary-600">
          <Clock className="w-4 h-4 mr-2" />
          {event.time}
        </div>
        <div className="flex items-center text-primary-600">
          <MapPin className="w-4 h-4 mr-2" />
          {event.venue}
        </div>
        <div className="flex items-center text-primary-600">
          <Users className="w-4 h-4 mr-2" />
          {event.attendees} attending
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-secondary-100 text-primary-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        <span className="text-2xl font-bold text-primary-700">
          {event.price}
        </span>
        <button className="px-6 py-2 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  </div>
);

const EventCarousel = ({ events, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary-800">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white border border-secondary-200 hover:bg-primary-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-primary-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white border border-secondary-200 hover:bg-primary-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-primary-600" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0 px-2">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-secondary-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Conference = () => {
  const eventTypes = {
    conference: [
      {
        id: 1,
        title: "HTMD Conference",
        date: "Dec 07, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Lavelle Road, Bengaluru",
        venue: "Microsoft reactor-Lavelle Road",
        rating: 4.8,
        attendees: 1200,
        price: "$299",
        type: "Conference",
        image: "/api/placeholder/600/300",
        tags: ["Technology", "Innovation", "AI"]
      },
      {
        id: 2,
        title: "DevOps India Summit",
        date: "Dec 15, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Whitefield, Bengaluru",
        venue: "Marriott Convention Center",
        rating: 4.7,
        attendees: 800,
        price: "$199",
        type: "Conference",
        image: "/api/placeholder/600/300",
        tags: ["DevOps", "Cloud", "Infrastructure"]
      }
    ],
    workshop: [
      {
        id: 3,
        title: "AI Camp",
        date: "Dec 07, 2024",
        time: "10:00 AM - 1:00 PM",
        location: "Benagaluru",
        venue: "Yuvapatha",
        rating: 4.7,
        attendees: 300,
        price: "Free",
        type: "Workshop",
        image: "/api/placeholder/600/300",
        tags: ["AI", "ML", "Hands-on"]
      },
      {
        id: 4,
        title: "Blockchain Workshop",
        date: "Dec 10, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Indiranagar, Bengaluru",
        venue: "Tech Hub",
        rating: 4.9,
        attendees: 150,
        price: "$49",
        type: "Workshop",
        image: "/api/placeholder/600/300",
        tags: ["Blockchain", "Web3", "DApps"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Tech Events & Learning Opportunities
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Whether you're looking for in-depth conferences or hands-on workshops, 
            find the perfect learning experience to boost your tech career.
          </p>
        </div>

        <div className="space-y-16">
          <EventCarousel 
            events={eventTypes.conference} 
            title="Featured Conferences" 
          />
          
          <EventCarousel 
            events={eventTypes.workshop} 
            title="Technical Workshops" 
          />
        </div>
      </div>
    </div>
  );
};

export default Conference;