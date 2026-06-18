import React, { useState } from 'react';
import api from '../Api/Api.js';

const MyRegistrations = () => {
  const [email, setEmail] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await api.get(`/registrations/student?email=${email}`);
      setRegistrations(res.data.registrations || []);
      setHasSearched(true);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  const handleCancel = async (id) => {
    if(window.confirm("Are you sure you want to cancel your ticket?")) {
      try {
        await api.delete(`/registrations/${id}`);
        setRegistrations(registrations.filter(r => r._id !== id));
        alert("Registration cancelled.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='max-w-4xl mx-auto mt-10 px-4'>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Find My Tickets</h1>
      
      <form onSubmit={handleSearch} className="flex gap-4 mb-8 bg-white p-6 rounded shadow-sm border">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your student email..." 
          required 
          className="flex-1 border p-3 rounded focus:outline-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-3 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {hasSearched && (
        <div className="bg-white shadow-sm rounded border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 font-semibold text-gray-700">Student Details</th>
                <th className="p-4 font-semibold text-gray-700">Event Name</th>
                <th className="p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrations.length === 0 ? (
                <tr><td colSpan="3" className="p-4 text-center text-gray-500">No registrations found for this email.</td></tr>
              ) : (
                registrations.map(r => (
                  <tr key={r._id}>
                    <td className="p-4">
                      <p className="font-bold">{r.studentName}</p>
                      <p className="text-sm text-gray-500">{r.rollNo}</p>
                    </td>
                    <td className="p-4 font-medium">{r.eventName}</td>
                    <td className="p-4">
                      <button onClick={() => handleCancel(r._id)} className="text-red-500 hover:text-red-700 text-sm font-semibold">
                        Cancel Ticket
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRegistrations;