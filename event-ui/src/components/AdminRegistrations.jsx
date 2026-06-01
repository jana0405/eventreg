import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const AdminRegistrations = () => {
  const { eventId } = useParams();

  const [attendees, setAttendees] = useState([
    {
      id: "REG-001",
      name: "Suhas V",
      rollNo: "23PS001",
      email: "suhas.v@university.edu",
      phone: "9876543210",
      department: "Physical Sciences",
      status: "Confirmed"
    },
    {
      id: "REG-002",
      name: "Arun Kumar",
      rollNo: "23CS045",
      email: "arun.k@university.edu",
      phone: "9123456780",
      department: "Computer Science",
      status: "Confirmed"
    }
  ]);

  return (
    <div className='max-w-6xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8'>
      
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>Attendee List</h2>
          <p className='text-gray-500 text-sm mt-1'>
            Managing registrations for Event <span className='font-bold text-blue-600'>#{eventId}</span>
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
            {attendees.map((student) => (
              <tr key={student.id} className='hover:bg-gray-50 transition-colors'>
                <td className='p-4'>
                  <div className='font-bold text-gray-800 text-lg'>{student.name}</div>
                  <div className='text-sm text-gray-500 font-medium'>{student.rollNo}</div>
                </td>
                <td className='p-4'>
                  <div className='text-gray-800 text-sm'>✉️ {student.email}</div>
                  <div className='text-gray-600 text-sm mt-1'>📞 {student.phone}</div>
                </td>
                <td className='p-4 text-gray-700 font-medium'>{student.department}</td>
                <td className='p-4 text-center'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold inline-block'>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRegistrations;