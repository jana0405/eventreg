import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Api/Api.js';

const EventDetails = () => {
  const params = useParams();
  const id = params.id || params.eventId || Object.values(params)[0]; 
  
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // BYPASS TRICK
        const res = await api.get('/events');
        const allEvents = res.data.events || [];
        const specificEvent = allEvents.find(e => e._id === id?.trim());
        
        if (specificEvent) setEvent(specificEvent);
      } catch (error) {
        console.log("Error fetching event details:", error.message);
      }
    };
    if (id) fetchEvent();
  }, [id]);

  if (!event) return <div className="text-center mt-20 text-xl font-bold text-gray-500">Loading Event Details...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {event.Category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-3">{event.EventTitle}</h1>
          </div>
          <Link to="/events" className="text-gray-500 hover:text-gray-800 font-medium text-sm">
            &larr; Back to Events
          </Link>
        </div>

        <div className="space-y-3 text-gray-600 mb-8 bg-gray-50 p-4 rounded border">
          <p className="text-lg">📅 <strong>Date & Time:</strong> {event.Date} at {event.Time}</p>
          <p className="text-lg">📍 <strong>Venue:</strong> {event.Venue}</p>
          <p className="text-lg">🎟️ <strong>Available Seats:</strong> {(event.TotalSeats || 0) - (event.RegisteredCount || 0)} remaining</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">About This Event</h3>
          <p className="text-gray-600 leading-relaxed">{event.EventDescription || "No description provided."}</p>
        </div>

        <div className="bg-blue-50 p-6 rounded border border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-blue-900 font-bold text-lg">Ready to join?</p>
            <p className="text-sm text-blue-700">Secure your spot before seats run out!</p>
          </div>
          <Link to={`/register/${event._id}`} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow transition-colors w-full sm:w-auto text-center">
            Register Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;