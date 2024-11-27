import React, { useState } from 'react';
import { Calendar, MapPin, Users, Coffee, Video, Image } from 'lucide-react';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="px-8 py-6 border-b border-gray-200">
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-primary-800">
      {children}
    </h2>
  );
};

const CardContent = ({ children }) => {
  return (
    <div className="p-8">
      {children}
    </div>
  );
};

const OrganizeEvent = () => {
  // Component state to hold the event details
  const [eventDetails, setEventDetails] = useState({
    name: '',
    location: '',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    description: '',
    category: '',
    format: '',
    speakerNames: ['', ''],
    speakerBios: ['', ''],
    ticketLink: '',
    imageUrl: ''
  });

  // Function to handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle changes in the speaker details
  const handleSpeakerChange = (index, field, value) => {
    setEventDetails((prevState) => {
      const updatedSpeakers = [...prevState.speakerNames];
      const updatedBios = [...prevState.speakerBios];
      if (field === 'name') {
        updatedSpeakers[index] = value;
      } else {
        updatedBios[index] = value;
      }
      return {
        ...prevState,
        speakerNames: updatedSpeakers,
        speakerBios: updatedBios
      };
    });
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement your event submission logic here
      await submitEvent(eventDetails);
      alert('Event submitted successfully!');
      resetEventDetails();
    } catch (error) {
      alert('Error submitting event. Please try again.');
      console.error('Error submitting event:', error);
    }
  };

  // Function to submit the event details to the server
  const submitEvent = async (eventDetails) => {
    // Replace this with your actual event submission implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Event submitted:', eventDetails);
        resolve();
      }, 2000);
    });
  };

  // Function to reset the event details
  const resetEventDetails = () => {
    setEventDetails({
      name: '',
      location: '',
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      description: '',
      category: '',
      format: '',
      speakerNames: ['', ''],
      speakerBios: ['', ''],
      ticketLink: '',
      imageUrl: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-2xl shadow-2xl">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-primary-800">Organize an Event</h2>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Name, Location, and Date/Time fields */}
              <div>
                <label htmlFor="name" className="block text-primary-700 font-medium mb-1">
                  Event Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={eventDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter event name"
                  required
                />
              </div>
              {/* Rest of the form fields */}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizeEvent;