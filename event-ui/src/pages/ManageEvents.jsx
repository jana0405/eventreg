import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../Api/Api.js'; 

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (!role) {
      window.location.href = '/'; 
    }
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await api.get('/events');
      setEvents(res.data.events || []);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [location]);

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this event?")) {
      try {
          await api.delete(`/events/${id}`);
          fetchEvents(); 
      } catch(error) {
          console.log(error.message);
      }
    }
  };

  return (
    <div className='max-w-6xl mx-auto mt-10 px-4'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className="text-2xl font-bold text-gray-800">Manage Events (Admin)</h1>
        <Link to="/event-form" className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">+ Create New Event</Link>
      </div>

      <div className="bg-white shadow-sm rounded border overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 font-semibold text-gray-700">Event Details</th>
              <th className="p-4 font-semibold text-gray-700">Schedule & Venue</th>
              <th className="p-4 font-semibold text-gray-700">Seats Status</th>
              <th className="p-4 font-semibold text-gray-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((e) => (
              <tr key={e._id} className="hover:bg-gray-50">
                <td className="p-4">
                  <p className="font-bold text-gray-800">{e.EventTitle}</p>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{e.Category}</span>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  <p>📅 {e.Date} at {e.Time}</p>
                  <p>📍 {e.Venue}</p>
                </td>
                <td className="p-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                    {(e.RegisteredCount || 0)} / {e.TotalSeats} Booked
                  </span>
                </td>
                <td className="p-4 flex gap-2 justify-center">
                  <Link to={`/events/edit/${e._id}`} className="border px-3 py-1 rounded text-gray-600 hover:bg-gray-100 text-sm">Edit</Link>
                  <button onClick={() => handleDelete(e._id)} className="border px-3 py-1 rounded text-red-600 hover:bg-red-50 text-sm">Delete</button>
                  <Link to={`/attendees/${e._id}`} className="bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200 text-sm font-semibold">Attendees</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvents;