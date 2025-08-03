import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">
              Nomad Artisan Hub
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Shop
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Artisans
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Stories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;