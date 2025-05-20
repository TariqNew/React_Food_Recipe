import { Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo/Icon Section */}
        <div className="flex flex-col items-start space-y-2">
          <Utensils className="w-8 h-8" />
          <h2 className="text-xl font-semibold">FoodRecipe</h2>
        </div>

        {/* Top Restaurants */}
        <div>
          <h2 className="text-lg font-bold mb-2">Top Restaurants</h2>
          <ul className="space-y-1">
            <li>Pizza Hut</li>
            <li>Poppys Murphy Spicy</li>
            <li>Coke Coffee Day</li>
          </ul>
        </div>

        {/* Top Areas */}
        <div>
          <h2 className="text-lg font-bold mb-2">Top Areas</h2>
          <ul className="space-y-1">
            <li>Brooklyn</li>
            <li>Downtown</li>
            <li>E Bonanza RD</li>
            <li>Manhattan</li>
          </ul>
        </div>

        {/* Popular Cuisines */}
        <div>
          <h2 className="text-lg font-bold mb-2">Popular Cuisines</h2>
          <ul className="space-y-1">
            <li>Sushi</li>
            <li>Pizzas</li>
            <li>Lunch</li>
            <li>England</li>
          </ul>
        </div>

        {/* Language Selector */}
        <div>
          <h2 className="text-lg font-bold mb-2">Choose Language</h2>
          <select className="bg-green-800 text-white p-2 rounded w-full">
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
