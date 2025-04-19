
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-health-600" />
            <span className="text-xl font-bold text-gray-900">Health Discount Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-health-600 font-medium">Home</a>
            <a href="#benefits" className="text-gray-700 hover:text-health-600 font-medium">Benefits</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-health-600 font-medium">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-health-600 font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-health-600 font-medium">FAQ</a>
          </nav>

          {/* Call-to-Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="text-health-600 border-health-600 hover:bg-health-50">
              Log In
            </Button>
            <Button className="bg-health-600 hover:bg-health-700 text-white">
              Become a Member
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-health-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
            <a href="#benefits" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Benefits</a>
            <a href="#how-it-works" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">How It Works</a>
            <a href="#testimonials" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Testimonials</a>
            <a href="#faq" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">FAQ</a>
            
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full text-health-600 border-health-600 hover:bg-health-50">
                Log In
              </Button>
              <Button className="w-full bg-health-600 hover:bg-health-700 text-white">
                Become a Member
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
