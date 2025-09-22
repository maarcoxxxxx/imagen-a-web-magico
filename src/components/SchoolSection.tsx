import { Button } from "@/components/ui/button";
import chefImage from "@/assets/chef.jpg";

const SchoolSection = () => {
  return (
    <section className="bg-gradient-blue rounded-3xl p-8 mx-6 mt-6 shadow-card">
      <div className="text-center text-white">
        <h2 className="text-5xl font-black mb-2">SCHOOL</h2>
        <p className="text-blue-100 mb-6">Learn to bake deliciously</p>
        
        <div className="relative inline-block mb-6">
          <img 
            src={chefImage}
            alt="Professional baker"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
          />
          <div className="absolute -top-2 -right-2 bg-white text-blue-primary rounded-full px-3 py-1 text-sm font-bold">
            JOIN NOW
          </div>
        </div>
        
        <div>
          <Button variant="explore" size="lg">
            EXPLORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolSection;