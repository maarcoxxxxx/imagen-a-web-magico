import { Star, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDonut from "@/assets/hero-donut.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-orange rounded-3xl p-8 mx-6 mt-6 relative overflow-hidden shadow-card">
      <div className="relative z-10">
        {/* Sun icon */}
        <div className="absolute top-4 left-4">
          <Sun className="w-8 h-8 text-white opacity-80" />
          <div className="absolute -top-1 -left-1 w-3 h-1 bg-white rounded-full"></div>
          <div className="absolute -top-1 -right-1 w-1 h-3 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-3 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-1 bg-white rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-4 leading-none">
              SWEET!
            </h1>
            <p className="text-white/90 mb-6 text-lg">
              Freshly crafted treats,<br />
              baked just for you
            </p>
            
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center space-x-2">
                <span className="text-white text-2xl font-bold">4.8</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center donut image */}
          <div className="relative mx-8">
            <img 
              src={heroDonut}
              alt="Delicious donut"
              className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-2xl"
            />
            {/* Price tag */}
            <div className="absolute -top-2 -right-2 bg-green-accent text-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-xs font-medium">FROM</span>
              <div className="text-2xl font-bold">$12</div>
            </div>
          </div>

          {/* Right decorative elements */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="flex space-x-2">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;