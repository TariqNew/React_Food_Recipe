import foodImage from "../../assets/images/food.jpg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className="text-white font-large p-4">
      <div className="container mx-auto flex items-center justify-between backdrop-blur-md bg-white/30 rounded-md p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={foodImage}
            alt="Food"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold">FoodRecipe</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#home"
            className="transition duration-300 px-3 py-2 rounded-md font-medium hover:bg-white/20"
          >
            Home
          </a>
          <a
            href="#about"
            className="transition duration-300 px-3 py-2 rounded-md font-medium hover:bg-white/20"
          >
            About
          </a>
          <a
            href="#services"
            className="transition duration-300 px-3 py-2 rounded-md font-medium hover:bg-white/20"
          >
            Services
          </a>
          <Button name="Get Started" />
        </div>
      </div>
    </nav>
  );
}
