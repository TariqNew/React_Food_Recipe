import { Box, Menu, Pizza } from "lucide-react";
import Footer from "../../components/Footer/Footer";
import './Services.css'
import ServiceCard from "../../components/Service-card/ServiceCard";

export default function Services() {
  return (
    <div className="h-full">
      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">How It <span>Works</span></h2>

          <div className="grid gap-10 md:grid-cols-3">
            <ServiceCard
              Icon={Box}
              title="Choose Your Meal"
              description="Browse our menu and select your favorite meals to get started."
              iconColor="text-orange-500"
            />
            <ServiceCard
              Icon={Pizza}
              title="Customize Ingredients"
              description="Tailor your meals to your taste and dietary preferences easily."
              iconColor="text-green-700"
            />
            <ServiceCard
              Icon={Menu}
              title="Place Your Order"
              description="Confirm your order and we’ll handle the rest—fresh and fast delivery!"
              iconColor="text-yellow-500"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}