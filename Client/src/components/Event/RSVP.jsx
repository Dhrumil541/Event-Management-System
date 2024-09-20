import { useState } from 'react';
import axios from 'axios';

function RSVP({ eventId }) {
  const [isRSVPd, setIsRSVPd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRSVP = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`/api/events/${eventId}/rsvp`);
      setIsRSVPd(true);
    } catch (error) {
      setError('Error submitting RSVP. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={handleRSVP}
        className={`px-6 py-3 font-bold rounded-lg transition-colors duration-300 ${
          isRSVPd
            ? 'bg-gray-600 text-white cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600'
        }`}
        disabled={isRSVPd || loading}
      >
        {loading ? 'Processing...' : isRSVPd ? 'RSVPd' : 'RSVP'}
      </button>
    </div>
  );
}

export default RSVP;
