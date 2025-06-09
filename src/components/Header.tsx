
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/lovable-uploads/fedf58b1-d505-4bb2-b34a-22256430ac06.png"
                alt="Blue-Garden"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-dm-sans font-bold text-xl text-gray-900 tracking-tight leading-relaxed">
                Blue-Garden
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#mission"
              className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
            >
              Notre Mission
            </a>
            <a
              href="#activities"
              className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
            >
              Nos Activités
            </a>
            <a
              href="#course"
              className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
            >
              Course des Héros
            </a>
            <a
              href="https://www.instagram.com/bluegardenassociation?igsh=cGlyMDF3dXBrZnph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-6 py-2 tracking-tight leading-relaxed"
              asChild
            >
              <a href="mailto:blue-garden@outlook.fr">
                Nous contacter ❤️
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#mission"
                className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
                onClick={toggleMenu}
              >
                Notre Mission
              </a>
              <a
                href="#activities"
                className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
                onClick={toggleMenu}
              >
                Nos Activités
              </a>
              <a
                href="#course"
                className="font-dm-sans font-medium text-gray-700 hover:text-primary transition-colors tracking-tight leading-relaxed"
                onClick={toggleMenu}
              >
                Course des Héros
              </a>
              
              {/* Instagram Link with special styling */}
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="https://www.instagram.com/bluegardenassociation?igsh=cGlyMDF3dXBrZnph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-dm-sans font-medium text-gray-900 tracking-tight block">
                      Suivez-nous sur Instagram
                    </span>
                    <span className="font-dm-sans text-sm text-gray-600 tracking-tight">
                      @bluegardenassociation
                    </span>
                  </div>
                </a>
              </div>

              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-6 py-2 tracking-tight leading-relaxed w-full mt-4"
                asChild
                onClick={toggleMenu}
              >
                <a href="mailto:blue-garden@outlook.fr">
                  Nous contacter ❤️
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
