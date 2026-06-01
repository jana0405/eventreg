import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyRegistrations = () => {

  const [registrations, setRegistrations] = useState([
    {
      id: "REG-001",
      studentName: "Suhas V",
      rollNo: "23PS001",
      eventName: "Tech Hackathon 2026",
      status: "Confirmed"
    },
    {
      id: "REG-002",
      studentName: "Suhas V",
      rollNo: "23PS001",
      eventName: "Annual Cultural Fest",
      status: "Pending"
    }
  ]);

  return (
    <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8'>
      
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <h2 className='text-2xl font-bold text-gray-800'>My Registrations</h2>

        <Link to="/events" className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors'>
          Browse Events
        </Link>
      </div>

      <div className='overflow-x-auto border border-gray-200 rounded-md'>
        <table className='w-full text-left border-collapse'>
          
          <thead>
            <tr className='bg-gray-100 border-b border-gray-200'>
              <th className='p-4 font-semibold text-gray-700'>Student Details</th>
              <th className='p-4 font-semibold text-gray-700'>Event Name</th>
              <th className='p-4 font-semibold text-gray-700'>Status</th>
              <th className='p-4 font-semibold text-gray-700'>Actions</th>
            </tr>
          </thead>
          
          <tbody className='divide-y divide-gray-200'>
            {registrations.length > 0 ? registrations.map((r, index) => (
              <tr key={index} className='hover:bg-gray-50'>

                <td className='p-4'>
                  <div className='font-bold text-gray-800'>{r.studentName}</div>
                  <div className='text-sm text-gray-500'>{r.rollNo}</div>
                </td>
                <td className='p-4 text-gray-800 font-medium'>{r.eventName}</td>
                <td className='p-4'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold'>
                    {r.status}
                  </span>
                </td>
                <td className='p-4'>
                  <button className='text-red-500 hover:underline font-medium text-sm'>
                    Cancel Ticket
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className='p-8 text-center text-gray-500'>No registrations found.</td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyRegistrations;