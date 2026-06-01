import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  const [event] = useState({
    id: id,
    title: "Tech Hackathon 2026",
    category: "Computer Science",
    date: "2026-06-15",
    time: "10:00 AM",
    venue: "Seminar Hall, Block A",
    totalSeats: 100,
    registeredCount: 45,
    description: "Join us for a 24-hour coding marathon! Build innovative solutions, win prizes, and network with industry experts. Food and drinks will be provided. Please bring your own laptop and college ID."
  });

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        

        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {event.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-3">{event.title}</h1>
          </div>
          <Link to="/events" className="text-gray-500 hover:text-gray-800 font-medium text-sm">
            &larr; Back to Events
          </Link>
        </div>

        <div className="space-y-3 text-gray-600 mb-8 bg-gray-50 p-4 rounded border">
          <p className="text-lg">📅 <strong>Date & Time:</strong> {event.date} at {event.time}</p>
          <p className="text-lg">📍 <strong>Venue:</strong> {event.venue}</p>
          <p className="text-lg">🎟️ <strong>Available Seats:</strong> {event.totalSeats - event.registeredCount} remaining</p>
        </div>


        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">About This Event</h3>
          <p className="text-gray-600 leading-relaxed">
            {event.description}
          </p>
        </div>

    
        <div className="bg-blue-50 p-6 rounded border border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-blue-900 font-bold text-lg">Ready to join?</p>
            <p className="text-sm text-blue-700">Secure your spot before seats run out!</p>
          </div>
          
        
          <Link 
            to={`/register/${event.id}`} 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow transition-colors w-full sm:w-auto text-center"
          >
            Register Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EventDetail;