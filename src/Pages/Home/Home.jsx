import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <Navbar />
        <div className="home-container">
          <div className="home-content">
            <h1>
              Welcome to <span>FoodRecipe</span>
            </h1>
            <p className="home-subtitle">
              Discover delicious recipes, explore diverse cuisines, and cook like a pro from the <br />comfort of your kitchen.
            </p>
            <div className="home-buttons">
              <Button name={'Explore Recipes'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
