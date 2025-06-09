
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { ContactDialog } from "@/components/ContactDialog";

const Hero = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Sky Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 animate-pulse"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          <div className="absolute top-20 left-1/3 w-12 h-12 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
          <div className="absolute top-40 right-1/3 w-24 h-24 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
          <div className="absolute bottom-32 left-20 w-18 h-18 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '5s', animationDuration: '6s' }}></div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-32 h-32 opacity-20 transform rotate-12">
          <img
            src="/lovable-uploads/c4e0b46f-5575-4267-866c-a185fdd9ca38.png"
            alt="Course des Héros"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-28 h-28 opacity-15 transform -rotate-12">
          <img
            src="/lovable-uploads/59aeddf5-7fc3-4fc0-99ed-b822bbf7b4e9.png"
            alt="Vide-Greniers"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section - Improved presentation */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <img
                  src="/lovable-uploads/fedf58b1-d505-4bb2-b34a-22256430ac06.png"
                  alt="Blue-Garden"
                  className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-bounce-gentle"
                  style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-dm-sans font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight leading-relaxed animate-slide-in-left">
            Blue-Garden
          </h1>

          {/* Tagline */}
          <p className="font-dm-sans font-medium text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 tracking-tight leading-relaxed animate-fade-in">
            Une mission essentielle pour ceux qui en ont besoin 💙
          </p>

          {/* Description */}
          <p className="font-dm-sans text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto tracking-tight leading-relaxed animate-fade-in">
            Association humanitaire dédiée au soutien des enfants vulnérables, personnes handicapées et familles démunies en France et en Afrique. Ensemble, construisons un avenir meilleur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-4 text-lg tracking-tight leading-relaxed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir notre mission 🎯
            </Button>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-4 text-lg tracking-tight leading-relaxed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => setShowContactDialog(true)}
            >
              Nous contacter ❤️
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
    </section>
  );
};

export default Hero;
