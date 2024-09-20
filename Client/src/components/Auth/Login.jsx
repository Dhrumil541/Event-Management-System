import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Update for Heroicons v2

function Login() {
  const [isSuccess, setIsSuccess] = useState(false); // State for login success
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Directly simulate successful login without validating username and password
      localStorage.setItem('token', 'sample_token'); // Set a dummy token
      setIsSuccess(true); // Show success message
      setErrorMessage(''); // Clear error messages

      // Redirect to event page after login success
      setTimeout(() => navigate('/events'), 2000); // Adjust '/events' to the correct route for your event page
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {isSuccess && (
          <div className="flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
            <span>Login successful! Redirecting...</span>
          </div>
        )}

        {errorMessage && (
          <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
