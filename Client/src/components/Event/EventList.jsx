import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../public/assets/images/imag1.jpeg';
import amazon from '../../../public/assets/images/amazon.jpeg';
import twitter from '../../../public/assets/images/twitter.jpeg';

function EventList() {
  const events = [
    {
      id: 1,
      title: 'Microsoft Event',
      description: 'Microsoft is a computer company that develops and sells software and hardware.',
      date: '2024-10-15',
      location: 'Surat, Gujarat, INDIA - 395007.',
      image: image1,
      link: "/events/1"
    },
    {
      id: 2,
      title: 'Tech Conference',
      description: 'The contents of the detail...',
      date: '2024-11-20',
      location: 'Ahemadabad, Gujarat, INDIA - 395307.',
      image: amazon,
      link: "/events/2"
    },
    {
      id: 3,
      title: 'Product Launch',
      description: 'This paper describes methods for automatically......',
      date: '2024-12-05',
      location: 'Vadodara, Gujarat, INDIA - 395646.',
      image: twitter,
      link: "/events/3"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Upcoming Events</h2>
        <ul className="space-y-6">
          {events.map(event => (
            <li key={event.id} className="border border-gray-200 rounded-lg bg-white shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0"
                />
                <div className="md:ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm md:text-base">{event.description}</p>
                  <p className="text-gray-600 mb-2">
                    <strong className="text-gray-900">Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-gray-900">Location:</strong> {event.location}
                  </p>
                  <div className="flex space-x-2">
                    <Link 
                      to={event.link} 
                      className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/events/edit/${event.id}`} 
                      className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                    >
                      Edit
                    </Link>
                    <Link 
                      to={`/events/update/${event.id}`} 
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                      Update
                    </Link>
                    <button 
                      onClick={() => handleDelete(event.id)} 
                      className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this event?')) {
      // Add your delete logic here (e.g., API call)
      console.log(`Delete event with id: ${id}`);
    }
  }
}

export default EventList;
