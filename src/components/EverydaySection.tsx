import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import fruitTart from "@/assets/fruit-tart.jpg";

const EverydaySection = () => {
  return (
    <section className="bg-gradient-warm rounded-3xl p-8 mx-6 mt-6 shadow-card relative overflow-hidden">
      {/* Decorative sun rays */}
      <div className="absolute top-4 right-4">
        <Sun className="w-8 h-8 text-orange-primary opacity-60" />
        <div className="absolute -top-1 -left-1 w-3 h-1 bg-orange-primary/40 rounded-full"></div>
        <div className="absolute -top-1 -right-1 w-1 h-3 bg-orange-primary/40 rounded-full"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-3 bg-orange-primary/40 rounded-full"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-1 bg-orange-primary/40 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-5xl font-black text-gray-800 mb-4">EVERYDAY</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Freshly baked, delivered daily<br />
            right to your door!
          </p>
        </div>

        {/* Right content - Fruit tart */}
        <div className="relative">
          <img 
            src={fruitTart}
            alt="Fresh fruit tart"
            className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-xl"
          />
          {/* Price tag */}
          <div className="absolute -top-2 -right-2 bg-green-accent text-white rounded-full px-4 py-2 shadow-lg">
            <div className="text-2xl font-bold">$10</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverydaySection;