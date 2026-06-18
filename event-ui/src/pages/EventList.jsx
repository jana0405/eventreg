import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../Api/Api.js'; 

const EventList = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (!role) {
      window.location.href = '/'; 
    }
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/events');
        setEvents(res.data.events || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEvents();
  }, [location]);

  return (
    <div className='max-w-6xl mx-auto mt-10 px-4'>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <div key={e._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {e.Category}
              </span>
              <h2 className="text-xl font-bold mt-3 text-gray-800">{e.EventTitle}</h2>
              <p className="text-gray-600 mt-2 text-sm">📅 {e.Date} at {e.Time}</p>
              <p className="text-gray-600 text-sm">📍 {e.Venue}</p>
            </div>
            
            <div className="mt-5 pt-4 border-t flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">
                Seats Left: {e.TotalSeats - (e.RegisteredCount || 0)}
              </span>
              <Link to={`/events/${e._id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;