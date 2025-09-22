import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-foreground">SWIRLZY</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
          Life & News
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
          About
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
          Store
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
          Recipes
        </a>
      </nav>

      <Button variant="swirlzy" size="sm" className="relative">
        <ShoppingCart className="w-4 h-4" />
        <span className="absolute -top-2 -right-2 bg-green-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
        <span className="ml-2 hidden sm:inline">CART</span>
      </Button>
    </header>
  );
};

export default Header;