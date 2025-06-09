
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { ContactDialog } from "@/components/ContactDialog";

const Hero = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Sky Background - Made softer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0s', animationDuration: '10s' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
          <div className="absolute top-20 left-1/3 w-12 h-12 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '8s', animationDuration: '14s' }}></div>
          <div className="absolute top-40 right-1/3 w-24 h-24 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '3s', animationDuration: '11s' }}></div>
          <div className="absolute bottom-32 left-20 w-18 h-18 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '6s', animationDuration: '13s' }}></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '9s', animationDuration: '10s' }}></div>
        </div>
      </div>

      {/* Animated Clouds */}
      <div className="absolute inset-0 z-0">
        {/* Cloud 1 - Moving from left to right */}
        <div 
          className="absolute top-20 opacity-60"
          style={{ 
            animation: 'cloud-float-left 20s linear infinite',
            animationDelay: '0s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-32 h-24 object-contain"
          />
        </div>
        
        {/* Cloud 2 - Moving from right to left */}
        <div 
          className="absolute top-40 opacity-50"
          style={{ 
            animation: 'cloud-float-right 25s linear infinite',
            animationDelay: '0s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-40 h-30 object-contain transform scale-x-[-1]"
          />
        </div>
        
        {/* Cloud 3 - Moving from left to right */}
        <div 
          className="absolute top-60 opacity-45"
          style={{ 
            animation: 'cloud-float-left 30s linear infinite',
            animationDelay: '10s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-24 h-18 object-contain"
          />
        </div>
        
        {/* Cloud 4 - Moving from right to left */}
        <div 
          className="absolute top-80 opacity-40"
          style={{ 
            animation: 'cloud-float-right 28s linear infinite',
            animationDelay: '8s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-36 h-27 object-contain transform scale-x-[-1]"
          />
        </div>
        
        {/* Cloud 5 - Moving from left to right */}
        <div 
          className="absolute bottom-32 opacity-55"
          style={{ 
            animation: 'cloud-float-left 22s linear infinite',
            animationDelay: '15s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-28 h-21 object-contain"
          />
        </div>
        
        {/* Cloud 6 - Moving from right to left */}
        <div 
          className="absolute bottom-40 opacity-35"
          style={{ 
            animation: 'cloud-float-right 35s linear infinite',
            animationDelay: '20s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-20 h-15 object-contain transform scale-x-[-1]"
          />
        </div>

        {/* Cloud 7 - Moving from left to right */}
        <div 
          className="absolute top-10 opacity-30"
          style={{ 
            animation: 'cloud-float-left 32s linear infinite',
            animationDelay: '5s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-30 h-22 object-contain"
          />
        </div>

        {/* Cloud 8 - Moving from right to left */}
        <div 
          className="absolute top-72 opacity-25"
          style={{ 
            animation: 'cloud-float-right 40s linear infinite',
            animationDelay: '25s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-44 h-33 object-contain transform scale-x-[-1]"
          />
        </div>

        {/* Cloud 9 - Additional cloud for more movement */}
        <div 
          className="absolute top-96 opacity-40"
          style={{ 
            animation: 'cloud-float-left 26s linear infinite',
            animationDelay: '12s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-26 h-19 object-contain"
          />
        </div>

        {/* Cloud 10 - Additional cloud for more movement */}
        <div 
          className="absolute bottom-60 opacity-45"
          style={{ 
            animation: 'cloud-float-right 33s linear infinite',
            animationDelay: '18s'
          }}
        >
          <img
            src="/lovable-uploads/c1e9eaab-b8c3-47d3-be1c-1282684eb227.png"
            alt="Cloud"
            className="w-22 h-16 object-contain transform scale-x-[-1]"
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
