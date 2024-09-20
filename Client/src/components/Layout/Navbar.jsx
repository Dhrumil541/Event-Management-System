import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <div className="space-x-4">
          <Link
            className="text-white hover:text-gray-200 transition-colors duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition-colors duration-300"
            to="/events/create"
          >
            create Events
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition-colors duration-300"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition-colors duration-300"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
