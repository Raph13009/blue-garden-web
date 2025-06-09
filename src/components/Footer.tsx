
import { Heart, Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Association Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-dm-sans font-bold text-xl tracking-tight leading-relaxed">
                    Blue-Garden
                  </h3>
                  <p className="font-dm-sans text-gray-400 text-sm tracking-tight">
                    Association humanitaire
                  </p>
                </div>
              </div>
              
              <p className="font-dm-sans text-gray-300 mb-6 tracking-tight leading-relaxed">
                Blue-Garden s'engage chaque jour pour apporter aide, espoir et dignité aux enfants vulnérables, personnes handicapées et familles démunies en France et en Afrique.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:blue-garden@outlook.fr"
                    className="font-dm-sans text-sm tracking-tight hover:text-primary transition-colors"
                  >
                    blue-garden@outlook.fr
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-dm-sans text-sm tracking-tight">06.27.99.75.64</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span className="font-dm-sans text-sm tracking-tight leading-relaxed">
                    Quartier du Londeau<br />
                    Rues A. Rimbaud & P. Verlaine<br />
                    Paris, France
                  </span>
                </div>
              </div>
            </div>

            {/* Instagram Section */}
            <div>
              <h4 className="font-dm-sans font-bold text-lg mb-6 tracking-tight leading-relaxed">
                Suivez-nous
              </h4>
              
              {/* Instagram CTA */}
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="font-dm-sans font-medium text-white text-sm tracking-tight">
                    Suivez notre quotidien !
                  </span>
                </div>
                <a
                  href="https://www.instagram.com/bluegardenassociation?igsh=cGlyMDF3dXBrZnph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-dm-sans font-medium rounded-xl px-4 py-2 text-sm tracking-tight hover:bg-gray-100 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @bluegardenassociation
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="font-dm-sans text-gray-400 text-sm tracking-tight leading-relaxed">
                © 2025 Blue-Garden Association. Tous droits réservés.
              </p>
              <p className="font-dm-sans text-gray-500 text-xs tracking-tight mt-1">
                Association loi 1901 - RNA : W123456789
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="font-dm-sans text-gray-300 mb-4 tracking-tight leading-relaxed">
              Ensemble, nous pouvons faire la différence ✨
            </p>
            <a
              href="mailto:blue-garden@outlook.fr"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-3 tracking-tight leading-relaxed transition-all duration-300 hover:scale-105"
            >
              Nous contacter ❤️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
