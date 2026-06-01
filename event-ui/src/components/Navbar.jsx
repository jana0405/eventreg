import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/events" className="text-xl font-bold">
          EventAdmin
        </Link>
        
        <div className="space-x-6 flex items-center">
          <Link to="/events" className="hover:text-blue-200 transition-colors">
            Manage Events
          </Link>
          <Link to="/my-registrations" className="hover:text-blue-200 transition-colors">
            My Registrations
          </Link>
          
          <button 
            onClick={() => navigate('/login')} 
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded font-medium transition-colors"
          >
            Logout
          </button>
          
        </div>

      </div>
    </nav>
  );
};

export default Navbar;