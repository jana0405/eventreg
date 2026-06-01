import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/my-registrations');
  };

  return (
    <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200 mt-10'>
      <div className='flex items-center justify-between border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Register for Event #{eventId}</h2>
        <Link to="/my-registrations" className='text-blue-600 hover:underline text-sm font-medium'>Cancel</Link>
      </div>

      <form onSubmit={handleRegister} className='space-y-5'>
        

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Full Name *</label>
            <input type="text" required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Roll Number *</label>
            <input type="text" required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Email Address *</label>
            <input type="email" required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' placeholder="student@example.com" />
          </div>

          <div className='md:col-span-1'>
            <label className='block text-gray-700 font-semibold mb-1'>Phone Number *</label>
            <input type="tel" required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' placeholder="10-digit number" />
          </div>
        </div>

        <div className='md:col-span-2'>
          <label className='block text-gray-700 font-semibold mb-1'>Department</label>
          <select required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500 bg-white'>
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        <div className='pt-4 mt-6'>
          <button type="submit" className='w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded'>
            Confirm Registration
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default RegisterForm;