import React, { useState } from 'react';
import { Calendar, MapPin, LogOut, Edit, ChevronRight, ChevronLeft } from 'lucide-react';

const SimpleCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);
  
  // Fill in the days
  let dayCounter = 1;
  for (let i = firstDayOfMonth; i < 7; i++) {
    week[i] = dayCounter++;
  }
  weeks.push(week);
  
  week = Array(7).fill(null);
  while (dayCounter <= daysInMonth) {
    for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
      week[i] = dayCounter++;
    }
    weeks.push([...week]);
    week = Array(7).fill(null);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-semibold">
          {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={nextMonth} className="p-1">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium py-1">
            {day}
          </div>
        ))}
        {weeks.map((week, i) => (
          week.map((day, j) => (
            <div
              key={`${i}-${j}`}
              className={`text-center py-2 ${
                day ? 'hover:bg-gray-100 cursor-pointer rounded' : ''
              }`}
            >
              {day}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Full-stack developer passionate about AI and blockchain",
    avatar: "/api/placeholder/150/150"
  };

  const registeredEvents = [
    {
      id: 1,
      title: "Gen AI Hackathon",
      date: "Dec 6-8, 2024",
      location: "Thomson Reuters, Bangalore",
      description: "Join us for an exciting AI hackathon focused on generative AI technologies.",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    {
      id: 2,
      title: "ETHINDIA",
      date: "Dec 6-8, 2024",
      location: "KTPO, Bangalore",
      description: "The largest Ethereum hackathon in India.",
      coordinates: { lat: 12.9851, lng: 77.7284 }
    }
  ];

  const handleLogout = () => {
    // Add logout logic here
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-start gap-6">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                  <p className="text-gray-600">{userProfile.email}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="flex items-center px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{userProfile.bio}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Registered Events</h2>
              <div className="space-y-4">
                {registeredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mt-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <p className="mt-2 text-gray-700">{event.description}</p>
                      </div>
                      <button
                        onClick={() => window.location.href = `/events/${event.id}`}
                        className="flex items-center text-primary-600 hover:text-primary-700"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar & Map Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Calendar</h2>
              <SimpleCalendar />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Event Locations</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map Component
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  defaultValue={userProfile.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={userProfile.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  defaultValue={userProfile.bio}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;