
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Home } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      icon: Heart,
      title: "Aide aux enfants vulnérables",
      description: "Soutien et protection des orphelins en France et en Afrique, pour leur offrir un avenir meilleur et plein d'espoir.",
      emoji: "🧒",
      color: "from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Users,
      title: "Soutien aux personnes handicapées",
      description: "Accompagnement et aide à l'intégration sociale, pour une société plus inclusive et bienveillante.",
      emoji: "♿",
      color: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Home,
      title: "Assistance aux familles démunies",
      description: "Aide alimentaire, logement et soutien social pour les familles en situation de précarité.",
      emoji: "🏠",
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-dm-sans font-bold text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight leading-relaxed">
              Notre Mission 🎯
            </h2>
            <p className="font-dm-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-tight leading-relaxed">
              Blue-Garden s'engage chaque jour pour apporter aide, espoir et dignité à ceux qui en ont le plus besoin. Découvrez nos trois piliers d'action.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br shadow-lg rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${mission.color.split(' ')[0].replace('from-', '')} 0%, ${mission.color.split(' ')[1].replace('to-', '')} 100%)`,
                }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <mission.icon className={`w-8 h-8 ${mission.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-dm-sans font-bold text-xl text-gray-900 tracking-tight leading-relaxed flex items-center justify-center gap-2">
                      <span>{mission.emoji}</span>
                      {mission.title}
                    </h3>
                    <p className="font-dm-sans text-gray-700 tracking-tight leading-relaxed">
                      {mission.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
              <h3 className="font-dm-sans font-bold text-2xl md:text-3xl text-gray-900 mb-4 tracking-tight leading-relaxed">
                Ensemble, nous pouvons faire la différence ✨
              </h3>
              <p className="font-dm-sans text-lg text-gray-600 mb-6 tracking-tight leading-relaxed">
                Chaque geste compte, chaque don permet d'offrir un sourire et un espoir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-3 tracking-tight leading-relaxed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Rejoindre notre mission 🤝
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-dm-sans font-medium rounded-2xl px-8 py-3 tracking-tight leading-relaxed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  En savoir plus 📖
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
