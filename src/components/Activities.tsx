
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Activities = () => {
  const featuredEvent = {
    title: "Grand Vide-Greniers",
    date: "JEU. 08 MAI 2025",
    location: "QUARTIER DU LONDEAU - rues A. RIMBAUD & P. VERLAINE",
    description: "Venez chiner, découvrir des trésors, et profiter d'une ambiance festive! 🎪",
    features: [
      "Restauration sur place 🍽️",
      "Ateliers et animations pour petits et grands 🎨",
    ],
    contact: "INSCRIPTION AU 06.27.99.75.64",
    image: "/lovable-uploads/59aeddf5-7fc3-4fc0-99ed-b822bbf7b4e9.png",
    highlight: "NE MANQUEZ PAS L'ÉVÉNEMENT INCONTOURNABLE DU PRINTEMPS 🌸",
  };

  const pastActivities = [
    {
      title: "Course des Héros 2024",
      date: "15 juin 2024",
      location: "Domaine de Saint-Cloud",
      participants: "250+ participants",
      image: "/lovable-uploads/c4e0b46f-5575-4267-866c-a185fdd9ca38.png",
      description: "Un événement sportif et solidaire qui a mobilisé toute la communauté Blue-Garden.",
    },
    {
      title: "Collecte de Noël",
      date: "Décembre 2024",
      location: "Paris & Banlieue",
      participants: "500+ familles aidées",
      description: "Distribution de cadeaux et repas pour les familles en difficulté.",
    },
    {
      title: "Mission Afrique",
      date: "Septembre 2024",
      location: "Sénégal",
      participants: "100+ enfants aidés",
      description: "Construction d'une école et distribution de fournitures scolaires.",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-dm-sans font-bold text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight leading-relaxed">
              Nos Activités 🎪
            </h2>
            <p className="font-dm-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-tight leading-relaxed">
              Découvrez nos événements passés et à venir, chacun porteur d'espoir et de solidarité.
            </p>
          </div>

          {/* Featured Event - Grand Vide-Greniers */}
          <div className="mb-16">
            <Card className="overflow-hidden rounded-3xl shadow-2xl border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block bg-secondary text-gray-900 px-4 py-2 rounded-2xl font-dm-sans font-bold text-sm tracking-tight mb-4">
                        ÉVÉNEMENT À VENIR ⭐
                      </span>
                      <h3 className="font-dm-sans font-bold text-3xl lg:text-4xl mb-4 tracking-tight leading-relaxed">
                        {featuredEvent.title}
                      </h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-secondary" />
                        <span className="font-dm-sans font-bold text-lg tracking-tight leading-relaxed">
                          {featuredEvent.date}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-secondary mt-1" />
                        <span className="font-dm-sans tracking-tight leading-relaxed">
                          {featuredEvent.location}
                        </span>
                      </div>
                    </div>

                    <p className="font-dm-sans text-lg mb-6 tracking-tight leading-relaxed opacity-90">
                      {featuredEvent.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {featuredEvent.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="font-dm-sans tracking-tight leading-relaxed opacity-90">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                      <p className="font-dm-sans font-bold text-secondary text-sm tracking-tight leading-relaxed">
                        {featuredEvent.highlight}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-dm-sans font-medium tracking-tight leading-relaxed">
                        📞 {featuredEvent.contact}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-secondary hover:bg-secondary/90 text-gray-900 font-dm-sans font-medium rounded-2xl px-6 py-3 tracking-tight leading-relaxed">
                          S'inscrire maintenant 📝
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-dm-sans font-medium rounded-2xl px-6 py-3 tracking-tight leading-relaxed">
                          Plus d'infos ℹ️
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative lg:h-auto h-64">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-purple-500/30 to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Past Activities Grid */}
          <div>
            <h3 className="font-dm-sans font-bold text-2xl md:text-3xl text-gray-900 mb-8 text-center tracking-tight leading-relaxed">
              Nos actions récentes 📸
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastActivities.map((activity, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden"
                >
                  {activity.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <h4 className="font-dm-sans font-bold text-xl text-gray-900 mb-3 tracking-tight leading-relaxed">
                      {activity.title}
                    </h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-dm-sans text-sm tracking-tight leading-relaxed">
                          {activity.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="font-dm-sans text-sm tracking-tight leading-relaxed">
                          {activity.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="font-dm-sans text-sm tracking-tight leading-relaxed">
                          {activity.participants}
                        </span>
                      </div>
                    </div>
                    
                    <p className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-dm-sans font-bold text-2xl text-gray-900 mb-4 tracking-tight leading-relaxed">
                Rejoignez nos prochains événements ! 🌟
              </h3>
              <p className="font-dm-sans text-gray-600 mb-6 tracking-tight leading-relaxed">
                Inscrivez-vous à notre newsletter pour être informé de toutes nos activités.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium rounded-2xl px-8 py-3 tracking-tight leading-relaxed">
                S'abonner aux actualités 📧
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
