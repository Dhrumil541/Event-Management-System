import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxAttendees, setMaxAttendees] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('maxAttendees', maxAttendees);
    formData.append('image', image);

    try {
      await axios.post('/api/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('Event created successfully!');
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
      setMaxAttendees('');
      setImage(null);
      setTimeout(() => navigate('/events'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError('Error creating event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Event</h2>
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Event Title */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Event Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Date */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Location */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Max Attendees */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Max Attendees</label>
            <input
              type="number"
              value={maxAttendees}
              onChange={(e) => setMaxAttendees(e.target.value)}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Event Image */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Event Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="shadow-lg border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
