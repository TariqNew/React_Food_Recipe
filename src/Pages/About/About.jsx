import Food2 from "../../assets/images/food2.jpg";
import './About.css'

export default function About() {
  return (
    <div className="main-section py-10 px-4 bg-gray-50 min-h-screen">
      <div className="main-container max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-800">About Food<span>Recipe</span></h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          <div className="image-container flex-shrink-0">
            <img
              src={Food2}
              alt="Delicious food"
              className="w-[440px] h-[440px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="text-left max-w-xl space-y-6">
            <h2 className="text-6xl font-semibold text-gray-700">
              We're saving up <span>cravings</span> one bite at a time
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur illum accusamus aut nemo, earum modi optio quo atque
              quia a ad? Asperiores assumenda soluta magnam voluptates
              reprehenderit cumque autem nobis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
