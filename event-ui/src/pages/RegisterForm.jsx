import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../Api/Api.js';

const RegisterForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const eventId = params.id || params.eventId || Object.values(params)[0]; 
  
  const [eventDetails, setEventDetails] = useState(null);

  const [formData, setFormData] = useState({
    studentName: "", rollNo: "", email: "", phone: "", department: ""
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        
        const res = await api.get('/events');
        const allEvents = res.data.events || [];
        const specificEvent = allEvents.find(e => e._id === eventId?.trim());
        
        if (specificEvent) {
          setEventDetails(specificEvent);
        } else {
          alert("Could not find this event in the database!");
        }
      } catch (error) {
        console.log("Error fetching event:", error);
      }
    };
    if (eventId) fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!eventDetails || !eventDetails.EventTitle) {
      alert("Event details are still loading. Please wait a moment.");
      return;
    }

    try {
      await api.post('/registrations', {
        ...formData,
        eventId: eventId.trim(),
        eventName: eventDetails.EventTitle
      });
      alert("Successfully registered for the event!");
      navigate('/my-registrations');
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong during registration.");
    }
  };

  return (
    <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200 mt-10'>
      <div className='flex items-center justify-between border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>
          Register for {eventDetails ? eventDetails.EventTitle : "..."}
        </h2>
        <Link to="/events" className='text-blue-600 hover:underline text-sm font-medium'>Cancel</Link>
      </div>

      <form onSubmit={handleRegister} className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Full Name *</label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Roll Number *</label>
            <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>
        </div>

        <div className='md:col-span-2'>
          <label className='block text-gray-700 font-semibold mb-1'>Department</label>
          <select name="department" value={formData.department} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500 bg-white'>
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>

        <div className='pt-4'>
          <button type="submit" className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors'>
            Confirm Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;