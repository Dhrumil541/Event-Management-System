import React from 'react';

function EventDetails3() {
 
  const event = {
    imageUrl: '/assets/images/twitter1.jpeg',
    title: 'Twitte Event',
    description: `This paper describes methods for automatically detecting events involving known entities from Twitter and understanding both the events as well as the audience reaction to them. We show that NLP techniques can be used to extract events,
     their main actors and the audience reactions with encouraging results.`,
    date: '2024-09-25T00:00:00Z',
    location: 'A/608, SNS Atria, Besides Happy Excellencia, Vesu, Surat, Gujarat, INDIA - 395007.'
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-80 object-cover rounded-t-lg"
        />
        <div className="p-6 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">{event.title}</h2>
          <p className="text-lg text-gray-800 whitespace-pre-line">{event.description}</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600">Date</h3>
              <p className="text-lg text-gray-700">{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600">Location</h3>
              <p className="text-lg text-gray-700">{event.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails3;
