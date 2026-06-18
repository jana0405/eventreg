import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../Api/Api.js';

const EventForm = () => {
  const [formData, setFormData] = useState({
    EventTitle: "", Category: "", OrganiserName: "", 
    Date: "", Time: "", Venue: "", TotalSeats: "", EventDescription: ""
  });

  const navigate = useNavigate();
  
  const params = useParams();
  const id = params.id || params.eventId || Object.values(params)[0];
  const ediMode = !!id;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (ediMode) {
        await api.put(`/events/${id.trim()}`, formData);
      } else {
        await api.post('/events', formData);
      }
      navigate('/events');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (ediMode) {
      const fetchEvent = async () => {
        try {
          
          const res = await api.get('/events');
          const allEvents = res.data.events || [];
          const specificEvent = allEvents.find(e => e._id === id?.trim());
          
          if (specificEvent) {
            setFormData({
              EventTitle: specificEvent.EventTitle || "",
              Category: specificEvent.Category || "",
              OrganiserName: specificEvent.OrganiserName || "",
              Date: specificEvent.Date || "",
              Time: specificEvent.Time || "",
              Venue: specificEvent.Venue || "",
              TotalSeats: specificEvent.TotalSeats || "",
              EventDescription: specificEvent.EventDescription || ""
            });
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchEvent();
    }
  }, [id, ediMode]);

  return (
    <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex items-center justify-between border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>{ediMode ? "Edit Event Details" : "Add New Event"}</h2>
        <Link to="/events" className='text-blue-600 hover:underline text-sm font-medium'>Back to List</Link>
      </div>

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-2'>
            <label className='block text-gray-700 font-semibold mb-1'>Event Title *</label>
            <input type="text" name="EventTitle" value={formData.EventTitle} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Category</label>
            <select name="Category" value={formData.Category} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500'>
              <option value="">Select Category</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Organiser Name *</label>
            <input type="text" name="OrganiserName" value={formData.OrganiserName} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Date *</label>
            <input type="date" name="Date" value={formData.Date} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Time *</label>
            <input type="time" name="Time" value={formData.Time} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Venue *</label>
            <input type="text" name="Venue" value={formData.Venue} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Total Seats *</label>
            <input type="number" name="TotalSeats" value={formData.TotalSeats} onChange={handleChange} required className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:border-blue-500' />
          </div>
        </div>
 
       <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Event Description</label>
         <textarea name="EventDescription" value={formData.EventDescription} onChange={handleChange} rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
       </div>

        <div className='pt-4 flex justify-end gap-3'>
          <Link to="/events" className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded transition-all font-medium border border-gray-300'>Cancel</Link>
          <button type="submit" className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-medium'>
            {ediMode ? "Update Event" : "Add Event"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EventForm;