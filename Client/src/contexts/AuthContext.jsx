import React from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as needed
import { Link } from 'react-router-dom';

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our App</h1>
        {user ? (
          <div className="text-center">
            <p className="text-xl mb-4">Hello, {user.username}!</p>
            <Link to="/profile" className="text-blue-500 hover:text-blue-700">Go to Profile</Link>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl mb-4">You are not logged in.</p>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
