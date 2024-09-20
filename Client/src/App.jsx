import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateEvent from './components/Event/CreateEvent';
import EventList from './components/Event/EventList';
import EventDetail from './components/Event/EventDetail';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import EventDetails2 from './components/Event/EventDetail2';
import EventDetails3 from './components/Event/EventDetail3';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/events/1" element={<EventDetail />} />
          <Route path="/events/2" element={<EventDetails2 />} />
          <Route path="/events/3" element={<EventDetails3 />} />
          <Route path="/" element={<EventList />} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
