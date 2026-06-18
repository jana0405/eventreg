import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Api/Api.js';

const Attendees = () => {
  const { eventId } = useParams();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const res = await api.get(`/registrations?eventId=${eventId}`);
        setAttendees(res.data.registrations || []);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchAttendees();
  }, [eventId]);

  return (
    <div className='max-w-4xl mx-auto mt-10 px-4'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className="text-2xl font-bold text-gray-800">Event Attendees ({attendees.length})</h1>
        <Link to="/manage-events" className="text-blue-600 hover:underline">Back to Manage Events</Link>
      </div>

      <div className="bg-white shadow-sm rounded border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 font-semibold text-gray-700">Name</th>
              <th className="p-4 font-semibold text-gray-700">Roll Number</th>
              <th className="p-4 font-semibold text-gray-700">Email</th>
              <th className="p-4 font-semibold text-gray-700">Phone</th>
              <th className="p-4 font-semibold text-gray-700">Department</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendees.length === 0 ? (
              <tr><td colSpan="5" className="p-4 text-center text-gray-500">No students have registered yet.</td></tr>
            ) : (
              attendees.map(a => (
                <tr key={a._id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{a.studentName}</td>
                  <td className="p-4 text-gray-600">{a.rollNo}</td>
                  <td className="p-4 text-gray-600">{a.email}</td>
                  <td className="p-4 text-gray-600">{a.phone}</td>
                  <td className="p-4 text-gray-600">{a.department}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendees;