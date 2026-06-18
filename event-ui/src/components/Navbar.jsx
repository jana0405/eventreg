import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userRole'); 
    window.location.href = '/';
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        
        <Link to={role === 'admin' ? "/manage-events" : "/events"} className="text-xl font-bold">
          Event Registration Portal
        </Link>

        
        <div className="flex items-center space-x-6 font-medium">
          
        
          {role === 'student' && (
            <>
              <Link to="/events" className="hover:text-blue-200">Browse Events</Link>
              <Link to="/my-registrations" className="hover:text-blue-200">My Registrations</Link>
            </>
          )}

        
          {role === 'admin' && (
            <>
              <Link to="/manage-events" className="hover:text-blue-200">Manage Events</Link>
            </>
          )}

      
          {role && (
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition-colors ml-4"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;