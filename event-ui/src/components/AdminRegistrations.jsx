import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Api/Api.js';

const AdminRegistrations = () => {
  const { eventId } = useParams();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const res = await api.get(`/registrations/event/${eventId}`);
        setAttendees(res.data.registrations || []);
      } catch (error) {
        console.log("Error fetching attendees:", error.message);
      }
    };
    fetchAttendees();
  }, [eventId]);

  return (
    <div className='max-w-6xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8'>
      
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>Attendee List</h2>
          <p className='text-gray-500 text-sm mt-1'>
            Managing registrations for Event ID: <span className='font-bold text-blue-600'>{eventId}</span>
          </p>
        </div>
        <Link to="/events" className='text-gray-600 hover:text-gray-900 font-medium border border-gray-300 px-4 py-2 rounded transition-colors'>
          &larr; Back to Events
        </Link>
      </div>

      <div className='overflow-x-auto border border-gray-200 rounded-md'>
        <table className='w-full text-left border-collapse'>
          <thead className='bg-blue-50 border-b border-gray-200'>
            <tr>
              <th className='p-4 font-semibold text-gray-700'>Student Info</th>
              <th className='p-4 font-semibold text-gray-700'>Contact Details</th>
              <th className='p-4 font-semibold text-gray-700'>Department</th>
              <th className='p-4 font-semibold text-gray-700 text-center'>Ticket Status</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {attendees.length > 0 ? attendees.map((student) => (
              <tr key={student._id} className='hover:bg-gray-50 transition-colors'>
                <td className='p-4'>
                  <div className='font-bold text-gray-800 text-lg'>{student.studentName}</div>
                  <div className='text-sm text-gray-500 font-medium'>{student.rollNo}</div>
                </td>
                <td className='p-4'>
                  <div className='text-gray-800 text-sm'>✉️ {student.email}</div>
                  <div className='text-gray-600 text-sm mt-1'>📞 {student.phone}</div>
                </td>
                <td className='p-4 text-gray-700 font-medium'>{student.department}</td>
                <td className='p-4 text-center'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold inline-block'>
                    {student.Status || "Confirmed"}
                  </span>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className='p-8 text-center text-gray-500'>No attendees registered for this event yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRegistrations;