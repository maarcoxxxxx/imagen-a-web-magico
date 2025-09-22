import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SchoolSection from "@/components/SchoolSection";
import EverydaySection from "@/components/EverydaySection";
import TopPicksSection from "@/components/TopPicksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column */}
          <div>
            <HeroSection />
            <TopPicksSection />
          </div>
          
          {/* Right column */}
          <div>
            <SchoolSection />
            <EverydaySection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
