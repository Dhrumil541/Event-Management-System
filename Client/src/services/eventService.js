import api from './api';

export const fetchEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await api.post('/events', eventData);
  return response.data;
};

export const fetchEventDetails = async (eventId) => {
  const response = await api.get(`/events/${eventId}`);
  return response.data;
};
