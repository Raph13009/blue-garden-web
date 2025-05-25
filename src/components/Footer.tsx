
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const partners = [
    { name: "Partenaire 1", logo: "🏢" },
    { name: "Partenaire 2", logo: "🏛️" },
    { name: "Partenaire 3", logo: "🏭" },
    { name: "Partenaire 4", logo: "🏪" },
    { name: "Partenaire 5", logo: "🏬" },
  ];

  const quickLinks = [
    { label: "Notre Mission", href: "#mission" },
    { label: "Nos Activités", href: "#activities" },
    { label: "Course des Héros", href: "#course" },
    { label: "Faire un Don", href: "#participate" },
  ];

  const legalLinks = [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Rapport annuel 2024", href: "#" },
    { label: "Statuts de l'association", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Association Info */}
            <div className="lg:col-span-2">
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
                  <span className="font-dm-sans text-sm tracking-tight">contact@blue-garden.fr</span>
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

            {/* Quick Links */}
            <div>
              <h4 className="font-dm-sans font-bold text-lg mb-6 tracking-tight leading-relaxed">
                Navigation rapide
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-dm-sans text-gray-300 hover:text-primary transition-colors text-sm tracking-tight leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Resources */}
            <div>
              <h4 className="font-dm-sans font-bold text-lg mb-6 tracking-tight leading-relaxed">
                Ressources
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-dm-sans text-gray-300 hover:text-primary transition-colors text-sm tracking-tight leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="font-dm-sans font-medium text-sm mb-3 tracking-tight">
                  Newsletter 📧
                </h5>
                <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium rounded-2xl px-4 py-2 text-sm tracking-tight leading-relaxed w-full">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="font-dm-sans font-bold text-lg text-center mb-6 tracking-tight leading-relaxed">
              Nos partenaires 🤝
            </h4>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                  title={partner.name}
                >
                  <span className="text-2xl">{partner.logo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="font-dm-sans text-gray-400 text-sm tracking-tight">
                  Suivez-nous :
                </span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="font-dm-sans text-gray-400 text-sm tracking-tight leading-relaxed">
                  © 2025 Blue-Garden Association. Tous droits réservés.
                </p>
                <p className="font-dm-sans text-gray-500 text-xs tracking-tight mt-1">
                  Association loi 1901 - RNA : W123456789
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="font-dm-sans text-gray-300 mb-4 tracking-tight leading-relaxed">
              Ensemble, nous pouvons faire la différence ✨
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-3 tracking-tight leading-relaxed">
              Faire un don maintenant ❤️
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
