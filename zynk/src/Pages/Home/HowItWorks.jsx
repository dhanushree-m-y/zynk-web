import React, { useState, useEffect, useRef } from "react";
import { MapPin, Calendar, Users } from "lucide-react";

const ZynkPopularLocations = () => {
  const [popularLocations, setPopularLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationEvents, setLocationEvents] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fetch popular location data from the Zynk API
    const fetchPopularLocations = async () => {
      const response = await fetch("/api/popular-locations");
      const data = await response.json();
      setPopularLocations(data);
    };
    fetchPopularLocations();
  }, []);

  useEffect(() => {
    // Fetch events for the selected location
    if (selectedLocation) {
      const fetchLocationEvents = async () => {
        const response = await fetch(
          `/api/events?location=${selectedLocation.city}`
        );
        const data = await response.json();
        setLocationEvents(data);
      };
      fetchLocationEvents();

      // Draw the events on the canvas
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const width = canvas.width;
      const height = canvas.height;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the event markers on the canvas
      locationEvents.forEach((event) => {
        const x =
          ((event.longitude - selectedLocation.longitude) / 360 + 0.5) * width;
        const y =
          (0.5 -
            Math.log(
              Math.tan(Math.PI / 4 + (event.latitude * Math.PI) / 360)
            ) /
              (2 * Math.PI)) *
          height;

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#4b5563"; // Primary-600
        ctx.fill();

        ctx.font = "12px sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(event.name, x, y + 20);
      });
    }
  }, [selectedLocation, locationEvents]);

  return (
    <div className="w-full max-w-4xl border rounded-lg p-4 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Popular Locations</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-50 p-4 rounded-md shadow-md">
          <h2 className="text-primary-700 font-medium mb-4">
            Explore Popular Event Locations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {popularLocations.map((location) => (
              <div
                key={location.city}
                className={`bg-primary-50 p-4 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-primary-100 ${
                  selectedLocation?.city === location.city
                    ? "bg-primary-100"
                    : ""
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <MapPin size={32} className="text-primary-500" />
                <h3 className="text-primary-700 font-medium mt-2">
                  {location.city}
                </h3>
                <p className="text-primary-500">{location.eventCount} events</p>
              </div>
            ))}
          </div>
        </div>
        {selectedLocation && (
          <div className="bg-primary-50 p-4 rounded-md shadow-md">
            <h2 className="text-primary-700 font-medium mb-4">
              Events in {selectedLocation.city}, {selectedLocation.country}
            </h2>
            <canvas ref={canvasRef} width={600} height={400} className="w-full" />
            <div className="mt-4">
              <p className="text-primary-500">{selectedLocation.eventCount} events</p>
              <p className="text-primary-500">{selectedLocation.description}</p>
              <div className="flex items-center space-x-2 text-primary-500 mt-2">
                <Users size={20} />
                <span>
                  {selectedLocation.totalAttendees.toLocaleString()} total attendees
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZynkPopularLocations;
