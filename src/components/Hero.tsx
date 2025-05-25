
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-yellow-50">
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
        <div className="absolute top-1/2 left-1/4 w-20 h-20 opacity-10">
          <img
            src="/lovable-uploads/20b78b86-fb22-45fa-87a9-d65495fc01cd.png"
            alt="Blue-Garden Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-3xl mb-6 shadow-xl animate-bounce-gentle">
              <img
                src="/lovable-uploads/20b78b86-fb22-45fa-87a9-d65495fc01cd.png"
                alt="Blue-Garden"
                className="w-16 h-16 rounded-2xl"
              />
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
            >
              Faire un don ❤️
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
