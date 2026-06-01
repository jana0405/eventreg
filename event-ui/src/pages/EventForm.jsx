import React from 'react'
import { Link } from 'react-router-dom'

const EventForm = () => {
  return (
    <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex items-center justify-between border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Add New Event</h2>
        <Link to="/events" className='text-blue-600 hover:underline text-sm font-medium'>Back to List</Link>
      </div>

      <form action="" className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-2'>
            <label className='block text-gray-700 font-semibold mb-1'>Event Title *</label>
            <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Category</label>
            <select className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500'>
              <option value="">Select Category</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Organiser Name *</label>
            <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Date *</label>
            <input type="date" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Time *</label>
            <input type="time" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Venue *</label>
            <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Total Seats *</label>
            <input type="number" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>
        </div>
 
       <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Event Description
           </label>
         <textarea
         rows="5"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         placeholder="Write the 'About This Event' details here..."
          ></textarea>
         </div>

        <div className='pt-4 flex justify-end gap-3'>
          <Link to="/events" className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded transition-all font-medium border border-gray-300'>Cancel</Link>
          <button className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-medium'>Add Event</button>
        </div>
      </form>
    </div>
  )
}

export default EventForm