
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactDialog } from "@/components/ContactDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/20b78b86-fb22-45fa-87a9-d65495fc01cd.png"
                  alt="Blue-Garden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-dm-sans font-bold text-xl text-gray-900 tracking-tight leading-relaxed">
                  Blue-Garden
                </h1>
                <p className="font-dm-sans text-sm text-gray-600 tracking-tight">
                  Association
                </p>
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
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-6 py-2 tracking-tight leading-relaxed"
                onClick={() => setShowContactDialog(true)}
              >
                Nous contacter ❤️
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
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-6 py-2 tracking-tight leading-relaxed w-full mt-4"
                  onClick={() => {
                    setShowContactDialog(true);
                    toggleMenu();
                  }}
                >
                  Nous contacter ❤️
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
    </>
  );
};

export default Header;
