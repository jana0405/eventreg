import React, { useState } from 'react';

const Login = () => {
  
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleClick = (role) => {
    setSelectedRole(role); 
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); 
    
  
    localStorage.setItem('userRole', selectedRole);
    localStorage.setItem('userEmail', email); 
    
    
    if (selectedRole === 'admin') {
      window.location.href = '/manage-events';
    } else {
      window.location.href = '/events';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Event Portal</h1>
        <p className="text-gray-600 text-lg">
          {selectedRole ? `Sign in to your ${selectedRole} account` : "Please select your role to continue"}
        </p>
      </div>

      
      {!selectedRole ? (
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center">
          
          <div 
            onClick={() => handleRoleClick('student')}
            className="bg-white border-2 border-blue-100 hover:border-blue-500 rounded-xl p-8 cursor-pointer shadow-sm hover:shadow-md transition-all text-center w-full md:w-1/2"
          >
            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">🎓</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student</h2>
            <p className="text-gray-600">Browse upcoming events, register, and view your tickets.</p>
          </div>

          
          <div 
            onClick={() => handleRoleClick('admin')}
            className="bg-white border-2 border-purple-100 hover:border-purple-500 rounded-xl p-8 cursor-pointer shadow-sm hover:shadow-md transition-all text-center w-full md:w-1/2"
          >
            <div className="bg-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">⚙️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Admin</h2>
            <p className="text-gray-600">Create new events, manage seats, and view attendees.</p>
          </div>
        </div>
      ) : (
        
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center capitalize text-gray-800">
            {selectedRole} Login
          </h2>
          
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                placeholder={selectedRole === 'student' ? "student@college.edu" : "admin@college.edu"}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                placeholder="••••••••"
              />
            </div>
            
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 mt-2 transition-colors">
              Login
            </button>
          </form>

          
          <button 
            onClick={() => setSelectedRole(null)} 
            className="w-full mt-6 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            ← Back to Role Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;