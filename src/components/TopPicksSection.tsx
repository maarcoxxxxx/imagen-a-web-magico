import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import honeyBun from "@/assets/honey-bun.jpg";
import melonBuns from "@/assets/melon-buns.jpg";

interface PickItem {
  id: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
}

const TopPicksSection = () => {
  const picks: PickItem[] = [
    {
      id: 1,
      name: "Honey Bun",
      description: "Fluffy bun with sweet honey glaze",
      price: "$6.99",
      unit: "each",
      image: honeyBun,
    },
    {
      id: 2,
      name: "Melon Buns",
      description: "Light bun with smooth melon filling",
      price: "$5.50",
      unit: "each",
      image: melonBuns,
    },
  ];

  return (
    <section className="mx-6 mt-6">
      <div className="bg-white rounded-3xl p-8 shadow-card">
        <h2 className="text-4xl font-black text-gray-800 mb-8">
          TOP-5<br />PICKS
        </h2>
        
        <div className="space-y-6">
          {picks.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">{item.price}</div>
                  <div className="text-gray-500 text-sm">{item.unit}</div>
                </div>
                <Button variant="swirlzy" size="icon" className="rounded-full">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicksSection;