import { Link } from 'react-router-dom';
import foodImage from '../../assets/food.jpg';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={foodImage} alt="Food" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold">FoodRecipe</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="transition duration-300 hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition duration-300 hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="transition duration-300 hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
