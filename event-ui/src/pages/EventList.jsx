import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Hackathon 2026",
      category: "Technical",
      date: "2026-06-15",
      time: "10:00 AM",
      venue: "Seminar Hall, Block A",
      totalSeats: 100,
      registeredCount: 45
    },
    {
      id: 2,
      title: "Annual Cultural Fest",
      category: "Cultural",
      date: "2026-07-20",
      time: "05:00 PM",
      venue: "Main Auditorium",
      totalSeats: 500,
      registeredCount: 480
    }
  ]);

  return (
    <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8'>
      
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Manage Events</h2>
        <Link to="/events/add" className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors whitespace-nowrap'>
          + Create New Event
        </Link>
      </div>

      <div className='overflow-x-auto border border-gray-200 rounded-md'>
        <table className='w-full text-left border-collapse'>
          
          <thead>
            <tr className='bg-gray-100 border-b border-gray-200'>
              <th className='p-4 font-semibold text-gray-700'>Event Details</th>
              <th className='p-4 font-semibold text-gray-700'>Schedule & Venue</th>
              <th className='p-4 font-semibold text-gray-700'>Seats Status</th>
              <th className='p-4 font-semibold text-gray-700 text-center'>Actions</th>
            </tr>
          </thead>
          
          <tbody className='divide-y divide-gray-200'>
            {events.length > 0 ? events.map((e, index) => (
              <tr key={index} className='hover:bg-gray-50 transition-colors'>
                
                
            <td className='p-4'>
  
                <Link to={`/events/${e.id}`} className='font-bold text-blue-600 hover:text-blue-800 hover:underline text-lg block'>
                {e.title}
                 </Link>
  
                <span className='bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded font-medium mt-1 inline-block'>{e.category}</span>
                </td>
                <td className='p-4'>
                  <div className='text-gray-800 font-medium'>📅 {e.date} at {e.time}</div>
                  <div className='text-sm text-gray-500 mt-1'>📍 {e.venue}</div>
                </td>
                
                <td className='p-4'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold'>
                    {e.registeredCount} / {e.totalSeats} Booked
                  </span>
                </td>
                
                <td className='p-4 flex justify-center space-x-2 mt-2'>
                  <Link to={`/events/edit/${e.id}`} className='text-blue-600 hover:text-blue-800 border border-blue-600 px-3 py-1 rounded text-sm font-medium'>
                    Edit
                  </Link>
                  <Link to={`/register/${e.id}`} className='bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium'>
                    Register
                  </Link>
                  <Link to={`/events/${e.id}/registrations`} className='bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm font-medium'>
                    Attendees
                  </Link>
                </td>

              </tr>
            )) : (
              <tr>
                <td colSpan="4" className='p-8 text-center text-gray-500'>No events registered yet.</td>
              </tr>
            )}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default EventList;